import { render, screen } from "@testing-library/react";
import Header from "../header";



describe("Header", () => {
    it ("renders the logo", () => {
        render(<Header />);
        expect(screen.getByAltText("Logo")).toBeInTheDocument();
    });

    it("renders navigation links", () => {
        render(<Header />);
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Projects")).toBeInTheDocument();
        expect(screen.getByText("Resume")).toBeInTheDocument();
        expect(screen.getByText("Contact")).toBeInTheDocument();
    });

    it ("renders external links", () => {
        render(<Header />);
        expect(screen.getByText("github")).toBeInTheDocument();
        expect(screen.getByText("linkedin")).toBeInTheDocument();
    });
});
