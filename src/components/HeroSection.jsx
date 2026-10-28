
import React from "react";
import { HashLink } from "react-router-hash-link";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaCode,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVitest,
  SiMongodb,
  SiVite,
  SiExpress,
} from "react-icons/si";

const technologies = [
  {
    Icon: FaReact,
    color: "#61DAFB",
    position: "top-[8%] left-[8%]",
    delay: 0,
  },
  {
    Icon: SiTailwindcss,
    color: "#38BDF8",
    position: "top-[17%] right-[12%]",
    delay: 0.5,
  },
  {
    Icon: FaJsSquare,
    color: "#F7DF1E",
    position: "top-[43%] left-[5%]",
    delay: 1,
  },
  {
    Icon: FaNodeJs,
    color: "#68A063",
    position: "top-[48%] right-[7%]",
    delay: 1.5,
  },
  {
    Icon: SiVitest,
    color: "#A5C900",
    position: "bottom-[24%] left-[17%]",
    delay: 0.7,
  },
  {
    Icon: SiMongodb,
    color: "#47A248",
    position: "bottom-[13%] right-[17%]",
    delay: 1.2,
  },
  {
    Icon: FaHtml5,
    color: "#E34F26",
    position: "bottom-[8%] left-[43%]",
    delay: 1.8,
  },
  {
    Icon: FaCss3Alt,
    color: "#1572B6",
    position: "top-[9%] left-[48%]",
    delay: 2,
  },
  {
    Icon: SiVite,
    color: "#646CFF",
    position: "top-[31%] right-[31%]",
    delay: 0.3,
  },
  {
    Icon: SiExpress,
    color: "#9CA3AF",
    position: "bottom-[39%] right-[24%]",
    delay: 1.7,
  },
  {
    Icon: FaGithub,
    color: "#9CA3AF",
    position: "bottom-[7%] right-[43%]",
    delay: 0.9,
  },
  {
    Icon: FaCode,
    color: "#60A5FA",
    position: "top-[29%] left-[28%]",
    delay: 1.3,
  },
];

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      itemScope
      itemType="https://schema.org/Person"
      style={{ backgroundColor: "var(--tertiary-blue)" }}
      className="relative isolate flex w-full flex-col items-center justify-center gap-8 overflow-hidden px-4 py-12 pb-20 sm:px-6 sm:py-16 sm:pb-24 md:px-10 lg:min-h-[650px] lg:flex-row lg:gap-12 lg:py-20 lg:pb-28"
      aria-label="Introduction"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 25, -15, 0],
                  y: [0, -20, 15, 0],
                  scale: [1, 1.08, 0.96, 1],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
        />

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -25, 20, 0],
                  y: [0, 20, -15, 0],
                }
          }
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
        />

        {technologies.map(({ Icon, color, position, delay }) => (
          <motion.div
            key={Icon.displayName || Icon.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              shouldReduceMotion
                ? { opacity: 0.28, scale: 1 }
                : {
                    opacity: [0.18, 0.45, 0.25, 0.18],
                    scale: [1, 1.08, 0.95, 1],
                    y: [0, -10, 4, 0],
                    rotate: [0, 5, -5, 0],
                  }
            }
            transition={{
              duration: 4 + (delay % 2),
              delay,
              repeat: shouldReduceMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className={`absolute z-0 hidden sm:block ${position}`}
          >
            <Icon
              size={19}
              color={color}
              aria-hidden="true"
              className="drop-shadow-sm sm:h-5 sm:w-5"
            />
          </motion.div>
        ))}

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : { y: [0, -8, 0], rotate: [0, 4, 0] }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[18%] left-[7%] hidden text-blue-400/20 lg:block"
        >
          <FaLaptopCode size={30} aria-hidden="true" />
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: shouldReduceMotion ? 0 : 0.12,
            },
          },
        }}
        className="relative z-10 flex w-full flex-col items-center md:p-6 lg:w-auto lg:max-w-3xl lg:items-start lg:p-8"
      >
        <motion.div variants={fadeUp}>
          <div
            style={{ backgroundColor: "var(--secondary-blue)" }}
            className="mb-5 mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 shadow-md sm:mt-0"
          >
            <motion.span
              animate={
                shouldReduceMotion ? {} : { opacity: [1, 0.4, 1] }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-2 rounded-full bg-green-400"
            />

            <span
              style={{ color: "var(--text-primary)" }}
              className="text-sm font-semibold"
            >
              Available for Freelance Work
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          itemProp="name"
          className="mt-2 text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-left lg:text-5xl xl:text-6xl"
        >
          Hi, I am{" "}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Amanuel Amare
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          itemProp="jobTitle"
          className="mt-4 text-center text-lg font-semibold text-blue-600 sm:text-xl md:text-2xl lg:text-left"
        >
          MERN Stack & Frontend Developer
          <span className="hidden sm:inline"> | </span>
          <span className="block sm:inline">
            React Performance Specialist
          </span>
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-5 max-w-2xl text-center lg:text-left"
        >
          <p className="text-base leading-8 md:text-lg">
            I build modern,{" "}
            <strong>responsive web applications</strong> with React, Tailwind
            CSS, Vite, and the MERN stack. I turn{" "}
            <strong>Figma designs</strong> into accessible, maintainable
            interfaces with reusable components and a focus on performance.
            I also work with{" "}
            <strong>automated testing, PWA capabilities, offline caching,</strong>{" "}
            and email integrations to create more reliable web experiences.
          </p>

          <p className="mt-4 text-sm leading-7 opacity-80 md:text-base">
            I'm a Software Engineering student looking for internships,
            junior frontend opportunities, and freelance projects where I
            can contribute to real products and continue growing as an
            engineer.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-7 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row lg:justify-start"
        >
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.04, y: -2 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            className="w-full sm:w-auto"
          >
            <HashLink
              itemProp="url"
              smooth
              to="/#contact"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-bold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:w-auto"
            >
              Get in Touch
              <motion.span
                animate={
                  shouldReduceMotion ? {} : { x: [0, 4, 0] }
                }
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </HashLink>
          </motion.div>

          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.04, y: -2 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            className="w-full sm:w-auto"
          >
            <HashLink
              itemProp="url"
              smooth
              to="/#projects"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-blue-500/20 bg-white/90 px-6 py-3 font-bold text-blue-600 shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:w-auto"
            >
              View My Work
              <motion.span
                animate={
                  shouldReduceMotion ? {} : { x: [0, 4, 0] }
                }
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
              
            </HashLink>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: shouldReduceMotion ? 0 : 40,
          scale: shouldReduceMotion ? 1 : 0.94,
        }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.8,
          delay: shouldReduceMotion ? 0 : 0.25,
          ease: "easeOut",
        }}
        className="relative z-10 mx-auto mt-4 shrink-0 sm:mt-6 lg:mx-0 lg:mt-0 lg:mr-4"
      >
        <motion.div
          aria-hidden="true"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.08, 1],
                  opacity: [0.35, 0.6, 0.35],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -inset-3 rounded-full bg-gradient-to-tr from-blue-500/40 via-cyan-400/30 to-purple-500/30 blur-xl"
        />

        <motion.div
          animate={
            shouldReduceMotion ? {} : { y: [0, -8, 0] }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <img
            itemProp="image"
            src="/assets/images/Amanuel.webp"
            alt="Amanuel Amare, software engineering student and developer"
            width="288"
            height="288"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="relative aspect-square w-40 rounded-full border-4 border-white object-cover shadow-2xl shadow-blue-900/20 sm:w-52 md:w-60 lg:w-72"
          />

          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : { y: [0, -4, 0], rotate: [0, 4, 0] }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-3 -left-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/70 bg-white shadow-lg sm:bottom-5 sm:-left-4 sm:h-12 sm:w-12"
          >
            <FaCode className="text-lg text-blue-600 sm:text-xl" />
          </motion.div>

          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : { y: [0, 4, 0], rotate: [0, -5, 0] }
            }
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/70 bg-white shadow-lg sm:-right-3 sm:top-5 sm:h-12 sm:w-12"
          >
            <FaReact className="text-xl text-sky-500 sm:text-2xl" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
