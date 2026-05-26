import { stats } from "../../data/process";
import SectionHeading from "../ui/SectionHeading";
import StatCard from "../ui/StatCard";

const StatSection = () => {
  return (
    <section id="about" className="bg-white text-">
      <div className="text-center">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <SectionHeading
            title="End-to-End IT Solutions That Drive Results"
            description="From strategy to execution, we deliver solutions that grow your business."
            align="center"
            className="mb-12"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-5 lg:gap-8">
          {stats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatSection;
