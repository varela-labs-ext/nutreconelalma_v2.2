import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";
import AdditionalCostsTotalsModel from "@/logic/models/AdditionalCostsTotalsModel";
import MixingCenterSettingsModel from "@/logic/models/common/MixingCenterSettingsModel";
import MixingCenterOperatingResourcesModel from "@/logic/models/MixingCenterOperatingResourcesModel";
import MixingCenterRawMaterialsModel from "@/logic/models/MixingCenterRawMaterialsModel";
import AutomatedEquipmentGroupModel from "@/logic/models/operating_resources/AutomatedEquipmentGroupModel";
import HygieneAndCleaningGroupModel from "@/logic/models/operating_resources/HygieneAndCleaningGroupModel";
import MaintenanceCostsGroupModel from "@/logic/models/operating_resources/MaintenanceCostsGroupModel";
import PersonalProtectionGroupModel from "@/logic/models/operating_resources/PersonalProtectionGroupModel";
import ProductionCostsGroupModel from "@/logic/models/operating_resources/ProductionCostsGroupModel";
import StaffSalaryGroupModel from "@/logic/models/operating_resources/StaffSalaryGroupModel";
import SterileWorkEquipmentGroupModel from "@/logic/models/operating_resources/SterileWorkEquipmentGroupModel";
import RawMaterialGroupModel from "@/logic/models/RawMaterialGroupModel";
import { Logger } from "@/utils/logger";
import { deepClone, deepEqual } from "@/utils/objectUtils";


// -- VERSION NUEVA AQUI




// --- VERSION ANTIGUA AQUI

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
};

export const callByCentralTypeWithReturn = <TModel>(
    inCentralType: CentralTypeIdEnum,
    callbackManual: () => TModel,
    callbackAutomatic: () => TModel
): TModel | null => {

    switch (inCentralType) {
        case CentralTypeIdEnum.Manual:
            return callbackManual();
        case CentralTypeIdEnum.Automatico:
            return callbackAutomatic();
        default:
            console.warn("callByCentralTypeWithReturn. Tipo de central no reconocido:", inCentralType);
            return null;
    }
};

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
};

export const callByPopulationTypeWithReturn = <TModel>(
    inPopulationType: PopulationTypeIdEnum,
    callbackAdulto: () => TModel,
    callbackNeonatal: () => TModel,
    callbackPediatrica: () => TModel
): TModel | null => {

    switch (inPopulationType) {
        case PopulationTypeIdEnum.Adulto:
            return callbackAdulto();
        case PopulationTypeIdEnum.Neonatal:
            return callbackNeonatal();
        case PopulationTypeIdEnum.Pediatrica:
            return callbackPediatrica();
        default:
            console.warn("callByPopulationTypeWithReturn. Tipo de población no reconocido:", inPopulationType);
            return null;
    }
};

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
};

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

export const safeSetStateWithNulls = <T>(
    setStateFn: React.Dispatch<React.SetStateAction<T | null>>,
    newValue: T,
    callBack: () => void,
    options?: { clone?: boolean }
) => {
    let shouldCallBack = false;
    setStateFn((prev) => {
        if (prev === null) {
            return options?.clone === false ? newValue : deepClone(newValue);
        }

        const isEqual = deepEqual(prev, newValue);
        if (!isEqual) {
            shouldCallBack = true;
            return options?.clone === false ? newValue : deepClone(newValue);
        }

        return prev;
    });

    if (shouldCallBack) {
        queueMicrotask(callBack);
    }
};

export const safeSetStateNoNulls = <T>(
    setStateFn: React.Dispatch<React.SetStateAction<T>>,
    newValue: T,
    callBack: () => void,
    options?: { clone?: boolean }
) => {
    let shouldCallBack = false;
    setStateFn((prev) => {
        const isEqual = deepEqual(prev, newValue);
        if (!isEqual) {
            shouldCallBack = true;
            return options?.clone === false ? newValue : deepClone(newValue);
        }

        return prev;
    });

    if (shouldCallBack) {
        queueMicrotask(callBack);
    }
};

export const getProductionPerMonth = (inItem: MixingCenterSettingsModel): number => {
    return (inItem.productionPerDay * 30);
};

