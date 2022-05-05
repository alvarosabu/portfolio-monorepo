import minimist from 'minimist';
import { red, dim } from 'kolorist';
import { createServer } from 'vite';
import { ViteNodeServer } from './server.js';
import { ViteNodeRunner } from './client.js';
import 'pathe';
import 'fs';
import 'mlly';
import './utils.js';
import 'url';
import 'module';
import 'vm';

const argv = minimist(process.argv.slice(2), {
  "alias": {
    r: "root",
    c: "config",
    h: "help",
    w: "watch",
    s: "silent"
  },
  "--": true,
  "string": ["root", "config"],
  "boolean": ["help", "watch", "silent"],
  unknown(name) {
    if (name[0] === "-") {
      console.error(red(`Unknown argument: ${name}`));
      help();
      process.exit(1);
    }
    return true;
  }
});
if (argv.help) {
  help();
  process.exit(0);
}
if (!argv._.length) {
  console.error(red("No files specified."));
  help();
  process.exit(1);
}
process.argv = [...process.argv.slice(0, 2), ...argv["--"] || []];
run(argv);
function help() {
  console.log(`
Usage:
  $ vite-node [options] [files]

Options:
  -r, --root <path>      ${dim("[string]")} use specified root directory
  -c, --config <file>    ${dim("[string]")} use specified config file
  -w, --watch           ${dim("[boolean]")} restart on file changes, similar to "nodemon"
  -s, --silent          ${dim("[boolean]")} do not emit errors and logs
  --vue                 ${dim("[boolean]")} support for importing Vue component
`);
}
async function run(options = {}) {
  const files = options.files || options._ || [];
  const server = await createServer({
    logLevel: "error",
    configFile: options.config,
    root: options.root
  });
  await server.pluginContainer.buildStart({});
  const node = new ViteNodeServer(server);
  const runner = new ViteNodeRunner({
    root: server.config.root,
    base: server.config.base,
    fetchModule(id) {
      return node.fetchModule(id);
    },
    resolveId(id, importer) {
      return node.resolveId(id, importer);
    }
  });
  await runner.executeId("/@vite/env");
  for (const file of files)
    await runner.executeFile(file);
  if (!options.watch)
    await server.close();
  server.watcher.on("change", async (eventName, path) => {
    console.log(dim(`[${eventName}] ${path}`));
    Array.from(runner.moduleCache.keys()).forEach((i) => {
      if (!i.includes("node_modules"))
        runner.moduleCache.delete(i);
    });
    for (const file of files)
      await runner.executeFile(file);
  });
}
