import { NumberHelper } from '@/utils/NumberHelper';

describe('NumberHelper', () => {
    describe('toNumber', () => {
        it('should convert a valid string to a number', () => {
            const str = '10';
            const result = NumberHelper.toNumber(str);
            expect(result).toBe(10);
        });

        it('should return NaN for an invalid string', () => {
            const str = 'abc';
            const result = NumberHelper.toNumber(str);
            expect(isNaN(result)).toBe(true);
        });
    });

    describe('roundNumber', () => {
        it('should round a number to the specified precision', () => {
            const value = 10.12345;
            const precision = 2;
            const result = NumberHelper.roundNumber(value, precision);
            expect(result).toBe(10.12);
        });

        it('should not change the number if precision is 0', () => {
            const value = 10.12345;
            const precision = 0;
            const result = NumberHelper.roundNumber(value, precision);
            expect(result).toBe(10);
        });
    });

    describe('getRandomNumber', () => {
        it('should generate a number within the specified range', () => {
            const min = 1;
            const max = 10;
            const result = NumberHelper.getRandomNumber(min, max);
            expect(result).toBeGreaterThanOrEqual(min);
            expect(result).toBeLessThanOrEqual(max);
        });

        it('should generate an integer when min and max are the same integer value', () => {
            const min = 5;
            const max = 5;
            const result = NumberHelper.getRandomNumber(min, max);
            expect(result).toBe(Math.floor(result));
        });

        it('should generate a decimal when min and max are the same decimal value', () => {
            const min = 3.14;
            const max = 3.14;
            const result = NumberHelper.getRandomNumber(min, max);
            expect(result).toBe(3.14);
        });
    });
});