export const backupRawMaterialInTo = (
    inCentralType: CentralTypeIdEnum,
    inPopulationType: PopulationTypeIdEnum,
    inCurrentRawMaterial: RawMaterialGroupModel,
    backup_MC_Manual_RawMaterials: MixingCenterRawMaterialsModel,
    backup_MC_Automatic_RawMaterials: MixingCenterRawMaterialsModel,
    setBackup_MC_Manual_RawMaterials: (value: MixingCenterRawMaterialsModel) => void,
    setBackup_MC_Automatic_RawMaterials: (value: MixingCenterRawMaterialsModel) => void,
): void => {
    const newData: RawMaterialGroupModel = deepClone(inCurrentRawMaterial);

    callByCentralType(
        inCentralType,
        newData,
        (dataManual) => { // Manual
            callByPopulationType(
                inPopulationType,
                dataManual,
                (dataAdulto) => {
                    const backup = deepClone(backup_MC_Manual_RawMaterials);
                    backup.adultoRawMaterial = dataAdulto;
                    setBackup_MC_Manual_RawMaterials(backup);
                }, // Adulto
                (dataNeonatal) => {
                    const backup = deepClone(backup_MC_Manual_RawMaterials);
                    backup.neonatalRawMaterial = dataNeonatal;
                    setBackup_MC_Manual_RawMaterials(backup);
                }, // Neonatal
                (dataPediatrica) => {
                    const backup = deepClone(backup_MC_Manual_RawMaterials);
                    backup.pediatricoRawMaterial = dataPediatrica;
                    setBackup_MC_Manual_RawMaterials(backup);
                } // Pediatrica
            );
        },
        (dataAutomatic) => { // Automatic
            callByPopulationType(
                inPopulationType,
                dataAutomatic,
                (dataAdulto) => {
                    const backup = deepClone(backup_MC_Automatic_RawMaterials);
                    backup.adultoRawMaterial = dataAdulto;
                    setBackup_MC_Automatic_RawMaterials(backup);
                }, // Adulto
                (dataNeonatal) => {
                    const backup = deepClone(backup_MC_Automatic_RawMaterials);
                    backup.neonatalRawMaterial = dataNeonatal;
                    setBackup_MC_Automatic_RawMaterials(backup);
                }, // Neonatal
                (dataPediatrica) => {
                    const backup = deepClone(backup_MC_Automatic_RawMaterials);
                    backup.pediatricoRawMaterial = dataPediatrica;
                    setBackup_MC_Automatic_RawMaterials(backup);
                } // Pediatrica
            );
        }
    );
}

export const gatherRawMaterialFromBackup = (
    inCentralType: CentralTypeIdEnum,
    inPopulationType: PopulationTypeIdEnum,
    inBackup_MC_Manual_RawMaterials: MixingCenterRawMaterialsModel,
    inBackup_MC_Automatic_RawMaterials: MixingCenterRawMaterialsModel
): RawMaterialGroupModel | null => {
    let gatherData: RawMaterialGroupModel | null = null;

    gatherData = callByCentralTypeWithReturn(
        inCentralType,
        () => { // Manual
            return callByPopulationTypeWithReturn(
                inPopulationType,
                () => {
                    return deepClone(inBackup_MC_Manual_RawMaterials.adultoRawMaterial);
                }, //Adulto
                () => {
                    return deepClone(inBackup_MC_Manual_RawMaterials.neonatalRawMaterial);
                }, //Neonatal
                () => {
                    return deepClone(inBackup_MC_Manual_RawMaterials.pediatricoRawMaterial);
                }, //Pediatrico
            );
        },
        () => { //Automatic
            return callByPopulationTypeWithReturn(
                inPopulationType,
                () => {
                    return deepClone(inBackup_MC_Automatic_RawMaterials.adultoRawMaterial);
                }, //Adulto
                () => {
                    return deepClone(inBackup_MC_Automatic_RawMaterials.neonatalRawMaterial);
                }, //Neonatal
                () => {
                    return deepClone(inBackup_MC_Automatic_RawMaterials.pediatricoRawMaterial);
                }, //Pediatrico
            );
        }
    );

    if (gatherData === undefined || gatherData === null) {
        console.warn("Datos nulos. [gatherRawMaterialFromBackup]");
    }

    return gatherData;
}

export const backupDataModelByCentralType = <TModel>(
    inCentralType: CentralTypeIdEnum,
    inData: TModel,
    backup_MC_Manual_Resources: MixingCenterOperatingResourcesModel,
    backup_MC_Automatic_Resources: MixingCenterOperatingResourcesModel,
    setBackup_MC_Manual_Resources: (value: MixingCenterOperatingResourcesModel) => void,
    setBackup_MC_Automatic_Resources: (value: MixingCenterOperatingResourcesModel) => void,
    setDataModelTo: (from: MixingCenterOperatingResourcesModel, value: TModel) => void
): void => {
    callByCentralType(
        inCentralType,
        deepClone(inData),
        (dataManual) => {
            const backup = deepClone(backup_MC_Manual_Resources);
            setDataModelTo(backup, dataManual);
            setBackup_MC_Manual_Resources(backup);
        },
        (dataAutomatic) => {
            const backup = deepClone(backup_MC_Automatic_Resources);
            setDataModelTo(backup, dataAutomatic);
            setBackup_MC_Automatic_Resources(backup);
        }
    );
}

