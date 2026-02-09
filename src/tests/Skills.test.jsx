import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Skills from "../components/Skills";

vi.mock("../stores/Stacks", () => ({
  default: [
    {
      title: "FrontEnd",
      stacks: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
          name: "React",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
          name: "JavaScript (ES6)",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
          name: "HTML5",
        },
      ],
      note: "",
    },
    {
      title: "Styling",
      stacks: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
          name: "CSS3",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
          name: "Tailwind CSS",
        },
      ],
      note: "Used for styling and responsive designs",
    },
    {
      title: "Testing",
      stacks: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
          name: "Vitest",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/5968/5968713.png",
          name: "React Testing Library",
        },
      ],
      note: "Used for basic component and interaction testing",
    },
    {
      title: "Tools",
      stacks: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png",
          name: "Git",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/733/733609.png",
          name: "GitHub",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
          name: "Figma",
        },
      ],
      note: "",
    },
  ],
}));

test("test the rendering of Skills component and titles correctly", () => {
  render(
    <MemoryRouter>
      <Skills />
    </MemoryRouter>,
  );
  const header = screen.getByText("Tech Stack");
  expect(header).toBeInTheDocument();
  const title1 = screen.getByText("FrontEnd");

  const title2 = screen.getByText("Testing");
  const title3 = screen.getByText("Styling");
  const title4 = screen.getByText("Tools");
  expect(title1).toBeInTheDocument();
  expect(title2).toBeInTheDocument();
  expect(title3).toBeInTheDocument();
  expect(title4).toBeInTheDocument();
});
test("test the accessebility of image icons", () => {
  render(
    <MemoryRouter>
      <Skills />
    </MemoryRouter>,
  );
  const icon1 = screen.getByAltText("Figma");
  const icon2 = screen.getByAltText("GitHub");
  const icon3 = screen.getByAltText("Git");
  const icon4 = screen.getByAltText("Tailwind CSS");
  const icon5 = screen.getByAltText("React Testing Library");
  const icon6 = screen.getByAltText("Vitest");
  const icon7 = screen.getByAltText("HTML5");
  const icon8 = screen.getByAltText("JavaScript (ES6)");
  const icon9 = screen.getByAltText("React");

  expect(icon1).toBeInTheDocument();
  expect(icon2).toBeInTheDocument();
  expect(icon3).toBeInTheDocument();
  expect(icon4).toBeInTheDocument();
  expect(icon5).toBeInTheDocument();
  expect(icon6).toBeInTheDocument();
  expect(icon7).toBeInTheDocument();
  expect(icon8).toBeInTheDocument();
  expect(icon9).toBeInTheDocument();
});
test("test the rendering of stack notes", () => {
  render(
    <MemoryRouter>
      <Skills />
    </MemoryRouter>,
  );
  const note1 = screen.getByText("Used for styling and responsive designs");
  const note2 = screen.getByText(
    "Used for basic component and interaction testing",
  );
  expect(note1).toBeInTheDocument();
  expect(note2).toBeInTheDocument();
});
