import resolve from 'rollup-plugin-node-resolve';
import  babel  from  '@rollup/plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace'
import svg from 'rollup-plugin-svg'
import json from '@rollup/plugin-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import {terser} from 'rollup-plugin-terser'
// import svgr from '@svgr/rollup'

const NODE_ENV = process.env.NODE_ENV || "development";
const outputFile = NODE_ENV === "production" ? "./lib/prod.js" : "./lib/dev.js";

const x={
    input: "./src/Dashboard/DashboardPage/index.js",
    output: {
      file: outputFile,
      format: "cjs" 
    },
    plugins: [
      replace({
        "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        babelHelpers: "bundled",
      }),
      resolve(),
      commonjs(),
      svg(),
      json(),
      postcss(),
      peerDepsExternal(),
      terser()
    ],
    external: id => /^react|styled-jsx/.test(id)
}

export default x;