export const gatherDataModelFromBackup = <TModel>(
    inCentralType: CentralTypeIdEnum,
    backup_MC_Manual_Resources: MixingCenterOperatingResourcesModel,
    backup_MC_Automatic_Resources: MixingCenterOperatingResourcesModel,
    callback: (from: MixingCenterOperatingResourcesModel) => TModel | null
): TModel | null => {
    let result: TModel | null = null;

    switch (inCentralType) {
        case CentralTypeIdEnum.Manual:
            result = callback(backup_MC_Manual_Resources);
            break;
        case CentralTypeIdEnum.Automatico:
            result = callback(backup_MC_Automatic_Resources);
            break;
        default:
            console.warn("gatherDataModelFromBackup. Tipo de central no reconocido:", inCentralType);
            break
    }

    return result;
}


// export const updateAndSetAdditionalCostsSummary = (
//     inData: MixingCenterOperatingResourcesModel,
//     setSummaryCallBack: (data: AdditionalCostsTotalsModel) => void
// ): void => {

//     const newSummary = new AdditionalCostsTotalsModel();

//     newSummary.automatedEquipmentTotal = inData.automatedEquipment.total.value;
//     newSummary.hygieneNCleanlinessTotal = inData.hygieneAndCleaning.total.value;
//     newSummary.protectiveMaterialsTotal = inData.personalProtection.total.value;
//     newSummary.sterilizedEquipmentTotal = inData.sterileWorkEquipment.total.value;
//     newSummary.maintenanceTotal = inData.maintenanceCosts.total.value;
//     newSummary.productionTotal = inData.productionCosts.total.value;
//     newSummary.staffTotal =
//         inData.staffChemistSalary.totalCompensacionSalarial.value +
//         inData.staffAssistantSalary.totalCompensacionSalarial.value;

//     setSummaryCallBack(newSummary);
// }

export const updateAdditionalCostsSummary = (
    inAutomatedEquipment: AutomatedEquipmentGroupModel,
    inHygieneAndCleaning: HygieneAndCleaningGroupModel,
    inPersonalProtection: PersonalProtectionGroupModel,
    inSterileWorkEquipment: SterileWorkEquipmentGroupModel,
    inMaintenanceCosts: MaintenanceCostsGroupModel,
    inProductionCosts: ProductionCostsGroupModel,
    inStaffChemistSalary: StaffSalaryGroupModel,
    inStaffAssistantSalary: StaffSalaryGroupModel,
    setSummaryCallBack: (data: AdditionalCostsTotalsModel) => void
): void => {

    const newSummary = new AdditionalCostsTotalsModel();

    newSummary.automatedEquipmentTotal = inAutomatedEquipment.total.value;
    newSummary.hygieneNCleanlinessTotal = inHygieneAndCleaning.total.value;
    newSummary.protectiveMaterialsTotal = inPersonalProtection.total.value;
    newSummary.sterilizedEquipmentTotal = inSterileWorkEquipment.total.value;
    newSummary.maintenanceTotal = inMaintenanceCosts.costoNpt.value;
    newSummary.productionTotal = inProductionCosts.total.value;
    newSummary.staffTotal =
        inStaffChemistSalary.totalCompensacionSalarial.value +
        inStaffAssistantSalary.totalCompensacionSalarial.value;

    setSummaryCallBack(newSummary);
}

export const getAdditionalCostsSummary = (
    inAutomatedEquipment: AutomatedEquipmentGroupModel,
    inHygieneAndCleaning: HygieneAndCleaningGroupModel,
    inPersonalProtection: PersonalProtectionGroupModel,
    inSterileWorkEquipment: SterileWorkEquipmentGroupModel,
    inMaintenanceCosts: MaintenanceCostsGroupModel,
    inProductionCosts: ProductionCostsGroupModel,
    inStaffChemistSalary: StaffSalaryGroupModel,
    inStaffAssistantSalary: StaffSalaryGroupModel
): AdditionalCostsTotalsModel => {

    const newSummary = new AdditionalCostsTotalsModel();

    newSummary.automatedEquipmentTotal = inAutomatedEquipment.total.value;
    newSummary.hygieneNCleanlinessTotal = inHygieneAndCleaning.total.value;
    newSummary.protectiveMaterialsTotal = inPersonalProtection.total.value;
    newSummary.sterilizedEquipmentTotal = inSterileWorkEquipment.total.value;
    newSummary.maintenanceTotal = inMaintenanceCosts.costoNpt.value;
    newSummary.productionTotal = inProductionCosts.total.value;
    newSummary.staffTotal =
        inStaffChemistSalary.totalCompensacionSalarial.value +
        inStaffAssistantSalary.totalCompensacionSalarial.value;

    return newSummary;
}