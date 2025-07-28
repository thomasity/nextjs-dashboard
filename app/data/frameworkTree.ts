export const frameworkTree = [
    {
        label: 'Frameworks',
        children: [
            { 
                label: 'Next.js',
            },
        ],
    }
];

export const libraryTree = [
    {
        label: 'Libraries',
        children: [

        ]
    }
];

export const languageTree = [
  {
    label: 'Languages',
    children: [
        { label: 'JavaScript' },
        { label: 'TypeScript' },
        { label: 'Python' },
        { label: 'Java' },
        { label: 'C#' },
        { label: 'C++' },
        { label: 'C' },
        { label: 'MATLAB'}
    ]
}
];

export const fieldTree = [
    {
        label:'Fields',
        children: [
            { label: 'Web Development' },
            { label: 'Embedded Systems' },
            { label: 'Big Data' },
            { label: 'Quantum Computing' },
            { label: 'Computer Architecture' },
            { label: 'Information Retrieval' },
            { label: 'Mobile Application Development' },
            { label: 'Game Development' },
            { label: 'Image Processing' },
            { label: 'IoT' },
            { label: 'Cyber Security' },
            { label: 'Engineering Computation' }
        ]
    }
];

import { Project } from '../types';

export function getFilters({projects} : { projects : Project[]}) {
    const years = new Set<number>();
    const fields = new Set<string>();
    const frameworks = new Set<string>();
    const libraries = new Set<string>();
    const languages = new Set<string>();

    projects.forEach((project) => {
        years.add(project.year);
        project.fields.forEach((field) => {
            fields.add(field);
        });
        project.frameworks.forEach((framework) => {
            frameworks.add(framework);
        });
        project.libraries.forEach((library) => {
            libraries.add(library);
        });
        project.languages.forEach((language) => {
            languages.add(language);
        });
    });

    const sortedYears = [...years].sort();
    const sortedFields = [...fields].sort();
    const sortedFrameworks = [...frameworks].sort();
    const sortedLibraries = [...libraries].sort();
    const sortedLanguages = [...languages].sort();
    const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

    return [sortedYears, sortedFields, sortedFrameworks, sortedLibraries, sortedLanguages, difficulties];

}
