import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { FaReact, FaServer, FaCode, FaLaptopCode } from "react-icons/fa";

import Service from "../components/Service";

vi.mock("../stores/Services", () => ({
  default: [
    {
      title: "Web Development",
      description: "Building responsive and modern web applications.",
      icon: FaCode,
    },
    {
      title: "UI/UX Design",
      description: "Creating user-friendly and visually appealing designs.",
      icon: FaReact,
    },
    {
      title: "Performance Optimization",
      description: "Improving website speed and responsiveness.",
      icon: FaLaptopCode,
    },
    {
      title: "Backend Development",
      description: "Building scalable REST APIs with Node.js and Express.",
      icon: FaServer,
    },
  ],
}));

describe("Service Component", () => {
  test("renders section heading and description", () => {
    render(
      <MemoryRouter>
        <Service />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /what i can help with/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /i build modern web applications and digital experiences/i
      )
    ).toBeInTheDocument();
  });

  test("renders all service cards", () => {
    render(
      <MemoryRouter>
        <Service />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Web Development")
    ).toBeInTheDocument();

    expect(
      screen.getByText("UI/UX Design")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Performance Optimization")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Backend Development")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Building responsive and modern web applications."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Creating user-friendly and visually appealing designs."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Improving website speed and responsiveness."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Building scalable REST APIs with Node.js and Express."
      )
    ).toBeInTheDocument();
  });

  test("renders exactly four service cards", () => {
    render(
      <MemoryRouter>
        <Service />
      </MemoryRouter>
    );

    const headings = screen.getAllByRole("heading", {
      level: 2,
    });

    expect(headings).toHaveLength(4);
  });

  test("renders CTA button", () => {
    render(
      <MemoryRouter>
        <Service />
      </MemoryRouter>
    );

    const button = screen.getByRole("link", {
      name: /let's work together/i,
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "#contact");
  });
});