import { SourceCodeTransformer, UnoGenerator } from '@unocss/core';
import MagicString from 'magic-string';

interface TransformerDirectivesOptions {
    enforce?: SourceCodeTransformer['enforce'];
}
declare function transformerDirectives(options?: TransformerDirectivesOptions): SourceCodeTransformer;
declare function transformDirectives(code: MagicString, uno: UnoGenerator, filename?: string, originalCode?: string, offset?: number): Promise<void>;

export { transformerDirectives as default, transformDirectives };
