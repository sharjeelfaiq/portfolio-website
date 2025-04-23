import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, ChevronRight, Braces } from "lucide-react";
import Navlinks from "../data/navlinks";
import ProfileData from "../data/profile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`text-white fixed inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-darkblue/95 shadow-lg" : "bg-darkblue"
    }`}>
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          spy={true}
          smooth={true}
          offset={-100}
          duration={750}
          to="home"
          className="flex items-center space-x-3"
        >
          <Braces />
          <span className="text-xl font-bold hidden sm:block">{ProfileData.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center space-x-8">
          {Navlinks.map((item) => (
            <Link
              key={item.title}
              spy={true}
              smooth={true}
              offset={-100}
              duration={750}
              to={item.link}
              className="relative text-white hover:text-dark-orange transition-colors duration-300 py-2 text-base font-medium group"
            >
              {item.title}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-dark-orange group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Resume Button */}
        <div className="hidden lg:block">
          <a
            href={ProfileData.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-6 py-2 bg-dark-orange text-white rounded-lg font-medium text-sm transition-all duration-300 hover:bg-orange-600 hover:shadow-lg"
          >
            RESUME
            <ChevronRight className="ml-1 w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden p-2 text-white">
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 pt-20 bg-darkblue/95 z-40 h-full w-full">
          <div className="container mx-auto px-6 py-8 flex flex-col space-y-8">
            {Navlinks.map((item, index) => (
              <Link
                key={item.title}
                onClick={() => setIsMenuOpen(false)}
                spy={true}
                smooth={true}
                offset={-100}
                duration={750}
                to={item.link}
                className={`text-2xl font-medium hover:text-dark-orange transition-all duration-300 border-b border-gray-700 pb-4 ${
                  index === 0 ? "pt-4" : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
            <a
              href={ProfileData.resume}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-full text-white bg-dark-orange py-3 px-6 rounded-lg font-medium text-lg mt-4 hover:bg-orange-600 transition-all duration-300"
            >
              View Resume
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;