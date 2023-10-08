const Subscription = () => {
    return (
        <section>
            <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
                <div className="mx-auto bg-gray-100 lg:p-10 rounded-3xl">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2">
                        <div>
                            <p className="text-5xl font-medium mb-2 tracking-tighter text-black">
                                Need new update? Subscribe Now
                            </p>
                        </div>
                        <div>
                            <form className="flex flex-col items-center max-w-lg" action="">
                                <div className="flex flex-col w-full gap-1 mt-3 sm:flex-row">
                                    <input
                                        name="email"
                                        type="email"
                                        className="block w-full px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full font-spline focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50 disabled:opacity-50"
                                        placeholder="Enter your email..."
                                        required=""
                                    />
                                    <button
                                        type="button"
                                        className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                                    >
                                        <div style={{ position: "relative" }}></div>
                                        Subscribe
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-4 h-auto ml-2">
                                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </div>
                            </form>

                            <div className="sm:max-w-lg sm:flex">
                                <p className="mt-6 text-xs text-gray-500">
                                    By subscribing, you agree with Unwrapped’s {""}
                                    <a className="text-blue-600 hover:text-black underline" target="_blank" href="#">
                                        Terms of Service
                                    </a>
                                    and
                                    <a className="text-blue-600 hover:text-black" target="_blank" href="#">
                                        Privacy Policy
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Subscription