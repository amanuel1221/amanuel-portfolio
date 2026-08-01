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
    const originalOverflow = document.body.style.overflow;
    const originalHeight = document.body.style.height;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    } else {
      document.body.style.overflow = originalOverflow || "auto";
      document.body.style.height = originalHeight || "auto";
    }

    return () => {
      document.body.style.overflow = originalOverflow || "auto";
      document.body.style.height = originalHeight || "auto";
    };
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
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
      className={`sticky top-0 z-[1000] transition-transform duration-300
${showNav ? "translate-y-0" : "-translate-y-full"}
bg-white border-b border-gray-200 shadow-sm`}
      >
      <nav className="flex justify-between items-center px-3 py-3 sm:px-4 md:p-4" role="navigation" aria-label="Main Navigation">
        
       
        <div className="h-12 w-24 sm:h-14 sm:w-28 md:h-16 md:w-32 flex-shrink-0 overflow-hidden">
          <HashLink to="/#home" itemProp="url">
            <img
              src="./logo-brand.svg"
className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              alt="Amanuel - React Performance Engineer Logo"
              itemProp="logo"
            />
          </HashLink>
        </div>

        
        <ul className="hidden md:flex gap-8 text-lg font-medium items-center">
          <li itemProp="name">
            <HashLink itemProp="url" smooth to="/#home" className={hash === "#home" ? "nav-link active" : "nav-link"}>
              Home
            </HashLink>
          </li>
          <li itemProp="name">
            <HashLink itemProp="url" smooth to="/#about" className={hash === "#about" ? "nav-link active" : "nav-link"}>
              About
            </HashLink>
          </li>
          <li itemProp="name">
            <HashLink itemProp="url" smooth to="/#skills" className={hash === "#skills" ? "nav-link active" : "nav-link"}>
              Skills
            </HashLink>
          </li>
          <li itemProp="name">
            <HashLink itemProp="url" smooth to="/#projects" className={hash === "#projects" ? "nav-link active" : "nav-link"}>
              Projects
            </HashLink>
          </li>
          <li itemProp="name">
            <HashLink itemProp="url" smooth to="/#contact" className={hash === "#contact" ? "nav-link active" : "nav-link"}>
              Contact
            </HashLink>
          </li>
        </ul>

        <div className="hidden md:block">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
            <HashLink smooth to="/#contact">Get in Touch →</HashLink>
          </button>
        </div>

        <HiMenu
          data-testid="Open-menu"
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        />
      </nav>

  
      {isMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-slate-50 text-slate-900 flex flex-col items-center pt-24 px-6 min-h-screen overflow-y-auto animate-in fade-in duration-200 shadow-inner">
          <HiX
            data-testid="Close-menu"
            className="text-4xl cursor-pointer absolute top-6 right-6 text-slate-700 hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
          />

          <ul className="flex flex-col gap-8 text-xl font-medium items-center w-full">
            <li itemProp="name"><HashLink itemProp="url" smooth to="/#home" onClick={() => setIsMenuOpen(false)} className="text-slate-800 hover:text-blue-600 transition-colors">Home</HashLink></li>
            <li itemProp="name"><HashLink itemProp="url" smooth to="/#about" onClick={() => setIsMenuOpen(false)} className="text-slate-800 hover:text-blue-600 transition-colors">About</HashLink></li>
            <li itemProp="name"><HashLink itemProp="url" smooth to="/#skills" onClick={() => setIsMenuOpen(false)} className="text-slate-800 hover:text-blue-600 transition-colors">Skills</HashLink></li>
            <li itemProp="name"><HashLink itemProp="url" smooth to="/#projects" onClick={() => setIsMenuOpen(false)} className="text-slate-800 hover:text-blue-600 transition-colors">Projects</HashLink></li>
            <li itemProp="name"><HashLink itemProp="url" smooth to="/#contact" onClick={() => setIsMenuOpen(false)} className="text-slate-800 hover:text-blue-600 transition-colors">Contact</HashLink></li>
          </ul>

          <button
            className="mt-12 w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-md"
            onClick={() => setIsMenuOpen(false)}
          >
            <HashLink itemProp="url" smooth to="/#contact">Get in Touch →</HashLink>
          </button>
        </div>
      )}
    </header>
  );
};

export default NavBar;
