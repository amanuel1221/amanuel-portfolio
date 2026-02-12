import React from "react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiVitest } from "react-icons/si";

const floatVariant = {
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  return (
    <section
      id="home"
      style={{ backgroundColor: "var(--tertiary-blue)" }}
      className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-8 p-10 pb-28"
    >
     
      <motion.div
        variants={floatVariant}
        initial="initial"
        animate="animate"
        className="absolute top-20 left-10 z-0"
      >
        <FaReact className="text-blue-500 text-6xl opacity-30" />
      </motion.div>

      <motion.div
        variants={floatVariant}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute top-40 right-20 z-0"
      >
        <SiTailwindcss className="text-sky-600 text-6xl opacity-30" />
      </motion.div>

      <motion.div
        variants={floatVariant}
        initial="initial"
        animate="animate"
        transition={{ delay: 2 }}
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-0"
      >
        <FaJsSquare className="text-yellow-500 text-6xl opacity-30" />
      </motion.div>

      <motion.div
        variants={floatVariant}
        initial="initial"
        animate="animate"
        transition={{ delay: 3 }}
        className="absolute bottom-20 right-1/3 z-0"
      >
        <SiVitest className="text-green-500 text-6xl opacity-30" />
      </motion.div>

      
      <div className="flex flex-col items-center md:p-10 z-10">
        <button
        style={{backgroundColor:"var(--secondary-blue)"}}
          className="flex justify-center items-center mb-5 px-6 py-3 rounded-full mt-10"
        >
          <p style={{ color: "var(--text-primary)" }}
            className="text-white font-bold ">Available for Freelance Work</p>
        </button>

        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-4 text-center lg:text-left">
          Hi, I am Amanuel Amare
        </h1>
        <p className="text-lg md:text-2xl font-semibold mt-2 text-center lg:text-left">
          Front End Web Developer
        </p>
        <p className="mt-4 text-base md:text-lg text-center">
          I build clean and responsive web interfaces using HTML, CSS, Tailwind,
          JavaScript, and React JS.
        </p>
        <p className="text-center">
          Currently seeking opportunities to contribute to real-world products and grow within a collaborative development team.
        </p>
        <p className="text-center">
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

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="hero-image lg:mr-10 relative z-10"
      >
        <img
          src="/assets/images/Amanuel.jpg"
          alt="Amanuel photo"
          className="w-40 md:w-60 lg:w-72 aspect-square rounded-full object-cover mx-auto border-4 border-white shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
