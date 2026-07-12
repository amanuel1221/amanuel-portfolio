import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Footer from "../components/Footer";

const renderFooter = () =>
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

describe("Footer", () => {
  test("renders footer content", () => {
    renderFooter();

    expect(
      screen.getByText("Junior Frontend Developer • React & Tailwind CSS")
    ).toBeInTheDocument();

    const year = new Date().getFullYear();

    expect(
      screen.getByText(
        new RegExp(`© ${year} Amanuel Amare\\. All rights reserved\\.`, "i")
      )
    ).toBeInTheDocument();
  });

  test("renders logo", () => {
    renderFooter();

    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });

  test("renders all social links", () => {
    renderFooter();

    expect(
      screen.getByRole("link", { name: /github profile/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /linkedin profile/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /figma profile/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /facebook profile/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /twitter profile/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /substack profile/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /whatsapp profile/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /email/i })
    ).toBeInTheDocument();
  });

  test("social links have correct urls", () => {
    renderFooter();

    expect(
      screen.getByRole("link", { name: /github profile/i })
    ).toHaveAttribute("href", "https://github.com/amanuel1221");

    expect(
      screen.getByRole("link", { name: /linkedin profile/i })
    ).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/amanuel-amare-684234372"
    );

    expect(
      screen.getByRole("link", { name: /figma profile/i })
    ).toHaveAttribute(
      "href",
      "https://www.figma.com/files/team/1527017293903765142/user/1527017290758443585?fuid=1527017290758443585"
    );

    expect(
      screen.getByRole("link", { name: /facebook profile/i })
    ).toHaveAttribute("href", "https://facebook.com/manuell211");

    expect(
      screen.getByRole("link", { name: /twitter profile/i })
    ).toHaveAttribute("href", "https://x.com/AmanuelAma66386");

    expect(
      screen.getByRole("link", { name: /substack profile/i })
    ).toHaveAttribute("href", "https://substack.com/@amanuelamare");

    expect(
      screen.getByRole("link", { name: /whatsapp profile/i })
    ).toHaveAttribute("href", "https://wa.me/251921337037");

    expect(
      screen.getByRole("link", { name: /email/i })
    ).toHaveAttribute("href", "mailto:bdu1600905@bdu.edu.et");
  });

  test("external links open in new tab", () => {
    renderFooter();

    const externalLinks = [
      screen.getByRole("link", { name: /github profile/i }),
      screen.getByRole("link", { name: /linkedin profile/i }),
      screen.getByRole("link", { name: /figma profile/i }),
      screen.getByRole("link", { name: /facebook profile/i }),
      screen.getByRole("link", { name: /twitter profile/i }),
      screen.getByRole("link", { name: /substack profile/i }),
      screen.getByRole("link", { name: /whatsapp profile/i }),
    ];

    externalLinks.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute(
        "rel",
        expect.stringContaining("noopener")
      );
    });
  });

  test("email link does not open in new tab", () => {
    renderFooter();

    const email = screen.getByRole("link", { name: /email/i });

    expect(email).not.toHaveAttribute("target");
  });
});