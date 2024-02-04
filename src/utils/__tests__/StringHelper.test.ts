import { StringHelper } from '@/utils/StringHelper';

describe('StringHelper', () => {
    describe('ucFirst', () => {
        it('should capitalize the first letter of a string', () => {
            const str = 'hello world';
            const result = StringHelper.ucFirst(str);
            expect(result).toBe('Hello world');
        });

        it('should handle an empty string', () => {
            const str = '';
            const result = StringHelper.ucFirst(str);
            expect(result).toBe('');
        });

        it('should handle a single character string', () => {
            const str = 'a';
            const result = StringHelper.ucFirst(str);
            expect(result).toBe('A');
        });

        it('should handle a string with leading whitespace', () => {
            const str = '  hello world';
            const result = StringHelper.ucFirst(str);
            expect(result).toBe('  Hello world');
        });

        it('should handle a string with trailing whitespace', () => {
            const str = 'hello world  ';
            const result = StringHelper.ucFirst(str);
            expect(result).toBe('Hello world  ');
        });
    });

    describe('isJSONParsable', () => {
        it('should return true for a valid JSON string', () => {
            const jsonString = '{"name": "John", "age": 30}';
            const result = StringHelper.isJSON(jsonString);
            expect(result).toBe(true);
        });

        it('should return false for an invalid JSON string', () => {
            const invalidJsonString = 'This is not valid JSON';
            const result = StringHelper.isJSON(invalidJsonString);
            expect(result).toBe(false);
        });

        it('should return false for an empty string', () => {
            const emptyString = '';
            const result = StringHelper.isJSON(emptyString);
            expect(result).toBe(false);
        });

        // Add more test cases as needed
    });

    describe('emptyUuid', () => {
        it('should return an empty UUID', () => {
            const result = StringHelper.emptyUuid();
            expect(result).toBe('00000000-0000-0000-0000-000000000000');
        });
    });

    describe('uuid', () => {
        it('should generate a valid UUID', () => {
            const uuid = StringHelper.uuid();
            expect(uuid).toMatch(/[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i);
        });

        it('should generate a different UUID each time', () => {
            const uuid1 = StringHelper.uuid();
            const uuid2 = StringHelper.uuid();
            expect(uuid1).not.toBe(uuid2);
        });
    });
});
