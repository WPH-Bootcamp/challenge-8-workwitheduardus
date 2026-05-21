import Layout from "../components/layout/Layout";
import HeroSection from "../components/sections/HeroSection";
import LogoBarSection from "../components/sections/LogoBarSection";
import ServiceItem from "../components/sections/ServiceSection";

const Home = () => {
    return (
        <Layout>
            <HeroSection />
            <LogoBarSection />
            <ServiceItem />
        </Layout>
    );
};

export default Home;