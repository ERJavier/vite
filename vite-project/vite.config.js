import { defineConfig } from "vite"

export default defineConfig(({command, mode}) => {
    const port = 2020

    console.log(command, mode)
    
    return {
        server: {
            port
        }
    }
})