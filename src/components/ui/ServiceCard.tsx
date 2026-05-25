import type { ServiceCardProps } from "../../types";

const serviceCard = ({service}: ServiceCardProps) => {
    return (
        <div className="bg-gray-50 border border-neutral-200 rounded-2xl pt-16 px-5 hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-1">
                {service.title}
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
                {service.description}
            </p>
        </div>
    )
}

export default serviceCard;