import { useState } from "react"
import {industries} from "../../data/process"

const IndustrySection = () => {
    const [active, setActive] = useState(industries[0].id);
    const current = industries.find((i) => i.id === active) ?? industries[0];

    return (
      <section id="industry" className="bg-white gap-4">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <div className="text-left mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-2">
              Build for Your Industry
            </h2>
            <p className="text-base text-neutral-400 mb-10">
              We've helped companies across industries launch smarter, faster,
              and more securely.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-row lg:flex-col gap-2 lg:gap-6 lg:w-[200px] shrink-0">
              {industries.map((ind) => {
                const isActive = active === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActive(ind.id)}
                    className={[
                      "text-left text-base font-semibold transition-colors cursor-pointer",
                      "flex items-center gap-3",
                      isActive
                        ? "text-black"
                        : "text-neutral-500 hover:text-neutral-300",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "w-1 h-6 rounded-full shrink-0 transition-colors",
                        isActive ? "bg-primary-200" : "bg-neutral-700",
                      ].join(" ")}
                    />
                    {ind.label}
                  </button>
                );
              })}
            </div>
            <div className="flex-1 flex flex-col gap-5">
              <p className="text-base text-neutral-600 leading-relaxed">
                {current.description}
              </p>
              <div className="rounded-2xl overflow-hidden">
                <img
                  key={current.id}
                  src={current.image}
                  alt={current.label}
                  className="w-full h-auto max-h-[351px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default IndustrySection;