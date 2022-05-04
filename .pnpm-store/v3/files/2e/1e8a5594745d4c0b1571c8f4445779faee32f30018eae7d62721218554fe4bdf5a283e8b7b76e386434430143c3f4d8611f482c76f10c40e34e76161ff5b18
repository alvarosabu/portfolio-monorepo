import createDebugger from 'debug';
import { mergeIconProps } from './utils.mjs';
import { trimSVG } from '../svg/trim.mjs';

const debug = createDebugger("@iconify-loader:custom");
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
    return await mergeIconProps(options?.customizations?.trimCustomSvg === true ? trimSVG(result) : result, collection, icon, options, void 0);
  }
}

export { getCustomIcon };
