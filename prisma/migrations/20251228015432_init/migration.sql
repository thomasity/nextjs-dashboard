-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "difficulty" TEXT NOT NULL,
    "fields" JSONB NOT NULL,
    "frameworks" JSONB NOT NULL,
    "libraries" JSONB NOT NULL,
    "languages" JSONB NOT NULL,
    "description" TEXT NOT NULL,
    "link" JSONB,
    "image" TEXT,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "ongoing" BOOLEAN NOT NULL DEFAULT false,
    "owner" TEXT,
    "repo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_name_key" ON "Project"("name");

-- CreateIndex
CREATE INDEX "Project_year_idx" ON "Project"("year");

-- CreateIndex
CREATE INDEX "Project_featured_ongoing_idx" ON "Project"("featured", "ongoing");
