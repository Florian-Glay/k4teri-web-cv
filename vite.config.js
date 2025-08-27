// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // base = racine en dev, sous-chemin en prod (GitHub Pages)
  base: process.env.NODE_ENV === "production" ? "/k4teri-web-cv/" : "/",
});