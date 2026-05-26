import type { SectionHeadingProps } from "../../types";

const SectionHeading = ({
    tag,
    title,
    description,
    align = "center",
    className = "",
}: SectionHeadingProps) => {
    const alignClass = {
        left: "item-start text-left",
        center: "item-center text-center",
        right: "item-end text-right",
    }[align];

    return (
        <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
            {tag && (
                <span className="text-xs font-bold text-primary-200 uppercase tracking-widest">
                    {tag}
                </span>
            )}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 leading-tight">
                {title}
            </h2>
            {description && (
                <p className={[
                    "text-neutral-500 leading-relaxed", align === "center" ? "max-w-2xl mx-auto" : "max-w-xl",
                ].join(" ")}>
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;