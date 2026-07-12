import { render, screen } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { FaReact, FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiVitest,
  SiTestinglibrary,
  SiPostman,
  SiFigma,
} from "react-icons/si";

import Skills from "../components/Skills";

vi.mock("../stores/Stacks", () => ({
  default: [
    {
      title: "Frontend Development",
      stacks: [
        { icon: FaReact, name: "React" },
        { icon: SiJavascript, name: "JavaScript (ES6+)" },
        { icon: SiHtml5, name: "HTML5" },
        { icon: SiCss3, name: "CSS3" },
      ],
      note: "Building modern, responsive, component-based user interfaces",
    },
    {
      title: "MERN Stack Development",
      stacks: [
        { icon: FaNodeJs, name: "Node.js" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
      ],
      note: "Developing REST APIs and full-stack applications",
    },
    {
      title: "Testing & Development Quality",
      stacks: [
        { icon: SiVitest, name: "Vitest" },
        { icon: SiTestinglibrary, name: "React Testing Library" },
        { icon: SiPostman, name: "Postman" },
      ],
      note: "Testing components and APIs",
    },
    {
      title: "Tools & Workflow",
      stacks: [
        { icon: FaGitAlt, name: "Git" },
        { icon: FaGithub, name: "GitHub" },
        { icon: SiFigma, name: "Figma" },
      ],
      note: "Modern development workflow",
    },
  ],
}));

test("renders section heading", () => {
  render(
    <MemoryRouter>
      <Skills />
    </MemoryRouter>
  );

  expect(screen.getByText("Tech Stack")).toBeInTheDocument();
});

test("renders all stack titles", () => {
  render(
    <MemoryRouter>
      <Skills />
    </MemoryRouter>
  );

  expect(screen.getByText("Frontend Development")).toBeInTheDocument();
  expect(screen.getByText("MERN Stack Development")).toBeInTheDocument();
  expect(
    screen.getByText("Testing & Development Quality")
  ).toBeInTheDocument();
  expect(screen.getByText("Tools & Workflow")).toBeInTheDocument();
});

test("renders technologies", () => {
  render(
    <MemoryRouter>
      <Skills />
    </MemoryRouter>
  );

  expect(screen.getByText("React")).toBeInTheDocument();
  expect(screen.getByText("JavaScript (ES6+)")).toBeInTheDocument();
  expect(screen.getByText("HTML5")).toBeInTheDocument();
  expect(screen.getByText("CSS3")).toBeInTheDocument();

  expect(screen.getByText("Node.js")).toBeInTheDocument();
  expect(screen.getByText("Tailwind CSS")).toBeInTheDocument();

  expect(screen.getByText("Vitest")).toBeInTheDocument();
  expect(screen.getByText("React Testing Library")).toBeInTheDocument();
  expect(screen.getByText("Postman")).toBeInTheDocument();

  expect(screen.getByText("Git")).toBeInTheDocument();
  expect(screen.getByText("GitHub")).toBeInTheDocument();
  expect(screen.getByText("Figma")).toBeInTheDocument();
});

test("renders notes", () => {
  render(
    <MemoryRouter>
      <Skills />
    </MemoryRouter>
  );

  expect(
    screen.getByText(
      "Building modern, responsive, component-based user interfaces"
    )
  ).toBeInTheDocument();

  expect(
    screen.getByText("Developing REST APIs and full-stack applications")
  ).toBeInTheDocument();

  expect(
    screen.getByText("Testing components and APIs")
  ).toBeInTheDocument();

  expect(
    screen.getByText("Modern development workflow")
  ).toBeInTheDocument();
});

test("renders CTA button", () => {
  render(
    <MemoryRouter>
      <Skills />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("link", { name: /view my projects/i })
  ).toBeInTheDocument();
});