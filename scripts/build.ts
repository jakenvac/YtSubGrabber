import * as fs from "fs";
import * as esbuild from "esbuild";
import { tryifyAsync as ta } from "tryify";

const runBuild = async () => {
  const outdir = "./build/";

  await ta(Deno.remove)(outdir);
  await fs.copy("./static/", outdir);

  const entryPoints = ["./src/background.ts", "./src/content.ts"];

  console.log(`Building ${entryPoints.join(", ")}...`);
  await esbuild.build({
    entryPoints,
    outdir,
  });

  console.log(`Done building to ${outdir}`);
  esbuild.stop();
};

runBuild();
