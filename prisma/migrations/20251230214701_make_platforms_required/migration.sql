/*
  Warnings:

  - Made the column `platforms` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
UPDATE "Project"
SET "platforms" = '[]'::jsonb
WHERE "platforms" IS NULL;

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "fields" SET DEFAULT '[]',
ALTER COLUMN "frameworks" SET DEFAULT '[]',
ALTER COLUMN "libraries" SET DEFAULT '[]',
ALTER COLUMN "languages" SET DEFAULT '[]',
ALTER COLUMN "platforms" SET NOT NULL,
ALTER COLUMN "platforms" SET DEFAULT '[]';
