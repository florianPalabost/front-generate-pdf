import { ArrHelper } from '@/utils/ArrHelper';

describe('ArrHelper', () => {
    describe('identical', () => {
        it('should return true for identical arrays', () => {
            const arr1 = [1, 2, 3];
            const arr2 = [1, 2, 3];
            const result = ArrHelper.identical(arr1, arr2);
            expect(result).toBe(true);
        });

        it('should return false for non-identical arrays', () => {
            const arr1 = [1, 2, 3];
            const arr2 = [3, 2, 1];
            const result = ArrHelper.identical(arr1, arr2);
            expect(result).toBe(false);
        });
    });

    describe('unique', () => {
        it('should remove duplicate elements from an array', () => {
            const arr = [1, 2, 2, 3, 4, 4, 5];
            const result = ArrHelper.unique(arr);
            expect(result).toEqual([1, 2, 3, 4, 5]);
        });

        it('should return an empty array if the input array is empty', () => {
            const arr: number[] = [];
            const result = ArrHelper.unique(arr);
            expect(result).toEqual([]);
        });
    });

    describe('diff', () => {
        it('should return the elements in arr1 that are not in arr2', () => {
            const arr1 = [1, 2, 3, 4, 5];
            const arr2 = [3, 4, 5, 6, 7];
            const result = ArrHelper.diff(arr1, arr2);
            expect(result).toEqual([1, 2, 6, 7]);
        });

        it('should return an empty array if arr1 and arr2 have the same elements', () => {
            const arr1 = [1, 2, 3];
            const arr2 = [1, 2, 3];
            const result = ArrHelper.diff(arr1, arr2);
            expect(result).toEqual([]);
        });

        it('should return arr1 if arr2 is an empty array', () => {
            const arr1 = [1, 2, 3];
            const arr2: number[] = [];
            const result = ArrHelper.diff(arr1, arr2);
            expect(result).toEqual(arr1);
        });

        it('should return the elements in arr2 that are not in arr1', () => {
            const arr1 = [1, 2, 3, 4];
            const arr2 = [3, 4, 5];
            const result = ArrHelper.diff(arr1, arr2);
            expect(result).toEqual([1, 2, 5]);
        });
    });
});
