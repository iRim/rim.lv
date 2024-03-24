import { defineConfig, splitVendorChunkPlugin } from "vite";
import commonjs from "@rollup/plugin-commonjs";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

const ASSET_URL = process.env.ASSET_URL || "";

export default defineConfig({
    base: `${ASSET_URL}/`,
    root: './src/static',

    server: {
        host: "0.0.0.0",
        hmr: {
            host: "localhost",
        },
    },

    build: {
        outDir: path.resolve(__dirname, "public/"),
        emptyOutDir: true,
        manifest: true,
        target: "es2018",
        rollupOptions: {
            output: {
                manualChunks: {
                    vue: ["vue", "vue-router", "pinia"],
                },
                chunkFileNames: "js/[name]-[hash].js",
                entryFileNames: "js/[name]-[hash].js",

                assetFileNames: ({ name }) => {
                    if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
                        return "img/[name]-[hash][extname]";
                    }
                    if (/\.css$/.test(name ?? "")) {
                        return "css/[name]-[hash][extname]";
                    }
                    return "[name]-[hash][extname]";
                },
            },
        },
        assetsInlineLimit: 0,
    },
    plugins: [
        [commonjs()],
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: true,
                },
            },
        }),
        viteStaticCopy({
            targets: [
                {
                    src: "@static/*",
                    dest: "./public",
                },
            ],
        }),

        [splitVendorChunkPlugin()],
    ],
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
            "@": path.resolve(__dirname, "./src"),
            "@static": path.resolve(__dirname, "./src/static"),
            "@components": path.resolve(
                __dirname,
                "./src/components"
            ),
            "@pages": path.resolve(
                __dirname,
                "./src/pages"
            ),
        },
    },
});