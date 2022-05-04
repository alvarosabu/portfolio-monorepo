import { RequestListener } from 'http';

declare type StorageValue = null | string | String | number | Number | boolean | Boolean | object;
declare type WatchEvent = 'update' | 'remove';
declare type WatchCallback = (event: WatchEvent, key: string) => any;
interface Driver {
    hasItem: (key: string) => boolean | Promise<boolean>;
    getItem: (key: string) => StorageValue;
    setItem: (key: string, value: string) => void | Promise<void>;
    removeItem: (key: string) => void | Promise<void>;
    getKeys: () => string[] | Promise<string[]>;
    clear: () => void | Promise<void>;
    dispose?: () => void | Promise<void>;
    watch?: (callback: WatchCallback) => void | Promise<void>;
}
interface Storage {
    hasItem: (key: string) => Promise<boolean>;
    getItem: (key: string) => Promise<StorageValue>;
    setItem: (key: string, value: StorageValue) => Promise<void>;
    removeItem: (key: string) => Promise<void>;
    getKeys: (base?: string) => Promise<string[]>;
    clear: (base?: string) => Promise<void>;
    mount: (base: string, driver: Driver) => Storage;
    unmount: (base: string, dispose?: boolean) => Promise<void>;
    dispose: () => Promise<void>;
    watch: (callback: WatchCallback) => Promise<void>;
}

interface StorageServerOptions {
}
interface StorageServer {
    handle: RequestListener;
}
declare function createStorageServer(storage: Storage, _opts?: StorageServerOptions): StorageServer;

export { StorageServer, StorageServerOptions, createStorageServer };
