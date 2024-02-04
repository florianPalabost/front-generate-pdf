import dayjs from 'dayjs';

export class DateHelper {
    private constructor() {
        // This constructor is intentionally left empty for singleton implementation.
    }
    static formatDate(strDate: string | undefined, format = 'DD/MM/YYYY'): string {
        if (!strDate) {
            return '';
        }

        const date = dayjs(strDate);

        return date.format(format);
    }
}
