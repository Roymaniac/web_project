import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useHttpClient } from "../hooks/http-hook";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { sendRequest } = useHttpClient();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await sendRequest(
                "login",
                JSON.stringify({
                    email,
                    password,
                })
            );

            const token = response.data.token;
            localStorage.setItem("token", token);
            alert(response.message);
            navigate("/channels");

        } catch (err) {
            // console.log(err);
            setError(err.response.data.message);
        }
    };

    return (
        <section>
            <div className="relative items-center mt-10 w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
                <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
                    <div className="flex flex-col">
                        <div>
                            <h2 className="text-4xl text-black text-center">Login</h2>
                            {error && <p className='text-center text-red-600 my-10 px-2 mx-auto'>{error}</p>}
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4 space-y-6">
                            <div>
                                <label className="block mb-3 text-sm font-medium text-gray-600" name="email">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                            </div>

                            {/* <div className="mt-4 space-y-6"> */}
                            <div>
                                <label className="block mb-3 text-sm font-medium text-gray-600" name="name">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                            </div>
                            {/* </div> */}
                            <div className="col-span-full">
                                <button className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black" type="submit">
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    );
};

export default Login;
