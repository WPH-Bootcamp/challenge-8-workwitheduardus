import type { ServiceCardProps } from "../../types";

const serviceCard = ({service}: ServiceCardProps) => {
    return (
      <div className="relative pt-10">
        <div
          className="absolute top-0 left-5 w-20 h-20 z-10"
          style={{ top: "-10px" }}
        >
          <img
            src={service.icon}
            alt={service.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div
          className="bg-neutral-50 border border-neutral-200 rounded-2xl px-5 pt-16 pb-5
        hover:border-neutral-300 transition-colors duration-200"
        >
          <div className="flex flex-col gap-1">
            <h3 className="bg-text-lg font-bold text-neutral-900 mb-1 text-xl">
              {service.title}
            </h3>
            <p className="text-md text-neutral-500 leading-relaxed text-medium">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    );
}

export default serviceCard;