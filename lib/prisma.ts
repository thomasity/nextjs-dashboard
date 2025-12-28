import fs from "fs";
import path from "path";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../prisma/generated/prisma/client"; // adjust path

const connectionString = process.env.DATABASE_URL!;
if (!connectionString) throw new Error("DATABASE_URL is not set");

const ca = fs.readFileSync(
  path.join(process.cwd(), "prisma/certs/global-bundle.pem"),
  "utf8"
);

const pool = new Pool({
  connectionString,
  ssl: {
    ca,
    rejectUnauthorized: true,
  },
});

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });
