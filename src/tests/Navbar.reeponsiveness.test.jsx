import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

test("checking the renders of navbar links appearing correctly", async () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>,
  );

  const homeLink = screen.getByText("Home");
  const aboutLink = screen.getByText("About");
  const skillsLink = screen.getByText("Skills");
  const projectsLink = screen.getByText("Projects");
  const contactLink = screen.getByText("Contact");
  const getInTouchButton = screen.getByText("Get in Touch →");

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(skillsLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
  expect(getInTouchButton).toBeInTheDocument();
});
test("checking the hamburger menu functionality on smaller screens", async () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  const user = userEvent.setup();
  const menuIcon = screen.getByLabelText("Open-menu");
  await user.click(menuIcon);

  const homeLink = await screen.findAllByText("Home");
  const aboutLink = await screen.findAllByText("About");
  const skillsLink = await screen.findAllByText("Skills");
  const projectsLink = await screen.findAllByText("Projects");
  const contactLink = await screen.findAllByText("Contact");
  const getInTouchButton = await screen.findAllByText("Get in Touch →");

  const closeIcon = screen.getByLabelText("Close-menu");
  expect(closeIcon).toBeInTheDocument();
  await user.click(closeIcon);
  expect(closeIcon).not.toBeInTheDocument();
  expect(menuIcon).toBeInTheDocument();
});

test("test navbar links render with correct paths", () => {
  render(
    <MemoryRouter>
      
      <NavBar />
    </MemoryRouter>
  );
  const homeLink = screen.getByRole("link", { name: "Home" });
  const aboutLink = screen.getByRole("link", { name: "About" });
  const skillsLink = screen.getByRole("link", { name: "Skills" });
  const projectsLink = screen.getByRole("link", { name: "Projects" });
  const contactLink = screen.getByRole("link", { name: "Contact" });
  const getInTouchButton = screen.getByRole("link", { name: /Get in Touch/i });
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(skillsLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
  expect(getInTouchButton).toBeInTheDocument();
  expect(homeLink).toHaveAttribute("href", "/#home");
  expect(aboutLink).toHaveAttribute("href", "/#about");
  expect(skillsLink).toHaveAttribute("href", "/#skills");
  expect(projectsLink).toHaveAttribute("href", "/#projects");
  expect(contactLink).toHaveAttribute("href", "/#contact");
  expect(getInTouchButton).toHaveAttribute("href", "/#contact");
});
