import Navbar from "../layouts/Navbar";
import HeroSection from "../layouts/HeroSection";
import FeaturesSection from "../layouts/FeatureSection";
import ContactSection from "../layouts/ContactSection";
import Stats from "../layouts/Stats";
import Subscription from "../layouts/Subscription";
import Companies from "../layouts/Companies";
import Footer from "../layouts/Footer";

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Companies />
            <FeaturesSection />
            <Stats />
            <Subscription />
            <ContactSection />
            <Footer />
            {/* Additional sections can be added here */}
        </>
    );
};

export default LandingPage;
