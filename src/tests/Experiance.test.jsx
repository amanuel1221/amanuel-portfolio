import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import EducationalExperience from "../components/Experiance";
import { MemoryRouter } from "react-router-dom";
import { i } from "framer-motion/client";
import userEvent from "@testing-library/user-event";

vi.mock("../stores/EduExperiance", () => ({
  default: [
     {
    title: "ALX Software Engineering Program",
    note: "Frontend Development Track",
    date: "2023 - 2024",
    place: "online course at ALX Africa",
    status: "certified",
    image: "/assets/images/frontend.png",
    descriptions: [
      "Frontend development using HTML, CSS, JavaScript, Tailwind CSS, and React",
      "Component-based architecture and modern UI development",
      "Testing fundamentals using Jest",
      "Version control with Git & GitHub",
      "Built multiple real-world frontend projects",
    ],
  },

  {
    title: "ALX Professional Foundations Program",
    note: "Foundations learn the skill of tech jobs",
    date: "2022 - 2023",
    place: "online course at ALX Africa",
    status: "certified",
    image: "/assets/images/foundation.jpg",
    descriptions: [
      "Professional communication and teamwork in tech environments",
      "Problem-solving and critical thinking",
      "Time management, ownership, and remote collaboration",
      "Career readiness for modern tech roles",
    ],
  },

  {
    title: " Ethiocoder (Udacity – UAE Sponsored Program)",
    note: "Fundamental Web Development & Artificial Intelligence",
    date: "2021 - 2022",
    place: "online course at Udacity",
    status: "certified",
    image: "/assets/images/udacity.png",
    descriptions: [
      "Web development fundamentals using HTML, CSS, and JavaScript",
      "Introduction to Artificial Intelligence concepts",
      "Logical thinking and problem-solving skills",
      "Completed Udacity coursework under UAE-sponsored program",
    ],
  },

  {
    title: "BSc in Software Engineering",
    note: "Bachelor's degree in Software Engineering",
    date: "2025-2029(ongoing)",
    place: "Bahir Dar University, Ethiopia",
    status: "ongoing",
    image: "none",
    descriptions: [
      "Core software engineering fundamentals",
      "Programming methodology and data structures",
      "Operating Systems concepts",
      "Strong academic foundation in computing and software design",
    ],
  },
    ]}));

test("renders educational experience section with correct content", () => {
  render(
    <MemoryRouter>
      <EducationalExperience />
    </MemoryRouter>,
  );

  const sectionDescription = screen.getByText(
    "My educational journey and certifications",
  );
  expect(sectionDescription).toBeInTheDocument();
});

test("The existance of Mocked data from EduExperiance store is rendered correctly", () => {
  render(
    <MemoryRouter>
      <EducationalExperience />
    </MemoryRouter>,
  );    
    const title1 = screen.getByText("ALX Software Engineering Program");
    const title2 = screen.getByText("ALX Professional Foundations Program");
    const title3 = screen.getByText("Ethiocoder (Udacity – UAE Sponsored Program)");
    const title4 = screen.getByText("BSc in Software Engineering");
    expect(title1).toBeInTheDocument();

    expect(title2).toBeInTheDocument();
    expect(title3).toBeInTheDocument();
    expect(title4).toBeInTheDocument();
}
);
test("the accessibility of certificate buttons in the educational experience section", () => {
  render(
    <MemoryRouter>
        <EducationalExperience />
    </MemoryRouter>,
  );
  const button1 = screen.getAllByText(/certified/i)[0];    
    expect(button1).toBeInTheDocument();

});

test("the the the image of certified is not rendered when the image is none and exist when the image is not none", () => {   
    render( 
        <MemoryRouter>
            <EducationalExperience />
        </MemoryRouter>,
    );
    const image = screen.queryByAltText("BSc in Software Engineering certificate");
    expect(image).not.toBeInTheDocument();
    const image1 = screen.getByAltText("ALX Professional Foundations Program");
    expect(image1).toBeInTheDocument();

});
test("test the certified button functionality to show and hide the certificate image", async () => {
    const user = userEvent.setup();
    render(
        <MemoryRouter>
            <EducationalExperience />
        </MemoryRouter>,
    );
    const button1 = screen.getAllByText(/certified/i)[1];
    expect(button1).toBeInTheDocument();
    await user.click(button1);
    const image = screen.getByAltText("ALX Professional Foundations Program");
    expect(image).toBeInTheDocument();
    const button2=screen.getByText("Back to details");
    expect(button2).toBeInTheDocument();
    await user.click(button2);
    expect(screen.queryByRole("ALX Professional Foundations Program")).not.toBeInTheDocument();
});