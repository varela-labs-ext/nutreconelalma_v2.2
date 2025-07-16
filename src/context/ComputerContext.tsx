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
import DefaultValuesProvider from "@/providers/DefaultValuesProvider";
import StorageProvider from "@/providers/StorageProvider";
import { deepClone, deepEqual } from "@/utils/objectUtils";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { backupDataModelByCentralType, backupRawMaterialInTo, callByCentralTypeWithReturn, gatherDataModelFromBackup, gatherRawMaterialFromBackup } from "./ComputerContextExt";
import MixingCenterRawMaterialsModel from "@/logic/models/MixingCenterRawMaterialsModel";
import MixingCenterOperatingResourcesModel from "@/logic/models/MixingCenterOperatingResourcesModel";

// ------------------- Tipos auxiliares -------------------
export type ActionComputer = "nueva" | "cargar" | "salvar" | null;

// ------------------- Proveedor de almacenamiento -------------------
// class ComputerStorageProvider {
//     async guardarDatos(datos: {
//         tipoA: TipoAModel;
//         tipoB: TipoBModel;
//         tipoC: TipoCModel;
//         tipoD: TipoDModel;
//         tipoE: TipoEModel;
//         tipoF: TipoFModel;
//         tipoG: TipoGModel;
//         tipoH: TipoHModel;
//     }) {
//         // TODO: Implementar lógica de guardado en base de datos local
//         console.log("Guardando datos en almacenamiento local...", datos);
//     }

//     async cargarDatos(nombre: string) {
//         // TODO: Implementar lógica de carga desde almacenamiento local
//         console.log(`Cargando archivo: ${nombre}`);
//         return null;
//     }
// }

// ------------------- Interfaz del Contexto -------------------
export interface ComputerContextProps {
    // CurrentAction: ActionComputer;
    // setAction: (Action: ActionComputer) => void;

    executingSomething: boolean; // <- esto es para avisarle al overlay que se active o no.
    userDefaultValuesExists: boolean;

    currentFilename: string | null;
    currentMixingCenterSettings: MixingCenterSettingsModel;

    currentRawMaterial: RawMaterialGroupModel; //<- hay que renombrarlo a huevo!
    currentAutomatedEquipment: AutomatedEquipmentGroupModel;
    currentHygieneAndCleaning: HygieneAndCleaningGroupModel;
    currentPersonalProtection: PersonalProtectionGroupModel;
    currentSterileWorkEquipment: SterileWorkEquipmentGroupModel;
    currentMaintenanceCosts: MaintenanceCostsGroupModel;
    currentProductionCosts: ProductionCostsGroupModel;
    currentChemistSalary: StaffSalaryGroupModel;
    currentAssistantSalary: StaffSalaryGroupModel;

    setExecutingSomething: (inValue: boolean) => void;
    setUserDefaultValuesExists: (inValue: boolean) => void;

    setCurrentFilename: (inFileName: string | null) => void;

    setCurrentMixingCenterSettings: (inValue: MixingCenterSettingsModel) => void;
    setCurrentRawMaterial: (inValue: RawMaterialGroupModel) => void; //<- hay que renombrarlo a huevo, el nombre del modelo!

    setCurrentAutomatedEquipment: (inValue: AutomatedEquipmentGroupModel) => void;
    setCurrentHygieneAndCleaning: (inValue: HygieneAndCleaningGroupModel) => void;
    setCurrentPersonalProtection: (inValue: PersonalProtectionGroupModel) => void;
    setCurrentSterileWorkEquipment: (inValue: SterileWorkEquipmentGroupModel) => void;
    setCurrentMaintenanceCosts: (inValue: MaintenanceCostsGroupModel) => void;
    setCurrentProductionCosts: (inValue: ProductionCostsGroupModel) => void;
    setCurrentChemistSalary: (inValue: StaffSalaryGroupModel) => void;
    setCurrentAssistantSalary: (inValue: StaffSalaryGroupModel) => void;

    resetCalcUseFabridDefaults: () => void;
}

// ------------------- Contexto -------------------
export const ComputerContext = createContext<ComputerContextProps | undefined>(undefined);

