import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer"
import HeroSection from "../components/sections/HeroSection";
import LogoBarSection from "../components/sections/LogoBarSection";
import StatSection from "../components/sections/StatsSection";
import ProcessSection from "../components/sections/ProcessSection";
import ServiceSection from "../components/sections/ServiceSection";
import IndustrySection from "../components/sections/IndustrySection";
import PortfolioSection from "../components/sections/PortfolioSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FAQSection from "../components/sections/FAQSection";

const Home = () => {
    return (
      <div className="min-h-screen bg-white">
        <Navbar/>
        <main>
            <HeroSection />
            <LogoBarSection />
            <StatSection />
            <ProcessSection />
            <ServiceSection />
            <IndustrySection />
            <PortfolioSection />
            <TestimonialsSection />
            <FAQSection />
        </main>
        {/* <Footer/> */}
      </div>
    );
};

export default Home;