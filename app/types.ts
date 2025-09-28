import { StaticImageData } from "next/image";

export interface Resume {
    name: string,
    summary: string,
    education: Education[],
    experience: Experience[],
    extracurriculars: Experience[],
    skills: Skill[]
}

export interface Project {
    name: string;
    year: number;
    difficulty: string;
    fields: string[];
    frameworks: string[];
    libraries: string[];
    languages: string[];
    description: string;
    link?: string;
    course?: string;
}

export interface Course {
    title: string,
    description: string,
    semester: string,
    year: number
}

export interface Education {
    degree: string,
    minor?: string,
    school: string,
    college?: string,
    graduation: string,
    gpa: number,
    logo: string,
    link?: string,
    coursework?: Course[],
}

export interface Experience {
    company: string,
    title: string,
    location: string,
    start: string,
    end: string,
    details: string[],
    logo?: string | StaticImageData,
    link: string,
    still_working: boolean
}

export interface Skill {
    title: string,
    items: string[],
}