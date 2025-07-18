// src/utils/textPadding.ts
export const padText = (
    value: string | number,
    length: number,
    align: 'left' | 'right' = 'left'
): string => {
    const str = String(value);
    if (str.length >= length) return str.slice(0, length);
    return align === 'right' ? str.padStart(length, ' ') : str.padEnd(length, ' ');
};
