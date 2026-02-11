import { screen, render, getByText } from "@testing-library/react";
import { test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Contact from "../components/Contact";
import { MemoryRouter } from "react-router-dom";

vi.mock("@emailjs/browser", () => ({
  default: {
    send: vi.fn(() => Promise.resolve())
  }
}));

test("Check the rendered of contact and existace of section", () => {
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>,
  );
  const title1 = screen.getAllByText("Let’s Work Together");

  expect(title1[0]).toBeInTheDocument();
  const description = screen.getByText(
    "Have a project in mind or just want to say hello?",
  );
  expect(description).toBeInTheDocument();
});
test("test the contact form exists and thier validations", async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>,
  );
  const form = screen.getByTestId("contact-form");
  expect(form).toBeInTheDocument();
  const inputname = screen.getByTestId("input-name");
  const inputemail = screen.getByTestId("input-email");
  const inputcompany = screen.getByTestId("input-company");
  const inputmessage = screen.getByTestId("input-message");
  expect(inputname).toBeInTheDocument();
  expect(inputemail).toBeInTheDocument();
  expect(inputcompany).toBeInTheDocument();
  expect(inputmessage).toBeInTheDocument();
 const btnsend = screen.getByRole("button", { name: /Send/i });
  expect(btnsend).toBeInTheDocument();

 


});

test("Test the validation form with empty fields",async()=>{
    const user=userEvent.setup();
   render(<MemoryRouter>
        <Contact/>
    </MemoryRouter>);
const btnsend = screen.getByRole("button", { name: /Send/i });
  expect(btnsend).toBeInTheDocument();
  
  await user.click(screen.getByRole("button", { name: /send/i }));
  const errorname=screen.getByTestId("error-name");
  const erroremail=screen.getByTestId("error-email");
  const errormessage=screen.getByTestId("error-message");
  expect(screen.getByText("Hey 👋 please tell me your name.")).toBeInTheDocument();
    expect(screen.getByText("I’ll need your email to get back to you 🙂")).toBeInTheDocument();
      expect(screen.getByText("Please say something, even just a 'Hello Amanuel'")).toBeInTheDocument();

});
test("Test the form interactions with users by simulation wrong inputs",async()=>{
   const user=userEvent.setup();
   render(<MemoryRouter>
        <Contact/>
    </MemoryRouter>);
  const btnsend = screen.getByRole("button", { name: /Send/i });
  expect(btnsend).toBeInTheDocument();
  await user.type(screen.getByTestId("input-name"), "1234");
  await user.type(screen.getByTestId("input-email"), "wrongemail");
  

  await user.click(screen.getByRole("button", { name: /send/i }));
  const errorname=screen.getByTestId("error-name");
  expect(errorname).toBeInTheDocument();
  expect(screen.getByText("Names usually don't have numbers 😉")).toBeInTheDocument();
  const erroremail = screen.getByTestId("error-email");
  expect(erroremail).toBeInTheDocument();

  expect(screen.getByText("Hmm, that doesn’t look like a valid email.")).toBeInTheDocument();
 const errormessage=screen.getByTestId("error-message");
 expect(errormessage).toBeInTheDocument();
 expect(screen.getByText("Please say something, even just a 'Hello Amanuel'")).toBeInTheDocument();


});
test("Test the interactivity when user fill correct form accordingly",async ()=>{
     const user=userEvent.setup();
   render(<MemoryRouter>
        <Contact/>
    </MemoryRouter>);
    const btnsend = screen.getByRole("button", { name: /Send/i });
  expect(btnsend).toBeInTheDocument();
  await user.type(screen.getByTestId("input-name"), "Mr.Smith");
  await user.type(screen.getByTestId("input-email"), "exampleamanuel@gmail.com");
  await user.type(screen.getByTestId("input-message"),"Hello Amanuel i need your help with website");
  await user.click(btnsend);
  const sucess=screen.getByTestId("sucess-submit");
  expect(sucess).toBeInTheDocument();
  

});

test("test the accessebility of social icons in the left side ",async ()=>{
 const user=userEvent.setup();
   render(<MemoryRouter>
        <Contact/>
    </MemoryRouter>);
  expect( screen.getByText(/Let’s Work Together/i)).toBeInTheDocument();
  expect(screen.getAllByText(/Have a project in mind/i)[0]).toBeInTheDocument();
  expect(screen.getByText(/Ethiopia/i)).toBeInTheDocument();
  expect(screen.getByText(/Open to opportunities/i)).toBeInTheDocument();
  expect(screen.getByText(/amanuelamare084@gmail.com/i)).toBeInTheDocument();

});
test(" test All social links renderdered and check accessiblity", () => {
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  );
const github = screen.getByTestId("github");
const linkedin= screen.getByTestId("linkedin");
const twitter= screen.getByTestId("twitter");
const hackerrank= screen.getByTestId("hacker-rank");
const mailing = screen.getByTestId("email");
expect(github).toBeInTheDocument();
expect(linkedin).toBeInTheDocument();
expect(twitter).toBeInTheDocument();
expect(hackerrank).toBeInTheDocument();
expect(mailing).toBeInTheDocument();
  
const links = screen.getAllByRole("link"); expect(links.length).toBeGreaterThan(3);

});
test("CV download button exists", () => {
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  );

  const cvBtn = screen.getByRole("link", { name: /download cv/i,});
  expect(cvBtn).toBeInTheDocument();
});


test("test the links are opened  in the other new tab", ()=>{
render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  );
const github = screen.getByTestId("github");
const linkedin= screen.getByTestId("linkedin");
const twitter= screen.getByTestId("twitter");
const hackerrank= screen.getByTestId("hacker-rank");
const mailing = screen.getByTestId("email");
expect(github).toHaveAttribute("href","https://github.com/amanuel1221");
expect(github).toHaveAttribute("target","_blank");
expect(linkedin).toHaveAttribute("href","https://www.linkedin.com/in/your-username");
expect(linkedin).toHaveAttribute("target","_blank");
expect(twitter).toHaveAttribute("href","https://x.com/AmanuelAma66386");
expect(twitter).toHaveAttribute("target","_blank");
expect(hackerrank).toHaveAttribute("href","https://www.hackerrank.com/settings/account");
expect(hackerrank).toHaveAttribute("target","_blank");





})