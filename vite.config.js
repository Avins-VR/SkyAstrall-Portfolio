import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // ✅ Use relative paths for assets (important for Vercel/GitHub Pages)
  base: "./",  
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",        // ✅ Vercel uses this as default
    emptyOutDir: true,     // ✅ Cleans old builds
    sourcemap: false,      // ⚡ Optional: set true for debugging, false for production
    chunkSizeWarningLimit: 1000, // ✅ Avoids warning for big bundles
  },
  server: {
    port: 5173,            // ✅ Default Vite port
    open: true,            // ✅ Auto-open browser when running `npm run dev`
  },
});
