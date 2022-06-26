import * as esbuild from "esbuild";

const backgroundPath = "./src/background.ts";
const contentPath = "./src/content.ts";

const backgroundOutput = "./dist/background.js";
const contentOutput = "./dist/content.js";

await esbuild.build({
  outfile: backgroundOutput,
  entryPoints: [backgroundPath],
});
console.log("built background.ts");
await esbuild.build({
  outfile: contentOutput,
  entryPoints: [contentPath],
});
console.log("built content.ts");
