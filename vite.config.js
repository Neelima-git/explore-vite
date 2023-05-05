import { defineConfig, loadEnv } from "vite";

export default defineConfig(({command, mode, ssrBuild}) => {
    // console.log(command, mode, ssrBuild);

    //We can add base specific to mode. 
    if(mode == "production"){ // now the local url will be like http://localhost:4173/vite/ when we run in production mode
        return {
            base: "/vite/"
        }
    }

    return{};
})