import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],   // ✅ ensures React is injected
  base: "./",
  build: {
    outDir: "dist"
  }
});
