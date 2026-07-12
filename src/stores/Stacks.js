import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiVitest,
  SiPostman,
  SiVite,
  SiTestinglibrary,
} from "react-icons/si";


const Stacks = [
  {
    title: "Frontend Development",
    stacks: [
      {
        icon: FaReact,
        name: "React",
      },
      {
        icon: SiJavascript,
        name: "JavaScript (ES6+)",
      },
      {
        icon: FaHtml5,
        name: "HTML5",
      },
      {
        icon: FaCss3Alt,
        name: "CSS3",
      },
    ],
    note: "Building modern, responsive, component-based user interfaces",
  },

  {
    title: "MERN Stack Development",
    stacks: [
      {
        icon: FaNodeJs,
        name: "Node.js",
      },
      {
        icon: SiExpress,
        name: "Express.js",
      },
      {
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
    ],
    note: "Developing REST APIs, authentication, and full-stack applications",
  },

  {
    title: "Testing & Development Quality",
    stacks: [
      {
        icon: SiVitest,
        name: "Vitest",
      },
      {
        icon: SiTestinglibrary,
        name: "React Testing Library",
      },
      {
        icon: SiPostman,
        name: "Postman",
      },
    ],
    note: "Testing components, APIs, and improving application reliability",
  },

  {
    title: "Tools & Workflow",
    stacks: [
      {
        icon: FaGitAlt,
        name: "Git",
      },
      {
        icon: FaGithub,
        name: "GitHub",
      },
      {
        icon: FaFigma,
        name: "Figma",
      },
      {
        icon: SiVite,
        name: "Vite",
      },
    ],
    note: "Using modern development tools, version control, and design workflows",
  },
];

export default Stacks;