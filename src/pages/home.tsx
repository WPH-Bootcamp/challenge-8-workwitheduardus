import {useState, useEffect} from "react";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import LogoBarSection from "../components/sections/LogoBarSection";
import StatSection from "../components/sections/StatsSection";
import ProcessSection from "../components/sections/ProcessSection";
import ServiceSection from "../components/sections/ServiceSection";
import IndustrySection from "../components/sections/IndustrySection";
import PortfolioSection from "../components/sections/PortfolioSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FAQSection from "../components/sections/FAQSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/layout/Footer"


const Home = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);}, [isDark]);
    return(
      <div>
        <Navbar isDark={isDark} onToggleDark={() => setIsDark((prev) => !prev)} />
        <main>
            <HeroSection />
            <LogoBarSection />
            <StatSection />
            <ProcessSection />
            <ServiceSection />
            <IndustrySection  />
            <PortfolioSection/>
            <TestimonialsSection />
            <FAQSection />
            <ContactSection />
        </main>
        <Footer/>
      </div>
    );
};

export default Home;