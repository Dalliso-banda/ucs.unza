import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql", // or 'mysql' / 'sqlite'
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgres://localhost:5432/my_db",
  },
});

