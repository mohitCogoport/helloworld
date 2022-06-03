import resolve from 'rollup-plugin-node-resolve';
import  babel  from  '@rollup/plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace'
import svg from 'rollup-plugin-svg'
import json from '@rollup/plugin-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
// import {terser} from 'rollup-plugin-terser'
import svgr from '@svgr/rollup'
import React from 'react';

const NODE_ENV = process.env.NODE_ENV || "development";
const outputFile = NODE_ENV === "production" ? "./lib/prod.js" : "./lib/dev.js";

const x={
    input: "./src/Dashboard/DashboardPage/index.js",
    output: {
      file: outputFile,
      format: "cjs",
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      }
    },
    plugins: [
      replace({
        "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
      }),
      babel({
        exclude: "node_modules/**",
        presets: [["@babel/preset-react", {
      "runtime": "automatic"
      }]],
        babelHelpers: "bundled",
      }),
      resolve(),
      commonjs(),
      svg(),
      svgr({
				ref           : false,
				runtimeConfig : false,
				icon          : true,
				dimensions    : true,
				native        : false,
				expandProps   : 'end',
				svgo          : true,
				titleProp     : true,
				svgoConfig    : { plugins: [{ removeTitle: false }] },
			}),
      json(),
      postcss(),
      peerDepsExternal(),
      // terser()
    ],
    external: [ 'react' ,'styled-jsx', 'react-dom' ],
}

export default x;