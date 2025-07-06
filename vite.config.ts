import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
 /*  define: {
    "process.env.NODE_ENV": '"development"', // 👈 forces dev mode
  },
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      treeshake: false,
    },
  }, */
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      i18n: path.resolve(__dirname, "./i18n"),
    },
  },
  base: process.env.VITE_BASENAME,
});
