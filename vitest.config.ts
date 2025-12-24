/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
  test: {
    environment: "happy-dom",          // DOM implementation
    setupFiles: "./vitest.setup.ts",
    globals: true,

    // Important: keep coverage fully off while we stabilize
    coverage: {
      enabled: false,
      reporter: [],
    },

    // Match Next's "@/..." alias (adjust if your src folder is named differently)
    alias: {
      "@": resolve(__dirname, "/"),
    },
  },
});
