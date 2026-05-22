import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer"
import HeroSection from "../components/sections/HeroSection";
import LogoBarSection from "../components/sections/LogoBarSection";

const Home = () => {
    return (
      <div className="min-h-screen bg-white">
        <Navbar/>
        <main>
            <HeroSection />
            <LogoBarSection />
        </main>
        {/* <Footer/> */}
      </div>
    );
};

export default Home;