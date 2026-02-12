import {render,screen} from "@testing-library/react";
import {test,expect} from "vitest";
import { MemoryRouter } from "react-router-dom";
import Projects from "../components/Projects";
import userEvent from "@testing-library/user-event";
import { view } from "framer-motion/client";

vi.mock("../stores/ProjectsInfo",()=>({
    default: [
  {
    title: "E-commerce Platform",
    description:
      "End-to-end web application development using modern technologies. Built scalable and responsive features.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    stacks: ["React", "HTML", "CSS", "Vitest"],
    livedemo: "https://amanuel.com",
    githubdemo: "https://github.com/amanuel1221",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and experience with modern UI and animations.End-to-end web application development using modern technologies. Built scalable and responsive features. ",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    stacks: ["React", "Tailwind", "CSS"],
    livedemo: "https://amanuelamare.com",
    githubdemo: "https://github.com/amanuel1221",
  },
  {
    title: "Dashboard App",
    description:
      "Admin dashboard with charts, authentication, and reusable components.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    stacks: ["React", "CSS", "Vitest"],
    livedemo: "https://amanuel.com",
    githubdemo: "https://github.com/amanuel1221",
  },
  {
    title: "Task Manager",
    description:
      "Task management app with CRUD operations and clean UI.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    stacks: ["React", "HTML", "CSS"],
    livedemo: "https://amanuel.com",
    githubdemo: "https://github.com/amanuel1221",
  },
  {
    title: "Blog Platform",
    description:
      "Modern blog system with responsive layout and clean typography.",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    stacks: ["React", "CSS"],
    livedemo: "https://amanuel.com",
    githubdemo: "https://github.com/amanuel1221",
  },
  {
    title: "API Tester",
    description:
      "Simple API testing tool for frontend developers.",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
    stacks: ["React", "Vitest","Html5"],
    livedemo: "https://amanuel.com",
    githubdemo: "https://github.com/amanuel1221",
  }
]

}));

test("chck the renders of project section and existance of texts",()=>{
    render(<MemoryRouter>
        <Projects/>
    </MemoryRouter>);

    const section=screen.getByText("Featured Projects");
    expect(section).toBeInTheDocument();
    const sectionnote=screen.getByText("A selection of projects that showcase my skills and experience");
    expect(sectionnote).toBeInTheDocument();
    const title1=screen.getByText("E-commerce Platform");
    const title2=screen.getByText("Dashboard App");
    const title3=screen.getByText("Task Manager");
    const title4=screen.getByText("Portfolio Website")
    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
    expect(title3).toBeInTheDocument();
    expect(title4).toBeInTheDocument();

});

test("check initially 4 cards are exist and view more button exist",()=>{
    render(<MemoryRouter>
        <Projects/>
    </MemoryRouter>);
    const cards=screen.getAllByRole("img");
    expect(cards).to.toHaveLength(4);
    const viewmore=screen.getAllByRole("button",{name:/View More/i});
    expect(viewmore).toHaveLength(2);


});
test("test the functionality of view more increasing by 2 and test teh prev button to check 4 cards exist", async()=>{
const user=userEvent.setup();
render(<MemoryRouter>
    <Projects/>
</MemoryRouter>);

const cards=screen.getAllByRole("img");
expect(cards).not.toHaveLength(6);
const viewmore = screen.getAllByRole("button", {
    name: /view more/i,
  });
  await user.click(viewmore[1]); 
  const cardsAfter = await screen.findAllByRole("img");
  expect(cardsAfter).toHaveLength(6);
  const prev=screen.getByRole("button",{name:/Prev/i});
  expect(prev).toBeInTheDocument();
  await user.click(prev);
const cardsafterprev = await screen.findAllByRole("img");
expect(cardsafterprev).toHaveLength(4);
const next=screen.getByRole("button",{name:/Next/i});
expect(next).toBeInTheDocument();
await user.click(next);
const cardsafternext= await screen.findAllByRole("img");
expect(cardsafternext).toHaveLength(6);


});
test("test the accessebitlity of the images with thier titles",()=>{
    render(<MemoryRouter>
        <Projects/>
    </MemoryRouter>);
    const title1=screen.getByAltText("E-commerce Platform");
    const title2=screen.getByAltText("Dashboard App");
    const title3=screen.getByAltText("Task Manager");
    const title4=screen.getByAltText("Portfolio Website")
    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
    expect(title3).toBeInTheDocument();
    expect(title4).toBeInTheDocument();
  

});
test("Test the existance of github and demo links and check have links of paths",()=>{
    render(<MemoryRouter>
        <Projects/>
    </MemoryRouter>);
    const livedemo=screen.getAllByRole("link",{name:/🔗 Live Demo/i});
    const githubdemo=screen.getAllByRole("link",{name:/Github/i});
    expect(githubdemo[0]).toBeInTheDocument();
    expect(livedemo[0]).toBeInTheDocument();
    expect(livedemo[0]).toHaveAttribute("href","https://amanuel.com");
    expect(githubdemo[0]).toHaveAttribute("href","https://github.com/amanuel1221");
    

});



  

