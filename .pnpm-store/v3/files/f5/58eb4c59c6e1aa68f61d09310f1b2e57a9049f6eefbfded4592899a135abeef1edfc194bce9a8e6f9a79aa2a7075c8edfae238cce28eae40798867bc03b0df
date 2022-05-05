'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('@unocss/core');

const DEFAULT = {
  "h1,h2,h3,h4,h5,h6": {
    "color": "var(--un-prose-headings)",
    "font-weight": "600",
    "line-height": 1.25
  },
  "a": {
    "color": "var(--un-prose-links)",
    "text-decoration": "underline",
    "font-weight": "500"
  },
  "a code": {
    color: "var(--un-prose-links)"
  },
  "p,ul,ol,pre": {
    "margin": "1em 0",
    "line-height": 1.75
  },
  "blockquote": {
    "margin": "1em 0",
    "padding-left": "1em",
    "font-style": "italic",
    "border-left": ".25em solid var(--un-prose-borders)"
  },
  "h1": {
    "margin": "1rem 0",
    "font-size": "2.25em"
  },
  "h2": {
    "margin": "1.75em 0 .5em",
    "font-size": "1.75em"
  },
  "h3": {
    "margin": "1.5em 0 .5em",
    "font-size": "1.375em"
  },
  "h4": {
    "margin": "1em 0",
    "font-size": "1.125em"
  },
  "img,video": {
    "max-width": "100%"
  },
  "figure,picture": {
    margin: "1em 0"
  },
  "figcaption": {
    "color": "var(--un-prose-captions)",
    "font-size": ".875em"
  },
  "code": {
    "color": "var(--un-prose-code)",
    "font-size": ".875em",
    "font-weight": 600,
    "font-family": "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation-Mono,Courier-New,monospace"
  },
  ":not(pre) > code::before,:not(pre) > code::after": {
    content: '"`"'
  },
  "pre": {
    "padding": "1.25rem 1.5rem",
    "overflow-x": "auto",
    "border-radius": ".375rem"
  },
  "pre,code": {
    "white-space": "pre",
    "word-spacing": "normal",
    "word-break": "normal",
    "word-wrap": "normal",
    "-moz-tab-size": 4,
    "-o-tab-size": 4,
    "tab-size": 4,
    "-webkit-hyphens": "none",
    "-moz-hyphens": "none",
    "hyphens": "none",
    "background": "transparent"
  },
  "pre code": {
    "font-weight": "inherit"
  },
  "ol,ul": {
    "padding-left": "1.25em"
  },
  "ol": {
    "list-style-type": "decimal"
  },
  'ol[type="A"]': {
    "list-style-type": "upper-alpha"
  },
  'ol[type="a"]': {
    "list-style-type": "lower-alpha"
  },
  'ol[type="A" s]': {
    "list-style-type": "upper-alpha"
  },
  'ol[type="a" s]': {
    "list-style-type": "lower-alpha"
  },
  'ol[type="I"]': {
    "list-style-type": "upper-roman"
  },
  'ol[type="i"]': {
    "list-style-type": "lower-roman"
  },
  'ol[type="I" s]': {
    "list-style-type": "upper-roman"
  },
  'ol[type="i" s]': {
    "list-style-type": "lower-roman"
  },
  'ol[type="1"]': {
    "list-style-type": "decimal"
  },
  "ul": {
    "list-style-type": "disc"
  },
  "ol > li::marker,ul > li::marker,summary::marker": {
    color: "var(--un-prose-lists)"
  },
  "hr": {
    margin: "2em 0",
    border: "1px solid var(--un-prose-hr)"
  },
  "table": {
    "display": "block",
    "margin": "1em 0",
    "border-collapse": "collapse",
    "overflow-x": "auto"
  },
  "tr:nth-child(2n)": {
    background: "var(--un-prose-bg-soft)"
  },
  "td,th": {
    border: "1px solid var(--un-prose-borders)",
    padding: ".625em 1em"
  },
  "abbr": {
    cursor: "help"
  },
  "kbd": {
    "color": "var(--un-prose-code)",
    "border": "1px solid",
    "padding": ".25rem .5rem",
    "font-size": ".875em",
    "border-radius": ".25rem"
  },
  "details": {
    margin: "1em 0",
    padding: "1.25rem 1.5rem",
    background: "var(--un-prose-bg-soft)"
  },
  "summary": {
    "cursor": "pointer",
    "font-weight": "600"
  }
};

