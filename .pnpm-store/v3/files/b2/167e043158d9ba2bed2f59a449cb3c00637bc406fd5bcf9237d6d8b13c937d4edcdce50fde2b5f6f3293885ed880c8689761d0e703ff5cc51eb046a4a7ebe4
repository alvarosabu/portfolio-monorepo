'use strict';

var minimist = require('minimist');
var kolorist = require('kolorist');
var vite = require('vite');
var server = require('./server.cjs');
var client = require('./client.cjs');
require('pathe');
require('fs');
require('mlly');
require('./utils.cjs');
require('url');
require('module');
require('vm');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var minimist__default = /*#__PURE__*/_interopDefaultLegacy(minimist);

const argv = minimist__default["default"](process.argv.slice(2), {
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
      console.error(kolorist.red(`Unknown argument: ${name}`));
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
  console.error(kolorist.red("No files specified."));
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
  -r, --root <path>      ${kolorist.dim("[string]")} use specified root directory
  -c, --config <file>    ${kolorist.dim("[string]")} use specified config file
  -w, --watch           ${kolorist.dim("[boolean]")} restart on file changes, similar to "nodemon"
  -s, --silent          ${kolorist.dim("[boolean]")} do not emit errors and logs
  --vue                 ${kolorist.dim("[boolean]")} support for importing Vue component
`);
}
async function run(options = {}) {
  const files = options.files || options._ || [];
  const server$1 = await vite.createServer({
    logLevel: "error",
    configFile: options.config,
    root: options.root
  });
  await server$1.pluginContainer.buildStart({});
  const node = new server.ViteNodeServer(server$1);
  const runner = new client.ViteNodeRunner({
    root: server$1.config.root,
    base: server$1.config.base,
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
    await server$1.close();
  server$1.watcher.on("change", async (eventName, path) => {
    console.log(kolorist.dim(`[${eventName}] ${path}`));
    Array.from(runner.moduleCache.keys()).forEach((i) => {
      if (!i.includes("node_modules"))
        runner.moduleCache.delete(i);
    });
    for (const file of files)
      await runner.executeFile(file);
  });
}
