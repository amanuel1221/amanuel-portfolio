import { screen, render } from "@testing-library/react";
import { test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import HeroSection from "../components/HeroSection";
import { MemoryRouter } from "react-router-dom";
import { i } from "framer-motion/client";
test("test the existance of image or amanuel photo and the available freelance work button", () => {
  render(
    <MemoryRouter>
      <HeroSection />
    </MemoryRouter>,
  );
  const btnwork = screen.getByText( 
  "Available for Freelance Work",
  );

  expect(btnwork).toBeInTheDocument();
  expect(screen.getByText("Hi, I am Amanuel Amare")).toBeInTheDocument();
  expect(screen.getByText("Front End Web Developer")).toBeInTheDocument();
      
  const photo = screen.getByAltText("Amanuel photo");
  expect(photo).toBeInTheDocument();
});
test("test the functionaity of Get In touch and View My work buttons", () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <HeroSection />
    </MemoryRouter>,
  );

  const btncontact = screen.getByRole("link", { name: "Get in Touch →" });
  const btnwork = screen.getByRole("link", { name: "View My Work →" });
  expect(btncontact).toBeInTheDocument();
  expect(btnwork).toBeInTheDocument();
  expect(btnwork).toHaveAttribute("href", "/#projects");

  expect(btncontact).toHaveAttribute("href", "/#contact");
});
