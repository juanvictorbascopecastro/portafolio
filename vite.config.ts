import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { ghPages } from "vite-plugin-gh-pages";
// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    noDiscovery: true,
    include: ["nprogress", "yup", "intl-tel-input"],
  },
  build: {
    sourcemap: true,
  },
  plugins: [vue(), ghPages()],
  base: "portafolio",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
