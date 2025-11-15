import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
    plugins: [
        react(),
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 70, // adjust 50–80
            },
            pngquant: {
                quality: [0.6, 0.8],
                speed: 3,
            },
            svgo: {
                plugins: [
                    {
                        name: "removeViewBox",
                        active: false,
                    },
                    {
                        name: "removeEmptyAttrs",
                        active: false,
                    },
                ],
            },
            webp: {
                quality: 70, // auto-generate WebP
            },
        })
    ],

    base: "/skylight-ksa/",
    build: {
        outDir: "dist",
    }
});
