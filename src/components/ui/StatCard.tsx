import type { StatCardProps } from "../../types";  

const StatCard = ({value, label, className = ""}: StatCardProps) => {
    return (
        <div className={["flex flex-col items-center justify-center text-center p-4", "w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] lg:w-[275px] lg:h-[275px]","rounded-full border border-neutral-900 bg-gray-50", className,
        ].join(" ")}
        >
        <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-200">
            {value}
        </span>
        <span className="mt-2 text-xs sm:text-sm text-gray-400 font-medium max-w-[80%] leading-snug">
            {label}
        </span>
        </div>        
    );
};

export default StatCard;