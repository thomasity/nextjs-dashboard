// e.g. src/app/__tests__/LandingPage.test.tsx
import { render, screen } from "@testing-library/react";
import LandingPage from "../page"; // adjust relative path if needed

describe("LandingPage", () => {
  it("renders main intro text", () => {
    render(<LandingPage />);

    expect(
      screen.getByText(/hello, my name is/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText("Thomas Callen")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /software developer\./i })
    ).toBeInTheDocument();
  });

  it("renders both action buttons", () => {
    render(<LandingPage />);

    // however your buttons render (text, aria-label, etc.)
    // For example:
    expect(
      screen.getByRole("button", { name: /email me/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /download resume/i })
    ).toBeInTheDocument();
  });
});
