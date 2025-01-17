import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // اگر از React استفاده می‌کنید
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "My Progressive Web App",
        short_name: "MyPWA",
        description: "A Vite-powered PWA",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/public/image/car192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/public/image/car512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
