import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const htmlEntry = (path: string) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: htmlEntry("index.html"),
        projekte: htmlEntry("projekte/index.html"),
        experimente: htmlEntry("experimente/index.html"),
        ueber: htmlEntry("ueber/index.html"),
        kontakt: htmlEntry("kontakt/index.html"),
      },
      output: {
        manualChunks: (id: string) => {
          if (id.includes("@mui/material") || id.includes("@mui/icons-material")) {
            return "mui-core";
          }
          if (id.includes("react")) {
            return "react-vendor";
          }
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    css: true,
  },
});

