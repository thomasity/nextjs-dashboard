import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DownloadResume, EmailMe } from "../buttons";
import { vi } from "vitest";

describe("Buttons", () => {
    it("renders DownloadResume button", () => {
        render(<DownloadResume />);
        expect(screen.getByText("View Resume")).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /View Resume/i })).toHaveAttribute('href', '/resume.pdf');
    });

    it("renders EmailMe button", () => {
        render(<EmailMe />);
        expect(screen.getByText("Email Me")).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /Email Me/i })).toHaveAttribute('href', '/contact');
    });

    it("email button brings user to contact page", async() => {
        const user = userEvent.setup();

        render(<EmailMe />);
        const emailButton = screen.getByRole("link", { name: /Email Me/i });

        await user.click(emailButton);

        expect(window.location.pathname).toBe('/contact');
    });

    it("download resume button opens resume in new tab", async() => {
        render(<DownloadResume />);

        const link = screen.getByRole("link", { name: /View Resume/i });

        expect(link).toHaveAttribute("href", "/resume.pdf");
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

});