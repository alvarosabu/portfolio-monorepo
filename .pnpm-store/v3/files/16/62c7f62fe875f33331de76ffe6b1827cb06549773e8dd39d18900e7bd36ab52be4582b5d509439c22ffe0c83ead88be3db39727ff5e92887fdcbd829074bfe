import { extractQuoted, expandVariantGroup } from '@unocss/core';

function transformerVariantGroup() {
  return {
    name: "variant-group",
    enforce: "pre",
    transform(s) {
      extractQuoted(s.toString(), {
        details: true,
        templateStaticOnly: true,
        deep: true
      }).filter(({ value: { length } }) => length).forEach(({ value, range }) => s.overwrite(...range, expandVariantGroup(value)));
    }
  };
}

export { transformerVariantGroup as default };
