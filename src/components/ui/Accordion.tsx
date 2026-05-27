import { useState } from "react";
import type { AccordionProps } from "../../types";

const Accordion = ({items, variant = "light"}: AccordionProps) => {
    const [openId, setOpenId] = useState<number | null>(items[0]?.id ?? null);

    const isDark = variant === "dark";

    return (
        <div className="flex flex-col">
            {items.map((item) => {
                const isOpen = openId === item.id;
                return (
                    <div
                    key={item.id}
                    className={["border-b", isDark ? "border-white/10" : "border-neutral-200",].join(" ")}>
                        <button onClick={() => setOpen(item.id, isOpen)} className="w-full py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none">
                            <span className={["text-base font-semibold pr-4", isDark ? "text-white" : "text-neutral-900",].join(" ")}>
                                {item.question}
                            </span>
                            <span className={["shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-lg leading-none transition-colors", isDark ? "border-white/20 text-white" : "border-neutral-200 text-neutral-400"].join(" ")}>
                             {isOpen ? "-" : "+"}
                            </span>
                        </button>
                        <div className={["overflow-hidden transition-all duration-300", isOpen ? "max-h-96 pb-5" : "max-h-0",].join(" ")}>
                            <p className={["text-sm leading-relaxed", isDark ? "text-white" : "text-neutral-500"].join(" ")}>
                                {item.answer}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );

    function setOpen(id: number, isOpen: boolean) {setOpenId(isOpen ? null : id);}
};

export default Accordion;