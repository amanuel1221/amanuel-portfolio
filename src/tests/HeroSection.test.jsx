import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import HeroSection from "../components/HeroSection";

test("renders hero section correctly", () => {
  render(
    <MemoryRouter>
      <HeroSection />
    </MemoryRouter>
  );

  expect(
    screen.getByText("Available for Freelance Work")
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", {
      name: /hi, i am amanuel amare/i,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByText(
      /mern stack & frontend developer \| react performance specialist/i
    )
  ).toBeInTheDocument();

  expect(
    screen.getByText(/i specialize in building modern/i)
  ).toBeInTheDocument();

  expect(
    screen.getByText(/i'm passionate about continuous learning/i)
  ).toBeInTheDocument();

  expect(
    screen.getByRole("img", {
      name: /amanuel amare - react developer portfolio photo/i,
    })
  ).toBeInTheDocument();
});

test("renders hero navigation links correctly", () => {
  render(
    <MemoryRouter>
      <HeroSection />
    </MemoryRouter>
  );

  const contactLink = screen.getByRole("link", {
    name: /get in touch/i,
  });

  const workLink = screen.getByRole("link", {
    name: /view my work/i,
  });

  expect(contactLink).toBeInTheDocument();
  expect(workLink).toBeInTheDocument();

  expect(contactLink).toHaveAttribute("href", "/#contact");
  expect(workLink).toHaveAttribute("href", "/#projects");
});