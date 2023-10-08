/* eslint-disable react/prop-types */

const ChatRoomsList = ({ chatRooms, selectedChatRoom, setSelectedChatRoom }) => {

    return (
        <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Chat Rooms</h2>
            <ul>
                {chatRooms.map((room) => (
                    <li
                        key={room.id}
                        onClick={() => setSelectedChatRoom(room)}
                        className={`cursor-pointer ${selectedChatRoom.id === room.id ? "font-semibold" : ""
                            }`}
                    >
                        {room.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatRoomsList;
