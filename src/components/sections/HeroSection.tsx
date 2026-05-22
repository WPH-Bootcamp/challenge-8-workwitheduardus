import Button from "../ui/Button";
import { companyInfo } from "../../data/company.ts";
import heroImg from "../../assets/Image-Hero.png";

const HeroSection = () => {
  return (
    <section id="home" className="bg-white">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-neutral-50 leading-tight">
              {companyInfo.name}
              {""}
            </h1>
            <p className="mt-5 text-base text-gray-400 leading-relaxed max-w-md">
              {companyInfo.socialLinks.facebook}
              {companyInfo.socialLinks.instagram}
              {companyInfo.socialLinks.linkedin}
              {companyInfo.socialLinks.tiktok}
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href="#contact">
                Let's Talk
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={heroImg}
              alt="Tech illustration"
              className="w-full max-w-[560px] lg:max-w-[747px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
