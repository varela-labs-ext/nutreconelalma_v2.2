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
import { createContext, useContext, useEffect, useState } from "react";

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

    userDefaultValuesExists: boolean;
    currentFilename: string | null;
    currentCentralType: CentralTypeIdEnum;
    currentPopulationType: PopulationTypeIdEnum;
    mixingCenterSettingsData: MixingCenterSettingsModel;
    currentRawMaterialData: RawMaterialModel; //<- hay que renombrarlo a huevo!
    automatedEquipmentData: AutomatedEquipmentGroupModel;
    hygieneAndCleaningData: HygieneAndCleaningGroupModel;
    personalProtectionData: PersonalProtectionGroupModel;
    sterileWorkEquipmentData: SterileWorkEquipmentGroupModel;
    maintenanceCostsData: MaintenanceCostsGroupModel;
    productionCostsData: ProductionCostsGroupModel;
    chemistSalaryData: StaffSalaryGroupModel;
    assistantSalaryData: StaffSalaryGroupModel;

    setUserDefaultValuesExists: (inValue: boolean) => void;
    setCurrentFilename: (inFileName: string | null) => void;
    setCurrentCentralType: (inValue: CentralTypeIdEnum) => void;
    setCurrentPopulationType: (inValue: PopulationTypeIdEnum) => void;
    setMixingCenterSettingsData: (inValue: MixingCenterSettingsModel) => void;
    setCurrentRawMaterialData: (inValue: RawMaterialModel) => void; //<- hay que renombrarlo a huevo!
    setAutomatedEquipmentData: (inValue: AutomatedEquipmentGroupModel) => void;
    setHygieneAndCleaningData: (inValue: HygieneAndCleaningGroupModel) => void;
    setPersonalProtectionData: (inValue: PersonalProtectionGroupModel) => void;
    setSterileWorkEquipmentData: (inValue: SterileWorkEquipmentGroupModel) => void;
    setMaintenanceCostsData: (inValue: MaintenanceCostsGroupModel) => void;
    setProductionCostsData: (inValue: ProductionCostsGroupModel) => void;
    setChemistSalaryData: (inValue: StaffSalaryGroupModel) => void;
    setAssistantSalaryData: (inValue: StaffSalaryGroupModel) => void;

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
    const [mixingCenterSettingsData, setMixingCenterSettingsData] = useState<MixingCenterSettingsModel>(new MixingCenterSettingsModel());
    const [currentRawMaterialData, setCurrentRawMaterialData] = useState<RawMaterialModel>(new RawMaterialModel());
    const [automatedEquipmentData, setAutomatedEquipmentData] = useState<AutomatedEquipmentGroupModel>(new AutomatedEquipmentGroupModel());
    const [hygieneAndCleaningData, setHygieneAndCleaningData] = useState<HygieneAndCleaningGroupModel>(new HygieneAndCleaningGroupModel());
    const [personalProtectionData, setPersonalProtectionData] = useState<PersonalProtectionGroupModel>(new PersonalProtectionGroupModel());
    const [sterileWorkEquipmentData, setSterileWorkEquipmentData] = useState<SterileWorkEquipmentGroupModel>(new SterileWorkEquipmentGroupModel());
    const [maintenanceCostsData, setMaintenanceCostsData] = useState<MaintenanceCostsGroupModel>(new MaintenanceCostsGroupModel());
    const [productionCostsData, setProductionCostsData] = useState<ProductionCostsGroupModel>(new ProductionCostsGroupModel());
    const [chemistSalaryData, setChemistSalaryData] = useState<StaffSalaryGroupModel>(new StaffSalaryGroupModel());
    const [assistantSalaryData, setAssistantSalaryData] = useState<StaffSalaryGroupModel>(new StaffSalaryGroupModel());

    const [mixingCenterManualAdultoRawMaterialData, setMixingCenterManualAdultoRawMaterialData] = useState<RawMaterialModel>(new RawMaterialModel());
    const [mixingCenterManualNeonatalRawMaterialData, setMixingCenterManualNeonatalRawMaterialData] = useState<RawMaterialModel>(new RawMaterialModel());
    const [mixingCenterManualPediatricaRawMaterialData, setMixingCenterManualPediatricaRawMaterialData] = useState<RawMaterialModel>(new RawMaterialModel());

    const [mixingCenterAutomaticAdultoRawMaterialData, setMixingCenterAutomaticAdultoRawMaterialData] = useState<RawMaterialModel>(new RawMaterialModel());
    const [mixingCenterAutomaticNeonatalRawMaterialData, setMixingCenterAutomaticNeonatalRawMaterialData] = useState<RawMaterialModel>(new RawMaterialModel());
    const [mixingCenterAutomaticPediatricaRawMaterialData, setMixingCenterAutomaticPediatricaRawMaterialData] = useState<RawMaterialModel>(new RawMaterialModel());


    const createNewFileAsync = async (): Promise<void> => {
        try {
            setExecutingSomething(true);

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
        setMixingCenterSettingsData(DefaultValuesProvider.mixingCenterSettingsDefaults());
        setAutomatedEquipmentData(DefaultValuesProvider.automatedEquipmentDefaults());
        setHygieneAndCleaningData(DefaultValuesProvider.hygieneAndCleaningDefaults(currentCentralType));
        setPersonalProtectionData(DefaultValuesProvider.personalProtectionDefaults(currentCentralType));
        setSterileWorkEquipmentData(DefaultValuesProvider.sterileWorkEquipmentDefaults(currentCentralType));
        setMaintenanceCostsData(DefaultValuesProvider.maintenanceCostsDefaults());
        setProductionCostsData(DefaultValuesProvider.productionCostsDefaults());
        setChemistSalaryData(DefaultValuesProvider.chemistSalaryDefaults());
        setAssistantSalaryData(DefaultValuesProvider.chemistAssistantSalaryDefaults());

        setMixingCenterManualAdultoRawMaterialData(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Manual, PopulationTypeIdEnum.Adulto));
        setMixingCenterManualNeonatalRawMaterialData(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Manual, PopulationTypeIdEnum.Neonatal));
        setMixingCenterManualPediatricaRawMaterialData(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Manual, PopulationTypeIdEnum.Pediatrica));

        setMixingCenterAutomaticAdultoRawMaterialData(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Automatico, PopulationTypeIdEnum.Adulto));
        setMixingCenterAutomaticNeonatalRawMaterialData(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Automatico, PopulationTypeIdEnum.Neonatal));
        setMixingCenterAutomaticPediatricaRawMaterialData(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Automatico, PopulationTypeIdEnum.Pediatrica));

        setCurrentRawMaterialData(DefaultValuesProvider.rawMaterialsDefaults(CentralTypeIdEnum.Manual, PopulationTypeIdEnum.Adulto));
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

        output.mixingCenterSettings = { ...mixingCenterSettingsData };
        output.automatedEquipment = { ...automatedEquipmentData };
        output.hygieneAndCleaning = { ...hygieneAndCleaningData };
        output.personalProtection = { ...personalProtectionData };
        output.sterileWorkEquipment = { ...sterileWorkEquipmentData };
        output.maintenanceCosts = { ...maintenanceCostsData };
        output.productionCosts = { ...productionCostsData };
        output.chemistSalary = { ...chemistSalaryData };
        output.assistantSalary = { ...assistantSalaryData };
        output.mixingCenterManualAdultoRawMaterial = { ...mixingCenterManualAdultoRawMaterialData };
        output.mixingCenterManualNeonatalRawMaterial = { ...mixingCenterManualNeonatalRawMaterialData };
        output.mixingCenterManualPediatricaRawMaterial = { ...mixingCenterManualPediatricaRawMaterialData };
        output.mixingCenterAutomaticAdultoRawMaterial = { ...mixingCenterAutomaticAdultoRawMaterialData };
        output.mixingCenterAutomaticNeonatalRawMaterial = { ...mixingCenterAutomaticNeonatalRawMaterialData };
        output.mixingCenterAutomaticPediatricaRawMaterial = { ...mixingCenterAutomaticPediatricaRawMaterialData };

        return output;
    }

    const applyComputerData = (inData: ComputerBigGroupModel): void => {
        if (inData.mixingCenterSettings) {
            const tempData = {
                ...inData.mixingCenterSettings,
                populationType: PopulationTypeIdEnum.Adulto,
                centralType: CentralTypeIdEnum.Manual
            };

            setMixingCenterSettingsData(tempData);
        }

        if (inData.automatedEquipment) {
            setAutomatedEquipmentData({ ...inData.automatedEquipment });
        }

        if (inData.hygieneAndCleaning) {
            setHygieneAndCleaningData({ ...inData.hygieneAndCleaning });
        }

        if (inData.personalProtection) {
            setPersonalProtectionData({ ...inData.personalProtection });
        }

        if (inData.sterileWorkEquipment) {
            setSterileWorkEquipmentData({ ...inData.sterileWorkEquipment });
        }

        if (inData.maintenanceCosts) {
            setMaintenanceCostsData({ ...inData.maintenanceCosts });
        }

        if (inData.productionCosts) {
            setProductionCostsData({ ...inData.productionCosts });
        }

        if (inData.chemistSalary) {
            setChemistSalaryData({ ...inData.chemistSalary });
        }

        if (inData.assistantSalary) {
            setAssistantSalaryData({ ...inData.assistantSalary });
        }

        if (inData.mixingCenterManualAdultoRawMaterial) {
            setMixingCenterManualAdultoRawMaterialData({ ...inData.mixingCenterManualAdultoRawMaterial });
        }

        if (inData.mixingCenterManualNeonatalRawMaterial) {
            setMixingCenterManualNeonatalRawMaterialData({ ...inData.mixingCenterManualNeonatalRawMaterial });
        }

        if (inData.mixingCenterManualPediatricaRawMaterial) {
            setMixingCenterManualPediatricaRawMaterialData({ ...inData.mixingCenterManualPediatricaRawMaterial });
        }

        if (inData.mixingCenterAutomaticAdultoRawMaterial) {
            setMixingCenterAutomaticAdultoRawMaterialData({ ...inData.mixingCenterAutomaticAdultoRawMaterial });
        }

        if (inData.mixingCenterAutomaticNeonatalRawMaterial) {
            setMixingCenterAutomaticNeonatalRawMaterialData({ ...inData.mixingCenterAutomaticNeonatalRawMaterial });
        }

        if (inData.mixingCenterAutomaticPediatricaRawMaterial) {
            setMixingCenterAutomaticPediatricaRawMaterialData({ ...inData.mixingCenterAutomaticPediatricaRawMaterial });
        }

        if (inData.mixingCenterManualAdultoRawMaterial) {
            setCurrentRawMaterialData({ ...inData.mixingCenterManualAdultoRawMaterial });
        }
    }

    const backupCurrentRawMaterialInToRightOne = (): void => {
        const newData: RawMaterialModel = {
            ...currentRawMaterialData
        };

        switch (currentPopulationType) {
            case PopulationTypeIdEnum.Adulto:
                switch (currentCentralType) {
                    case CentralTypeIdEnum.Manual:
                        setMixingCenterManualAdultoRawMaterialData(newData);
                        break;
                    case CentralTypeIdEnum.Automatico:
                        setMixingCenterAutomaticAdultoRawMaterialData(newData);
                        break;
                }
                break;
            case PopulationTypeIdEnum.Neonatal:
                switch (currentCentralType) {
                    case CentralTypeIdEnum.Manual:
                        setMixingCenterManualNeonatalRawMaterialData(newData);
                        break;
                    case CentralTypeIdEnum.Automatico:
                        setMixingCenterAutomaticNeonatalRawMaterialData(newData);
                        break;
                }
                break;
            case PopulationTypeIdEnum.Pediatrica:
                switch (currentCentralType) {
                    case CentralTypeIdEnum.Manual:
                        setMixingCenterManualPediatricaRawMaterialData(newData);
                        break;
                    case CentralTypeIdEnum.Automatico:
                        setMixingCenterAutomaticPediatricaRawMaterialData(newData);
                        break;
                }
                break;
        }
    }

    const getCurrentRawMaterial = (): RawMaterialModel | null => {
        let tempData: RawMaterialModel | null = null;

        switch (currentPopulationType) {
            case PopulationTypeIdEnum.Adulto:
                switch (currentCentralType) {
                    case CentralTypeIdEnum.Manual:
                        tempData = mixingCenterManualAdultoRawMaterialData;
                        break;
                    case CentralTypeIdEnum.Automatico:
                        tempData = mixingCenterAutomaticAdultoRawMaterialData;
                        break;
                }
                break;
            case PopulationTypeIdEnum.Neonatal:
                switch (currentCentralType) {
                    case CentralTypeIdEnum.Manual:
                        tempData = mixingCenterManualNeonatalRawMaterialData;
                        break;
                    case CentralTypeIdEnum.Automatico:
                        tempData = mixingCenterAutomaticNeonatalRawMaterialData;
                        break;
                }
                break;
            case PopulationTypeIdEnum.Pediatrica:
                switch (currentCentralType) {
                    case CentralTypeIdEnum.Manual:
                        tempData = mixingCenterManualPediatricaRawMaterialData;
                        break;
                    case CentralTypeIdEnum.Automatico:
                        tempData = mixingCenterAutomaticPediatricaRawMaterialData;
                        break;
                }
                break;
        }

        return tempData;
    }

    const populateCurrentRawMaterial = (): void => {
        try {
            setExecutingSomething(true);

            const results: RawMaterialModel | null = getCurrentRawMaterial();

            if (results === null) {
                throw new Error("Error. Los datos recoletados de memoria no pueden estar null.");
            }

            const newData: RawMaterialModel = {
                ...results
            };

            setCurrentRawMaterialData(newData);
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setExecutingSomething(false);
        }
    }


    // useEffect(() => {
    // }, []);

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
                userDefaultValuesExists,
                currentFilename,
                currentCentralType,
                currentPopulationType,
                mixingCenterSettingsData,
                currentRawMaterialData,
                automatedEquipmentData,
                hygieneAndCleaningData,
                personalProtectionData,
                sterileWorkEquipmentData,
                maintenanceCostsData,
                productionCostsData,
                chemistSalaryData,
                assistantSalaryData,
                setUserDefaultValuesExists,
                setCurrentFilename,
                setCurrentCentralType,
                setCurrentPopulationType,
                setMixingCenterSettingsData,
                setCurrentRawMaterialData,
                setAutomatedEquipmentData,
                setHygieneAndCleaningData,
                setPersonalProtectionData,
                setSterileWorkEquipmentData,
                setMaintenanceCostsData,
                setProductionCostsData,
                setChemistSalaryData,
                setAssistantSalaryData,
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
