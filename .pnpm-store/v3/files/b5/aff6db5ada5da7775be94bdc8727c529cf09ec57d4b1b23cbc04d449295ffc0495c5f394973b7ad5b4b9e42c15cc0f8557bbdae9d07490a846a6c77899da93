var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  loadCollection: () => loadCollection,
  locate: () => locate,
  lookupCollection: () => lookupCollection,
  lookupCollections: () => lookupCollections
});

// node_modules/tsup/assets/cjs_shims.js
var getImportMetaUrl = () => typeof document === "undefined" ? new URL("file:" + __filename).href : document.currentScript && document.currentScript.src || new URL("main.js", document.baseURI).href;
var importMetaUrl = /* @__PURE__ */ getImportMetaUrl();

// src/index.ts
var import_fs = require("fs");
var import_url = require("url");
var import_pathe = require("pathe");
var _dirname = typeof __dirname !== "undefined" ? __dirname : (0, import_pathe.dirname)((0, import_url.fileURLToPath)(importMetaUrl));
var dir = (0, import_pathe.join)(_dirname, "/..");
var locate = (name) => (0, import_pathe.join)(dir, `./json/${name}.json`);
var loadCollection = async (path) => {
  return JSON.parse(await import_fs.promises.readFile(path, "utf8"));
};
var lookupCollection = async (name) => {
  return await loadCollection(locate(name));
};
var lookupCollections = async () => {
  return JSON.parse(await import_fs.promises.readFile((0, import_pathe.join)(dir, "./collections.json"), "utf8"));
};
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  loadCollection,
  locate,
  lookupCollection,
  lookupCollections
});
/**
 * This file is part of the iconify.design libraries.
 *
 * (c) Vjacheslav Trushkin <cyberalien@gmail.com>
 *
 * @license MIT
 *
 * For the full copyright and license information, please view the license.txt
 * file that is available in this file's directory.
 */
