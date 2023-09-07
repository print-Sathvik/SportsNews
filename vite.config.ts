import { PluginOption, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default ({ mode }: { mode: any }) => {
  return defineConfig({
    build: {
      outDir: "build",
    },
    plugins: [
      react(),
      VitePWA({
        devOptions: {
          enabled: true,
        },
        manifest: {
          name: "Arena application",
          short_name: "Arena",
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
              purpose: "any maskable",
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
