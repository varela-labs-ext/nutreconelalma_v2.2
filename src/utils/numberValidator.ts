
class numberValidator {
    public static isValidObj(objeto: any, padre: string | null = null): boolean {
        if (!objeto || typeof objeto !== 'object') {
            return false;
        }

        let existsNaNs: boolean = false;
        let existsNaN: boolean = false;

        const nombreClase = objeto.constructor.name;

        // console.log(`Objeto tipo: '${nombreClase}'. Validando NaNs...`);

        for (const propiedad in objeto) {
            if (!Object.prototype.hasOwnProperty.call(objeto, propiedad)) {
                continue;
            }

            existsNaN = false;
            const valor = objeto[propiedad];

            if (typeof valor === 'number' && (isNaN(valor) || valor === undefined)) {
                existsNaN = true;
            }

            if (existsNaNs === false && existsNaN === true) {
                if (padre) {
                    console.log(`Propiedad Padre: '${padre}'.`);
                }
                console.log(`Objeto tipo: '${nombreClase}'. Validando NaNs...`);
            }

            if (existsNaN === true) {
                existsNaNs = true;
                console.log(`${nombreClase}.${propiedad}: Es NaN`);
            }
        }

        if (existsNaNs) {
            console.log(`Objeto tipo: '${nombreClase}'. **** SI **** contienen NaNs.`);
        }
        // else {
        //     console.log(`Objeto tipo: '${nombreClase}'. Libre de NaNs.`);
        // }

        return !existsNaNs;
    }

    public static validateDeep(objeto: any, nombrePadre?: string): void {
        if (!objeto || typeof objeto !== 'object') {
            return;
        }


        const nombreClase = objeto.constructor.name;
        const nombreBase = nombrePadre || nombreClase;

        console.log(`Objeto: '${nombreClase}.${nombreBase}'. Validando NaNs...`);

        for (const propiedad in objeto) {
            if (!Object.prototype.hasOwnProperty.call(objeto, propiedad)) {
                continue;
            }

            const valor = objeto[propiedad];
            const nombreCompleto = `${nombreBase}.${propiedad}`;

            if (typeof valor === 'number') {
                if (isNaN(valor) || valor === undefined) {
                    console.log(`${nombreCompleto}: el valor es NaN`);
                }
            } else if (typeof valor === 'object' && valor !== null) {
                // Evita ciclos y funciones, solo sigue si es un objeto simple o clase
                if (!(valor instanceof Date) && !(valor instanceof Function)) {
                    this.validateDeep(valor, nombreCompleto);
                }
            }
        }
    }
}

export default numberValidator;