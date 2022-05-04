import { resolve, dirname } from 'path';

const PREFIX = `\0virtual:`;
function virtual(modules) {
    const resolvedIds = new Map();
    Object.keys(modules).forEach((id) => {
        resolvedIds.set(resolve(id), modules[id]);
    });
    return {
        name: 'virtual',
        resolveId(id, importer) {
            if (id in modules)
                return PREFIX + id;
            if (importer) {
                const importerNoPrefix = importer.startsWith(PREFIX)
                    ? importer.slice(PREFIX.length)
                    : importer;
                const resolved = resolve(dirname(importerNoPrefix), id);
                if (resolvedIds.has(resolved))
                    return PREFIX + resolved;
            }
            return null;
        },
        load(id) {
            if (id.startsWith(PREFIX)) {
                const idNoPrefix = id.slice(PREFIX.length);
                return idNoPrefix in modules ? modules[idNoPrefix] : resolvedIds.get(idNoPrefix);
            }
            return null;
        }
    };
}

export default virtual;
