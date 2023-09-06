import { PluginOption, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default ({ mode } : { mode: any}) => {
  return defineConfig({
    build: {
      outDir: "build",
    },
    server: {
      port: 4000,
    },
    plugins: [
      react(),
      VitePWA({
        devOptions: {
          enabled: true, // For making sure that the PWA is testable from the Local dev environment
        },
        manifest: {
          name: "Smarter Tasks application",
          short_name: "Smarter Tasks",
          icons: [
            {
              src: "/pwa-192x192.png",
              type: "image/png",
              sizes: "192x192",
            },
            {
              src: "/pwa-512x512.png",
              type: "image/png",
              sizes: "512x512",
              purpose: "any maskable", // Icon format that ensures that your PWA icon looks great on all Android devices
            },
          ],
          theme_color: "#AAF",
        },
      }),
    ],
    define: {
      "process.env.NODE_ENV": `"${mode}"`,
    },
  });
};