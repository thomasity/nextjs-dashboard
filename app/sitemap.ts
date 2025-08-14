// app/sitemap.ts
import type { MetadataRoute } from "next";
import projectData from "@/app/data/projects.json";
import { Project } from "./types";

// No trailing slash
const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tommycallen.com";


export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls: MetadataRoute.Sitemap = [
    { url: `${site}/`,          lastModified: new Date(), changeFrequency: "weekly",  priority: 1 },
    { url: `${site}/projects`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${site}/resume`,    lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
    { url: `${site}/contact`,   lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ];

  const projects = projectData as Project[];

  const projectUrls: MetadataRoute.Sitemap = projects
    .filter(p => p?.name)
    .map(p => ({
      url: `${site}/projects/${encodeURIComponent(p.name)}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    }));

  return [...staticUrls, ...projectUrls];
}
