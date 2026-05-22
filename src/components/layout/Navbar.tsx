import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavItems } from "../../data/navigation.ts";
import Button from "../ui/Button";
import Logo from "../../assets/Logo-dekstop.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1160px]mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#">
          <Logo />
        </a>
        <div className="hidden lg:flex items-center gap-3">
          {NavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-full text-sm font-semibold text-neutral-25 hover:bg-gray-100"
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
          onClick={() => setIsOpen(!isOpen)}
          className="lg-hidden p-2 text-neutral-25 cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg-hidden bg-whhite border-t border-gray-100 px-4 pb-4">
          {NavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-3 text-sm font-semibold text-neutral-25 border-b border-gray-50"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3">
            <Button
              variant="primary"
              size="md"
              href="#contact"
              className="w-full">
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
