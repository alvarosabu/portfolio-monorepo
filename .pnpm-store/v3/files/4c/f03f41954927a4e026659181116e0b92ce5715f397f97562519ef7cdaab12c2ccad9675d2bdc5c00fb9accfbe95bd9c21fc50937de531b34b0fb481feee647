'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var module$1 = require('module');
var url = require('url');
var vm = require('vm');
var pathe = require('pathe');
var mlly = require('mlly');
var utils = require('./utils.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var vm__default = /*#__PURE__*/_interopDefaultLegacy(vm);

const DEFAULT_REQUEST_STUBS = {
  "/@vite/client": {
    injectQuery: (id) => id,
    createHotContext() {
      return {
        accept: () => {
        },
        prune: () => {
        },
        dispose: () => {
        },
        decline: () => {
        },
        invalidate: () => {
        },
        on: () => {
        }
      };
    },
    updateStyle() {
    }
  }
};
class ModuleCacheMap extends Map {
  normalizePath(fsPath) {
    return utils.normalizeModuleId(fsPath);
  }
  set(fsPath, mod) {
    fsPath = this.normalizePath(fsPath);
    if (!super.has(fsPath))
      super.set(fsPath, mod);
    else
      Object.assign(super.get(fsPath), mod);
    return this;
  }
  get(fsPath) {
    fsPath = this.normalizePath(fsPath);
    return super.get(fsPath);
  }
  delete(fsPath) {
    fsPath = this.normalizePath(fsPath);
    return super.delete(fsPath);
  }
}
class ViteNodeRunner {
  constructor(options) {
    this.options = options;
    this.root = options.root ?? process.cwd();
    this.moduleCache = options.moduleCache ?? new ModuleCacheMap();
    this.debug = options.debug ?? (typeof process !== "undefined" ? !!process.env.VITE_NODE_DEBUG : false);
  }
  async executeFile(file) {
    return await this.cachedRequest(`/@fs/${utils.slash(pathe.resolve(file))}`, []);
  }
  async executeId(id) {
    return await this.cachedRequest(id, []);
  }
  async cachedRequest(rawId, callstack) {
    var _a, _b;
    const id = utils.normalizeRequestId(rawId, this.options.base);
    const fsPath = utils.toFilePath(id, this.root);
    if ((_a = this.moduleCache.get(fsPath)) == null ? void 0 : _a.promise)
      return (_b = this.moduleCache.get(fsPath)) == null ? void 0 : _b.promise;
    const promise = this.directRequest(id, fsPath, callstack);
    this.moduleCache.set(fsPath, { promise });
    return await promise;
  }
  async directRequest(id, fsPath, _callstack) {
    const callstack = [..._callstack, utils.normalizeModuleId(id)];
    const request = async (dep) => {
      var _a, _b;
      const getStack = () => {
        return `stack:
${[...callstack, dep].reverse().map((p) => `- ${p}`).join("\n")}`;
      };
      if (this.options.resolveId && this.shouldResolveId(dep)) {
        const resolvedDep = await this.options.resolveId(dep, id);
        dep = ((_a = resolvedDep == null ? void 0 : resolvedDep.id) == null ? void 0 : _a.replace(this.root, "")) || dep;
      }
      let debugTimer;
      if (this.debug)
        debugTimer = setTimeout(() => this.debugLog(() => `module ${dep} takes over 2s to load.
${getStack()}`), 2e3);
      try {
        if (callstack.includes(utils.normalizeModuleId(dep))) {
          this.debugLog(() => `circular dependency, ${getStack()}`);
          const depExports = (_b = this.moduleCache.get(dep)) == null ? void 0 : _b.exports;
          if (depExports)
            return depExports;
          throw new Error(`[vite-node] Failed to resolve circular dependency, ${getStack()}`);
        }
        const mod = await this.cachedRequest(dep, callstack);
        return mod;
      } finally {
        if (debugTimer)
          clearTimeout(debugTimer);
      }
    };
    const requestStubs = this.options.requestStubs || DEFAULT_REQUEST_STUBS;
    if (id in requestStubs)
      return requestStubs[id];
    const { code: transformed, externalize } = await this.options.fetchModule(id);
    if (externalize) {
      const mod = await this.interopedImport(externalize);
      this.moduleCache.set(fsPath, { exports: mod });
      return mod;
    }
    if (transformed == null)
      throw new Error(`[vite-node] Failed to load ${id}`);
    const url$1 = url.pathToFileURL(fsPath).href;
    const exports = /* @__PURE__ */ Object.create(null);
    exports[Symbol.toStringTag] = "Module";
    this.moduleCache.set(id, { code: transformed, exports });
    const __filename = url.fileURLToPath(url$1);
    const moduleProxy = {
      set exports(value) {
        exportAll(exports, value);
        exports.default = value;
      },
      get exports() {
        return exports.default;
      }
    };
    const context = this.prepareContext({
      __vite_ssr_import__: request,
      __vite_ssr_dynamic_import__: request,
      __vite_ssr_exports__: exports,
      __vite_ssr_exportAll__: (obj) => exportAll(exports, obj),
      __vite_ssr_import_meta__: { url: url$1 },
      require: module$1.createRequire(url$1),
      exports,
      module: moduleProxy,
      __filename,
      __dirname: pathe.dirname(__filename)
    });
    const fn = vm__default["default"].runInThisContext(`'use strict';async (${Object.keys(context).join(",")})=>{{${transformed}
}}`, {
      filename: fsPath,
      lineOffset: 0
    });
    await fn(...Object.values(context));
    return exports;
  }
  prepareContext(context) {
    return context;
  }
  shouldResolveId(dep) {
    if (mlly.isNodeBuiltin(dep) || dep in (this.options.requestStubs || DEFAULT_REQUEST_STUBS))
      return false;
    return !pathe.isAbsolute(dep) || !pathe.extname(dep);
  }
  shouldInterop(path, mod) {
    if (this.options.interopDefault === false)
      return false;
    return !path.endsWith(".mjs") && "default" in mod;
  }
  async interopedImport(path) {
    const mod = await (function (t) { return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(t)); }); })(path);
    if (this.shouldInterop(path, mod)) {
      const tryDefault = this.hasNestedDefault(mod);
      return new Proxy(mod, {
        get: proxyMethod("get", tryDefault),
        set: proxyMethod("set", tryDefault),
        has: proxyMethod("has", tryDefault),
        deleteProperty: proxyMethod("deleteProperty", tryDefault)
      });
    }
    return mod;
  }
  hasNestedDefault(target) {
    return "__esModule" in target && target.__esModule && "default" in target.default;
  }
  debugLog(msg) {
    if (this.debug)
      console.log(`[vite-node] ${msg()}`);
  }
}
function proxyMethod(name, tryDefault) {
  return function(target, key, ...args) {
    const result = Reflect[name](target, key, ...args);
    if (utils.isPrimitive(target.default))
      return result;
    if (tryDefault && key === "default" || typeof result === "undefined")
      return Reflect[name](target.default, key, ...args);
    return result;
  };
}
function exportAll(exports, sourceModule) {
  for (const key in sourceModule) {
    if (key !== "default") {
      try {
        Object.defineProperty(exports, key, {
          enumerable: true,
          configurable: true,
          get() {
            return sourceModule[key];
          }
        });
      } catch (_err) {
      }
    }
  }
}

exports.DEFAULT_REQUEST_STUBS = DEFAULT_REQUEST_STUBS;
exports.ModuleCacheMap = ModuleCacheMap;
exports.ViteNodeRunner = ViteNodeRunner;
