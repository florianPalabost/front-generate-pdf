// jsonExcelUtils.ts

// Type definitions
export type DataItem = Record<string, any>;

// Function to get keys from data and header
export const getKeys = (data: DataItem[], header: DataItem | undefined): string[] => {
    if (header) {
        return Object.values(header);
    }

    const keys: Record<string, string> = {};

    for (const prop in data[0]) {
        keys[prop] = prop;
    }

    return Object.values(keys);
};

// Function to get the value for a property
export const getValue = async (property: string, current: DataItem): Promise<any> => {
    return current[property];
};

// Function to parse extra data
export const parseExtraData = (extraData: DataItem, format: string): string => {
    let parsedData = format;
    for (const prop in extraData) {
        parsedData = parsedData.replace(`{${prop}}`, extraData[prop]);
    }
    return parsedData;
};

// Function to reformat values for multilines
export const valueReformattedForMultilines = (value: any): string => {
    if (typeof value === 'string') {
        return value.replace(/\n/g, '<br>');
    }
    return String(value);
};

// Export the utility functions
export default {
    getKeys,
    getValue,
    parseExtraData,
    valueReformattedForMultilines
};
