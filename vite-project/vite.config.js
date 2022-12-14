import { defineConfig, loadEnv } from "vite"
import {resolve} from 'path'

export default defineConfig(({command, mode}) => {
    const port = 2020

    console.log(command, mode)
    const env = loadEnv(mode, process.cwd())

    if (mode === "development") {
        console.log("modo desarrollo")
        return {
        server: {
        port
        }
        }
    }else{
        console.log("modo produccion")
        return{
            build:{
                // rollupOptions:{
                //     input:{
                //         main: resolve(__dirname, 'index.html'),
                //         help: resolve(__dirname, 'help', 'help.html')
                //     }
                // }
                lib:{
                    entry: resolve(__dirname, 'lib', 'main.js'),
                    name: 'demo',
                    fileName: (format) => `demo.${format}.js`
                }
            }
        }
    }

})