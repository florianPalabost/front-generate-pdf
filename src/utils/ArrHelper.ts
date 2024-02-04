export class ArrHelper {
    private constructor() {
        // This constructor is intentionally left empty for singleton implementation.
    }

    /**
     * Checks if two arrays are identical.
     *
     * @param {T[]} arr1 - The first array to compare.
     * @param {T[]} arr2 - The second array to compare.
     * @return {boolean} Returns true if the arrays are identical, false otherwise.
     */
    static identical<T>(arr1: T[], arr2: T[]): boolean {
        return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
    }

    /**
     * Returns an array with unique elements.
     *
     * @param {T[]} arr - The array to find unique elements from.
     * @returns {T[]} An array with unique elements from the input array.
     */
    static unique<T>(arr: T[]): T[] {
        return Array.from(new Set(arr));
    }

    /**
     * Returns the difference between two arrays, independant of their order.
     *
     * @param {T[]} arr1 - The first array to compare.
     * @param {T[]} arr2 - The second array to compare.
     * @return {T[]} - The difference between the two arrays.
     */
    static diff<T>(arr1: T[], arr2: T[]): T[] {
        return arr1.filter((item) => !arr2.includes(item)).concat(arr2.filter((item) => !arr1.includes(item)));
    }
}
