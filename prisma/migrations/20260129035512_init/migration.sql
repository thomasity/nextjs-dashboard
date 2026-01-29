-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "difficulty" TEXT NOT NULL,
    "fields" JSONB NOT NULL DEFAULT [],
    "frameworks" JSONB NOT NULL DEFAULT [],
    "libraries" JSONB NOT NULL DEFAULT [],
    "languages" JSONB NOT NULL DEFAULT [],
    "description" TEXT NOT NULL,
    "link" JSONB,
    "image" TEXT,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "ongoing" BOOLEAN NOT NULL DEFAULT false,
    "owner" TEXT,
    "repo" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "platforms" JSONB NOT NULL DEFAULT []
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_name_key" ON "Project"("name");

-- CreateIndex
CREATE INDEX "Project_year_idx" ON "Project"("year");

-- CreateIndex
CREATE INDEX "Project_featured_ongoing_idx" ON "Project"("featured", "ongoing");
