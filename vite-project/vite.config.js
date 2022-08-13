import { defineConfig } from "vite"

export default defineConfig (() => {
    const port = 2020
    return {
        server: {
            port
        }
    }
})