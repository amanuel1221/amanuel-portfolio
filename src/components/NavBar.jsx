import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import { HiMenu  } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { useState, } from 'react';

const NavBar = () => {
    const { hash } = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (

    <section className="h-30 bg-white sticky top-0 md:z-50 md:backdrop-blur bg-white/80 md:dark:bg-gray-900/80 border-b md:border-gray-200 md:dark:border-gray-800">
      <nav className="flex flex-row justify-between items-center p-4">
        <div className="logo h-16 w-32 rounded-lg overflow-hidden">
          <img src="./logo-brand.svg" className="sm:items-center  md:w-full h-16 bg-white" alt="Amanuel Logo" />
        </div>
        
        <ul className=" hidden md:flex nav-links flex flex-row gap-8 list-none text-lg font-medium items-center">
         <HashLink smooth to="/#home" className={hash === "#home" ? "nav-link active" : "nav-link"}>
          Home
        </HashLink>
          <li><HashLink smooth to="/#about" className={hash === "#about" ? "nav-link active" : "nav-link"}>About</HashLink></li>
          <li><HashLink smooth to="/#skills" className={hash === "#skills" ? "nav-link active" : "nav-link"}>Skills</HashLink></li>
          <li><HashLink smooth to="/#projects" className={hash === "#projects" ? "nav-link active" : "nav-link"}>Projects</HashLink></li>
          <li><HashLink smooth to="/#contact" className={hash === "#contact" ? "nav-link active" : "nav-link"}>Contact</HashLink></li>
        </ul>
        <div className="get-in-touch hidden md:flex">
          
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                <HashLink smooth to="/#contact" className="">
              Get in Touch &rarr;
              </HashLink>
            </button>
          
          
        </div>
        <div className=" hamburger-menu md:hidden ">
            <HiMenu className="text-3xl cursor-pointer text-black" aria-label="Open-menu" onClick={() => setIsMenuOpen(!isMenuOpen)} />

            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 flex flex-col items-center justify-center z-50">
                    <HiX className="text-4xl cursor-pointer text-black absolute top-4 right-4 " aria-label="Close-menu" onClick={() => setIsMenuOpen(false)} />
                    <ul className="flex flex-col gap-4 list-none text-base font-medium items-center mt-1">
                        <li><HashLink smooth to="/#home" className={hash === "#home" ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>Home</HashLink></li>
                        <li><HashLink smooth to="/#about" className={hash === "#about" ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>About</HashLink></li>
                        <li><HashLink smooth to="/#skills" className={hash === "#skills" ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>Skills</HashLink></li>
                        <li><HashLink smooth to="/#projects" className={hash === "#projects" ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>Projects</HashLink></li>
                        <li><HashLink smooth to="/#contact" className={hash === "#contact" ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>Contact</HashLink></li>
                    </ul>
                    <button className="w-full ml-5 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-8" onClick={() => setIsMenuOpen(false)}>
                        <HashLink smooth to="/#contact" className="">
                            Get in Touch &rarr;
                        </HashLink>
                    </button>
                </div>
            )}

          </div>
      </nav>
    </section>
  );
};

export default NavBar;
