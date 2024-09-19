import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

// import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";

import nodePolyfills from "vite-plugin-node-stdlib-browser";

export default defineConfig({
  plugins: [react(), nodePolyfills()],
});
