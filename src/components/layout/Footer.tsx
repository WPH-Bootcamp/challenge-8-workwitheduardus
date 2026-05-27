import { NavItems } from "../../data/navigation";
import { companyInfo } from "../../data/company";
import logoDesktop from "../../assets/Logo-dekstop.svg"
import facebookIcon from "../../assets/facebook-icon.svg"
import instagramIcon from "../../assets/instagram-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import tiktokIcon from "../../assets/tiktok-icon.svg";

const iconMap: Record<string, string> = {
    facebook: facebookIcon,
    instagram: instagramIcon,
    linkedin: linkedinIcon,
    tiktok: tiktokIcon,
};

const Footer = () => {
    return (
      <footer className="bg-white py-10 px-4 sm:px-8 lg:px-[140px]">
        < div className="max-w-[1160px] mx-auto bg-neutral-50 border border-[#DFDFDF] rounded-3xl px-10 py-10 flex flex-col gap-10">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-3xl lg:text-[36px] font-bold text-neutral-950 leading-[44px] tracking-[-0.02rem]">
              LET DISCUSS <br />
              YOUR IDEAS
            </h2>
            <img
              src={logoDesktop}
              alt={companyInfo.name}
              className="h-8 w-auto"
            />
          </div>
          <div className="border-t border-[#DFDFDF]"/>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <nav className="flex items-center flex-wrap gap-1">
                {NavItems.map((item) => (
                    <a key={item.href}
                    href={item.href}
                    className="px-4 py-2 rounded-full text-base font-medium text-neutral-950 hover:bg-neutral-100 transition-colors">{item.label}</a>
                ))}
            </nav>
            <div className="flex items-center gap-4">
                {Object.entries(companyInfo.socialLinks).map(([platform, url])=> (
                    <a 
                    key={platform}
                    href={url}
                    target="_blank"
                    aria-label={platform}
                    className="w-10 h-10 rounded-full border border-[#DFDFDF] flex items-center justify-center hover:
                    bg-neutral-100 transition-colors">
                        <img src={iconMap[platform]} alt={platform}
                        className="w-4 h-4 object-contain" />
                    </a>
                ))}
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;