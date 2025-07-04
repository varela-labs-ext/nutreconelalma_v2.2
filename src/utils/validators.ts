
export const validNumber = (value: number, field: string = 'valor'): number => {
    if (isNaN(value)) {
        throw new Error(`El campo "${field}" contiene un valor no numérico (NaN).`);
    }
    return value;
};


export const isValidNumber = (valor: unknown): boolean => {
    if (typeof valor === 'number' && !isNaN(valor)) {
        return true;
    }

    console.error(`El valor "${valor}" no es un número válido.`);
    return false;
};