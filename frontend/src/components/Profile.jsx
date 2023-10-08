/* eslint-disable react/prop-types */
import { useState } from "react";

const UserProfile = ({ user, updateUserProfile }) => {

    const [newUsername, setNewUsername] = useState(user.username);

    const handleUpdateProfile = () => {
        // Call the updateUserProfile function to update the user's profile
        updateUserProfile({ ...user, username: newUsername });
    };

    return (
        <div className="mb-4">
            <h2 className="text-xl font-semibold my-4">User Profile</h2>
            <img
                src={user.avatarUrl}
                alt="User Avatar"
                className="w-16 h-16 rounded-full mb-2"
            />
            <input
                type="text"
                placeholder="Username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="border bg-white text-black p-2 rounded w-full mb-2"
            />
            <button
                onClick={handleUpdateProfile}
                className="chat-ui rounded-xl text-white py-2 px-4 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out"
            >
                Update Profile
            </button>
        </div>
    );
};

export default UserProfile;
