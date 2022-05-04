import { CSSObject, Preset } from '@unocss/core';

/**
 * @public
 */
interface TypographyOptions {
    /**
     * The class name to use the typographic utilities.
     * To undo the styles to the elements, use it like
     * `not-${className}` which is by default `not-prose`.
     *
     * Note: `not` utility is only available in class.
     *
     * @defaultValue `prose`
     */
    className?: string;
    /**
     * Extend or override CSS selectors with CSS declaration block.
     *
     * @defaultValue undefined
     */
    cssExtend?: Record<string, CSSObject>;
}
/**
 * UnoCSS Preset for Typography
 *
 * ```js
 * // unocss.config.js
 * import { presetAttributify, presetUno, defineConfig } from 'unocss'
 * import { presetTypography } from '@unocss/preset-typography'
 *
 * export default defineConfig({
 *   presets: [
 *     presetAttributify(), // required if using attributify mode
 *     presetUno(), // required
 *     presetTypography()
 *   ]
 * })
 * ```
 *
 * @returns typography preset
 * @public
 */
declare function presetTypography(options?: TypographyOptions): Preset;

export { TypographyOptions, presetTypography as default, presetTypography };
