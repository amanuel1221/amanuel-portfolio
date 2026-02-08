import { screen, render } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import AboutMe from "../components/AboutMe";

vi.mock("../stores/Offer", () => ({
  default: [
    {
      icon: "icon1.png",
      title: "Frontend Development",
      description: "Building responsive web interfaces with React.",
    },
    {
      icon: "icon2.png",
      title: "Real Projects",
      description: "Developing and maintaining real-world applications.",
    },
    {
      icon: "icon3.png",
      title: "Continous Learning",
      description:
        "Staying up-to-date with the latest technologies and best practices.",
    },
  ],
}));

test(" the mock data from Offer store is rendered correctly", () => {
  render(
    <MemoryRouter>
      <AboutMe />
    </MemoryRouter>,
  );
  const title1 = screen.getByText("Frontend Development");
  const title2 = screen.getByText("Real Projects");
  const title3 = screen.getByText("Continous Learning");
  expect(title1).toBeInTheDocument();
  expect(title2).toBeInTheDocument();
  expect(title3).toBeInTheDocument();
});


test(" the about me section contains the correct information", () => {
  render(
    <MemoryRouter>  
    <AboutMe />
    </MemoryRouter>,
  );
    const listItem1 = screen.getByText("Software Engineering student at Bahir Dar University.");
    const listItem2 = screen.getByText("Frontend-focused with React, component-based UI, and routing");
    const listItem3 = screen.getByText("Hackathon experience building MVPs under tight deadlines");
    const listItem4 = screen.getByText("Continuous learner (ALX, FreeCodeCamp, self-study)");
    expect(listItem1).toBeInTheDocument();
    expect(listItem2).toBeInTheDocument();
    expect(listItem3).toBeInTheDocument();
    expect(listItem4).toBeInTheDocument();
});
test(" the accessibility of image icons in the about me section", () => {
  render(
    <MemoryRouter>
    <AboutMe />
    </MemoryRouter>,
  );
    const icon1 = screen.getByAltText("Frontend Development");
    const icon2 = screen.getByAltText("Real Projects");
    const icon3 = screen.getByAltText("Continous Learning");
    expect(icon1).toBeInTheDocument();
    expect(icon2).toBeInTheDocument();
    expect(icon3).toBeInTheDocument();
});
test(" the existance of cards in the about me section", () => {
    render( 
    <MemoryRouter>
    <AboutMe />
    </MemoryRouter>,
  );
    const card1 = screen.getByText("Building responsive web interfaces with React.");
    const card2 = screen.getByText("Developing and maintaining real-world applications.");
    const card3 = screen.getByText("Staying up-to-date with the latest technologies and best practices.");
    expect(card1).toBeInTheDocument();
    expect(card2).toBeInTheDocument();
    expect(card3).toBeInTheDocument();
});
