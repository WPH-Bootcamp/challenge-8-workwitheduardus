import { faqItems } from "../../data/faq";
import Accordion from "../ui/Accordion";
import consulImg from "../../assets/consultation-image.png"

const FAQSection = () => {
    return (
      <section id="faq" className="bg-white">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 tracking-[0.02em] mb-2">
                Need Help Start <br />
                Here.
              </h2>
              <p className="text-gray-400 text-base mb-8 lg:hidden">
                Everything you need to know — all in one place.
              </p>
              <Accordion items={faqItems} variant="light" />
            </div>

            <div className="lg:w-[400px] shrink-0 flex flex-col lg:gap-6">
              <p className="text-gray-400 text-base hidden lg:block">
                Everything you need to know — all in one place.
              </p>
              <div className="bg-primary-200 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Let's talk it through
                </h3>
                <p className="text-white/80 text-sm mb-6">book a free consultation with our team.</p>
                <div className="rounded-xl overflow-hidden">
                    <img src={consulImg} alt="consultation" 
                    className="w-full h-auto object-cover"
                    loading="lazy"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default FAQSection;