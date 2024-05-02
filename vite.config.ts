import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { TanStackRouterVite } from "@tanstack/router-vite-plugin"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), TanStackRouterVite({ experimental: { enableCodeSplitting: true } })],
})
