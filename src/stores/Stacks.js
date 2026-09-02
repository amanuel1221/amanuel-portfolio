import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaEnvelope,
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
  SiCloudinary,
  SiPwa,
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
      {
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
    ],
    note: "Building modern, responsive, and component-based user interfaces",
  },

  {
    title: "Backend & Database",
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
        icon: SiPostman,
        name: "Postman",
      },
    ],
    note: "Developing REST APIs, authentication, database systems, and server-side applications",
  },

  {
    title: "Testing & Integration",
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
        icon: SiCloudinary,
        name: "Cloudinary",
      },
      {
        icon: FaEnvelope,
        name: "Nodemailer",
      },
    ],
    note: "Testing applications and integrating media, email, and third-party services",
  },

  {
    title: "Tools & Development",
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
    note: "Using modern development tools, version control, design workflows, and fast build systems",
  },
];

export default Stacks;