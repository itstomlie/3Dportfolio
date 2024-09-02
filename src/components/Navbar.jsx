import { useState, useEffect, useRef } from "react";
import { styles } from "../styles";
import { Menu, X } from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [section, setSection] = useState("");

  const sections = ["about", "experience", "projects", "contact"];
  const sectionRefs = useRef({});

  useEffect(() => {
    sections.forEach((sec) => {
      sectionRefs.current[sec] = document.getElementById(sec);
    });
  }, []);

  const handleSectionChange = (id) => {
    setSection(id);
  };

  const { observe, unobserve } = useIntersectionObserver(handleSectionChange, {
    threshold: 0.5, // Adjust as needed
  });

  useEffect(() => {
    sections.forEach((sec) => {
      observe(sectionRefs.current[sec]);
    });

    return () => {
      sections.forEach((sec) => {
        unobserve(sectionRefs.current[sec]);
      });
    };
  }, [observe, unobserve, sections]);

  return (
    <div
      className={`${styles.paddingX} pt-[3vh] bg-primary w-full sticky top-0 z-[9999] border-b border-gray-200 border-opacity-10`}
    >
      <div className={`flex justify-between w-full pb-[3vh]`}>
        <a href="/" className="flex justify-center items-center gap-3">
          <img src="./planet.ico" alt="logo" className="w-8" />
          <h1
            className={`text-lg font-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent animate-gradient`}
          >
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
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`text-lg font-medium text-secondary ${
                section === sec ? "underline" : ""
              }`}
              onClick={() => setSection(sec)}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          ))}
        </div>
      </div>

      {navOpen && (
        <div className="absolute top-[95%] left-0 right-0 bg-primary text-end border-t border-gray-100 border-opacity-10 z-40 pr-7">
          {sections.map((sec) => (
            <div key={sec}>
              <a
                href={`#${sec}`}
                className={`text-lg font-medium text-secondary ${
                  section === sec ? "underline" : ""
                }`}
                onClick={() => {
                  setNavOpen(!navOpen);
                  setSection(sec);
                }}
              >
                <div className="py-2 hover:bg-gray-50 hover:bg-opacity-5">
                  <p>{sec.charAt(0).toUpperCase() + sec.slice(1)}</p>
                </div>
              </a>
              {sec !== "contact" && <hr className="opacity-5" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
