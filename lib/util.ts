import { Resume, Project, Course, Education, Experience, Skill } from "@/app/types";

export function isProject(value: unknown): value is Project {
  if (typeof value !== 'object' || value === null) return false;

  const obj = value as Record<string, unknown>;

  return (
    typeof obj.name === 'string' &&
    typeof obj.year === 'number' &&
    typeof obj.difficulty === 'string' &&
    Array.isArray(obj.fields) &&
    Array.isArray(obj.frameworks) &&
    Array.isArray(obj.libraries) &&
    Array.isArray(obj.languages) &&
    typeof obj.description === 'string' &&
    (typeof obj.link === 'string' || obj.link === undefined) &&
    (typeof obj.course === 'string' || obj.course === undefined)
  );
}

export function isProjectArray(value: unknown): value is Project[] {
  return Array.isArray(value) && value.every(isProject);
}

export function isCourse(value: unknown): value is Course {
  if (typeof value !== 'object' || value === null) return false;

  const obj = value as Record<string, unknown>;

  return (
    typeof obj.title === 'string' &&
    typeof obj.description === 'string' &&
    typeof obj.semester === 'string' &&
    typeof obj.year === 'number'
  );
}

export function isCourseArray(value: unknown): value is Course[] {
  return Array.isArray(value) && value.every(isCourse);
}

export function isEducation(value: unknown): value is Education {
  if (typeof value !== 'object' || value === null) return false;

  const obj = value as Record<string, unknown>;

  return (
    typeof obj.degree === 'string' &&
    (obj.minor === undefined || typeof obj.minor === 'string') &&
    typeof obj.school === 'string' &&
    (obj.college === undefined || typeof obj.college === 'string') &&
    typeof obj.graduation === 'string' &&
    typeof obj.gpa === 'number' &&
    typeof obj.logo === 'string' &&
    (typeof obj.link === 'string' || obj.link === undefined) &&
    (obj.coursework === undefined || Array.isArray(obj.coursework)) &&
    (obj.coursework === undefined || obj.coursework.every(isCourse))
  );
}

export function isEducationArray(value: unknown): value is Education[] {
  return Array.isArray(value) && value.every(isEducation);
}

export function isExperience(value: unknown): value is Experience {
  if (typeof value !== 'object' || value === null) return false;

  const obj = value as Record<string, unknown>;

  return (
    typeof obj.company === 'string' &&
    typeof obj.title === 'string' &&
    typeof obj.location === 'string' &&
    typeof obj.start === 'string' &&
    typeof obj.end === 'string' &&
    Array.isArray(obj.details) &&
    typeof obj.logo === 'string' &&
    typeof obj.link === 'string' &&
    typeof obj.still_working === 'boolean'
  );
}

export function isExperienceArray(value: unknown): value is Experience[] {
  return Array.isArray(value) && value.every(isExperience);
}

export function isSkill(value: unknown): value is Skill {
  if (typeof value !== 'object' || value === null) return false;

  const obj = value as Record<string, unknown>;

  return (
    typeof obj.title === 'string' &&
    typeof obj.summary === 'string' &&
    Array.isArray(obj.items)
  );
}

export function isSkillArray(value: unknown): value is Skill[] {
  return Array.isArray(value) && value.every(isSkill);
}

export function isResume(value: unknown): value is Resume {
  if (typeof value !== 'object' || value === null) return false;

  const obj = value as Record<string, unknown>;

  return (
    typeof obj.name === 'string' &&
    typeof obj.summary === 'string' &&
    Array.isArray(obj.education) &&
    isEducationArray(obj.education) &&
    Array.isArray(obj.experience) &&
    isExperienceArray(obj.experience) &&
    Array.isArray(obj.extracurriculars) &&
    isExperienceArray(obj.extracurriculars) &&
    Array.isArray(obj.skills) &&
    isSkillArray(obj.skills)
  );
}
