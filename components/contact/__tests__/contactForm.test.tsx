import { render, screen } from "@testing-library/react";
import ContactForm from "../contactForm";

describe("ContactForm", () => {
    it("renders the contact form with all fields", () => {
        render(<ContactForm />);
        
        expect(screen.getByPlaceholderText("Your name")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Your email")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Your message")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Send Email/i })).toBeInTheDocument();
    });
})