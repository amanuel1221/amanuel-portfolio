import {
  FaCode,
  FaReact,
  FaCloud,
  FaEnvelope,
} from "react-icons/fa";

const Services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building complete web applications with MongoDB, Express.js, React, and Node.js, including REST APIs, authentication, database integration, and scalable application architecture.",
    icon: FaCode,
  },
  {
    title: "Frontend & UI Development",
    description:
      "Creating modern, responsive interfaces with React and Tailwind CSS, transforming Figma designs into clean reusable components while focusing on accessibility, performance, and user experience.",
    icon: FaReact,
  },
  {
    title: "Cloud & Media Integration",
    description:
      "Integrating Cloudinary and modern cloud services for secure image and media uploads, optimized delivery, transformations, and efficient media management, including PWA and offline capabilities.",
    icon: FaCloud,
  },
  {
    title: "API & Email Integration",
    description:
      "Connecting applications with external APIs and email services for contact forms, welcome emails, notifications, automated communication, and other third-party integrations.",
    icon: FaEnvelope,
  },
];

export default Services;