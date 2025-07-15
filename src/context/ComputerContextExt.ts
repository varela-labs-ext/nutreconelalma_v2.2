import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";

export const callByCentralType = <TModel>(
    inCentralType: CentralTypeIdEnum,
    inData: TModel,
    callbackManual: (outData: TModel) => void,
    callbackAutomatic: (outData: TModel) => void): void => {

    switch (inCentralType) {
        case CentralTypeIdEnum.Manual:
            callbackManual(inData);
            break;
        case CentralTypeIdEnum.Automatico:
            callbackAutomatic(inData);
            break;
        default:
            console.warn("callByCentralType. Tipo de central no reconocido:", inCentralType);
            break;
    }
}

export const callByCentralTypeWithReturn = <TModel>(
    inCentralType: CentralTypeIdEnum,
    callbackManual: () => TModel,
    callbackAutomatic: () => TModel): TModel | null => {

    switch (inCentralType) {
        case CentralTypeIdEnum.Manual:
            return callbackManual();
        case CentralTypeIdEnum.Automatico:
            return callbackAutomatic();
        default:
            console.warn("callByCentralTypeWithReturn. Tipo de central no reconocido:", inCentralType);
            return null;
    }
}

export const callByPopulationType = <TModel>(
    inPopulationType: PopulationTypeIdEnum,
    inData: TModel,
    callbackAdulto: (outData: TModel) => void,
    callbackNeonatal: (outData: TModel) => void,
    callbackPediatrica: (outData: TModel) => void): void => {

    switch (inPopulationType) {
        case PopulationTypeIdEnum.Adulto:
            callbackAdulto(inData);
            break;
        case PopulationTypeIdEnum.Neonatal:
            callbackNeonatal(inData);
            break;
        case PopulationTypeIdEnum.Pediatrica:
            callbackPediatrica(inData);
            break;
    }
}

/*

const ejecutarFuncion = (callback: () => void) => {
  console.log("Antes de ejecutar la función...");
  callback();
  console.log("Después de ejecutar la función.");
};

const saludar = () => {
  console.log("¡Hola, Joe!");
};

// Llamamos pasando la función como parámetro
ejecutarFuncion(saludar);

const procesarTexto = (texto: string, transformador: (input: string) => string) => {
  const resultado = transformador(texto);
  console.log("Resultado:", resultado);
};

const convertirAMayusculas = (texto: string) => {
  return texto.toUpperCase();
};

procesarTexto("hola mundo", convertirAMayusculas);

*/