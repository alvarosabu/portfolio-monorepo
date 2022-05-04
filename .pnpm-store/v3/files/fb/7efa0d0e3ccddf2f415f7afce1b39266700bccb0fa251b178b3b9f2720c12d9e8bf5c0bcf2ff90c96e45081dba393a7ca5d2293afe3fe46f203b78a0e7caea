'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('@unocss/core');
const utils = require('@iconify/utils');
const encodeSvgForCss = require('@iconify/utils/lib/svg/encode-svg-for-css');

const isNode = typeof process < "u" && typeof process.stdout < "u" && !process.versions.deno;
const isVSCode = isNode && !!process.env.VSCODE_CWD;

const COLLECTION_NAME_PARTS_MAX = 3;
async function lookupIconLoader() {
  let useIconLoader;
  if (isNode && !isVSCode) {
    try {
      useIconLoader = await import('@iconify/utils/lib/loader/node-loader').then((i) => i?.loadNodeIcon);
    } catch {
      try {
        useIconLoader = require("@iconify/utils/lib/loader/node-loader.cjs");
      } catch {
        useIconLoader = utils.loadIcon;
      }
    }
  }
  return useIconLoader ?? utils.loadIcon;
}
const preset = (options = {}) => {
  const {
    scale = 1,
    mode = "auto",
    prefix = "i-",
    warn = false,
    collections: customCollections,
    extraProperties = {},
    customizations = {},
    autoInstall = false,
    layer = "icons",
    unit
  } = options;
  return {
    name: "@unocss/preset-icons",
    enforce: "pre",
    options,
    layers: {
      icons: -10
    },
    rules: [[
      new RegExp(`^${prefix}([a-z0-9:-]+)(?:\\?(mask|bg|auto))?$`),
      async ([full, body, _mode = mode]) => {
        let collection = "";
        let name = "";
        let svg;
        const iconLoader = await lookupIconLoader();
        const iconifyLoaderOptions = {
          addXmlNs: true,
          scale,
          customCollections,
          autoInstall,
          warn: void 0,
          customizations: {
            ...customizations,
            additionalProps: { ...extraProperties },
            trimCustomSvg: true,
            async iconCustomizer(collection2, icon, props) {
              await customizations.iconCustomizer?.(collection2, icon, props);
              if (unit) {
                if (!props.width)
                  props.width = `${scale}${unit}`;
                if (!props.height)
                  props.height = `${scale}${unit}`;
              }
            }
          },
          usedProps: {}
        };
        if (body.includes(":")) {
          [collection, name] = body.split(":");
          svg = await iconLoader(collection, name, iconifyLoaderOptions);
        } else {
          const parts = body.split(/-/g);
          for (let i = COLLECTION_NAME_PARTS_MAX; i >= 1; i--) {
            collection = parts.slice(0, i).join("-");
            name = parts.slice(i).join("-");
            svg = await iconLoader(collection, name, iconifyLoaderOptions);
            if (svg)
              break;
          }
        }
        if (!svg) {
          if (warn)
            core.warnOnce(`failed to load icon "${full}"`);
          return;
        }
        const url = `url("data:image/svg+xml;utf8,${encodeSvgForCss.encodeSvgForCss(svg)}")`;
        if (_mode === "auto")
          _mode = svg.includes("currentColor") ? "mask" : "bg";
        if (_mode === "mask") {
          return {
            "--un-icon": url,
            "mask": "var(--un-icon) no-repeat",
            "mask-size": "100% 100%",
            "-webkit-mask": "var(--un-icon) no-repeat",
            "-webkit-mask-size": "100% 100%",
            "background-color": "currentColor",
            ...iconifyLoaderOptions.usedProps
          };
        } else {
          return {
            "background": `${url} no-repeat`,
            "background-size": "100% 100%",
            "background-color": "transparent",
            ...iconifyLoaderOptions.usedProps
          };
        }
      },
      { layer }
    ]]
  };
};

exports["default"] = preset;
exports.preset = preset;
