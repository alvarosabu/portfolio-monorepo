declare const NodeBuiltinModules: string[];
declare function mapArrToVal(val: any, arr: any[]): any;

interface Environment {
    alias: {
        [key: string]: string;
    };
    inject: {
        [key: string]: string | string[];
    };
    polyfill: string[];
    external: string[];
}
interface Preset extends Partial<Environment> {
}

declare const _default$1: Preset;

declare const _default: Preset;

declare function env(...presets: Preset[]): Environment;

export { Environment, NodeBuiltinModules, Preset, env, mapArrToVal, _default$1 as node, _default as nodeless };
