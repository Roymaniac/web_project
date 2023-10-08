

const ContactSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-extrabold mb-8">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                    Have questions or need assistance? Contact our support team.
                </p>
                <button className="chat-ui text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
                    Contact Support
                </button>
            </div>
        </section>
    );
};

export default ContactSection;
