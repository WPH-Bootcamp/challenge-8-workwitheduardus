import Button from "../ui/Button";
import { companyInfo } from "../../data/company.ts";
import heroImg from "../../assets/hero-image.png";

const HeroSection = () => {
    return (
        <section id="home" className="bg-white">
            <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-12 lg:py-20">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    <div className="flex-1">
                        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-neutral-50 leading-tight">
                            {companyInfo.tagline.split("for")}for{""}
                            <span className="text-primary">

                            </span>
                        </h1>

                    </div>

                </div>

            </div>
        </section>