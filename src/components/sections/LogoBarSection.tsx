import { Key } from "lucide-react";

const logos = ["Adobe", "Upwork", "Zoom", "Postman", "Databricks", "Airbnb", "Dropbox", "Paypal", "Netflix"];

const LogoBarSection = () => {
  return (
    <section className="bg-white border-t border-gray-200">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-12">
            <p className="text-center text-sm font-bold text-neutral-25 mb-6">Trusted by Global Innovators & Leading Brands
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
                {logos.map((logo) => (
                <span
                key={logo}
                className="text-gray-400 font-semibold text-base lg:text-lg opacity-60 hover:opacity-100 transition-opacity">
            {logo}
            </span>
))}
            </div>
        </div>
    </section>
  );
}

export default LogoBarSection;