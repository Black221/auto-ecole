import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Newsletter from "./components/Newsletter";
import PricingSection from "./components/PricingSection";
import TestingSection from "./components/TestingSection";



const HomePage = () => {

    return (<>
        <div className="main space-y-12">
            <HeroSection />
            <TestingSection />
            <AboutSection />
            <PricingSection />
            <Newsletter />
        </div>
    </>)
}

export default HomePage;