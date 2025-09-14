import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "./", // ✅ ensures relative paths so assets resolve correctly on Vercel
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",   // ✅ Vercel expects this
    emptyOutDir: true // ✅ cleans old files before each build
  },
});
