import type { Project } from '../app/types.ts'

const list = (items?: string[]) => (items && items.length ? items.join(", ") : "None");

export function projectsToMarkdown(projects: Project[]) {
  const res = projects
    .map((p) => {
        return `## ${p.name} (${p.year})

        **Difficulty:** ${p.difficulty ?? "N/A"}
        **Fields:** ${list(p.fields)}
        **Languages:** ${list(p.languages)}
        **Frameworks:** ${list(p.frameworks)}
        **Libraries:** ${list(p.libraries)}
        **Platforms:** ${list(p.platforms)}

        **Description:**  
        ${p.description ?? "N/A"}
        `;
    })
    .join("\n---\n\n");
    console.log(res);
    return res;
}