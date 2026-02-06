import { screen,render } from "@testing-library/react";
import {test,expect} from "vitest";
import  userEvent from "@testing-library/user-event";
import HeroSection from "../components/HeroSection";
import { MemoryRouter } from "react-router-dom";
test("test the existance of image or amanuel photo and the available freelance work button", ()=>{

render(
    <MemoryRouter>
    <HeroSection/>
    </MemoryRouter>
);
const btnwork=screen.getByRole("button", {name:"Available for freelance Work"});
expect(btnwork).toBeInTheDocument();
const photo=screen.getByAltText("amanuel photo");
expect(photo).toBeInTheDocument();


}
)
test("test the functionaity of Get In touch and View My work buttons",()=>{
const user=userEvent.setup();
render(<MemoryRouter>
    <HeroSection/>
</MemoryRouter>);

const btncontact=screen.getByRole("link",{name:"Get in Touch →"});
const btnwork=screen.getByRole("link",{name:"View My Work →"});
expect(btncontact).toBeInTheDocument();
expect(btnwork).toBeInTheDocument();
expect(btnwork).toHaveAttribute("href","/#projects");


 expect(btncontact).toHaveAttribute("href", "/#contact");


})
