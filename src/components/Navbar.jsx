import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { Menu, X } from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isBlogPage = location.pathname.startsWith("/blogs");

  const sections = useMemo(
    () => ["about", "experience", "projects", "contact"],
    []
  );

  const sectionRefs = useRef({});

  // Initialize section refs on component mount
  useEffect(() => {
    sections.forEach((sec) => {
      sectionRefs.current[sec] = document.getElementById(sec);
    });
  }, [sections]);

  const handleSectionChange = useCallback((id) => setActiveSection(id), []);

  const handleSectionClick = (sec) => {
    if (isBlogPage) navigate("/"); // Redirect to home if on blog page
    setActiveSection(sec);
  };

  const { observe, unobserve } = useIntersectionObserver(handleSectionChange, {
    threshold: 0.5,
  });

  useEffect(() => {
    sections.forEach((sec) => observe(sectionRefs.current[sec]));
    return () => sections.forEach((sec) => unobserve(sectionRefs.current[sec]));
  }, [observe, unobserve, sections]);

  const toggleNav = () => setNavOpen((prev) => !prev);

  const renderNavLinks = (isMobile = false) =>
    sections.map((sec) => (
      <a
        key={sec}
        href={`#${sec}`}
        className={`text-lg font-medium text-secondary ${
          activeSection === sec ? "underline" : ""
        } ${isMobile ? "block py-2" : ""}`}
        onClick={() => {
          if (isMobile) toggleNav();
          handleSectionClick(sec);
        }}
      >
        {sec.charAt(0).toUpperCase() + sec.slice(1)}
      </a>
    ));

  return (
    <div
      className={`${styles.paddingX} pt-[3vh] bg-primary w-full sticky top-0 z-[9999] border-b border-gray-200 border-opacity-10`}
    >
      <div className="flex justify-between items-center w-full pb-[3vh]">
        <a href="/" className="flex items-center gap-3">
          <img src="./planet.ico" alt="logo" className="w-8" />
          <h1 className="text-lg font-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent animate-gradient">
            Tommy Lie | Portfolio
          </h1>
        </a>
        {/* Mobile Nav */}
        <div className="md:hidden">
          {navOpen ? (
            <X
              onClick={toggleNav}
              aria-label="Close menu"
              aria-controls="mobile-menu"
            />
          ) : (
            <Menu
              onClick={toggleNav}
              aria-label="Open menu"
              aria-controls="mobile-menu"
            />
          )}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10">
          {renderNavLinks()}
          <a
            href="/blogs"
            className={`text-lg font-medium text-secondary ${
              isBlogPage ? "underline" : ""
            }`}
          >
            Blog
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div
          id="mobile-menu"
          className="absolute top-[95%] left-0 right-0 bg-primary text-end border-t border-gray-100 border-opacity-10 z-40 pr-7"
        >
          {renderNavLinks(true)}
          <a
            href="/blogs"
            className={`block text-lg font-medium text-secondary py-2 ${
              isBlogPage ? "underline" : ""
            }`}
            onClick={toggleNav}
          >
            Blog
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
