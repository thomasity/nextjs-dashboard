// export const frameworkTree = [
//     {
//         label: "Frameworks",
//         children: [
//             { label: "React" },
//             { label: "Vue" },
//             { label: "Angular" },
//             { label: "Next.js" },
//             { label: "Remix" },
//             { label: "SolidJS" },
//         ],
//     },
//     {
//         label: "Libraries"
//     },
//     {
//         label: "Languages",
//         level: 0,
//         children: [
//             { label: "JavaScript", level: 1 },
//             { label: "TypeScript", level: 1 },
//             { label: "Python", level: 1 },
//             { label: "Java", level: 1 },
//             { label: "C#", level: 1 },
//             { label: "C++", level: 1 },
//             { label: "C", level: 1 }
//         ]
//     },
//     {
//         label:"Fields",
//         level: 0,
//         children: [
//             { label: "Web Development", level: 1 },
//             { label: "Embedded Systems", level: 1 },
//             { label: "Big Data", level: 1 },
//             { label: "Quantum Computing", level: 1 },
//             { label: "Computer Architecture", level: 1 },
//             { label: "Information Retrieval", level: 1 },
//             { label: "Mobile Application Development", level: 1 },
//             { label: "Game Development", level: 1 },
//             { label: "Image Processing", level: 1 },
//             { label: "IoT", level: 1 },
//             { label: "Cyber Security", level: 1 }
//         ]
//     }
// ];

interface TreeEntry {
    label: string,
    children: TreeEntry[]
}

export const frameworkTree = [
    {
        label: "Frameworks",
        children: [
            { 
                label: "Next.js",
            },
        ],
    }
];

export const libraryTree = [
    {
        label: "Libraries",
        children: [

        ]
    }
]

export const languageTree = [
  {
    label: "Languages",
    children: [
        { label: "JavaScript" },
        { label: "TypeScript" },
        { label: "Python" },
        { label: "Java" },
        { label: "C#" },
        { label: "C++" },
        { label: "C" },
        { label: "MATLAB"}
    ]
}
];

export const fieldTree = [
    {
        label:"Fields",
        children: [
            { label: "Web Development" },
            { label: "Embedded Systems" },
            { label: "Big Data" },
            { label: "Quantum Computing" },
            { label: "Computer Architecture" },
            { label: "Information Retrieval" },
            { label: "Mobile Application Development" },
            { label: "Game Development" },
            { label: "Image Processing" },
            { label: "IoT" },
            { label: "Cyber Security" },
            { label: "Engineering Computation" }
        ]
    }
]

import { Project } from "../types";

export function getFilters({projects} : { projects : Project[]}) {
    let years = new Set<number>();
    let fields = new Set<string>();
    let frameworks = new Set<string>();
    let libraries = new Set<string>();
    let languages = new Set<string>();

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
    })

    const sortedYears = [...years].sort();
    const sortedFields = [...fields].sort();
    const sortedFrameworks = [...frameworks].sort();
    const sortedLibraries = [...libraries].sort();
    const sortedLanguages = [...languages].sort();
    const difficulties = ["Beginner", "Intermediate", "Advanced"];

    return [sortedYears, sortedFields, sortedFrameworks, sortedLibraries, sortedLanguages, difficulties];

}
