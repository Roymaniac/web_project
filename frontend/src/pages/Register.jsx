// Login.js
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useHttpClient } from "../hooks/http-hook";

// import { useAuth } from '../context/AuthContext';
// import { login } from '../context/AuthReducer';


const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { sendRequest } = useHttpClient();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords does not match");
            return;
        }

        try {
            const response = await sendRequest(
                "register",
                JSON.stringify({
                    username,
                    email,
                    password,
                })
            );

            if (response) {
                navigate("/login");
            }

        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        <section>
            <div className="relative items-center mt-10 w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
                <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
                    <div className="flex flex-col">
                        <div>
                            <h2 className="text-4xl text-black text-center">Register</h2>
                            {error && <p className='text-center text-red-600 my-6 px-2 mx-auto'>{error}</p>}
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4 space-y-6">
                            <div>
                                <label className="block mb-3 text-sm font-medium text-gray-600" name="name">
                                    Username <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    value={username}
                                    onChange={(event) => setUsername(event.target.value)}
                                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                            </div>

                            <div>
                                <label className="block mb-3 text-sm font-medium text-gray-600" name="email">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    name="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                            </div>

                            <div>
                                <label className="block mb-3 text-sm font-medium text-gray-600" name="password">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                            </div>

                            <div>
                                <label className="block mb-3 text-sm font-medium text-gray-600" name="password">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                            </div>
                            <div className="col-span-full">
                                <button className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black" type="submit">
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;