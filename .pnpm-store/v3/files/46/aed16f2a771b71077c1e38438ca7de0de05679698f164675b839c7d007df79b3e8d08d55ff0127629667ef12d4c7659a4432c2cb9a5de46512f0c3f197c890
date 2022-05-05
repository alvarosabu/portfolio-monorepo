"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
module.exports = void 0;

var readable = _interopRequireWildcard(require("./readable"));

Object.keys(readable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === readable[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return readable[key];
    }
  });
});

var writable = _interopRequireWildcard(require("./writable"));

Object.keys(writable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === writable[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return writable[key];
    }
  });
});

var duplex = _interopRequireWildcard(require("./duplex"));

Object.keys(duplex).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === duplex[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return duplex[key];
    }
  });
});

var transform = _interopRequireWildcard(require("./transform"));

Object.keys(transform).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === transform[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return transform[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = { ...readable,
  ...writable,
  ...duplex,
  ...transform
};
module.exports = _default;