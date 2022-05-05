import { escapeRegExp } from '@unocss/core';

const variantMatcher = (name, selector) => {
  const re = new RegExp(`^${escapeRegExp(name)}[:-]`);
  return {
    match: (input) => {
      const match = input.match(re);
      if (match) {
        return {
          matcher: input.slice(match[0].length),
          selector
        };
      }
    },
    autocomplete: `${name}:`
  };
};
const variantParentMatcher = (name, parent) => {
  const re = new RegExp(`^${escapeRegExp(name)}[:-]`);
  return {
    match: (input) => {
      const match = input.match(re);
      if (match) {
        return {
          matcher: input.slice(match[0].length),
          parent
        };
      }
    },
    autocomplete: `${name}:`
  };
};

export { variantMatcher as a, variantParentMatcher as v };
