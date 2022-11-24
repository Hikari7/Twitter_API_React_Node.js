import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        secure: false,
      },
    },
  },
});

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
