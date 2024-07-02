import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/movie_tp_react",
  build: {
    outDir: "dist", // Output directory
  },
});
