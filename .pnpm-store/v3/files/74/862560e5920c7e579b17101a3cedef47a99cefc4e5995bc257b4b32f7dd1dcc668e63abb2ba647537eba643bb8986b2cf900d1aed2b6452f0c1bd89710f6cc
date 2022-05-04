'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const destr = require('destr');
const _utils = require('./chunks/_utils.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

const destr__default = /*#__PURE__*/_interopDefaultLegacy(destr);

function defineDriver(factory) {
  return factory;
}

const memory = defineDriver(() => {
  const data = new Map();
  return {
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) || null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return Array.from(data.keys());
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(opts = {}) {
  const ctx = {
    mounts: { "": opts.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: []
  };
  const getMount = (key) => {
    for (const base of ctx.mountpoints) {
      if (key.startsWith(base)) {
        return {
          relativeKey: key.substr(base.length),
          driver: ctx.mounts[base]
        };
      }
    }
    return {
      relativeKey: key,
      driver: ctx.mounts[""]
    };
  };
  const getMounts = (base) => {
    return ctx.mountpoints.filter((mountpoint) => mountpoint.startsWith(base) || base.startsWith(mountpoint)).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.substr(mountpoint.length) : void 0,
      mountpoint,
      driver: ctx.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!ctx.watching) {
      return;
    }
    key = _utils.normalizeKey(key);
    for (const listener of ctx.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (ctx.watching) {
      return;
    }
    ctx.watching = true;
    for (const mountpoint in ctx.mounts) {
      await watch(ctx.mounts[mountpoint], onChange, mountpoint);
    }
  };
  const storage = {
    hasItem(key) {
      key = _utils.normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return _utils.asyncCall(driver.hasItem, relativeKey);
    },
    getItem(key) {
      key = _utils.normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return _utils.asyncCall(driver.getItem, relativeKey).then((val) => destr__default(val));
    },
    async setItem(key, value) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = _utils.normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await _utils.asyncCall(driver.setItem, relativeKey, _utils.stringify(value));
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, removeMeta = true) {
      key = _utils.normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await _utils.asyncCall(driver.removeItem, relativeKey);
      if (removeMeta) {
        await _utils.asyncCall(driver.removeItem, relativeKey + "$");
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    async getMeta(key, nativeMetaOnly) {
      key = _utils.normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      const meta = Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await _utils.asyncCall(driver.getMeta, relativeKey));
      }
      if (!nativeMetaOnly) {
        const val = await _utils.asyncCall(driver.getItem, relativeKey + "$").then((val2) => destr__default(val2));
        if (val && typeof val === "object") {
          if (typeof val.atime === "string") {
            val.atime = new Date(val.atime);
          }
          if (typeof val.mtime === "string") {
            val.mtime = new Date(val.mtime);
          }
          Object.assign(meta, val);
        }
      }
      return meta;
    },
    setMeta(key, value) {
      return this.setItem(key + "$", value);
    },
    removeMeta(key) {
      return this.removeItem(key + "$");
    },
    async getKeys(base) {
      base = _utils.normalizeBase(base);
      const keyGroups = await Promise.all(getMounts(base).map(async (mount) => {
        const rawKeys = await _utils.asyncCall(mount.driver.getKeys, mount.relativeBase);
        return rawKeys.map((key) => mount.mountpoint + _utils.normalizeKey(key));
      }));
      const keys = keyGroups.flat();
      return base ? keys.filter((key) => key.startsWith(base) && !key.endsWith("$")) : keys.filter((key) => !key.endsWith("$"));
    },
    async clear(base) {
      base = _utils.normalizeBase(base);
      await Promise.all(getMounts(base).map(async (m) => {
        if (m.driver.clear) {
          return _utils.asyncCall(m.driver.clear);
        }
        if (m.driver.removeItem) {
          const keys = await m.driver.getKeys();
          return Promise.all(keys.map((key) => m.driver.removeItem(key)));
        }
      }));
    },
    async dispose() {
      await Promise.all(Object.values(ctx.mounts).map((driver) => dispose(driver)));
    },
    async watch(callback) {
      await startWatch();
      ctx.watchListeners.push(callback);
    },
    mount(base, driver) {
      base = _utils.normalizeBase(base);
      if (base && ctx.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        ctx.mountpoints.push(base);
        ctx.mountpoints.sort((a, b) => b.length - a.length);
      }
      ctx.mounts[base] = driver;
      if (ctx.watching) {
        Promise.resolve(watch(driver, onChange, base)).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = _utils.normalizeBase(base);
      if (!base || !ctx.mounts[base]) {
        return;
      }
      if (_dispose) {
        await dispose(ctx.mounts[base]);
      }
      ctx.mountpoints = ctx.mountpoints.filter((key) => key !== base);
      delete ctx.mounts[base];
    }
  };
  return storage;
}
async function snapshot(storage, base) {
  base = _utils.normalizeBase(base);
  const keys = await storage.getKeys(base);
  const snapshot2 = {};
  await Promise.all(keys.map(async (key) => {
    snapshot2[key.substr(base.length)] = await storage.getItem(key);
  }));
  return snapshot2;
}
async function restoreSnapshot(driver, snapshot2, base = "") {
  base = _utils.normalizeBase(base);
  await Promise.all(Object.entries(snapshot2).map((e) => driver.setItem(base + e[0], e[1])));
}
function watch(driver, onChange, base) {
  if (driver.watch) {
    return driver.watch((event, key) => onChange(event, base + key));
  }
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await _utils.asyncCall(driver.dispose);
  }
}

const storageKeyProps = [
  "hasItem",
  "getItem",
  "setItem",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = _utils.normalizeBase(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const prop of storageKeyProps) {
    nsStorage[prop] = (key = "", ...args) => storage[prop](base + key, ...args);
  }
  nsStorage.getKeys = (key = "", ...args) => storage.getKeys(base + key, ...args).then((keys) => keys.map((key2) => key2.substr(base.length)));
  return nsStorage;
}

exports.createStorage = createStorage;
exports.defineDriver = defineDriver;
exports.prefixStorage = prefixStorage;
exports.restoreSnapshot = restoreSnapshot;
exports.snapshot = snapshot;
