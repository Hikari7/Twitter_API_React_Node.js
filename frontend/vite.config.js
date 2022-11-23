import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import axios from "axios";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   proxy: {
//     "/api": {
//       target: "https://localhost:4000",
//       changeOrigin: true,
//       secure: false,
//       ws: true,
//     },
//   },
// });
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        // changeOrigin: true,
        secure: false,
      },
    },
  },
});
