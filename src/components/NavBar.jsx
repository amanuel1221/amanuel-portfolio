import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const { hash } = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

 
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNav(false); 
      } else {
        setShowNav(true); 
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 z-[1000] transition-transform duration-300
      ${showNav ? "translate-y-0" : "-translate-y-full"}
      bg-white/80 backdrop-blur-md dark:bg-gray-900/80
      border-b border-gray-200 dark:border-gray-800`}
    >
      <nav className="flex justify-between items-center p-4">

      
        <div className="h-16 w-32 overflow-hidden">
          <img
            src="./logo-brand.svg"
            className="w-full h-16 object-contain"
            alt="Amanuel Logo"
          />
        </div>

        <ul className="hidden md:flex gap-8 text-lg font-medium items-center">
          <li>
            <HashLink smooth to="/#home" className={hash === "#home" ? "nav-link active" : "nav-link"}>
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about" className={hash === "#about" ? "nav-link active" : "nav-link"}>
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#skills" className={hash === "#skills" ? "nav-link active" : "nav-link"}>
              Skills
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects" className={hash === "#projects" ? "nav-link active" : "nav-link"}>
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact" className={hash === "#contact" ? "nav-link active" : "nav-link"}>
              Contact
            </HashLink>
          </li>
        </ul>

       
        <div className="hidden md:block">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <HashLink smooth to="/#contact">Get in Touch →</HashLink>
          </button>
        </div>

        <HiMenu
         data-testid="Open-menu"
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        />
      </nav>

     
      {isMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-white dark:bg-gray-900 flex flex-col items-center pt-24 px-6 min-h-screen overflow-y-auto">

          <HiX
          data-testid="Close-menu"
            className="text-4xl cursor-pointer absolute top-6 right-6"
            onClick={() => setIsMenuOpen(false)}
          />

          <ul className="flex flex-col gap-8 text-xl font-medium items-center w-full">
            <li><HashLink smooth to="/#home" onClick={() => setIsMenuOpen(false)}>Home</HashLink></li>
            <li><HashLink smooth to="/#about" onClick={() => setIsMenuOpen(false)}>About</HashLink></li>
            <li><HashLink smooth to="/#skills" onClick={() => setIsMenuOpen(false)}>Skills</HashLink></li>
            <li><HashLink smooth to="/#projects" onClick={() => setIsMenuOpen(false)}>Projects</HashLink></li>
            <li><HashLink smooth to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</HashLink></li>
          </ul>

          <button
            className="mt-12 w-full max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            <HashLink smooth to="/#contact">Get in Touch →</HashLink>
          </button>
        </div>
      )}
    </header>
  );
};

export default NavBar;
