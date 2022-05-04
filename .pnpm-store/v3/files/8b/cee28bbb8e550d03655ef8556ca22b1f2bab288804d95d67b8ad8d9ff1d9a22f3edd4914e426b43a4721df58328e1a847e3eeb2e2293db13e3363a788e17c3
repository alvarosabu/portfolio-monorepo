'use strict';

const core = require('@unocss/core');

function transformerVariantGroup() {
  return {
    name: "variant-group",
    enforce: "pre",
    transform(s) {
      core.extractQuoted(s.toString(), {
        details: true,
        templateStaticOnly: true,
        deep: true
      }).filter(({ value: { length } }) => length).forEach(({ value, range }) => s.overwrite(...range, core.expandVariantGroup(value)));
    }
  };
}

module.exports = transformerVariantGroup;
