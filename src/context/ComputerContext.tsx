import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";
import MixingCenterSettingsModel from "@/logic/models/common/MixingCenterSettingsModel";
import ComputerBigGroupModel from "@/logic/models/ComputerBigGroupModel";
import AutomatedEquipmentGroupModel from "@/logic/models/operating_resources/AutomatedEquipmentGroupModel";
import HygieneAndCleaningGroupModel from "@/logic/models/operating_resources/HygieneAndCleaningGroupModel";
import MaintenanceCostsGroupModel from "@/logic/models/operating_resources/MaintenanceCostsGroupModel";
import PersonalProtectionGroupModel from "@/logic/models/operating_resources/PersonalProtectionGroupModel";
import ProductionCostsGroupModel from "@/logic/models/operating_resources/ProductionCostsGroupModel";
import StaffSalaryGroupModel from "@/logic/models/operating_resources/StaffSalaryGroupModel";
import SterileWorkEquipmentGroupModel from "@/logic/models/operating_resources/SterileWorkEquipmentGroupModel";
import RawMaterialGroupModel from "@/logic/models/RawMaterialGroupModel";
import { deepClone } from "@/utils/objectUtils";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { backupDataModelByCentralType, backupRawMaterialInTo, gatherDataModelFromBackup, gatherRawMaterialFromBackup } from "./ComputerContextExt";
import MixingCenterRawMaterialsModel from "@/logic/models/MixingCenterRawMaterialsModel";
import MixingCenterOperatingResourcesModel from "@/logic/models/MixingCenterOperatingResourcesModel";

// ------------------- Interfaz del Contexto -------------------
export interface ComputerContextProps {
    executingSomething: boolean; // <- esto es para avisarle al overlay que se active o no.
    currentFilename: string | null;
    currentMixingCenterSettings: MixingCenterSettingsModel;
    currentRawMaterial: RawMaterialGroupModel;
    currentAutomatedEquipment: AutomatedEquipmentGroupModel;
    currentHygieneAndCleaning: HygieneAndCleaningGroupModel;
    currentPersonalProtection: PersonalProtectionGroupModel;
    currentSterileWorkEquipment: SterileWorkEquipmentGroupModel;
    currentMaintenanceCosts: MaintenanceCostsGroupModel;
    currentProductionCosts: ProductionCostsGroupModel;
    currentChemistSalary: StaffSalaryGroupModel;
    currentAssistantSalary: StaffSalaryGroupModel;
    setExecutingSomething: (inValue: boolean) => void;
    setCurrentFilename: (inFileName: string | null) => void;
    setCurrentMixingCenterSettings: (inValue: MixingCenterSettingsModel) => void;
    setCurrentRawMaterial: (inValue: RawMaterialGroupModel) => void;
    setCurrentAutomatedEquipment: (inValue: AutomatedEquipmentGroupModel) => void;
    setCurrentHygieneAndCleaning: (inValue: HygieneAndCleaningGroupModel) => void;
    setCurrentPersonalProtection: (inValue: PersonalProtectionGroupModel) => void;
    setCurrentSterileWorkEquipment: (inValue: SterileWorkEquipmentGroupModel) => void;
    setCurrentMaintenanceCosts: (inValue: MaintenanceCostsGroupModel) => void;
    setCurrentProductionCosts: (inValue: ProductionCostsGroupModel) => void;
    setCurrentChemistSalary: (inValue: StaffSalaryGroupModel) => void;
    setCurrentAssistantSalary: (inValue: StaffSalaryGroupModel) => void;
    gatherExternalBackup: () => ComputerBigGroupModel;
    loadExternalBackup: (inExternalData: ComputerBigGroupModel | undefined | null) => void;
}

// ------------------- Contexto -------------------
export const ComputerContext = createContext<ComputerContextProps | undefined>(undefined);

