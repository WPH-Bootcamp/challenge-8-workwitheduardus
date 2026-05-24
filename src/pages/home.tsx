import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer"
import HeroSection from "../components/sections/HeroSection";
import LogoBarSection from "../components/sections/LogoBarSection";
import StatSection from "../components/sections/StatsSection";
import ProcessSection from "../components/sections/ProcessSection";

const Home = () => {
    return (
      <div className="min-h-screen bg-white">
        <Navbar/>
        <main>
            <HeroSection />
            <LogoBarSection />
            <StatSection />
            <ProcessSection />
        </main>
        {/* <Footer/> */}
      </div>
    );
};

export default Home;