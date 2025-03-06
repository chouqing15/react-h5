import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import postcssPresetEnv from "postcss-preset-env";
import postcssPxToRem from "postcss-pxtorem";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv(),
        postcssPxToRem({
          rootValue: 37.5,
          unitPrecision: 5,
          propList: ["font", "font-size", "line-height", "letter-spacing"],
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0,
          exclude: /node_modules/i,
        }),
      ],
    },
  },
});
