import Navbar from "./Navbar";
import Footer from "./Footer";
import { Children } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({Children}: LayoutProps) => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>{Children}</main>
            <Footer />
        </div>
    );
};

export default Layout;