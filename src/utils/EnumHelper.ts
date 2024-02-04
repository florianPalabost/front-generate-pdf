export class EnumHelper {
    private constructor() {
        // This constructor is intentionally left empty for singleton implementation.
    }

    static getEnumKeys(enumObject: Record<string, any>): string[] {
        return Object.keys(enumObject);
    }

    static getEnumValues<T extends Record<string, any>>(enumObject: T): T[keyof T][] {
        return Object.values(enumObject);
    }

    /**
     * Returns the key corresponding to the given value in the provided object.
     * If the value is not found, undefined is returned.
     *
     * @param {Record<T, string>} obj - The object to search in.
     * @param {string} value - The value to search for.
     * @return {T | undefined} - The key corresponding to the given value, or undefined if not found.
     */
    static getKeyByValue<T extends string>(obj: Record<T, string>, value: string): T | undefined {
        return (Object.keys(obj) as T[]).find((key) => obj[key] === value);
    }
}
