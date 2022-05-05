import { Module } from 'module';

const NodeBuiltinModules = Module.builtinModules;
function mapArrToVal(val, arr) {
  return arr.reduce((p, c) => ({ ...p, [c]: val }), {});
}

const node = {
  inject: {
    fetch: "node-fetch",
    Request: ["node-fetch", "Request"],
    Response: ["node-fetch", "Response"],
    Headers: ["node-fetch", "Headers"]
  },
  polyfill: [
    "unenv/runtime/polyfill/fetch.node"
  ],
  external: [
    ...NodeBuiltinModules
  ]
};

const nodeless = {
  alias: {
    ...mapArrToVal("unenv/runtime/mock/proxy-cjs", NodeBuiltinModules),
    http: "unenv/runtime/node/http/index",
    net: "unenv/runtime/node/net/index",
    stream: "unenv/runtime/node/stream/index",
    url: "unenv/runtime/node/url/index",
    process: "unenv/runtime/polyfill/process",
    _process: "process/browser.js",
    buffer: "buffer/index.js",
    util: "util/util.js",
    events: "events/events.js",
    inherits: "inherits/inherits_browser.js",
    etag: "unenv/runtime/mock/noop",
    "mime-db": "unenv/runtime/npm/mime-db",
    mime: "unenv/runtime/npm/mime",
    fsevents: "unenv/runtime/npm/fsevents",
    "node-fetch": "unenv/runtime/npm/node-fetch",
    _mime: "mime/lite.js"
  },
  inject: {
    process: "unenv/runtime/polyfill/process",
    Buffer: ["buffer", "Buffer"]
  },
  polyfill: [
    "unenv/runtime/polyfill/process"
  ]
};

function env(...presets) {
  const _env = {
    alias: {},
    inject: {},
    polyfill: [],
    external: []
  };
  for (const preset of presets) {
    if (preset.alias) {
      for (const from in preset.alias) {
        _env.alias[from] = preset.alias[from];
      }
    }
    if (preset.inject) {
      for (const global in preset.inject) {
        if (Array.isArray(preset.inject[global])) {
          const [id, ...path] = preset.inject[global];
          _env.inject[global] = [id, ...path];
        } else {
          _env.inject[global] = preset.inject[global];
        }
      }
    }
    if (preset.polyfill) {
      _env.polyfill.push(...preset.polyfill.filter(Boolean));
    }
    if (preset.external) {
      _env.external.push(...preset.external);
    }
  }
  return _env;
}

export { NodeBuiltinModules, env, mapArrToVal, node, nodeless };
