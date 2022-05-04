import { D as Driver, S as Storage, a as StorageValue } from './types-20f3bd04';
export { D as Driver, S as Storage, c as StorageMeta, a as StorageValue, b as WatchCallback, W as WatchEvent } from './types-20f3bd04';

interface CreateStorageOptions {
    driver?: Driver;
}
declare function createStorage(opts?: CreateStorageOptions): Storage;
declare type Snapshot<T = string> = Record<string, T>;
declare function snapshot(storage: Storage, base: string): Promise<Snapshot<string>>;
declare function restoreSnapshot(driver: Storage, snapshot: Snapshot<StorageValue>, base?: string): Promise<void>;

declare function prefixStorage(storage: Storage, base: string): Storage;

declare type DriverFactory<T> = (opts?: T) => Driver;
declare function defineDriver<T = any>(factory: DriverFactory<T>): DriverFactory<T>;

export { CreateStorageOptions, Snapshot, createStorage, defineDriver, prefixStorage, restoreSnapshot, snapshot };
