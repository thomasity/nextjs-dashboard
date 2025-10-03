// prisma/seed.ts
// Run with: prisma db seed  (package.json => { "prisma": { "seed": "tsx prisma/seed.ts" } })

import { PrismaClient } from '@prisma/client';
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const prisma = new PrismaClient();

type Link = { type: string; address: string };
type ProjectRow = {
  name: string;
  year: number;
  difficulty: string;
  fields: string[];
  frameworks: string[];
  libraries: string[];
  languages: string[];
  description: string;
  link?: Link[];
  image?: string;
  featured?: boolean;
  ongoing?: boolean;
  owner?: string;
  repo?: string;
};

const DATA_RELATIVE = process.env.SEED_PATH ?? 'app/data/projects.json';

async function readJson<T>(filePath: string): Promise<T> {
  const raw = await fs.readFile(filePath, 'utf8');
  return JSON.parse(raw) as T;
}

async function main() {
  const dataPath = path.resolve(process.cwd(), DATA_RELATIVE);
  console.log(`Reading seed data from: ${dataPath}`);

  const items = await readJson<ProjectRow[]>(dataPath);
  if (!Array.isArray(items)) throw new Error('Seed file is not an array.');
  if (items.length === 0) {
    console.warn('Seed file is empty; nothing to insert.');
    return;
  }

  for (const p of items) {
    await prisma.project.upsert({
      where: { name: p.name }, // ensure Project.name is @unique in schema
      update: {
        year: p.year,
        difficulty: p.difficulty,
        fields: p.fields,
        frameworks: p.frameworks,
        libraries: p.libraries,
        languages: p.languages,
        description: p.description,
        link: p.link as any ?? null,
        image: p.image ?? null,
        featured: p.featured ?? false,
        ongoing: p.ongoing ?? false,
        owner: p.owner ?? null,
        repo: p.repo ?? null,
      },
      create: {
        name: p.name,
        year: p.year,
        difficulty: p.difficulty,
        fields: p.fields,
        frameworks: p.frameworks,
        libraries: p.libraries,
        languages: p.languages,
        description: p.description,
        link: p.link as any ?? null,
        image: p.image ?? null,
        featured: p.featured ?? false,
        ongoing: p.ongoing ?? false,
        owner: p.owner ?? null,
        repo: p.repo ?? null,
      },
    });
    console.log(`✓ Upserted: ${p.name}`);
  }

  console.log(`Done. Seeded ${items.length} project(s).`);
}

main()
  .catch((err) => {
    console.error('Seed failed:', err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
