import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],

    // github pages folder
    base: "/skylight-ksa/",

    build: {
        outDir: "dist",
    }
});
