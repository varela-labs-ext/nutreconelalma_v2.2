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
import RawMaterialModel from "@/logic/models/RawMaterialModel";
import DefaultValuesProvider from "@/providers/DefaultValuesProvider";
import StorageProvider from "@/providers/StorageProvider";
import { deepClone } from "@/utils/objectUtils";
import { createContext, useContext, useEffect, useState } from "react";
import { callByCentralType, callByCentralTypeWithReturn } from "./ComputerContextExt";

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
    executingSomething: boolean;
    userDefaultValuesExists: boolean;

    currentFilename: string | null;
    currentCentralType: CentralTypeIdEnum;
    currentPopulationType: PopulationTypeIdEnum;
    currentMixingCenterSettings: MixingCenterSettingsModel;

    currentRawMaterialData: RawMaterialModel; //<- hay que renombrarlo a huevo!
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
    setCurrentCentralType: (inValue: CentralTypeIdEnum) => void;
    setCurrentPopulationType: (inValue: PopulationTypeIdEnum) => void;

    setCurrentMixingCenterSettings: (inValue: MixingCenterSettingsModel) => void;
    setCurrentRawMaterialData: (inValue: RawMaterialModel) => void; //<- hay que renombrarlo a huevo, el nombre del modelo!

    setCurrentAutomatedEquipment: (inValue: AutomatedEquipmentGroupModel) => void;
    setCurrentHygieneAndCleaning: (inValue: HygieneAndCleaningGroupModel) => void;
    setCurrentPersonalProtection: (inValue: PersonalProtectionGroupModel) => void;
    setCurrentSterileWorkEquipment: (inValue: SterileWorkEquipmentGroupModel) => void;
    setCurrentMaintenanceCosts: (inValue: MaintenanceCostsGroupModel) => void;
    setCurrentProductionCosts: (inValue: ProductionCostsGroupModel) => void;
    setCurrentChemistSalary: (inValue: StaffSalaryGroupModel) => void;
    setCurrentAssistantSalary: (inValue: StaffSalaryGroupModel) => void;

    createNewFileAsync: () => Promise<void>;
    openFileAsync: (inFileName: string) => Promise<void>;
    saveFileAsync: () => Promise<void>;
    saveFileAsAsync: (inFileName: string) => Promise<void>;
}

// ------------------- Contexto -------------------
export const ComputerContext = createContext<ComputerContextProps | undefined>(undefined);

