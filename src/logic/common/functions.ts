import InsumoClinicoIdEnum from "../enums/InsumoClinicoIdEnum";
import InsumoClinicoNamesEnum from "../enums/InsumoClinicoNamesEnum";

export const enumToKeyValueArray = (enumObj: any): { key: number, value: string }[] => {
    const output = Object.keys(enumObj)
        .filter((key) => !isNaN(Number(key))) // Solo claves numéricas
        .map((key) => {
            const numericKey = Number(key);
            return {
                key: numericKey,
                value: enumObj[numericKey] as string
            };
        });
    return output;
};

export const getDisplayNameFromEnums = (
    enumIdObj: any,
    enumNameObj: any,
    id: number
): string | null => {
    const key = enumIdObj[id];
    if (key && enumNameObj[key] !== undefined) {
        return enumNameObj[key] as string;
    }
    return null;
};

export const getInsumoClinicoName = (id: number): string => {
    const result = getDisplayNameFromEnums(
        InsumoClinicoIdEnum,
        InsumoClinicoNamesEnum,
        id
    );

    if (result) {
        return result;
    }

    return "";
};