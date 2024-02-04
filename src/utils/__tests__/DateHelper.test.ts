import { DateHelper } from '@/utils/DateHelper';

describe('DateHelper', () => {
    describe('formatDate', () => {
        it('should format a valid date string in the default format', () => {
            const strDate = '2022-01-01';
            const result = DateHelper.formatDate(strDate);
            expect(result).toBe('01/01/2022');
        });

        it('should format a valid date string in a custom format', () => {
            const strDate = '2022-01-01';
            const format = 'YYYY/MM/DD';
            const result = DateHelper.formatDate(strDate, format);
            expect(result).toBe('2022/01/01');
        });

        it('should return an empty string for an undefined date', () => {
            const strDate = undefined;
            const result = DateHelper.formatDate(strDate);
            expect(result).toBe('');
        });
    });
});
