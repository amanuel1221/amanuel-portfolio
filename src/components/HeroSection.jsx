import React from "react";
import { HashLink } from "react-router-hash-link";

const HeroSection = () => {
  return (
    <section
      id="home"
      style={{ backgroundColor: "var(--tertiary-blue)" }}
      className="w-full  flex flex-col lg:flex-row items-center justify-center gap-8 p-0"
    >
      
      <div className="flex flex-col items-center  md:p-10 ">
        <button
          style={{
            backgroundColor: "var(--secondary-blue)",
            padding: "10px 20px",
            borderRadius: "60px",
            marginTop: "60px",
          }}
          className="flex justify-center items-center  mb-5" 
        >
          <p
            style={{ color: "var(--text-primary)" }}
            className="text-white font-bold "
          >
            Available for freelance Work
          </p>
        </button>

        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-4 text-center lg:text-left">
          Hi, I am Amanuel Amare
        </h1>
        <p className="text-lg md:text-2xl font-semibold mt-2 text-center lg:text-left">
          Front End Web Developer
        </p>
        <p className="mt-4 text-base md:text-lg text-center ">
          I build clean and responsive web interfaces using HTML, CSS, Tailwind,
          JavaScript, and React JS.
        </p>
        <p className="text-center">
          Open to junior frontend roles and small freelance projects.
        </p>
        <p className="text-center ">
          Focus on clean UI, reusable components, and tested code using modern
          tools like React and Vitest.
        </p>

      
        <div className="flex flex-col md:flex-row justify-center items-center mt-6 mb-4 gap-10 md:gap-40">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            <HashLink smooth to="/#contact">Get in Touch &rarr;</HashLink>
          </button>
          <button className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
            <HashLink smooth to="/#projects">View My Work &rarr;</HashLink>
          </button>
        </div>
      </div>

     
      <div className="hero-image lg:mr-10">
        <img
          src="./photo.jpg"
          alt="amanuel photo"
          className="w-60 h-60 md:w-100 md:h-100 lg:w-120 lg:h-100 rounded-full object-cover mx-auto "
        />
      </div>
    </section>
  );
};

export default HeroSection;
