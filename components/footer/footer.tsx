import { Linkedin, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center space-y-8 pt-8">
            <div className="grid md:grid-cols-4 w-[70%] py-8">
                <div className="p-4 text-center">
                    <h3 className="!font-semibold !text-3xl">Thomas Callen</h3>
                    <p className="!text-sm text-[var(--subtle-font-color)]">Software Developer</p>
                </div>
                <div className="p-4 text-center">
                    <p className="!text-sm">Spring Lake, Michigan, USA</p>
                    <p className="!text-sm">tcallen1001@gmail.com</p>
                </div>
                <div className="p-4 text-center">
                    <p className="!text-sm">Tel. +1 (616) 558-8366</p>
                </div>
                <div className="p-4 text-center">
                    <Linkedin className="inline-block mr-2" size={16} />
                    <a href="https://www.linkedin.com/in/thomas-callen-410a11252" target="_blank" rel="noopener noreferrer" className="!text-sm hover:underline">LinkedIn</a>
                    <br />
                    <Github className="inline-block mr-2" size={16} />
                    <a href="https://github.com/thomasity" target="_blank" rel="noopener noreferrer" className="!text-sm hover:underline">GitHub</a>
                </div>
            </div>
            <p className="!text-sm text-[var(--subtle-font-color)]">© {new Date().getFullYear()} Thomas Callen. All rights reserved.</p>
        </footer>
    );
}