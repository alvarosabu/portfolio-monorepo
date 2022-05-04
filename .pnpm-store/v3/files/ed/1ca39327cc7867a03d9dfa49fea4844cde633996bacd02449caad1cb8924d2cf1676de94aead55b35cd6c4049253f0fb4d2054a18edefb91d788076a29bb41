declare const DEFAULT_REQUEST_STUBS: {
    '/@vite/client': {
        injectQuery: (id: string) => string;
        createHotContext(): {
            accept: () => void;
            prune: () => void;
        };
        updateStyle(): void;
    };
};
declare class ModuleCacheMap extends Map<string, ModuleCache> {
    normalizePath(fsPath: string): string;
    set(fsPath: string, mod: Partial<ModuleCache>): this;
    get(fsPath: string): ModuleCache | undefined;
    delete(fsPath: string): boolean;
}
declare class ViteNodeRunner {
    options: ViteNodeRunnerOptions;
    root: string;
    /**
     * Holds the cache of modules
     * Keys of the map are filepaths, or plain package names
     */
    moduleCache: ModuleCacheMap;
    constructor(options: ViteNodeRunnerOptions);
    executeFile(file: string): Promise<any>;
    executeId(id: string): Promise<any>;
    cachedRequest(rawId: string, callstack: string[]): Promise<any>;
    directRequest(id: string, fsPath: string, callstack: string[]): Promise<any>;
    prepareContext(context: Record<string, any>): Record<string, any>;
    shouldResolveId(dep: string): boolean;
    /**
     * Define if a module should be interop-ed
     * This function mostly for the ability to override by subclass
     */
    shouldInterop(path: string, mod: any): boolean;
    /**
     * Import a module and interop it
     */
    interopedImport(path: string): Promise<any>;
    hasNestedDefault(target: any): any;
}

interface DepsHandlingOptions {
    external?: (string | RegExp)[];
    inline?: (string | RegExp)[];
    /**
     * Try to guess the CJS version of a package when it's invalid ESM
     * @default false
     */
    fallbackCJS?: boolean;
}
interface StartOfSourceMap {
    file?: string;
    sourceRoot?: string;
}
interface RawSourceMap extends StartOfSourceMap {
    version: string;
    sources: string[];
    names: string[];
    sourcesContent?: string[];
    mappings: string;
}
interface FetchResult {
    code?: string;
    externalize?: string;
    map?: RawSourceMap;
}
declare type FetchFunction = (id: string) => Promise<FetchResult>;
declare type ResolveIdFunction = (id: string, importer?: string) => Promise<ViteNodeResolveId | null>;
interface ModuleCache {
    promise?: Promise<any>;
    exports?: any;
    code?: string;
}
interface ViteNodeRunnerOptions {
    root: string;
    fetchModule: FetchFunction;
    resolveId?: ResolveIdFunction;
    base?: string;
    moduleCache?: ModuleCacheMap;
    interopDefault?: boolean;
    requestStubs?: Record<string, any>;
}
interface ViteNodeResolveId {
    external?: boolean | 'absolute' | 'relative';
    id: string;
    meta?: Record<string, any> | null;
    moduleSideEffects?: boolean | 'no-treeshake' | null;
    syntheticNamedExports?: boolean | string | null;
}
interface ViteNodeServerOptions {
    /**
     * Inject inline sourcemap to modules
     * @default 'inline'
     */
    sourcemap?: 'inline' | boolean;
    /**
     * Deps handling
     */
    deps?: DepsHandlingOptions;
    /**
     * Transform method for modules
     */
    transformMode?: {
        ssr?: RegExp[];
        web?: RegExp[];
    };
}

export { DepsHandlingOptions as D, FetchResult as F, ModuleCache as M, RawSourceMap as R, StartOfSourceMap as S, ViteNodeRunnerOptions as V, FetchFunction as a, ResolveIdFunction as b, ViteNodeResolveId as c, ViteNodeServerOptions as d, DEFAULT_REQUEST_STUBS as e, ModuleCacheMap as f, ViteNodeRunner as g };
