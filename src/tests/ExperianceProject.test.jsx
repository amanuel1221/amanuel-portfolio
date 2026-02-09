import {render,screen} from "@testing-library/react";
import {test,expect} from "vitest";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import EducationalExperience from "../components/Experiance";

vi.mock("../stores/ProjectExperiance",()=>({
    default:[
        {
    title: "Frontend Developer — Personal Projects",
    date: "2020 - Present",
    place: "Personal Projects",
    status: "Ongoing",
    image: "none",
    descriptions: [
      "Built responsive web interfaces using HTML, CSS, Tailwind CSS, JavaScript, and React",
      "Converted Figma designs into pixel-perfect UI",
      "Practiced component-based architecture and clean code",
      "Used Git & GitHub for version control",
    ],
  },
  {
    title: "Frontend Developer — Practice & Learning Projects",
    date: "2019 - 2020",
    place: "Personal Practice",
    status: "Ongoing",
    image: "none",
    descriptions: [
      "Built and maintained multiple small-scale web applications",
      "Improved understanding of React and modern JavaScript concepts",
      "Practiced responsive design and accessibility best practices",
    ],
  },
  {
    title: "Hackathon Participant — Cursor Hackathons",
    date: "22-03-2023 - 24-03-2023",
    place: "Bahir Dar University Hackathon",
    status: "Certified",
    image: "/assets/images/cursor.jpg",
    descriptions: [
      "Participated in a 48-hour hackathon focused on building a web application",
      "Collaborated with a team to develop an MVP using React and Tailwind CSS",
      "Gained experience working under tight deadlines and delivering a functional product",
    ],
  },
    ]
}));

test(" test the components are rendered correctly and have texts data from mocks",()=>{
    render(<MemoryRouter>
        <EducationalExperience/>
    
    </MemoryRouter>);
    const title1=screen.getByText("Hackathon Participant — Cursor Hackathons");
    expect(title1).toBeInTheDocument();
    const title2=screen.getByText("Frontend Developer — Practice & Learning Projects");
    expect(title2).toBeInTheDocument();
});
test("the accessibility of certificate buttons in the project experience section", () => {
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
  const image = screen.queryByAltText(
    "BSc in Software Engineering certificate",
  );
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
  const button1 = screen.getAllByText(/certified/i)[0];
  expect(button1).toBeInTheDocument();
  await user.click(button1);
  const image = screen.getByAltText("Hackathon Participant — Cursor Hackathons");
  expect(image).toBeInTheDocument();
  const button2 = screen.getByText("Back to details");
  expect(button2).toBeInTheDocument();
  await user.click(button2);
  expect(
    screen.queryByRole("Hackathon Participant — Cursor Hackathons"),
  ).not.toBeInTheDocument();
});

  
