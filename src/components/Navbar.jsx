import { useState } from "react";
import { styles } from "../styles";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [section, setSection] = useState("");

  return (
    <div
      className={`${styles.paddingX} pt-6 bg-primary w-full sticky top-0 z-[9999]`}
    >
      <div className={`flex justify-between w-full pb-6`}>
        <a href="/" className="flex justify-center items-center gap-3">
          <img src="./logo.svg" alt="logo" className="w-8" />
          <h1 className="text-white text-lg font-bold text-nowrap">
            Tommy Lie | Portfolio
          </h1>
        </a>
        {/* Mobile Nav */}
        <div className="md:hidden">
          {navOpen ? (
            <X onClick={() => setNavOpen(!navOpen)} aria-label="Close menu" />
          ) : (
            <Menu onClick={() => setNavOpen(!navOpen)} aria-label="Open menu" />
          )}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10">
          <a href="#about" className="text-lg font-medium text-secondary">
            About
          </a>
          <a href="#work" className="text-lg font-medium text-secondary">
            Work
          </a>
          <a href="#contact" className="text-lg font-medium text-secondary">
            Contact
          </a>
        </div>
      </div>

      {navOpen && (
        <div className="absolute top-[95%] left-0 right-0 bg-primary text-end border-t border-gray-100 border-opacity-10 z-40 pr-7">
          <div>
            <a
              href="#about"
              className={`text-lg font-medium text-secondary ${
                section === "about" ? "underline" : ""
              }`}
              onClick={() => {
                setNavOpen(!navOpen);
                setSection("about");
              }}
            >
              <div className="py-2 hover:bg-gray-50 hover:bg-opacity-5">
                <p>About</p>
              </div>
            </a>
            <hr className="opacity-5" />
            <a
              href="#experience"
              className={`text-lg font-medium text-secondary ${
                section === "experience" ? "underline" : ""
              }`}
              onClick={() => {
                setNavOpen(!navOpen);
                setSection("experience");
              }}
            >
              <div className="py-2 hover:bg-gray-50 hover:bg-opacity-5">
                <p>Experience</p>
              </div>
            </a>
            <hr className="opacity-5" />
            <a
              href="#projects"
              className={`text-lg font-medium text-secondary ${
                section === "projects" ? "underline" : ""
              }`}
              onClick={() => {
                setNavOpen(!navOpen);
                setSection("projects");
              }}
            >
              <div className="py-2 hover:bg-gray-50 hover:bg-opacity-5">
                <p>Projects</p>
              </div>
            </a>
            <hr className="opacity-5" />
            <a
              href="#contact"
              className={`text-lg font-medium text-secondary ${
                section === "contact" ? "underline" : ""
              }`}
              onClick={() => {
                setNavOpen(!navOpen);
                setSection("contact");
              }}
            >
              <div className="py-2 hover:bg-gray-50 hover:bg-opacity-5">
                <p>Contact</p>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
