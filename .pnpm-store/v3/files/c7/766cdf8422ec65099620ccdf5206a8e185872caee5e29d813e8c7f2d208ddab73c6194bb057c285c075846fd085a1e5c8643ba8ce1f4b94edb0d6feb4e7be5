import { RuleContext, CSSEntries, ParsedColorValue, CSSObject, VariantContext } from '@unocss/core';
import { T as Theme } from './types-f7b2c653.js';

/**
 * Provide {@link DynamicMatcher} function returning spacing definition. See spacing rules.
 *
 * @param {string} propertyPrefix - Property for the css value to be created. Postfix will be appended according to direction matched.
 * @return {@link DynamicMatcher} object.
 * @see {@link directionMap}
 */
declare const directionSize: (propertyPrefix: string) => ([_, direction, size]: string[], { theme }: RuleContext<Theme>) => CSSEntries | undefined;
/**
 * Parse color string into {@link ParsedColorValue} (if possible). Color value will first be matched to theme object before parsing.
 * See also color.tests.ts for more examples.
 *
 * @example Parseable strings:
 * 'red' // From theme, if 'red' is available
 * 'red-100' // From theme, plus scale
 * 'red-100/20' // From theme, plus scale/opacity
 * '[rgb(100,2,3)]/[var(--op)]' // Bracket with rgb color and bracket with opacity
 *
 * @param {string} body - Color string to be parsed.
 * @param {Theme} theme - {@link Theme} object.
 * @return {ParsedColorValue|undefined}  {@link ParsedColorValue} object if string is parseable.
 */
declare const parseColor: (body: string, theme: Theme) => ParsedColorValue | undefined;
/**
 * Provide {@link DynamicMatcher} function to produce color value matched from rule.
 *
 * @see {@link parseColor}
 *
 * @example Resolving 'red' from theme:
 * colorResolver('background-color', 'background')('', 'red')
 * return { 'background-color': '#f12' }
 *
 * @example Resolving 'red-100' from theme:
 * colorResolver('background-color', 'background')('', 'red-100')
 * return { '--un-background-opacity': '1', 'background-color': 'rgba(254,226,226,var(--un-background-opacity))' }
 *
 * @example Resolving 'red-100/20' from theme:
 * colorResolver('background-color', 'background')('', 'red-100/20')
 * return { 'background-color': 'rgba(204,251,241,0.22)' }
 *
 * @example Resolving 'hex-124':
 * colorResolver('color', 'text')('', 'hex-124')
 * return { '--un-text-opacity': '1', 'color': 'rgba(17,34,68,var(--un-text-opacity))' }
 *
 * @param {string} property - Property for the css value to be created.
 * @param {string} varName - Base name for the opacity variable.
 * @return {@link DynamicMatcher} object.
 */
declare const colorResolver: (property: string, varName: string) => ([, body]: string[], { theme }: RuleContext<Theme>) => CSSObject | undefined;
declare const colorableShadows: (shadows: string | string[], colorVar: string) => string[];
declare const hasParseableColor: (color: string | undefined, theme: Theme) => boolean;
declare const resolveBreakpoints: ({ theme, generator }: Readonly<VariantContext<Theme>>) => Record<string, string> | undefined;
declare const resolveVerticalBreakpoints: ({ theme, generator }: Readonly<VariantContext<Theme>>) => Record<string, string> | undefined;

export { colorableShadows as a, resolveVerticalBreakpoints as b, colorResolver as c, directionSize as d, hasParseableColor as h, parseColor as p, resolveBreakpoints as r };