// ------------------- Provider -------------------
// Antiguo calculadora provider
export const ComputerProvider = ({ children }: { children: React.ReactNode }) => {
    // const [CurrentAction, setCurrentAction] = useState<ActionComputer>(null);

    const [executingSomething, setExecutingSomething] = useState<boolean>(false);

    const [userDefaultValuesExists, setUserDefaultValuesExists] = useState<boolean>(false);
    const [currentFilename, setCurrentFilename] = useState<string | null>(null);
    const [currentCentralType, setCurrentCentralType] = useState<CentralTypeIdEnum>(CentralTypeIdEnum.Manual);
    const [currentPopulationType, setCurrentPopulationType] = useState<PopulationTypeIdEnum>(PopulationTypeIdEnum.Adulto);
    const [currentMixingCenterSettings, setCurrentMixingCenterSettings] = useState<MixingCenterSettingsModel>(new MixingCenterSettingsModel());
    const [currentRawMaterialData, setCurrentRawMaterialData] = useState<RawMaterialModel>(new RawMaterialModel());
    const [currentAutomatedEquipment, setCurrentAutomatedEquipment] = useState<AutomatedEquipmentGroupModel>(new AutomatedEquipmentGroupModel());
    const [currentHygieneAndCleaning, setCurrentHygieneAndCleaning] = useState<HygieneAndCleaningGroupModel>(new HygieneAndCleaningGroupModel());
    const [currentPersonalProtection, setCurrentPersonalProtection] = useState<PersonalProtectionGroupModel>(new PersonalProtectionGroupModel());
    const [currentSterileWorkEquipment, setCurrentSterileWorkEquipment] = useState<SterileWorkEquipmentGroupModel>(new SterileWorkEquipmentGroupModel());
    const [currentMaintenanceCosts, setCurrentMaintenanceCosts] = useState<MaintenanceCostsGroupModel>(new MaintenanceCostsGroupModel());
    const [currentProductionCosts, setCurrentProductionCosts] = useState<ProductionCostsGroupModel>(new ProductionCostsGroupModel());
    const [currentChemistSalary, setCurrentChemistSalary] = useState<StaffSalaryGroupModel>(new StaffSalaryGroupModel());
    const [currentAssistantSalary, setCurrentAssistantSalary] = useState<StaffSalaryGroupModel>(new StaffSalaryGroupModel());

    // Estos son internos del contexto solamente.
    const [mixingCenterManualAdultoRawMaterialData, setMixingCenterManualAdultoRawMaterialData] = useState<RawMaterialModel>(new RawMaterialModel());
    const [mixingCenterManualNeonatalRawMaterialData, setMixingCenterManualNeonatalRawMaterialData] = useState<RawMaterialModel>(new RawMaterialModel());
    const [mixingCenterManualPediatricaRawMaterialData, setMixingCenterManualPediatricaRawMaterialData] = useState<RawMaterialModel>(new RawMaterialModel());

    const [mixingCenterAutomaticAdultoRawMaterialData, setMixingCenterAutomaticAdultoRawMaterialData] = useState<RawMaterialModel>(new RawMaterialModel());
    const [mixingCenterAutomaticNeonatalRawMaterialData, setMixingCenterAutomaticNeonatalRawMaterialData] = useState<RawMaterialModel>(new RawMaterialModel());
    const [mixingCenterAutomaticPediatricaRawMaterialData, setMixingCenterAutomaticPediatricaRawMaterialData] = useState<RawMaterialModel>(new RawMaterialModel());


    const createNewFileAsync = async (): Promise<void> => {
        try {
            setExecutingSomething(true);
            console.log("METODO 'createNewFileAsync' INICIANDO...");

            setCurrentCentralType(CentralTypeIdEnum.Manual);
            setCurrentPopulationType(PopulationTypeIdEnum.Adulto);

            if (userDefaultValuesExists) {
                const result = await createNewFileWithUserCustomDefaultValuesAsync();

                if (result) {
                    createNewFileWithStandarDefaultValues();
                }
            } else {
                createNewFileWithStandarDefaultValues();
            }

            setCurrentFilename(null);
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setExecutingSomething(false);
            console.log("METODO 'createNewFileAsync' TERMINANDO...");
        }
    }

    const openFileAsync = async (inFileName: string): Promise<void> => {
        try {
            setExecutingSomething(true);

            if (inFileName) {
                const results = await StorageProvider.loadFileDataAsync(inFileName);

                if (results) {
                    applyComputerData(results);
                    setCurrentFilename(inFileName);
                }
            }
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setExecutingSomething(false);
        }
    }

    const saveFileAsync = async (): Promise<void> => {
        if (!currentFilename) {
            console.log("No hay archivo activo. Usa guardarComo(nombre) en su lugar.");
            return;
        }

        try {
            setExecutingSomething(true);

            const output = gatherComputerData();
            await StorageProvider.saveFileDataAsync(currentFilename, output);

        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setExecutingSomething(false);
        }
    }

    const saveFileAsAsync = async (inFileName: string): Promise<void> => {
        try {
            setExecutingSomething(true);

            const output = gatherComputerData();
            await StorageProvider.saveFileDataAsync(inFileName, output);
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setCurrentFilename(inFileName);
            setExecutingSomething(false);
        }
    }

    const createNewFileWithStandarDefaultValues = (): void => {
        setCurrentMixingCenterSettings(DefaultValuesProvider.mixingCenterSettingsDefaults());

        setCurrentAutomatedEquipment(DefaultValuesProvider.automatedEquipmentDefaults());
        setCurrentHygieneAndCleaning(DefaultValuesProvider.hygieneAndCleaningDefaults(currentCentralType));
        setCurrentPersonalProtection(DefaultValuesProvider.personalProtectionDefaults(currentCentralType));
        setCurrentSterileWorkEquipment(DefaultValuesProvider.sterileWorkEquipmentDefaults(currentCentralType));

        setCurrentMaintenanceCosts(DefaultValuesProvider.maintenanceCostsDefaults(currentCentralType, currentMixingCenterSettings.productionLines, (currentMixingCenterSettings.productionPerDay * 30)));

        setCurrentProductionCosts(DefaultValuesProvider.productionCostsDefaults(currentCentralType, currentMixingCenterSettings.productionLines, (currentMixingCenterSettings.productionPerDay * 30)));

        setCurrentChemistSalary(DefaultValuesProvider.chemistSalaryDefaults(currentCentralType));
        setCurrentAssistantSalary(DefaultValuesProvider.chemistAssistantSalaryDefaults(currentCentralType));

        setMixingCenterManualAdultoRawMaterialData(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Manual, PopulationTypeIdEnum.Adulto));
        setMixingCenterManualNeonatalRawMaterialData(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Manual, PopulationTypeIdEnum.Neonatal));
        setMixingCenterManualPediatricaRawMaterialData(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Manual, PopulationTypeIdEnum.Pediatrica));

        setMixingCenterAutomaticAdultoRawMaterialData(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Automatico, PopulationTypeIdEnum.Adulto));
        setMixingCenterAutomaticNeonatalRawMaterialData(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Automatico, PopulationTypeIdEnum.Neonatal));
        setMixingCenterAutomaticPediatricaRawMaterialData(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Automatico, PopulationTypeIdEnum.Pediatrica));

        setCurrentRawMaterialData(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Manual, PopulationTypeIdEnum.Adulto));

        console.log("METODO 'createNewFileWithStandarDefaultValues' EJECUTADO...");
        console.log(currentProductionCosts);
    }

    const createNewFileWithUserCustomDefaultValuesAsync = async (): Promise<boolean> => {
        const results = await StorageProvider.getUserDefaultValuesAsync();

        if (results) {
            applyComputerData(results);
            return true;
        } else {
            return false;
        }
    }

    const gatherComputerData = (): ComputerBigGroupModel => {
        const output: ComputerBigGroupModel = new ComputerBigGroupModel();

        output.mixingCenterSettings = deepClone(currentMixingCenterSettings);
        output.automatedEquipment = deepClone(currentAutomatedEquipment);
        output.hygieneAndCleaning = deepClone(currentHygieneAndCleaning);
        output.personalProtection = deepClone(currentPersonalProtection);
        output.sterileWorkEquipment = deepClone(currentSterileWorkEquipment);
        output.maintenanceCosts = deepClone(currentMaintenanceCosts);
        output.productionCosts = deepClone(currentProductionCosts);
        output.chemistSalary = deepClone(currentChemistSalary);
        output.assistantSalary = deepClone(currentAssistantSalary);
        output.mixingCenterManualAdultoRawMaterial = deepClone(mixingCenterManualAdultoRawMaterialData);
        output.mixingCenterManualNeonatalRawMaterial = deepClone(mixingCenterManualNeonatalRawMaterialData);
        output.mixingCenterManualPediatricaRawMaterial = deepClone(mixingCenterManualPediatricaRawMaterialData);
        output.mixingCenterAutomaticAdultoRawMaterial = deepClone(mixingCenterAutomaticAdultoRawMaterialData);
        output.mixingCenterAutomaticNeonatalRawMaterial = deepClone(mixingCenterAutomaticNeonatalRawMaterialData);
        output.mixingCenterAutomaticPediatricaRawMaterial = deepClone(mixingCenterAutomaticPediatricaRawMaterialData);

        return output;
    }

    const applyComputerData = (inData: ComputerBigGroupModel): void => {
        if (inData.mixingCenterSettings) {
            const tempData = deepClone(inData.mixingCenterSettings);
            tempData.populationType = PopulationTypeIdEnum.Adulto;
            tempData.centralType = CentralTypeIdEnum.Manual;

            setCurrentMixingCenterSettings(tempData);
        }

        if (inData.automatedEquipment) {
            setCurrentAutomatedEquipment(deepClone(inData.automatedEquipment));
        }

        if (inData.hygieneAndCleaning) {
            setCurrentHygieneAndCleaning(deepClone(inData.hygieneAndCleaning));
        }

        if (inData.personalProtection) {
            setCurrentPersonalProtection(deepClone(inData.personalProtection));
        }

        if (inData.sterileWorkEquipment) {
            setCurrentSterileWorkEquipment(deepClone(inData.sterileWorkEquipment));
        }

        if (inData.maintenanceCosts) {
            setCurrentMaintenanceCosts(deepClone(inData.maintenanceCosts));
        }

        if (inData.productionCosts) {
            setCurrentProductionCosts(deepClone(inData.productionCosts));
        }

        if (inData.chemistSalary) {
            setCurrentChemistSalary(deepClone(inData.chemistSalary));
        }

        if (inData.assistantSalary) {
            setCurrentAssistantSalary(deepClone(inData.assistantSalary));
        }

        if (inData.mixingCenterManualAdultoRawMaterial) {
            setMixingCenterManualAdultoRawMaterialData(deepClone(inData.mixingCenterManualAdultoRawMaterial));
        }

        if (inData.mixingCenterManualNeonatalRawMaterial) {
            setMixingCenterManualNeonatalRawMaterialData(deepClone(inData.mixingCenterManualNeonatalRawMaterial));
        }

        if (inData.mixingCenterManualPediatricaRawMaterial) {
            setMixingCenterManualPediatricaRawMaterialData(deepClone(inData.mixingCenterManualPediatricaRawMaterial));
        }

        if (inData.mixingCenterAutomaticAdultoRawMaterial) {
            setMixingCenterAutomaticAdultoRawMaterialData(deepClone(inData.mixingCenterAutomaticAdultoRawMaterial));
        }

        if (inData.mixingCenterAutomaticNeonatalRawMaterial) {
            setMixingCenterAutomaticNeonatalRawMaterialData(deepClone(inData.mixingCenterAutomaticNeonatalRawMaterial));
        }

        if (inData.mixingCenterAutomaticPediatricaRawMaterial) {
            setMixingCenterAutomaticPediatricaRawMaterialData(deepClone(inData.mixingCenterAutomaticPediatricaRawMaterial));
        }

        if (inData.mixingCenterManualAdultoRawMaterial) {
            setCurrentRawMaterialData(deepClone(inData.mixingCenterManualAdultoRawMaterial));
        }
    }

    // Se encarga de copiar los datos de 'CurrentRawMaterialData' al modelo que le corresponde según el tipo de central y el tipo de poblacion
    const backupCurrentRawMaterialInToRightOne = (): void => {
        const newData: RawMaterialModel = deepClone(currentRawMaterialData);

        switch (currentPopulationType) {
            case PopulationTypeIdEnum.Adulto:
                callByCentralType(
                    currentCentralType,
                    newData,
                    setMixingCenterManualAdultoRawMaterialData,
                    setMixingCenterAutomaticAdultoRawMaterialData
                );
                break;
            case PopulationTypeIdEnum.Neonatal:
                callByCentralType(
                    currentCentralType,
                    newData,
                    setMixingCenterManualNeonatalRawMaterialData,
                    setMixingCenterAutomaticNeonatalRawMaterialData
                );
                break;
            case PopulationTypeIdEnum.Pediatrica:
                callByCentralType(
                    currentCentralType,
                    newData,
                    setMixingCenterManualPediatricaRawMaterialData,
                    setMixingCenterAutomaticPediatricaRawMaterialData
                );
                break;
        }
    }

    // Obtiene los datos segun el tipo de central y el tipo de poblacion (recordar que estan almancenados independientemente)
    const getCurrentRawMaterial = (): RawMaterialModel | null => {
        let tempData: RawMaterialModel | null = null;

        switch (currentPopulationType) {
            case PopulationTypeIdEnum.Adulto:
                tempData = callByCentralTypeWithReturn(
                    currentCentralType,
                    () => mixingCenterManualAdultoRawMaterialData,
                    () => mixingCenterAutomaticAdultoRawMaterialData
                );
                break;
            case PopulationTypeIdEnum.Neonatal:
                tempData = callByCentralTypeWithReturn(
                    currentCentralType,
                    () => mixingCenterManualNeonatalRawMaterialData,
                    () => mixingCenterAutomaticNeonatalRawMaterialData
                );
                break;
            case PopulationTypeIdEnum.Pediatrica:
                tempData = callByCentralTypeWithReturn(
                    currentCentralType,
                    () => mixingCenterManualPediatricaRawMaterialData,
                    () => mixingCenterAutomaticPediatricaRawMaterialData
                );
                // switch (currentCentralType) {
                //     case CentralTypeIdEnum.Manual:
                //         tempData = mixingCenterManualPediatricaRawMaterialData;
                //         break;
                //     case CentralTypeIdEnum.Automatico:
                //         tempData = mixingCenterAutomaticPediatricaRawMaterialData;
                //         break;
                // }
                break;
        }

        return tempData;
    }

    // Obtiene los datos de 'get_CurrentRawMaterial' para asignarselo al punto central que es 'CurrentRawMaterialData'
    const populateCurrentRawMaterial = (): void => {
        try {
            setExecutingSomething(true);

            const results: RawMaterialModel | null = getCurrentRawMaterial();

            if (results === null) {
                throw new Error("Error. Los datos recoletados de memoria no pueden estar null.");
            }

            const newData: RawMaterialModel = deepClone(results);

            setCurrentRawMaterialData(newData);
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setExecutingSomething(false);
        }
    }

    useEffect(() => {
        if (executingSomething === false) {
            backupCurrentRawMaterialInToRightOne();
        } else {
            console.log("HUBO UN CAMBIO EN 'CURRENT RAW MATERIAL' PERO OTRO PROCESO ESTABA EN EJECUCION.");
        }
    }, [currentRawMaterialData]);

    useEffect(() => {
        if (executingSomething === false) {
            populateCurrentRawMaterial();
        } else {
            console.log("HUBO UN CAMBIO EN 'CENTRALTYPE O POPULATION TYPE' PERO OTRO PROCESO ESTABA EN EJECUCION.");
        }
    }, [currentCentralType, currentPopulationType]);

    return (
        <ComputerContext.Provider
            value={{
                executingSomething,
                userDefaultValuesExists,
                currentFilename,
                currentCentralType,
                currentPopulationType,
                currentMixingCenterSettings,
                currentRawMaterialData,
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
                setCurrentCentralType,
                setCurrentPopulationType,
                setCurrentMixingCenterSettings,
                setCurrentRawMaterialData,
                setCurrentAutomatedEquipment,
                setCurrentHygieneAndCleaning,
                setCurrentPersonalProtection,
                setCurrentSterileWorkEquipment,
                setCurrentMaintenanceCosts,
                setCurrentProductionCosts,
                setCurrentChemistSalary,
                setCurrentAssistantSalary,
                createNewFileAsync,
                openFileAsync,
                saveFileAsync,
                saveFileAsAsync,
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
