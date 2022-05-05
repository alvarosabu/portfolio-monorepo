import { PresetOptions, AutoCompleteExtractor, Extractor, VariantFunction, Preset } from '@unocss/core';

interface AttributifyOptions extends PresetOptions {
    /**
     * Only generate CSS for attributify or class
     *
     * @default false
     */
    strict?: boolean;
    /**
     * @default 'un-'
     */
    prefix?: string;
    /**
     * Only match for prefixed attributes
     *
     * @default false
     */
    prefixedOnly?: boolean;
    /**
     * Support matching non-valued attributes
     *
     * For example
     * ```html
     * <div mt-2 />
     * ```
     *
     * @default true
     */
    nonValuedAttribute?: boolean;
    /**
     * A list of attributes to be ignored from extracting.
     */
    ignoreAttributes?: string[];
}

declare const autocompleteExtractorAttributify: AutoCompleteExtractor;

declare const extractorAttributify: (options?: AttributifyOptions | undefined) => Extractor;

declare const variantsRE: RegExp;
declare const variantAttributify: (options?: AttributifyOptions) => VariantFunction;

declare type UtilityNames = 'align' | 'animate' | 'backdrop' | 'bg' | 'blend' | 'border' | 'box' | 'container' | 'content' | 'cursor' | 'display' | 'divide' | 'filter' | 'flex' | 'font' | 'gap' | 'gradient' | 'grid' | 'h' | 'icon' | 'justify' | 'list' | 'm' | 'opacity' | 'order' | 'outline' | 'overflow' | 'p' | 'place' | 'pos' | 'ring' | 'select' | 'shadow' | 'space' | 'table' | 'text' | 'transform' | 'transition' | 'underline' | 'w' | 'z';
declare type VariantNames = 'active' | 'after' | 'all' | 'before' | 'child' | 'dark' | 'enabled' | 'first' | 'focus' | 'hover' | 'last' | 'lg' | 'light' | 'md' | 'root' | 'sm' | 'xl' | 'xxl';
declare type AttributifyNames<Prefix extends string = ''> = `${Prefix}${UtilityNames}` | `${Prefix}${VariantNames}` | `${Prefix}${VariantNames}:${UtilityNames}`;
interface AttributifyAttributes extends Partial<Record<AttributifyNames, string | boolean>> {
}

declare const preset: (options?: AttributifyOptions) => Preset;

export { AttributifyAttributes, AttributifyNames, AttributifyOptions, UtilityNames, VariantNames, autocompleteExtractorAttributify, preset as default, extractorAttributify, variantAttributify, variantsRE };
