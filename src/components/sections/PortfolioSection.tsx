import { portfolios } from "../../data/portofolio";
import SectionHeading  from "../ui/SectionHeading";
import PortfolioCard  from "../ui/PortfolioCard";
import p1 from "../../assets/porto-1.png";
import p2 from "../../assets/porto-2.png";
import p3 from "../../assets/porto-3.png";

const imgMap: Record<string, string> = {
  portofolio1: p1,
  portofolio2: p2,
  portofolio3: p3,
};

const PortfolioSection = () => {
    return (
      <section id="project" className="bg-white">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <SectionHeading
            title="From Vision to Launch! Projects We’re Proud Of"
            description="Take a closer look at our recent work powering startups, enterprises, and everything in between."
            align="center"
            className="mb-10 text-center"
          />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolios.map((p) => (
                <PortfolioCard key={p.id} item={p} imgSrc={imgMap[p.image]} />
            ))}
            </div>
        </div>
      </section>
    );
};

export default PortfolioSection;