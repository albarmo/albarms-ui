import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

import packageJson from "./package.json" assert { type: "json" };
import postcss from "rollup-plugin-postcss";

import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default [
    // ---------- JS / ESM / CJS BUILD ----------
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),

            resolve(),

            commonjs(),

            postcss({
                extract: true,
                modules: false,
                minimize: true,
            }),

            typescript({
                tsconfig: "./tsconfig.json",
                declaration: false, // ⛔ DO NOT emit here
                noEmit: false,
            }),

            terser(),
        ],
    },

    // ---------- TYPE DECLARATION BUILD ----------
    {
        input: "src/index.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [
            dts({
                respectExternal: true,
            }),
        ],
        external: [/\.css$/, /\.scss$/],
    },
];
