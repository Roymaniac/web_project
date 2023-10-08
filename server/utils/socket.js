import User from "../models/User.js";
import Message from "../models/Message.js";

import moment from "moment/moment.js";

const formatMessage = (username, text) => {
    return {
        username,
        text,
        time: moment().format("h:mm a"),
    };
};

// Global object to store user IDs
const userIds = {};


const initializeSocket = (io) => {
    // Run when user connects
    io.on("connection", (socket) => {
        console.log("Connected..");

        // Get the joined user details
        socket.on("joinRoom", async ({ username, room }) => {
            try {
                const user = await User.findOne({ username }); // Find the user in the database

                if (!user) {
                    // If the user doesn't exist, you can handle this case (e.g., registration) here
                    return;
                }

                // Check if the user is already in a room
                if (user.room) {
                    // Disconnect the user from their current room
                    socket.leave(user.room);
                }

                // Update the user's room in the database
                user.room = room;
                await user.save();

                // Store the user's ID in the socket object
                socket.userId = user._id;

                // Store the user's ID in the cache
                userIds[socket.id] = user._id;

                socket.join(user.room);

                // Welcome current user to the group
                socket.emit(
                    "message",
                    formatMessage(user.username, "Welcome to ChatCord")
                );

                // Broadcast to specific room and alert to all users except the user who connected
                socket.broadcast
                    .to(user.room)
                    .emit(
                        "message",
                        formatMessage(
                            user.username,
                            `${user.username} has joined the group chat`
                        )
                    );

                // Send users and room info to frontend
                io.to(user.room).emit("roomUser", {
                    room: user.room,
                    users: await User.find({ room: user.room }), // Fetch users in the same room from the database
                });

                // Listen to chatMessage
                socket.on("chatMessage", async (msg) => {
                    try {
                        // Find the user by ID in the cache
                        const userId = userIds[socket.id];
                        // Find the user by ID in the database
                        const user = await User.findOne({ _id: userId });

                        // Check if the message is empty
                        if (!msg) {
                            // Drop the message and do not broadcast it to other users
                            return;
                        }

                        // Create a new message in the database
                        const message = new Message({
                            text: msg,
                            sender: user._id, // Assuming you have a sender field that references users
                            chatroom: user.room, // Assuming you have a chatroom field that references chatrooms
                        });

                        await message.save();

                        io.to(user.room).emit("message", formatMessage(`<span>${user.username}`, msg));
                    } catch (err) {
                        console.error(err);
                    }
                });

                // Run when user disconnects
                socket.on("disconnect", async () => {
                    try {
                        const user = await User.findOne({ socketId: socket.id });

                        if (user) {
                            // Notify everyone in the group chat, including the current user
                            io.to(user.room).emit(
                                "message",
                                formatMessage(process.env.BOTNAME, `${user.username} left the group`)
                            );

                            // Update the user's room in the database to reflect their exit
                            user.room = null;
                            await user.save();

                            // Remove the user's ID from the cache
                            delete userIds[socket.id];

                            // Send users and room info to frontend
                            io.to(user.room).emit("roomUsers", {
                                room: user.room,
                                users: await User.find({ room: user.room }), // Fetch users in the same room from the database
                            });
                        }
                    } catch (err) {
                        console.error(err);
                    }
                });
            } catch (err) {
                console.error(err);
            }
        });
    });
}
export default initializeSocket;