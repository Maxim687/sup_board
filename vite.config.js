import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/sup_board/",

  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        ejsOptions: {
          root: [__dirname],
        },
      },
    }),

    createSvgIconsPlugin({
      iconDirs: [resolve(__dirname, "src/icons")],
      symbolId: "icon-[name]",
    }),

    ViteImageOptimizer(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
