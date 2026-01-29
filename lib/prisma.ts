import path from "node:path";
import process from "node:process";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../prisma/generated/prisma/client"; // adjust path

const datasourceUrl = process.env.DATABASE_URL;
if (!datasourceUrl) throw new Error("DATABASE_URL is not set");

const sqliteFile = datasourceUrl.replace(/^file:/, "");
const normalized = sqliteFile.replace(/^[.][/]/, "");
const baseDir = path.isAbsolute(normalized) || normalized.startsWith("prisma/")
  ? process.cwd()
  : path.resolve(process.cwd(), "prisma");
const sqlitePath = path.resolve(baseDir, normalized);
const adapter = new PrismaBetterSqlite3({ url: sqlitePath });

export const prisma = new PrismaClient({ adapter });