function getCSS(selectorProse, className, preflights) {
  let css = "";
  for (const selector in preflights) {
    const cssDeclarationBlock = preflights[selector];
    const pseudoCSSMatchArray = selector.split(",").map((s) => {
      const match = s.match(/::?(?:[\(\)\:\-\d\w]+)$/g);
      if (match) {
        const matchStr = match[0];
        s = s.replace(matchStr, "");
        return `${selectorProse} :where(${s}):not(.not-${className})${matchStr}`;
      }
      return null;
    }).filter((v) => v);
    if (pseudoCSSMatchArray.length) {
      css += pseudoCSSMatchArray.join(",");
    } else {
      css += `${selectorProse} :where(${selector}):not(.not-${className})`;
    }
    css += "{";
    for (const k in cssDeclarationBlock) {
      const v = cssDeclarationBlock[k];
      css += `${k}:${v};`;
    }
    css += "}";
  }
  return css;
}
function getPreflights(selectorProse, className, cssExtend) {
  if (!selectorProse.startsWith("["))
    selectorProse = `.${selectorProse}`;
  if (cssExtend)
    return getCSS(selectorProse, className, core.mergeDeep(DEFAULT, cssExtend));
  return getCSS(selectorProse, className, DEFAULT);
}

function presetTypography(options) {
  let hasProseClass = false;
  let selectorProse = "";
  const className = options?.className || "prose";
  const classNameRE = new RegExp(`^${className}$`);
  const colorsRE = new RegExp(`^${className}-([-\\w]+)$`);
  const invertRE = new RegExp(`^${className}-invert$`);
  const cssExtend = options?.cssExtend;
  return {
    name: "@unocss/preset-typography",
    enforce: "post",
    layers: { typography: -1 },
    rules: [
      [
        classNameRE,
        (_, { rawSelector }) => {
          hasProseClass = true;
          selectorProse = rawSelector;
          return { "color": "var(--un-prose-body)", "max-width": "65ch" };
        },
        { layer: "typography" }
      ],
      [
        colorsRE,
        ([, color], { theme }) => {
          const baseColor = theme.colors?.[color];
          if (baseColor == null)
            return;
          const colorObject = typeof baseColor === "object" ? baseColor : {};
          return {
            "--un-prose-body": colorObject[700] ?? baseColor,
            "--un-prose-headings": colorObject[900] ?? baseColor,
            "--un-prose-links": colorObject[900] ?? baseColor,
            "--un-prose-lists": colorObject[400] ?? baseColor,
            "--un-prose-hr": colorObject[200] ?? baseColor,
            "--un-prose-captions": colorObject[500] ?? baseColor,
            "--un-prose-code": colorObject[900] ?? baseColor,
            "--un-prose-borders": colorObject[200] ?? baseColor,
            "--un-prose-bg-soft": colorObject[100] ?? baseColor,
            "--un-prose-invert-body": colorObject[200] ?? baseColor,
            "--un-prose-invert-headings": colorObject[100] ?? baseColor,
            "--un-prose-invert-links": colorObject[100] ?? baseColor,
            "--un-prose-invert-lists": colorObject[500] ?? baseColor,
            "--un-prose-invert-hr": colorObject[700] ?? baseColor,
            "--un-prose-invert-captions": colorObject[400] ?? baseColor,
            "--un-prose-invert-code": colorObject[100] ?? baseColor,
            "--un-prose-invert-borders": colorObject[700] ?? baseColor,
            "--un-prose-invert-bg-soft": colorObject[800] ?? baseColor
          };
        },
        { layer: "typography" }
      ],
      [
        invertRE,
        () => {
          return {
            "--un-prose-body": "var(--un-prose-invert-body)",
            "--un-prose-headings": "var(--un-prose-invert-headings)",
            "--un-prose-links": "var(--un-prose-invert-links)",
            "--un-prose-lists": "var(--un-prose-invert-lists)",
            "--un-prose-hr": "var(--un-prose-invert-hr)",
            "--un-prose-captions": "var(--un-prose-invert-captions)",
            "--un-prose-code": "var(--un-prose-invert-code)",
            "--un-prose-borders": "var(--un-prose-invert-borders)",
            "--un-prose-bg-soft": "var(--un-prose-invert-bg-soft)"
          };
        },
        { layer: "typography" }
      ]
    ],
    preflights: [
      {
        layer: "typography",
        getCSS: () => hasProseClass ? getPreflights(selectorProse, className, cssExtend) : void 0
      }
    ]
  };
}

exports["default"] = presetTypography;
exports.presetTypography = presetTypography;
