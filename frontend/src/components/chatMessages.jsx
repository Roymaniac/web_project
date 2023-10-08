import { useState } from "react";

const ChatMessages = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello, how can I help you?", sender: "Jane" },
        { id: 2, text: "Hi, I have a question.", sender: "Victor" },
        // Add more initial messages here
    ]);

    const handleSendMessage = () => {
        if (message.trim() === "") return;

        const newMessage = {
            id: Math.random(),
            text: message,
            sender: 'Making Sense', // Replace with actual sender information
        };

        setMessages([...messages, newMessage]);
        setMessage("");
    };

    return (
        <div className="container flex flex-col h-full">

            <div className="p-4 flex-grow">
                {messages.map((msg) => (
                    <div key={msg.id} className="mb-4">
                        <div className="chat-ui rounded-xl w-1/6 p-3">
                            <div className="message flex flex-col items-start justify-between">
                                <span className="sender text-sm font-bold mb-2">{msg.sender}</span>
                                <span className="text">{msg.text}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex mt-4">
                <textarea
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 border bg-white outline-none text-black p-4 rounded w-10/12"
                />
                <button
                    onClick={handleSendMessage}
                    className="w-20 ml-4 rounded-xxl chat-ui py-1 px-3 hover:chat-ui hover:text-white transition duration-300 ease-in-out"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 items-center inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v16l4-4z"
                        />
                    </svg>
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatMessages