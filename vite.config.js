import { defineConfig } from "vite";
import { terser } from "rollup-plugin-terser";

import obfuscator from "rollup-plugin-obfuscator";
export default defineConfig({
  publicDir: false,
  build: {
    lib: {
      entry: "extensions/${name}/main.js",
      formats: ["iife"],
      name: "Extension",
      fileName: () => "extension.js",
    },
    outDir: "extensions/${name}/assets",
    minify: "terser",
    terserOptions: {
      mangle: {
        properties: true,
        reserved: ["exports"],
      },
      compress: {
        passes: 3,
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      plugins: [
        terser(),
        obfuscator({
          compact: true,
          controlFlowFlattening: true,
          numbersToExpressions: true,
          simplify: true,
          stringArray: true,
          stringArrayEncoding: ["base64"],
          stringArrayThreshold: 0.75,
          renameGlobals: true,
          selfDefending: true,
        }),
      ],
    },
  },
});
