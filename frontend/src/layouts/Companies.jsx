
const Companies = () => {
    return (
        <section className="bg-company px-4 py-24 mx-auto max-w-7xl">
            <h1 className="mb-3 text-3xl font-bold leading-tight text-center text-gray-700 md:text-4xl">Trusted by 5200+, built by 17</h1>
            <p className="mb-16 text-lg text-center text-gray-700">Organizations of all sizes trust ChatRoom for day to day interactions</p>
            <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-6">
                <div className="flex items-center justify-center">
                    <img src="../src/assets/algolia.svg" alt="Algolia Logo" className="block object-contain h-16" />
                </div>
                <div className="flex items-center justify-center">
                    <img src="../src/assets/yahoo.svg" alt="Yahoo Logo" className="block object-contain h-16" />
                </div>
                <div className="flex items-center justify-center">
                    <img src="../src/assets/slack-icon.svg" alt="Slack Logo" className="block object-contain h-16" />
                </div>
                <div className="flex items-center justify-center">
                    <img src="../src/assets/google.svg" alt="Google Logo" className="block object-contain h-16" />
                </div>
                <div className="flex items-center justify-center">
                    <img src="../src/assets/apple.svg" alt="Apple Logo" className="block object-contain h-16" />
                </div>
                <div className="flex items-center justify-center">
                    <img src="../src/assets/typeform.svg" alt="Typeform Logo" className="block object-contain h-16" />
                </div>
            </div>
            <div className="max-w-xs my-2 p-6 mx-auto">
                <div className="flex flex-col w-full gap-1 mt-3 sm:flex-row">
                    <button type="button" className="items-center inline-flex justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                        <div style={{ position: "relative" }}>See our Testimonials</div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-4 h-auto ml-2">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                        </svg>

                    </button>
                </div>
            </div>

        </section>

    )
}

export default Companies