// ------------------- Provider -------------------
// Antiguo calculadora provider
export const ComputerProvider = ({ children }: { children: React.ReactNode }) => {
    // const [CurrentAction, setCurrentAction] = useState<ActionComputer>(null);

    const [isReady, setIsReady] = useState(false);
    const [executingSomething, setExecutingSomething] = useState<boolean>(false);

    const [userDefaultValuesExists, setUserDefaultValuesExists] = useState<boolean>(false);
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


    // Estos son internos del contexto solamente.
    // Son para manter los cambios en memoria de cada tipo de central, ya que los elementos que comienzan con "current..."
    // Son temporales relacionados a la central seleccionada.
    const [backup_MC_Manual_RawMaterials, setBackup_MC_Manual_RawMaterials] = useState<MixingCenterRawMaterialsModel>(new MixingCenterRawMaterialsModel());
    const [backup_MC_Automatic_RawMaterials, setBackup_MC_Automatic_RawMaterials] = useState<MixingCenterRawMaterialsModel>(new MixingCenterRawMaterialsModel());

    const [backup_MC_Manual_Resources, setBackup_MC_Manual_Resources] = useState<MixingCenterOperatingResourcesModel>(new MixingCenterOperatingResourcesModel());
    const [backup_MC_Automatic_Resources, setBackup_MC_Automatic_Resources] = useState<MixingCenterOperatingResourcesModel>(new MixingCenterOperatingResourcesModel());

    const [internalCentralType, setInternalCentralType] = useState<CentralTypeIdEnum>(CentralTypeIdEnum.Manual);
    const [internalPopulationType, setInternalPopulationType] = useState<PopulationTypeIdEnum>(PopulationTypeIdEnum.Adulto);

    // // Estos son internos del contexto solamente.
    // const [mixingCenterManualAdultoRawMaterialData, setMixingCenterManualAdultoRawMaterialData] = useState<RawMaterialGroupModel>(new RawMaterialGroupModel());
    // const [mixingCenterManualNeonatalRawMaterialData, setMixingCenterManualNeonatalRawMaterialData] = useState<RawMaterialGroupModel>(new RawMaterialGroupModel());
    // const [mixingCenterManualPediatricaRawMaterialData, setMixingCenterManualPediatricaRawMaterialData] = useState<RawMaterialGroupModel>(new RawMaterialGroupModel());

    // const [mixingCenterAutomaticAdultoRawMaterialData, setMixingCenterAutomaticAdultoRawMaterialData] = useState<RawMaterialGroupModel>(new RawMaterialGroupModel());
    // const [mixingCenterAutomaticNeonatalRawMaterialData, setMixingCenterAutomaticNeonatalRawMaterialData] = useState<RawMaterialGroupModel>(new RawMaterialGroupModel());
    // const [mixingCenterAutomaticPediatricaRawMaterialData, setMixingCenterAutomaticPediatricaRawMaterialData] = useState<RawMaterialGroupModel>(new RawMaterialGroupModel());


    const resetCalcUseFabridDefaults = (): void => {
        try {
            setIsReady(false);
            console.log("REINICIANDO CALCULADORA, USANDO VALORES DE FABRICA...");

            const _mixingCenterSettings = DefaultValuesProvider.mixingCenterSettingsDefaults();
            const _productionLines: number = _mixingCenterSettings.productionLines;
            const _productionPerMonth: number = (_mixingCenterSettings.productionPerDay * 30);
            const _centralType: CentralTypeIdEnum = _mixingCenterSettings.centralType;

            console.log("createNewFileWithStandarDefaultValues()....");
            console.log(`ProductionLines: ${_productionLines}, ProductionPerMonth: ${_productionPerMonth}`);

            setCurrentMixingCenterSettings(_mixingCenterSettings);

            setCurrentAutomatedEquipment(DefaultValuesProvider.automatedEquipmentDefaults());
            setCurrentHygieneAndCleaning(DefaultValuesProvider.hygieneAndCleaningDefaults(_centralType));
            setCurrentPersonalProtection(DefaultValuesProvider.personalProtectionDefaults(_centralType));
            setCurrentSterileWorkEquipment(DefaultValuesProvider.sterileWorkEquipmentDefaults(_centralType));
            setCurrentMaintenanceCosts(DefaultValuesProvider.maintenanceCostsDefaults(_centralType, _productionLines, _productionPerMonth));
            setCurrentProductionCosts(DefaultValuesProvider.productionCostsDefaults(_centralType, _productionLines, _productionPerMonth));
            setCurrentChemistSalary(DefaultValuesProvider.chemistSalaryDefaults(_centralType));
            setCurrentAssistantSalary(DefaultValuesProvider.chemistAssistantSalaryDefaults(_centralType));
            setCurrentRawMaterial(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Manual, PopulationTypeIdEnum.Adulto));

            // TODO: tambien hay que resetear los backups, porque si el usuario cambia de central, los valores cargados estarian en blanco

            // setMixingCenterManualAdultoRawMaterialData(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Manual, PopulationTypeIdEnum.Adulto));
            // setMixingCenterManualNeonatalRawMaterialData(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Manual, PopulationTypeIdEnum.Neonatal));
            // setMixingCenterManualPediatricaRawMaterialData(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Manual, PopulationTypeIdEnum.Pediatrica));

            // setMixingCenterAutomaticAdultoRawMaterialData(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Automatico, PopulationTypeIdEnum.Adulto));
            // setMixingCenterAutomaticNeonatalRawMaterialData(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Automatico, PopulationTypeIdEnum.Neonatal));
            // setMixingCenterAutomaticPediatricaRawMaterialData(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Automatico, PopulationTypeIdEnum.Pediatrica));

        } catch (error) {
            console.error(error);
        } finally {
            setIsReady(true);
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
            console.log("HUBO UN CAMBIO REAL EN 'CURRENT RAW MATERIAL'.");
            backupCurrentRawMaterial();
        } else {
            console.log("HUBO UN CAMBIO REAL EN 'CURRENT RAW MATERIAL' PERO NO SE HA TERMINADO DE MONTAR.");
        }
    }, [currentRawMaterial]);

    useEffect(() => {
        if (isReady) {
            console.log("HUBO UN CAMBIO REAL EN 'CURRENT AUTOMATED EQUIPMENT'.");
            backupAutomatedEquipmentData();
        } else {
            console.log("HUBO UN CAMBIO REAL EN 'CURRENT AUTOMATED EQUIPMENT' PERO NO SE HA TERMINADO DE MONTAR.");
        }
    }, [currentAutomatedEquipment]);

    useEffect(() => {
        if (isReady) {
            console.log("HUBO UN CAMBIO REAL EN 'CURRENT HygieneAndCleaning'.");
            backupHygieneAndCleaningData();
        } else {
            console.log("HUBO UN CAMBIO REAL EN 'CURRENT HygieneAndCleaning' PERO NO SE HA TERMINADO DE MONTAR.");
        }
    }, [currentHygieneAndCleaning]);

    useEffect(() => {
        if (isReady) {
            console.log("HUBO UN CAMBIO REAL EN 'CURRENT PersonalProtection'.");
            backupPersonalProtectionData();
        } else {
            console.log("HUBO UN CAMBIO REAL EN 'CURRENT PersonalProtection' PERO NO SE HA TERMINADO DE MONTAR.");
        }
    }, [currentPersonalProtection]);

    useEffect(() => {
        if (isReady) {
            console.log("HUBO UN CAMBIO REAL EN 'CURRENT PersonalProtection'.");
            backupSterileWorkEquipmentData();
        } else {
            console.log("HUBO UN CAMBIO REAL EN 'CURRENT PersonalProtection' PERO NO SE HA TERMINADO DE MONTAR.");
        }
    }, [currentSterileWorkEquipment]);

    useEffect(() => {
        if (isReady) {
            console.log("HUBO UN CAMBIO REAL EN 'CURRENT MaintenanceCosts'.");
            backupMaintenanceCostsData();
        } else {
            console.log("HUBO UN CAMBIO REAL EN 'CURRENT MaintenanceCosts' PERO NO SE HA TERMINADO DE MONTAR.");
        }
    }, [currentMaintenanceCosts]);

    useEffect(() => {
        if (isReady) {
            console.log("HUBO UN CAMBIO REAL EN 'CURRENT ProductionCosts'.");
            backupProductionCostsData();
        } else {
            console.log("HUBO UN CAMBIO REAL EN 'CURRENT ProductionCosts' PERO NO SE HA TERMINADO DE MONTAR.");
        }
    }, [currentProductionCosts]);

    useEffect(() => {
        if (isReady) {
            console.log("HUBO UN CAMBIO REAL EN 'CURRENT ChemistSalary'.");
            backupChemistSalaryData();
        } else {
            console.log("HUBO UN CAMBIO REAL EN 'CURRENT ChemistSalary' PERO NO SE HA TERMINADO DE MONTAR.");
        }
    }, [currentChemistSalary]);

    useEffect(() => {
        if (isReady) {
            console.log("HUBO UN CAMBIO REAL EN 'CURRENT AssistantSalary'.");
            backupAssistantSalaryData();
        } else {
            console.log("HUBO UN CAMBIO REAL EN 'CURRENT AssistantSalary' PERO NO SE HA TERMINADO DE MONTAR.");
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
                userDefaultValuesExists,
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
                setUserDefaultValuesExists,
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
                resetCalcUseFabridDefaults
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
