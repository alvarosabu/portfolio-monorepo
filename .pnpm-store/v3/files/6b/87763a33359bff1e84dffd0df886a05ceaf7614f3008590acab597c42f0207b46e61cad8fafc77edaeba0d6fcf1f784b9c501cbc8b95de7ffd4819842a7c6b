'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const h3 = require('h3');

function isPrimitive(arg) {
  const type = typeof arg;
  return arg === null || type !== "object" && type !== "function";
}
function stringify(arg) {
  return isPrimitive(arg) ? arg + "" : JSON.stringify(arg);
}

function createStorageServer(storage, _opts = {}) {
  const app = h3.createApp();
  app.useAsync(async (req, res) => {
    if (req.method === "GET") {
      const val = await storage.getItem(req.url);
      if (!val) {
        const keys = await storage.getKeys(req.url);
        return keys.map((key) => key.replace(/:/g, "/"));
      }
      return stringify(val);
    }
    if (req.method === "HEAD") {
      const _hasItem = await storage.hasItem(req.url);
      res.statusCode = _hasItem ? 200 : 404;
      return "";
    }
    if (req.method === "PUT") {
      const val = await h3.useBody(req);
      await storage.setItem(req.url, val);
      return "OK";
    }
    if (req.method === "DELETE") {
      await storage.removeItem(req.url);
      return "OK";
    }
    throw h3.createError({
      statusCode: 405,
      statusMessage: "Method Not Allowd"
    });
  });
  return {
    handle: app
  };
}

exports.createStorageServer = createStorageServer;
