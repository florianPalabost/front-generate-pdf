import { NIL as NIL_UUID, v4 } from 'uuid';

export class StringHelper {
    private constructor() {
        // This constructor is intentionally left empty for singleton implementation.
    }

    /**
     * Capitalizes the first letter of a string.
     *
     * @param {string} str - The input string to capitalize.
     * @return {string} The input string with the first letter capitalized.
     */
    static ucFirst(str: string): string {
        const trimmedStr = str.trim();
        const firstChar = trimmedStr.charAt(0).toLocaleUpperCase();
        const restOfString = trimmedStr.slice(1);

        return str.replace(trimmedStr, firstChar + restOfString);
    }

    static truncate(str: string, maxLength = 25): string {
        if (str.length <= maxLength) {
            return str;
        } else {
            return str.substring(0, maxLength) + '...';
        }
    }

    /**
     * Checks if a given string is a valid JSON.
     *
     * @param {string} str - The string to check.
     * @return {boolean} Returns true if the string is a valid JSON, false otherwise.
     */
    static isJSON(str: string): boolean {
        try {
            JSON.parse(str);
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * Returns an empty UUID.
     *
     * @return {string} The empty UUID.
     */
    static emptyUuid(): string {
        return NIL_UUID;
    }

    /**
     * Generates a unique identifier using the v4 version of the UUID algorithm.
     *
     * @return {string} A string representing the generated UUID.
     */
    static uuid(): string {
        return v4();
    }
}
