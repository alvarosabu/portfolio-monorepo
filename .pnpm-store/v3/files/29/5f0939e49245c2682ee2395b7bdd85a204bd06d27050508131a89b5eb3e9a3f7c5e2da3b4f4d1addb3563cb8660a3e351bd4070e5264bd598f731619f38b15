'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('@unocss/core');
const cssTree = require('css-tree');

const regexCssId = /\.(css|postcss|sass|scss|less|stylus|styl)$/;

function transformerDirectives(options) {
  return {
    name: "css-directive",
    enforce: options?.enforce,
    idFilter: (id) => !!id.match(regexCssId),
    transform: (code, id, ctx) => {
      return transformDirectives(code, ctx.uno, id);
    }
  };
}
async function transformDirectives(code, uno, filename, originalCode, offset) {
  if (!code.original.includes("@apply"))
    return;
  const ast = cssTree.parse(originalCode || code.original, {
    parseAtrulePrelude: false,
    positions: true,
    filename
  });
  const calcOffset = (pos) => offset ? pos + offset : pos;
  if (ast.type !== "StyleSheet")
    return;
  const stack = [];
  const processNode = async (node, _item, _list) => {
    if (node.type !== "Rule")
      return;
    await Promise.all(node.block.children.map(async (childNode, _childItem) => {
      if (childNode.type === "Raw")
        return transformDirectives(code, uno, filename, childNode.value, calcOffset(childNode.loc.start.offset));
      if (!(childNode.type === "Atrule" && childNode.name === "apply" && childNode.prelude))
        return;
      if (childNode.prelude.type !== "Raw")
        return;
      const classNames = core.expandVariantGroup(childNode.prelude.value).split(/\s+/g);
      const utils = (await Promise.all(classNames.map((i) => uno.parseToken(i, "-")))).filter(core.notNull).flat().sort((a, b) => a[0] - b[0]).sort((a, b) => (a[3] ? uno.parentOrders.get(a[3]) ?? 0 : 0) - (b[3] ? uno.parentOrders.get(b[3]) ?? 0 : 0)).reduce((acc, item) => {
        const target = acc.find((i) => i[1] === item[1] && i[3] === item[3]);
        if (target)
          target[2] += item[2];
        else
          acc.push([...item]);
        return acc;
      }, []);
      if (!utils.length)
        return;
      for (const i of utils) {
        const [, _selector, body, parent] = i;
        const selector = _selector?.replace(core.regexScopePlaceholder, " ") || _selector;
        if (parent || selector && selector !== ".\\-") {
          let newSelector = cssTree.generate(node.prelude);
          if (selector && selector !== ".\\-") {
            const selectorAST = cssTree.parse(selector, {
              context: "selector"
            });
            const prelude = cssTree.clone(node.prelude);
            prelude.children.forEach((child) => {
              const parentSelectorAst = cssTree.clone(selectorAST);
              parentSelectorAst.children.forEach((i2) => {
                if (i2.type === "ClassSelector" && i2.name === "\\-")
                  Object.assign(i2, cssTree.clone(child));
              });
              Object.assign(child, parentSelectorAst);
            });
            newSelector = cssTree.generate(prelude);
          }
          let css = `${newSelector}{${body}}`;
          if (parent)
            css = `${parent}{${css}}`;
          code.appendLeft(calcOffset(node.loc.end.offset), css);
        } else {
          code.appendRight(calcOffset(childNode.loc.end.offset), body);
        }
      }
      code.remove(calcOffset(childNode.loc.start.offset), calcOffset(childNode.loc.end.offset));
    }).toArray());
  };
  cssTree.walk(ast, (...args) => stack.push(processNode(...args)));
  await Promise.all(stack);
}

exports["default"] = transformerDirectives;
exports.transformDirectives = transformDirectives;
