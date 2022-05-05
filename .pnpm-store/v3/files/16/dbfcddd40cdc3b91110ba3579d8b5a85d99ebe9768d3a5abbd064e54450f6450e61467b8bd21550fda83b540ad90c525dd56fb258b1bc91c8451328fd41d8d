import { existsSync as existsSync$1, promises as promises$1 } from 'node:fs';
import { dirname, relative } from 'node:path';
import { e as execa } from './index5.mjs';
import require$$0, { existsSync, promises } from 'fs';
import { r as resolve } from './index3.mjs';
import require$$1 from 'path';
import os$1 from 'os';
import { j as jiti } from './index6.mjs';
import { c as consola } from './consola.mjs';
import { d as defineNuxtCommand } from './index.mjs';
import 'node:buffer';
import 'node:child_process';
import 'node:process';
import 'child_process';
import './_commonjsHelpers.mjs';
import 'node:url';
import 'node:os';
import 'assert';
import 'events';
import 'buffer';
import 'stream';
import 'util';
import 'crypto';
import 'module';
import 'vm';
import 'url';
import 'tty';
import 'v8';

var main = {exports: {}};

const fs = require$$0;
const path = require$$1;
const os = os$1;

const LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;

// Parser src into an Object
function parse (src) {
  const obj = {};

  // Convert buffer to string
  let lines = src.toString();

  // Convert line breaks to same format
  lines = lines.replace(/\r\n?/mg, '\n');

  let match;
  while ((match = LINE.exec(lines)) != null) {
    const key = match[1];

    // Default undefined or null to empty string
    let value = (match[2] || '');

    // Remove whitespace
    value = value.trim();

    // Check if double quoted
    const maybeQuote = value[0];

    // Remove surrounding quotes
    value = value.replace(/^(['"`])([\s\S]*)\1$/mg, '$2');

    // Expand newlines if double quoted
    if (maybeQuote === '"') {
      value = value.replace(/\\n/g, '\n');
      value = value.replace(/\\r/g, '\r');
    }

    // Add to object
    obj[key] = value;
  }

  return obj
}

function _log (message) {
  console.log(`[dotenv][DEBUG] ${message}`);
}

function _resolveHome (envPath) {
  return envPath[0] === '~' ? path.join(os.homedir(), envPath.slice(1)) : envPath
}

// Populates process.env from .env file
function config (options) {
  let dotenvPath = path.resolve(process.cwd(), '.env');
  let encoding = 'utf8';
  const debug = Boolean(options && options.debug);
  const override = Boolean(options && options.override);

  if (options) {
    if (options.path != null) {
      dotenvPath = _resolveHome(options.path);
    }
    if (options.encoding != null) {
      encoding = options.encoding;
    }
  }

  try {
    // Specifying an encoding returns a string instead of a buffer
    const parsed = DotenvModule.parse(fs.readFileSync(dotenvPath, { encoding }));

    Object.keys(parsed).forEach(function (key) {
      if (!Object.prototype.hasOwnProperty.call(process.env, key)) {
        process.env[key] = parsed[key];
      } else {
        if (override === true) {
          process.env[key] = parsed[key];
        }

        if (debug) {
          if (override === true) {
            _log(`"${key}" is already defined in \`process.env\` and WAS overwritten`);
          } else {
            _log(`"${key}" is already defined in \`process.env\` and was NOT overwritten`);
          }
        }
      }
    });

    return { parsed }
  } catch (e) {
    if (debug) {
      _log(`Failed to load ${dotenvPath} ${e.message}`);
    }

    return { error: e }
  }
}

const DotenvModule = {
  config,
  parse
};

main.exports.config = DotenvModule.config;
var parse_1 = main.exports.parse = DotenvModule.parse;
main.exports = DotenvModule;

async function loadDotenv(opts) {
  const env = /* @__PURE__ */ Object.create(null);
  const dotenvFile = resolve(opts.cwd, opts.fileName);
  if (existsSync(dotenvFile)) {
    const parsed = parse_1(await promises.readFile(dotenvFile, "utf-8"));
    Object.assign(env, parsed);
  }
  if (!opts.env._applied) {
    Object.assign(env, opts.env);
    env._applied = true;
  }
  if (opts.interpolate) {
    interpolate(env);
  }
  return env;
}
function interpolate(target, source = {}, parse = (v) => v) {
  function getValue(key) {
    return source[key] !== void 0 ? source[key] : target[key];
  }
  function interpolate2(value, parents = []) {
    if (typeof value !== "string") {
      return value;
    }
    const matches = value.match(/(.?\${?(?:[a-zA-Z0-9_:]+)?}?)/g) || [];
    return parse(matches.reduce((newValue, match) => {
      const parts = /(.?)\${?([a-zA-Z0-9_:]+)?}?/g.exec(match);
      const prefix = parts[1];
      let value2, replacePart;
      if (prefix === "\\") {
        replacePart = parts[0];
        value2 = replacePart.replace("\\$", "$");
      } else {
        const key = parts[2];
        replacePart = parts[0].substring(prefix.length);
        if (parents.includes(key)) {
          console.warn(`Please avoid recursive environment variables ( loop: ${parents.join(" > ")} > ${key} )`);
          return "";
        }
        value2 = getValue(key);
        value2 = interpolate2(value2, [...parents, key]);
      }
      return value2 !== void 0 ? newValue.replace(replacePart, value2) : newValue;
    }, value));
  }
  for (const key in target) {
    target[key] = interpolate2(getValue(key));
  }
}
jiti(null, { cache: false, interopDefault: true, requireCache: false });

const preview = defineNuxtCommand({
  meta: {
    name: "preview",
    usage: "npx nuxi preview|start [rootDir]",
    description: "Launches nitro server for local testing after `nuxi build`."
  },
  async invoke(args) {
    process.env.NODE_ENV = process.env.NODE_ENV || "production";
    const rootDir = resolve(args._[0] || ".");
    const nitroJSONPaths = [".output/nitro.json", "nitro.json"].map((p) => resolve(rootDir, p));
    const nitroJSONPath = nitroJSONPaths.find((p) => existsSync$1(p));
    if (!nitroJSONPath) {
      consola.error("Cannot find `nitro.json`. Did you run `nuxi build` first? Search path:\n", nitroJSONPaths);
      process.exit(1);
    }
    const outputPath = dirname(nitroJSONPath);
    const nitroJSON = JSON.parse(await promises$1.readFile(nitroJSONPath, "utf-8"));
    consola.info("Node.js version:", process.versions.node);
    consola.info("Preset:", nitroJSON.preset);
    consola.info("Working dir:", relative(process.cwd(), outputPath));
    if (!nitroJSON.commands.preview) {
      consola.error("Preview is not supported for this build.");
      process.exit(1);
    }
    if (existsSync$1(resolve(rootDir, ".env"))) {
      consola.info("Loading `.env`. This will not be loaded when running the server in production.");
      process.env = await loadDotenv({ cwd: rootDir, fileName: ".env", env: process.env });
    }
    consola.info("Starting preview command:", nitroJSON.commands.preview);
    const [command, ...commandArgs] = nitroJSON.commands.preview.split(" ");
    consola.log("");
    await execa(command, commandArgs, { stdio: "inherit", cwd: outputPath });
  }
});

export { preview as default };
