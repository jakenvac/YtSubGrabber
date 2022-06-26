import { ScriptsConfiguration } from "https://deno.land/x/velociraptor@1.5.0/mod.ts";

type script = ScriptsConfiguration["scripts"][0];

const buildScript: script = {
  unstable: true,
  allow: ["read", "write", "env", "run", "net"],
  cmd: "deno run ./scripts/build.ts",
};

const scriptConfig: ScriptsConfiguration = {
  importMap: "import_map.json",
  scripts: {
    build: buildScript,
    "build:watch": {
      ...buildScript,
      watch: ["./src/content.ts", "./src/background.ts"],
    },
    cache: "deno cache ./scripts/build.ts ./src/content.ts ./src/background.ts",
  },
};

export default scriptConfig;
