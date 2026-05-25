import {services} from "../../data/service";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";

const ServiceSection = () => {
    return (
        <section id="service" className="bg-white">
            <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-16 lg:py-20">
                <SectionHeading
                 title="Smart IT Solutions That Grow With You"
                 description="Tailored tech to boost efficiency, security, and results."
                 align="center"
                 className="mb-10"/>
                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((s) => (
                        <ServiceCard key={s.id} service={s} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;