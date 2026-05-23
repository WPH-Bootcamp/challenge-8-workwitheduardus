import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavItems } from "../../data/navigation.ts";
import Button from "../ui/Button";
import logoDesktop from "../../assets/Logo-dekstop.svg";
import logoMobile from "../../assets/Logo-mobile.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 bg-blend-color-burn">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[72px]">
          <a href="#" className="flex items-center">
            <img
              src={logoDesktop}
              alt="Logo"
              className="hidden lg:block h-8 w-auto"
            />
            <img
              src={logoMobile}
              alt="Logo"
              className="block lg:hidden h-8 w-auto"
            />
          </a>

          <div className="hidden lg:flex items-center gap-3 ">
            {NavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-semibold text-neutral-950 hover:bg-gray-100 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button variant="primary" size="md" href="#contact">
              Let's Talk
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-neutral-950 cursor-pointer"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={[
          "fixed top-0 right-0 z-[70] h-full max-w-full bg-white lg:hidden",
          "flex flex-col px-4 pt-5 pb-8",
          "transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between mb-10">
          <a href="#" onClick={() => setIsOpen(false)}>
            <img src={logoMobile} alt="Logo" className="h-8 w-auto" />
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-neutral-950 cursor-pointer"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col flex-1 gap-1">
          {NavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="py-4 text-base font-semibold text-neutral-950 border-b border-gray-100 hover:text-primary-200 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-6">
          <Button variant="primary" size="lg" href="contact" className="w-full">
            Let's Talk
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
