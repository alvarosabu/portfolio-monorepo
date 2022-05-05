'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const createDebugger = require('debug');
const loader_utils = require('./utils.cjs');
const svg_trim = require('../svg/trim.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

const createDebugger__default = /*#__PURE__*/_interopDefaultLegacy(createDebugger);

const debug = createDebugger__default("@iconify-loader:custom");
async function getCustomIcon(custom, collection, icon, options) {
  let result;
  debug(`${collection}:${icon}`);
  if (typeof custom === "function") {
    result = await custom(icon);
  } else {
    const inline = custom[icon];
    result = typeof inline === "function" ? await inline() : inline;
  }
  if (result) {
    if (!result.startsWith("<svg")) {
      console.warn(`Custom icon "${icon}" in "${collection}" is not a valid SVG`);
      return result;
    }
    const { transform } = options?.customizations ?? {};
    result = typeof transform === "function" ? await transform(result, collection, icon) : result;
    return await loader_utils.mergeIconProps(options?.customizations?.trimCustomSvg === true ? svg_trim.trimSVG(result) : result, collection, icon, options, void 0);
  }
}

exports.getCustomIcon = getCustomIcon;
