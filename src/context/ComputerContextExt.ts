import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";
import { deepClone, deepEqual } from "@/utils/objectUtils";

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

export const handleOnInternalModelChange = <TModel>(
    inDebounceRef: React.MutableRefObject<number | null>,
    internalData: TModel,
    currentData: TModel,
    callBack: (outData: TModel) => void) => {

    if (internalData === null) return;

    if (inDebounceRef.current) {
        clearTimeout(inDebounceRef.current);
    }

    if (inDebounceRef.current) {
        clearTimeout(inDebounceRef.current);
    }

    inDebounceRef.current = window.setTimeout(() => {
        if (!deepEqual(internalData, currentData)) {
            callBack(deepClone(internalData)); // copia profunda antes de propagar
        }
    }, 200);
}


export const safeSetState = <T>(
    setStateFn: React.Dispatch<React.SetStateAction<T | null>>,
    newValue: T,
    options?: { clone?: boolean }
) => {
    setStateFn((prev) => {
        if (prev === null) {
            return options?.clone === false ? newValue : deepClone(newValue);
        }

        const isEqual = deepEqual(prev, newValue);

        if (!isEqual) {
            return options?.clone === false ? newValue : deepClone(newValue);
        }

        return prev;
    });
};