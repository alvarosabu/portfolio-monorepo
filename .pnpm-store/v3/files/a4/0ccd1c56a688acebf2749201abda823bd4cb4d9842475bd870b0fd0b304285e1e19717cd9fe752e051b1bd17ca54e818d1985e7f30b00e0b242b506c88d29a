import * as bundle_runner from 'bundle-runner';
import * as _vue_server_renderer from '@vue/server-renderer';

declare type Identifier = string;
declare type OutputPath = string;
interface ResourceMeta {
    file: OutputPath;
    src?: Identifier;
    isEntry?: boolean;
    isDynamicEntry?: boolean;
    dynamicImports?: Identifier[];
    imports?: Identifier[];
    css?: OutputPath[];
    assets?: OutputPath[];
}
declare type ClientManifest = Record<Identifier, ResourceMeta>;
interface ModuleDependencies {
    scripts: Record<string, {
        path: OutputPath;
        type?: 'module' | 'script';
    }>;
    styles: Record<string, {
        path: OutputPath;
    }>;
    preload: Record<string, {
        path: OutputPath;
        type?: 'module' | 'script' | 'style' | 'font' | 'fetch' | 'image';
        extension?: string;
    }>;
    prefetch: Record<string, {
        path: OutputPath;
        type?: 'module' | 'script';
    }>;
}
interface SSRContext {
    getPreloadFiles?: Function;
    renderResourceHints?: Function;
    renderState?: Function;
    renderScripts?: Function;
    renderStyles?: Function;
    nonce?: string;
    head?: string;
    styles?: string;
    modules?: Set<Identifier>;
    _registeredComponents?: Set<Identifier>;
    _requestDependencies?: ModuleDependencies;
}
interface RendererContext {
    shouldPrefetch: (file: string, type: ModuleDependencies['prefetch'][string]['type']) => boolean;
    shouldPreload: (file: string, type: ModuleDependencies['preload'][string]['type']) => boolean;
    publicPath?: string;
    clientManifest: ClientManifest;
    basedir?: string;
    _dependencies: Record<string, ModuleDependencies>;
    _dependencySets: Record<string, ModuleDependencies>;
    _entrypoints: Identifier[];
    _dynamicEntrypoints: Identifier[];
}
declare type RenderOptions = Partial<Exclude<RendererContext, 'entrypoints'>>;
declare function createRenderer(createApp: any, renderOptions: RenderOptions & {
    renderToString: Function;
}): {
    renderToString(ssrContext: SSRContext): Promise<{
        html: any;
        renderResourceHints: () => string;
        renderStyles: () => string;
        renderScripts: () => string;
    }>;
};

declare type BundleRenderOptions = {
    runInNewContext?: boolean | 'once';
    basedir?: string;
    renderToString: typeof _vue_server_renderer.renderToString;
    bundleRunner: typeof bundle_runner;
} & RenderOptions;
declare function createBundleRenderer(_bundle: any, renderOptions: BundleRenderOptions): {
    renderToString(ssrContext: SSRContext): Promise<{
        html: any;
        renderResourceHints: () => string;
        renderStyles: () => string;
        renderScripts: () => string;
    }>;
};

export { createBundleRenderer, createRenderer };
