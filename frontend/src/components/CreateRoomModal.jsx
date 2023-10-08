/* eslint-disable react/prop-types */
import { useState } from "react";

const CreateChatRoomModal = ({ createChatRoom, closeModal }) => {

    const [newRoomName, setNewRoomName] = useState("");

    const handleCreateChatRoom = () => {
        // Call the createChatRoom function to create a new chat room
        createChatRoom({ id: Math.random(), name: newRoomName });
        closeModal();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-gray-100 text-black p-4 rounded shadow-lg w-1/3">
                <h2 className="text-xl font-semibold mb-2">Create Chat Room</h2>
                <input
                    type="text"
                    placeholder="Chat Room Name"
                    value={newRoomName}
                    onChange={(e) => setNewRoomName(e.target.value)}
                    className="border bg-white text-black p-2 rounded w-full mb-2"
                />
                <div className="flex justify-end">
                    <button
                        onClick={handleCreateChatRoom}
                        className="chat-ui text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out mr-2"
                    >
                        Create
                    </button>
                    <button
                        onClick={closeModal}
                        className="bg-gray-50 text-gray-700 py-2 px-4 rounded hover:chat-ui transition duration-300 ease-in-out"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateChatRoomModal;
