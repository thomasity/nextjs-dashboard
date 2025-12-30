import { StaticImageData } from "next/image";

export interface Link {
  type: 'github' | 'live';
  address: string;
}

export interface Resume {
    name: string,
    summary: string,
    education: Education[],
    experience: Experience[],
    extracurriculars: Experience[],
    skills: Skill[]
}

export interface Project {
  id: number;
  name: string;
  year: number;
  difficulty: string;
  fields: string[];
  frameworks: string[];
  libraries: string[];
  languages: string[];
  platforms: string[];
  description: string;
  link?: Link[];
  image?: string | null;
  featured?: boolean;
  ongoing?: boolean;
  owner?: string | null;
  repo?: string | null;
}

export type ProjectInput = Omit<Project, 'id'>;

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