// ------------------- Provider -------------------
// Antiguo calculadora provider
export const ComputerProvider = ({ children }: { children: React.ReactNode }) => {
    const msgInvalidData = "Datos leidos del backup internos son inválidos!";

    const [isReady, setIsReady] = useState(false);
    const [executingSomething, setExecutingSomething] = useState<boolean>(false);
    const [currentFilename, setCurrentFilename] = useState<string | null>(null);
    const [currentMixingCenterSettings, setCurrentMixingCenterSettings] = useState<MixingCenterSettingsModel>(new MixingCenterSettingsModel());
    const [currentRawMaterial, setCurrentRawMaterial] = useState<RawMaterialGroupModel>(new RawMaterialGroupModel());
    const [currentAutomatedEquipment, setCurrentAutomatedEquipment] = useState<AutomatedEquipmentGroupModel>(new AutomatedEquipmentGroupModel());
    const [currentHygieneAndCleaning, setCurrentHygieneAndCleaning] = useState<HygieneAndCleaningGroupModel>(new HygieneAndCleaningGroupModel());
    const [currentPersonalProtection, setCurrentPersonalProtection] = useState<PersonalProtectionGroupModel>(new PersonalProtectionGroupModel());
    const [currentSterileWorkEquipment, setCurrentSterileWorkEquipment] = useState<SterileWorkEquipmentGroupModel>(new SterileWorkEquipmentGroupModel());
    const [currentMaintenanceCosts, setCurrentMaintenanceCosts] = useState<MaintenanceCostsGroupModel>(new MaintenanceCostsGroupModel());
    const [currentProductionCosts, setCurrentProductionCosts] = useState<ProductionCostsGroupModel>(new ProductionCostsGroupModel());
    const [currentChemistSalary, setCurrentChemistSalary] = useState<StaffSalaryGroupModel>(new StaffSalaryGroupModel());
    const [currentAssistantSalary, setCurrentAssistantSalary] = useState<StaffSalaryGroupModel>(new StaffSalaryGroupModel());
    const [backup_MC_Manual_RawMaterials, setBackup_MC_Manual_RawMaterials] = useState<MixingCenterRawMaterialsModel>(new MixingCenterRawMaterialsModel());
    const [backup_MC_Automatic_RawMaterials, setBackup_MC_Automatic_RawMaterials] = useState<MixingCenterRawMaterialsModel>(new MixingCenterRawMaterialsModel());
    const [backup_MC_Manual_Resources, setBackup_MC_Manual_Resources] = useState<MixingCenterOperatingResourcesModel>(new MixingCenterOperatingResourcesModel());
    const [backup_MC_Automatic_Resources, setBackup_MC_Automatic_Resources] = useState<MixingCenterOperatingResourcesModel>(new MixingCenterOperatingResourcesModel());
    const [internalCentralType, setInternalCentralType] = useState<CentralTypeIdEnum>(CentralTypeIdEnum.Manual);
    const [internalPopulationType, setInternalPopulationType] = useState<PopulationTypeIdEnum>(PopulationTypeIdEnum.Adulto);

    /* *************************************** MIXING CENTER HANDLING *************************************** */

    const updatesMixingCenterBasics = (): void => {
        if (currentMixingCenterSettings !== undefined && currentMixingCenterSettings !== null) {
            const _centralType = currentMixingCenterSettings.centralType;
            const _populationType = currentMixingCenterSettings.populationType;

            if (internalCentralType !== _centralType) {
                setInternalCentralType(_centralType);
            }

            if (internalPopulationType !== _populationType) {
                setInternalPopulationType(_populationType);
            }
        }
    }

    /* *************************************** AREA DE LOS BACKUPS *************************************** */

    const gatherExternalBackup = (): ComputerBigGroupModel => {
        const output: ComputerBigGroupModel = new ComputerBigGroupModel();

        try {
            setIsReady(false);

            output.mixingCenterSettings = deepClone(currentMixingCenterSettings);

            output.backup_MC_Manual_RawMaterials = deepClone(backup_MC_Manual_RawMaterials);
            output.backup_MC_Automatic_RawMaterials = deepClone(backup_MC_Automatic_RawMaterials);

            output.backup_MC_Manual_Resources = deepClone(backup_MC_Manual_Resources);
            output.backup_MC_Automatic_Resources = deepClone(backup_MC_Automatic_Resources);

        } catch (err) {
            console.error(err);
        } finally {
            setIsReady(true);
        }

        return output;
    }

    const loadExternalBackup = (inExternalData: ComputerBigGroupModel | undefined | null): void => {
        try {
            setIsReady(false);

            if (inExternalData !== undefined && inExternalData !== null && isExternalDataValid(inExternalData)) {
                loadExternalBackupProcess(inExternalData);
                updatesMixingCenterBasics();
            } else {
                throw new Error("Datos de backup inválidos!");
            }

        } catch (err) {
            throw err;
        } finally {
            setIsReady(true);
        }
    }

    const isExternalDataValid = (inExternalData: ComputerBigGroupModel): boolean => {
        return (
            inExternalData.mixingCenterSettings !== undefined && inExternalData.mixingCenterSettings != null &&
            inExternalData.backup_MC_Automatic_RawMaterials !== undefined && inExternalData.backup_MC_Automatic_RawMaterials !== null &&
            inExternalData.backup_MC_Automatic_Resources !== undefined && inExternalData.backup_MC_Automatic_Resources !== null &&
            inExternalData.backup_MC_Manual_RawMaterials !== undefined && inExternalData.backup_MC_Manual_RawMaterials !== null &&
            inExternalData.backup_MC_Manual_Resources !== undefined && inExternalData.backup_MC_Manual_Resources !== null
        );
    }

    const loadExternalBackupProcess = (inExternalData: ComputerBigGroupModel): void => {

        if (inExternalData.mixingCenterSettings) {
            setCurrentMixingCenterSettings(deepClone(inExternalData.mixingCenterSettings));
            setInternalCentralType(inExternalData.mixingCenterSettings.centralType);
            setInternalPopulationType(inExternalData.mixingCenterSettings.populationType);
        }

        if (inExternalData.backup_MC_Manual_RawMaterials) {
            setBackup_MC_Manual_RawMaterials(deepClone(inExternalData.backup_MC_Manual_RawMaterials));
        }

        if (inExternalData.backup_MC_Automatic_RawMaterials) {
            setBackup_MC_Automatic_RawMaterials(deepClone(inExternalData.backup_MC_Automatic_RawMaterials));
        }

        if (inExternalData.backup_MC_Manual_Resources) {
            setBackup_MC_Manual_Resources(deepClone(inExternalData.backup_MC_Manual_Resources));
        }

        if (inExternalData.backup_MC_Automatic_Resources) {
            setBackup_MC_Automatic_Resources(deepClone(inExternalData.backup_MC_Automatic_Resources));
        }

        getAndSetDataFromInternalBackup(getRawMaterialFromBackup, setCurrentRawMaterial);

        getAndSetDataFromInternalBackup(getAutomatedEquipmentFromBackup, setCurrentAutomatedEquipment);
        getAndSetDataFromInternalBackup(getHygieneAndCleaningFromBackup, setCurrentHygieneAndCleaning);
        getAndSetDataFromInternalBackup(getSterileWorkEquipmentFromBackup, setCurrentSterileWorkEquipment);
        getAndSetDataFromInternalBackup(getMaintenanceCostsFromBackup, setCurrentMaintenanceCosts);
        getAndSetDataFromInternalBackup(getProductionCostsFromBackup, setCurrentProductionCosts);
        getAndSetDataFromInternalBackup(getStaffChemistSalaryFromBackup, setCurrentChemistSalary);
        getAndSetDataFromInternalBackup(getStaffAssistantSalaryFromBackup, setCurrentAssistantSalary);
    }

    const getAndSetDataFromInternalBackup = <TModel,>(
        callBackGet: () => TModel | null,
        setDataFromBackup: (inData: TModel) => void
    ): void => {
        const _dataFromBackup: TModel | null = callBackGet();
        if (_dataFromBackup) {
            setDataFromBackup(_dataFromBackup);
        } else {
            throw new Error(msgInvalidData);
        }
    }

    /* *************************************** AREA DE LOS GET FROM BACKUP *************************************** */
    // Obtiene los datos segun el tipo de central y el tipo de poblacion (recordar que estan almancenados independientemente)
    const getRawMaterialFromBackup = (): RawMaterialGroupModel | null => {
        return gatherRawMaterialFromBackup(
            currentMixingCenterSettings.centralType,
            currentMixingCenterSettings.populationType,
            backup_MC_Manual_RawMaterials,
            backup_MC_Automatic_RawMaterials
        );
    }

    const internalGetDataFromBackup = <TModel,>(callback: (from: MixingCenterOperatingResourcesModel) => TModel | null): TModel | null => {
        return gatherDataModelFromBackup(
            currentMixingCenterSettings.centralType,
            backup_MC_Manual_Resources,
            backup_MC_Automatic_Resources,
            callback
        );
    }

    const getAutomatedEquipmentFromBackup = (): AutomatedEquipmentGroupModel | null => {
        return internalGetDataFromBackup((from) => { return from.automatedEquipment; });
    }

    const getHygieneAndCleaningFromBackup = (): HygieneAndCleaningGroupModel | null => {
        return internalGetDataFromBackup((from) => { return from.hygieneAndCleaning; });
    }

    const getPersonalProtectionFromBackup = (): PersonalProtectionGroupModel | null => {
        return internalGetDataFromBackup((from) => { return from.personalProtection; });
    }

    const getSterileWorkEquipmentFromBackup = (): SterileWorkEquipmentGroupModel | null => {
        return internalGetDataFromBackup((from) => { return from.sterileWorkEquipment; });
    }

    const getMaintenanceCostsFromBackup = (): MaintenanceCostsGroupModel | null => {
        return internalGetDataFromBackup((from) => { return from.maintenanceCosts; });
    }

    const getProductionCostsFromBackup = (): ProductionCostsGroupModel | null => {
        return internalGetDataFromBackup((from) => { return from.productionCosts; });
    }

    const getStaffChemistSalaryFromBackup = (): StaffSalaryGroupModel | null => {
        return internalGetDataFromBackup((from) => { return from.staffChemistSalary; });
    }

    const getStaffAssistantSalaryFromBackup = (): StaffSalaryGroupModel | null => {
        return internalGetDataFromBackup((from) => { return from.staffAssistantSalary; });
    }


    /* *************************************** AREA DE LOS BACKUPS *************************************** */

    // SE ENCARGA DE COPIAR LOS DATOS DE 'CURRENTRAWMATERIALDATA' AL MODELO QUE 
    // LE CORRESPONDE SEGÚN EL TIPO DE CENTRAL Y EL TIPO DE POBLACION.
    const backupCurrentRawMaterial = (): void => {
        backupRawMaterialInTo(
            currentMixingCenterSettings.centralType,
            currentMixingCenterSettings.populationType,
            currentRawMaterial,
            backup_MC_Manual_RawMaterials,
            backup_MC_Automatic_RawMaterials,
            setBackup_MC_Manual_RawMaterials,
            setBackup_MC_Automatic_RawMaterials
        );
    }

    const internalBackupData = <TModel,>(
        input: TModel,
        callback: (fromValue: MixingCenterOperatingResourcesModel, toValue: TModel) => void
    ): void => {
        backupDataModelByCentralType(
            currentMixingCenterSettings.centralType,
            input,
            backup_MC_Manual_Resources,
            backup_MC_Automatic_Resources,
            setBackup_MC_Manual_Resources,
            setBackup_MC_Automatic_Resources,
            callback
            // (fromValue, toValue) => { fromValue.automatedEquipment = toValue; }
        );
    }

    const backupAutomatedEquipmentData = (): void => {
        internalBackupData(
            currentAutomatedEquipment,
            (fromValue, toValue) => { fromValue.automatedEquipment = toValue; }
        );
    }

    const backupHygieneAndCleaningData = (): void => {
        internalBackupData(
            currentHygieneAndCleaning,
            (fromValue, toValue) => { fromValue.hygieneAndCleaning = toValue; }
        );
    }

    const backupPersonalProtectionData = (): void => {
        internalBackupData(
            currentPersonalProtection,
            (fromValue, toValue) => { fromValue.personalProtection = toValue; }
        );
    }

    const backupSterileWorkEquipmentData = (): void => {
        internalBackupData(
            currentSterileWorkEquipment,
            (fromValue, toValue) => { fromValue.sterileWorkEquipment = toValue; }
        );
    }

    const backupMaintenanceCostsData = (): void => {
        internalBackupData(
            currentMaintenanceCosts,
            (fromValue, toValue) => { fromValue.maintenanceCosts = toValue; }
        );
    }

    const backupProductionCostsData = (): void => {
        internalBackupData(
            currentProductionCosts,
            (fromValue, toValue) => { fromValue.productionCosts = toValue; }
        );
    }

    const backupChemistSalaryData = (): void => {
        internalBackupData(
            currentChemistSalary,
            (fromValue, toValue) => { fromValue.staffChemistSalary = toValue; }
        );
    }

    const backupAssistantSalaryData = (): void => {
        internalBackupData(
            currentAssistantSalary,
            (fromValue, toValue) => { fromValue.staffAssistantSalary = toValue; }
        );
    }

    /* *************************************** AREA DE LOS USE-EFFECT *************************************** */

    useEffect(() => {
        if (isReady) {
            console.log("HUBO UN CAMBIO EN 'CURRENT MIXINGCENTERSETTINGS.");
            updatesMixingCenterBasics();
        } else {
            console.log("HUBO UN CAMBIO EN 'CURRENT MIXINGCENTERSETTINGS' PERO NO SE HA TERMINADO DE MONTAR.");
        }
    }, [currentMixingCenterSettings]);

    useEffect(() => {
        if (isReady) {
            console.log("HUBO UN CAMBIO EN 'CURRENT RAW MATERIAL'.");
            backupCurrentRawMaterial();
        } else {
            console.log("HUBO UN CAMBIO EN 'CURRENT RAW MATERIAL' PERO NO SE HA TERMINADO DE MONTAR.");
        }
    }, [currentRawMaterial]);

    useEffect(() => {
        if (isReady) {
            console.log("HUBO UN CAMBIO EN 'CURRENT AUTOMATED EQUIPMENT'.");
            backupAutomatedEquipmentData();
        } else {
            console.log("HUBO UN CAMBIO EN 'CURRENT AUTOMATED EQUIPMENT' PERO NO SE HA TERMINADO DE MONTAR.");
        }
    }, [currentAutomatedEquipment]);

    useEffect(() => {
        if (isReady) {
            console.log("HUBO UN CAMBIO EN 'CURRENT HygieneAndCleaning'.");
            backupHygieneAndCleaningData();
        } else {
            console.log("HUBO UN CAMBIO EN 'CURRENT HygieneAndCleaning' PERO NO SE HA TERMINADO DE MONTAR.");
        }
    }, [currentHygieneAndCleaning]);

    useEffect(() => {
        if (isReady) {
            console.log("HUBO UN CAMBIO EN 'CURRENT PersonalProtection'.");
            backupPersonalProtectionData();
        } else {
            console.log("HUBO UN CAMBIO EN 'CURRENT PersonalProtection' PERO NO SE HA TERMINADO DE MONTAR.");
        }
    }, [currentPersonalProtection]);

    useEffect(() => {
        if (isReady) {
            console.log("HUBO UN CAMBIO EN 'CURRENT PersonalProtection'.");
            backupSterileWorkEquipmentData();
        } else {
            console.log("HUBO UN CAMBIO EN 'CURRENT PersonalProtection' PERO NO SE HA TERMINADO DE MONTAR.");
        }
    }, [currentSterileWorkEquipment]);

    useEffect(() => {
        if (isReady) {
            console.log("HUBO UN CAMBIO EN 'CURRENT MaintenanceCosts'.");
            backupMaintenanceCostsData();
        } else {
            console.log("HUBO UN CAMBIO EN 'CURRENT MaintenanceCosts' PERO NO SE HA TERMINADO DE MONTAR.");
        }
    }, [currentMaintenanceCosts]);

    useEffect(() => {
        if (isReady) {
            console.log("HUBO UN CAMBIO EN 'CURRENT ProductionCosts'.");
            backupProductionCostsData();
        } else {
            console.log("HUBO UN CAMBIO EN 'CURRENT ProductionCosts' PERO NO SE HA TERMINADO DE MONTAR.");
        }
    }, [currentProductionCosts]);

    useEffect(() => {
        if (isReady) {
            console.log("HUBO UN CAMBIO EN 'CURRENT ChemistSalary'.");
            backupChemistSalaryData();
        } else {
            console.log("HUBO UN CAMBIO EN 'CURRENT ChemistSalary' PERO NO SE HA TERMINADO DE MONTAR.");
        }
    }, [currentChemistSalary]);

    useEffect(() => {
        if (isReady) {
            console.log("HUBO UN CAMBIO EN 'CURRENT AssistantSalary'.");
            backupAssistantSalaryData();
        } else {
            console.log("HUBO UN CAMBIO EN 'CURRENT AssistantSalary' PERO NO SE HA TERMINADO DE MONTAR.");
        }
    }, [currentAssistantSalary]);

    useEffect(() => {
        setTimeout(() => {
            setIsReady(true);
            setExecutingSomething(false);
        }, 500);
    }, []);

    return (
        <ComputerContext.Provider
            value={{
                executingSomething,
                currentFilename,
                currentMixingCenterSettings,
                currentRawMaterial,
                currentAutomatedEquipment,
                currentHygieneAndCleaning,
                currentPersonalProtection,
                currentSterileWorkEquipment,
                currentMaintenanceCosts,
                currentProductionCosts,
                currentChemistSalary,
                currentAssistantSalary,
                setExecutingSomething,
                setCurrentFilename,
                setCurrentMixingCenterSettings,
                setCurrentRawMaterial,
                setCurrentAutomatedEquipment,
                setCurrentHygieneAndCleaning,
                setCurrentPersonalProtection,
                setCurrentSterileWorkEquipment,
                setCurrentMaintenanceCosts,
                setCurrentProductionCosts,
                setCurrentChemistSalary,
                setCurrentAssistantSalary,
                gatherExternalBackup,
                loadExternalBackup
            }}
        >
            {children}
        </ComputerContext.Provider>
    );
};


export const useComputerContext = (): ComputerContextProps => {
    const context = useContext(ComputerContext);
    if (!context) {
        throw new Error("useComputerContext debe usarse dentro de un ComputerProvider");
    }
    return context;
};
