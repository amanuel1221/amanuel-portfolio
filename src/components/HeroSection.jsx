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
      className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:py-14 pb-20 sm:pb-24 lg:pb-28 overflow-hidden"
      aria-label="Introduction"
    >

      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div variants={floatVariant} initial="initial" animate="animate" className="absolute top-20 left-10 z-0 hidden sm:block">
          <FaReact className="text-blue-500 text-6xl opacity-30" />
        </motion.div>
        <motion.div variants={floatVariant} initial="initial" animate="animate" transition={{ delay: 1 }} className="absolute top-40 right-20 z-0 hidden sm:block">
          <SiTailwindcss className="text-sky-600 text-6xl opacity-30" />
        </motion.div>
        <motion.div variants={floatVariant} initial="initial" animate="animate" transition={{ delay: 2 }} className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-0 hidden sm:block">
          <FaJsSquare className="text-yellow-500 text-6xl opacity-30" />
        </motion.div>
        <motion.div variants={floatVariant} initial="initial" animate="animate" transition={{ delay: 3 }} className="absolute bottom-20 right-1/3 z-0 hidden sm:block">
          <SiVitest className="text-green-500 text-6xl opacity-30" />
        </motion.div>
      </div>

      <div className="flex flex-col items-center md:p-10 z-10">

        <button
          style={{ backgroundColor: "var(--secondary-blue)" }}
          className="flex justify-center items-center mb-5 px-6 py-3 rounded-full mt-10"
        >
          <p style={{ color: "var(--text-primary)" }} className="text-white font-bold">
            Available for Freelance Work
          </p>
        </button>


        <h1 itemProp="name" className="text-2xl md:text-3xl lg:text-5xl font-bold mt-4 text-center lg:text-left">
          Hi, I am Amanuel Amare
        </h1>


        <p itemProp="jobTitle" className="text-lg md:text-2xl font-semibold mt-2 text-center lg:text-left text-blue-600">
          MERN Stack & Frontend Developer | React Performance Specialist
        </p>

        <div className="max-w-2xl text-center">
          <p className="mt-4 text-base md:text-lg">
            I specialize in building modern,{" "}
            <strong>responsive web applications</strong> with React,{" "}
            <strong>Tailwind CSS, Vite, and the MERN stack</strong>. I enjoy
            transforming <strong>Figma designs</strong> into fast, accessible
            interfaces with clean architecture, reusable components, and{" "}
            <strong>99+ Lighthouse performance</strong>. I also work with{" "}
            <strong>PWA concepts</strong>, including offline caching and
            low-connectivity experiences, as well as{" "}
            <strong>email integrations</strong> for automated and
            account-related workflows. I focus on robust reliability through{" "}
            <strong>Vitest</strong> and automated testing.
          </p>

          <p className="mt-2 text-sm md:text-base opacity-80">
            I'm passionate about continuous learning and currently looking for
            internship, junior frontend, and freelance opportunities where I can
            help build real-world products while expanding my skills as a software
            engineer.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center mt-6 mb-4 gap-3 sm:gap-4 md:gap-10 lg:gap-40 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition-all">
            <HashLink itemProp="url" smooth to="/#contact">Get in Touch &rarr;</HashLink>
          </button>
          <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded cursor-pointer hover:scale-105 transition-transform duration-300 shadow-sm">
            <HashLink itemProp="url" smooth to="/#projects">View My Work &rarr;</HashLink>
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="hero-image lg:mr-10 relative z-10"
      >

        <img
          itemProp="image"
          src="/assets/images/Amanuel.webp"
          alt="Amanuel Amare - React Developer Portfolio Photo"
          width="288"
          height="288"
          loading="eager"
          fetchpriority="high"
          className="w-40 md:w-60 lg:w-72 aspect-square rounded-full object-cover mx-auto border-4 border-white shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;