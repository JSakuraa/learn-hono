import { defineConfig } from "drizzle-kit";
import "dotenv/config";

import env from "@/env.ts";

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL!,
  },
});
