import {render,screen} from "@testing-library/react";
import {test,expect} from "vitest";
import { MemoryRouter } from "react-router-dom";
import Footer from "../components/Footer";

test("Test the renders of footer and existance of texts",()=>{
render(<MemoryRouter>
    <Footer/>
</MemoryRouter>);
expect(screen.getByText("Junior Frontend Developer • React & Tailwind CSS")).toBeInTheDocument();
expect(screen.getByText("© 2026 Amanuel Amare. All rights reserved.")).toBeInTheDocument();


});
test("Test the accessibility and  existance of the icons and logos ",()=>{

    render(<MemoryRouter>
        <Footer/>
    </MemoryRouter>);
const image=screen.getByAltText("logo");
expect(image).toBeInTheDocument();
const github=screen.getByRole("link",{name:/github/i});
const figma=screen.getByRole("link",{name:/figma/i});
const facebook=screen.getByRole("link",{name:/facebook/i});
const linkedin=screen.getByRole("link",{name:/linkedin/i});
const twitter=screen.getByRole("link",{name:/twitter/i});
const filetext=screen.getByRole("link",{name:/substack profile/i });
const msg=screen.getByRole("link",{name:/Whatsapp profile/i});
const mail=screen.getByRole("link",{name:/Email/i});
expect(github).toBeInTheDocument();
expect(figma).toBeInTheDocument();
expect(facebook).toBeInTheDocument();
expect(linkedin).toBeInTheDocument();
expect(twitter).toBeInTheDocument();
expect(filetext).toBeInTheDocument();
expect(msg).toBeInTheDocument();
expect(mail).toBeInTheDocument();


});

test("Test the existance of paths and opened in the new tab",()=>{
    render(<MemoryRouter>
        <Footer/>
    </MemoryRouter>);
const github=screen.getByRole("link",{name:/github/i});
const figma=screen.getByRole("link",{name:/figma/i});
const facebook=screen.getByRole("link",{name:/facebook/i});
const linkedin=screen.getByRole("link",{name:/linkedin/i});
const twitter=screen.getByRole("link",{name:/twitter/i});
const filetext=screen.getByRole("link",{name:/substack profile/i });
const msg=screen.getByRole("link",{name:/Whatsapp profile/i});
const mail=screen.getByRole("link",{name:/Email/i});

expect(github).toHaveAttribute("href","https://github.com/amanuel1221");
expect(figma).toHaveAttribute("href","https://www.figma.com/files/team/1527017293903765142/user/1527017290758443585?fuid=1527017290758443585");
expect(facebook).toHaveAttribute("href","https://facebook.com/manuell211");
expect(linkedin).toHaveAttribute("href","https://www.linkedin.com/in/your-username");
expect(twitter).toHaveAttribute("href","https://x.com/AmanuelAma66386");
expect(filetext).toHaveAttribute("href","https://substack.com/@amanuelamare");
expect(msg).toHaveAttribute("href","https://wa.me/251921337037");
expect(mail).toHaveAttribute("href","mailto:amanuelamare084@gmail.com");


expect(github).toHaveAttribute("target","_blank");
expect(figma).toHaveAttribute("target","_blank");
expect(facebook).toHaveAttribute("target","_blank");
expect(linkedin).toHaveAttribute("target","_blank");
expect(twitter).toHaveAttribute("target","_blank");
expect(filetext).toHaveAttribute("target","_blank");
expect(msg).toHaveAttribute("target","_blank");



});