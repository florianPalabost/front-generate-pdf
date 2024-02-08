export class NumberHelper {
    private constructor() {
        // This constructor is intentionally left empty for singleton implementation.
    }

    /**
     * Converts a string value to a number.
     *
     * @param {string} value - The string value to convert.
     * @return {number} The converted number.
     */
    static toNumber(value: string): number {
        return parseFloat(value);
    }

    /**
     * Rounds a number to a specified precision.
     *
     * @param {number} value - The number to be rounded.
     * @param {number} precision - The number of decimal places to round to.
     * @return {number} - The rounded number.
     */
    static roundNumber(value: number, precision = 0): number {
        return NumberHelper.toNumber(value.toFixed(precision));
    }

    /**
     * Generates a random number between the specified minimum and maximum values.
     *
     * @param {number} min - The minimum value of the range.
     * @param {number} max - The maximum value of the range.
     * @return {number} The randomly generated number.
     */
    static getRandomNumber(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }
}
