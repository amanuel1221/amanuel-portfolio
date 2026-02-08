import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Service from "../components/Service";
import { MemoryRouter } from "react-router-dom";
import { title } from "framer-motion/client";
vi.mock("../stores/Services", () => ({
  default: [
    {
      title: "Web Development",
      description: "Building responsive and modern web applications.",
      icon: "web-dev-icon.png",
    },
    {
      title: "UI/UX Design",
      description: "Creating user-friendly and visually appealing designs.",
      icon: "ui-ux-icon.png",
    },
    {
      title: "Performance Optimization",
      description: "Improving website speed and responsiveness.",
      icon: "performance-icon.png",
    },
  ],
}));
test("renders the service section with correct header and description", () => {
  render(
    <MemoryRouter>
      <Service />
    </MemoryRouter>,
  );
  const header = screen.getByRole("heading", { name: "What I Can Help With" });
  const description = screen.getByText(
    "Turn your ideas into reality with clean, modern, and scalable frontend solutions.",
  );
  expect(header).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
test("renders the correct number of service cards with appropriate content", () => {
  render(
    <MemoryRouter>
      <Service />
    </MemoryRouter>,
  );
  const serviceCards = screen.getAllByRole("heading", { level: 2 });
  expect(serviceCards).toHaveLength(3);
  expect(screen.getByText("Web Development")).toBeInTheDocument();
  expect(
    screen.getByText("Building responsive and modern web applications."),
  ).toBeInTheDocument();
  expect(screen.getByText("UI/UX Design")).toBeInTheDocument();
  expect(
    screen.getByText("Creating user-friendly and visually appealing designs."),
  ).toBeInTheDocument();
  expect(screen.getByText("Performance Optimization")).toBeInTheDocument();
  expect(screen.getByText("Improving website speed and responsiveness.")).toBeInTheDocument();
});
test("renders service icons with correct alt text", () => {
  render(
    <MemoryRouter>
      <Service />
    </MemoryRouter>
  );
  const icons = screen.getAllByRole("img");
  expect(icons).toHaveLength(3);
  expect(screen.getByAltText("Web Development")).toBeInTheDocument();
  expect(screen.getByAltText("UI/UX Design")).toBeInTheDocument();
  expect(screen.getByAltText("Performance Optimization")).toBeInTheDocument();
});
