import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // 👇 IMPORTANT: this must match your repo name
    base: "/skylight-ksa/",
});
