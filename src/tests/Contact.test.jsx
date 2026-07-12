import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, vi } from "vitest";
import Contact from "../components/Contact";

vi.mock("@emailjs/browser", () => ({
  default: {
    send: vi.fn(() => Promise.resolve()),
  },
}));

describe("Contact Component", () => {
  test("renders the contact section correctly", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /let’s work together/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/have a project in mind or just want to say hello/i)
    ).toBeInTheDocument();
  });

  test("renders the contact form", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
    expect(screen.getByTestId("input-name")).toBeInTheDocument();
    expect(screen.getByTestId("input-email")).toBeInTheDocument();
    expect(screen.getByTestId("input-company")).toBeInTheDocument();
    expect(screen.getByTestId("input-message")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /^send$/i })
    ).toBeInTheDocument();
  });

  test("shows validation errors when submitting an empty form", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    await user.click(screen.getByRole("button", { name: /^send$/i }));

    expect(
      screen.getByText(/please tell me your name/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/need your email/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/please say something/i)
    ).toBeInTheDocument();
  });

  test("shows validation errors for invalid inputs", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    await user.type(screen.getByTestId("input-name"), "1234");
    await user.type(screen.getByTestId("input-email"), "wrongemail");

    await user.click(screen.getByRole("button", { name: /^send$/i }));

    expect(
      screen.getByText(/names usually don't have numbers/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/valid email/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/please say something/i)
    ).toBeInTheDocument();
  });

  test("submits successfully with valid data", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    await user.type(screen.getByTestId("input-name"), "Mr Smith");
    await user.type(
      screen.getByTestId("input-email"),
      "example@gmail.com"
    );
    await user.type(
      screen.getByTestId("input-message"),
      "Hello Amanuel, I need your help."
    );

    await user.click(screen.getByRole("button", { name: /^send$/i }));

    expect(
      await screen.findByTestId("sucess-submit")
    ).toBeInTheDocument();

    expect(
      screen.getByText(/message sent successfully/i)
    ).toBeInTheDocument();
  });

  test("renders contact information", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    expect(screen.getByText(/ethiopia/i)).toBeInTheDocument();

    expect(
      screen.getByText(/availability: open to opportunities/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/bdu1600905@bdu.edu.et/i)
    ).toBeInTheDocument();
  });

  test("renders all social links", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    expect(screen.getByTestId("github")).toBeInTheDocument();
    expect(screen.getByTestId("peerlist")).toBeInTheDocument();
    expect(screen.getByTestId("linkedin")).toBeInTheDocument();
    expect(screen.getByTestId("twitter")).toBeInTheDocument();
    expect(screen.getByTestId("hacker-rank")).toBeInTheDocument();
    expect(screen.getByTestId("email")).toBeInTheDocument();
  });

  test("social links have correct hrefs and targets", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    expect(screen.getByTestId("github")).toHaveAttribute(
      "href",
      "https://github.com/amanuel1221"
    );

    expect(screen.getByTestId("github")).toHaveAttribute(
      "target",
      "_blank"
    );

    expect(screen.getByTestId("peerlist")).toHaveAttribute(
      "href",
      "https://peerlist.io/amanuelamare084"
    );

    expect(screen.getByTestId("peerlist")).toHaveAttribute(
      "target",
      "_blank"
    );

    expect(screen.getByTestId("linkedin")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/amanuel-amare-684234372"
    );

    expect(screen.getByTestId("linkedin")).toHaveAttribute(
      "target",
      "_blank"
    );

    expect(screen.getByTestId("twitter")).toHaveAttribute(
      "href",
      "https://x.com/AmanuelAma66386"
    );

    expect(screen.getByTestId("twitter")).toHaveAttribute(
      "target",
      "_blank"
    );

    expect(screen.getByTestId("hacker-rank")).toHaveAttribute(
      "href",
      "https://www.hackerrank.com/settings/account"
    );

    expect(screen.getByTestId("hacker-rank")).toHaveAttribute(
      "target",
      "_blank"
    );

    expect(screen.getByTestId("email")).toHaveAttribute(
      "href",
      "mailto:bdu1600905@bdu.edu.et"
    );
  });

  test("download CV button exists", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    const cv = screen.getByRole("link", {
      name: /download cv/i,
    });

    expect(cv).toBeInTheDocument();
    expect(cv).toHaveAttribute(
      "href",
      "/assets/images/Amanuel_cv.pdf"
    );
    expect(cv).toHaveAttribute(
      "download",
      "Amanuel_CV.pdf"
    );
  });
});