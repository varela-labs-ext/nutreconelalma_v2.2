import localforage from 'localforage';

class ForageManager {
    // Guardar un item
    static async saveAsync<T>(clave: string, data: T): Promise<void> {
        await localforage.setItem<T>(clave, data);
    }

    // Leer un item
    static async getAsync<T>(clave: string): Promise<T | null> {
        const data = await localforage.getItem<T>(clave);
        return data ?? null;
    }

    // Eliminar un item
    static async deleteAsync(clave: string): Promise<void> {
        await localforage.removeItem(clave);
    }

    // Obtener todas las claves
    static async getAllKeysAsync(): Promise<string[]> {
        const keys: string[] = [];
        await localforage.iterate((_value, key) => {
            keys.push(key);
        });
        return keys;
    }

    // Obtener todos los items
    static async getAllAsync<T>(): Promise<{ key: string; value: T }[]> {
        const items: { key: string; value: T }[] = [];

        await localforage.iterate((value: any, key) => {
            items.push({ key, value: value as T });
        });

        return items;
    }

    // Eliminar por patrón de texto en la clave
    static async deleteByPatternAsync(patron: string): Promise<void> {
        const keys: string[] = [];
        await localforage.iterate((_value, key) => {
            if (key.includes(patron)) {
                keys.push(key);
            }
        });
        await Promise.all(keys.map((k) => localforage.removeItem(k)));
    }


    // METODOS NO ASYNC DESDE AQUI

    // Guardar un item
    static save<T>(clave: string, data: T): Promise<void> {
        return localforage.setItem<T>(clave, data).then(() => { });
    }

    // Obtener un item
    static get<T>(clave: string): Promise<T | null> {
        return localforage.getItem<T>(clave).then((data) => data ?? null);
    }

    // Eliminar un item
    static delete(clave: string): Promise<void> {
        return localforage.removeItem(clave);
    }

    // Listar todas las claves
    static getAllKeys(): Promise<string[]> {
        const keys: string[] = [];
        return localforage.iterate((_value, key) => {
            keys.push(key);
        }).then(() => keys);
    }

    // Obtener todos los items
    static getAll<T>(): Promise<{ key: string; value: T }[]> {
        const items: { key: string; value: T }[] = [];

        return localforage.iterate((value: any, key) => {
            items.push({ key, value: value as T });
        }).then(() => items);
    }

    // Eliminar todos los items que coincidan con un patrón en la clave
    static deleteByPattern(patron: string): Promise<void> {
        const keys: string[] = [];
        return localforage.iterate((_value, key) => {
            if (key.includes(patron)) {
                keys.push(key);
            }
        }).then(() => {
            return Promise.all(keys.map((k) => localforage.removeItem(k))).then(() => { });
        });
    }
}

export default ForageManager;