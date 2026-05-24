import { ProcessSteps } from "../../data/process";

const ProcessSection = () => {
    return (
      <section className="bg-white">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
              Our Process
            </h2>
            <p className="mt-3 text-base text-gray-500">Clear steps. Smart execution. Results you can count on.</p>
          </div>
          <div className="relative max-w-[1160px] mx-auto">
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-neutral-200"/>
            {ProcessSteps.map((step, i) => {
                const isLeft = i % 2 === 0;
                return (
                    <div
                    key={step.id}
                    className={`flex items-center gap-4
                    mb-4 ${isLeft ? "lg:justify-start" : "lg:justify-end"}`}>
                        {isLeft ? (
                            <>
                              <div className="order-2 lg:order-1 flex-1 max-w-[532px] bg-gray-50 border border-neutral-200 rounded-2xl px-6 py-5 flex items-center justify-between group">
                                <div>
                                    <h3 className="text-base font-bold text-neutral-900">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-neutral-500 mt-0.5">{step.description}</p>
                                </div>
                                <span className="text-neutral-400 text-lg shrink-0 ml-4">
                                    ↑
                                </span>
                            </div>
                            <div className="order-1 lg:order-1 w-8 h-8 rounded-full bg-primary-200 text-white text-sm font-bold flex items-center justify-center shrink-0 z-10"> {step.id}
                            </div>
                            <div className="order-3 flex-1 max-w-[532px] hidden lg:block" />
                            </>
                        ) : (
                            <>
                            <div className="flex-1 max-w-[532px] hidden lg:block"/>
                            <div className=" w-8 h-8 rounded-full bg-primary-200 text-white text-sm font-bold flex items-center justify-center shrink-0 z-10">{step.id}
                            </div>
                            <div className="flex-1 max-w-[532px] bg-gray-50 border border-neutral-200 rounded-2xl px-6 py-5 flex items-center justify-between">
                                <div>
                                    <h3 className=" text-base font-bold text-neutral-900">  {step.title}
                                    </h3>
                                    <p className="text-sm text-neutral-500 mt-0.5">{step.description}</p>
                                </div>
                                <span className="text-neutral-400 text-lg shrink-0 ml-4">↑</span>
                            </div>
                        </>
                        )}
                    </div>
                );
            })}
            </div>
          </div>
      </section>
    );
};

export default ProcessSection