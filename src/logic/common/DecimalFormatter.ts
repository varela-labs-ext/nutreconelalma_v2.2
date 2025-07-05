// src/utils/DecimalFormatter.ts
import Decimal from "decimal.js";

class DecimalFormatter {
    /**
     * Retorna un string con la cantidad de decimales fija (ej: para mostrar en input)
     */
    public static toFixedString(valor: Decimal.Value, decimales = 2): string {
        return new Decimal(valor).toFixed(decimales);
    }

    /**
     * Redondea un Decimal al número especificado de decimales y lo devuelve como número JS
     */
    public static toRoundedNumber(valor: Decimal.Value, decimales = 2): number {
        return new Decimal(valor).toDecimalPlaces(decimales).toNumber();
    }

    /**
     * Convierte el valor a un número sin redondear (con toda la precisión)
     */
    public static toRawNumber(valor: Decimal.Value): number {
        return new Decimal(valor).toNumber();
    }

    /**
     * Convierte a string formateado como moneda local (por defecto en español Costa Rica)
     */
    public static toCurrency(valor: Decimal.Value, locale = 'es-CR', currency = 'CRC'): string {
        return new Decimal(valor).toNumber().toLocaleString(locale, {
            style: 'currency',
            currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }
}

export default DecimalFormatter;