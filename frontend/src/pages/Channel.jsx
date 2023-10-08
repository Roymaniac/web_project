import { useState, useEffect } from "react";
import UserProfile from "../components/Profile";
import ChatRoomsList from "../components/Room";
import ChatMessages from "../components/chatMessages";
import CreateChatRoomModal from "../components/CreateRoomModal";

const Channel = () => {
    // Simulated user data
    const [user, setUser] = useState({
        username: "Making Sense",
        avatarUrl: "../src/assets/profile.jpg",
    });

    // Simulated user chat rooms
    const [chatRooms, setChatRooms] = useState([
        { id: 1, name: "Alx Cohort 9" },
        { id: 2, name: "Lagos Team" },
        // Add more chat rooms here
    ]);

    // Simulated selected chat room
    const [selectedChatRoom, setSelectedChatRoom] = useState(chatRooms[0]);

    // Modal state for creating a chat room
    const [isCreateChatRoomModalOpen, setCreateChatRoomModalOpen] = useState(
        false
    );

    // Function to update the user's profile (replace with actual logic)
    const updateUserProfile = (newProfile) => {
        setUser(newProfile);
    };

    // Function to create a new chat room (replace with actual logic)
    const createChatRoom = (newChatRoom) => {
        setChatRooms([...chatRooms, newChatRoom]);
    };

    // Effect to update the selected chat room when chat rooms change
    useEffect(() => {
        setSelectedChatRoom(chatRooms[0]);
    }, [chatRooms]);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 px-4 py-8 overflow-y-auto bg-white text-black dark:border-gray-700">
                {/* ... (previous code) */}
                <a href="#" className="mx-auto">
                    <img
                        className="w-20 h-20 rounded mb-6"
                        src="../src/assets/logo.png"
                        alt=""
                    />
                </a>

                <UserProfile user={user} updateUserProfile={updateUserProfile} />

                <ChatRoomsList
                    chatRooms={chatRooms}
                    selectedChatRoom={selectedChatRoom}
                    setSelectedChatRoom={setSelectedChatRoom}
                />
            </aside>

            {/* Chat area */}
            <div className="bg-white text-black flex-1 p-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">
                        {selectedChatRoom.name}
                    </h2>
                    <button
                        className="chat-ui text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
                        onClick={() => setCreateChatRoomModalOpen(true)}
                    >
                        Create Chat Room
                    </button>
                </div>
                <div className="flex-1 mt-4 overflow-y-auto">
                    <ChatMessages />
                </div>
            </div>

            {isCreateChatRoomModalOpen && (
                <CreateChatRoomModal
                    createChatRoom={createChatRoom}
                    closeModal={() => setCreateChatRoomModalOpen(false)}
                />
            )}
        </div>
    );
};

export default Channel;
