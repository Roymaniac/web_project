import ChatRoom from "../models/ChatRoom.js";


export default class ChatroomController {
    static async createChatRoom(req, res) {
        try {
            const { name, users } = req.body;

            const chatroom = new ChatRoom({ name, users });
            await chatroom.save();

            return res.status(201).json(chatroom);
        } catch (error) {
            return res.status(500).json({ error: 'Error creating chat room' });
        }
    }

    static async getAllChatRooms(req, res) {
        try {
            const rooms = await ChatRoom.find();

            return res.status(200).json(rooms);
        } catch (error) {
            return res.status(500).json({ error: 'Error fetching chat rooms' });
        }
    }

    static async getChatRoomById(req, res) {
        try {
            const { roomId } = req.params;

            const room = await ChatRoom.findById(roomId);

            return res.status(200).json(room);
        } catch (error) {
            return res.status(500).json({ error: 'Error fetching chat room' });
        }
    }

}