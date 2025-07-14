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

    setNewFile: () => void;
    openFile: (inFileName: string) => void;
    saveFile: () => Promise<void>;
    saveFileAs: (inFileName: string) => Promise<void>;
}

// ------------------- Contexto -------------------
export const ComputerContext = createContext<ComputerContextProps | undefined>(undefined);

// ------------------- Provider -------------------
// Antiguo calculadora provider
export const ComputerProvider = ({ children }: { children: React.ReactNode }) => {
    // const [CurrentAction, setCurrentAction] = useState<ActionComputer>(null);

    const [loadingDefaultValues, setLoadingDefaultValues] = useState<boolean>(false);

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


    const setNewFile = (): void => {
        try {
            setLoadingDefaultValues(true);

            setCurrentCentralType(CentralTypeIdEnum.Manual);
            setCurrentPopulationType(PopulationTypeIdEnum.Adulto);

            if (userDefaultValuesExists) {
                createNewFileWithUserCustomDefaultValues();
            } else {
                createNewFileWithStandarDefaultValues();
            }

            setCurrentFilename(null); // OJO!
        } catch (error) {

        } finally {
            setLoadingDefaultValues(false);
        }
    }

    const openFile = (inFileName: string): void => {
        // TODO: implementar carga real desde almacenamiento
        console.log(`Abrir archivo ${inFileName} (simulado por ahora)`);

        setCurrentFilename(inFileName);
    }

    const saveFile = async (): Promise<void> => {
        if (!currentFilename) {
            console.warn("No hay archivo activo. Usa guardarComo(nombre) en su lugar.");
            return;
        }

        // await storage.guardarDatos({
        //     tipoA, tipoB, tipoC, tipoD, tipoE, tipoF, tipoG, tipoH,
        // });

        // setCurrentAction("salvar");
    }

    const saveFileAs = async (inFileName: string): Promise<void> => {
        // await storage.guardarDatos({
        //     tipoA, tipoB, tipoC, tipoD, tipoE, tipoF, tipoG, tipoH,
        // });

        // setCurrentAction("salvar");

        setCurrentFilename(inFileName);
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

    const createNewFileWithUserCustomDefaultValues = (): void => {

    }

    // useEffect(() => {
    // }, []);

    useEffect(() => {
        if (loadingDefaultValues === false) {
            handleOnCurrentRawMaterialChange(currentRawMaterialData);
        }
    }, [currentRawMaterialData]);

    const handleOnCurrentRawMaterialChange = (inData: RawMaterialModel): void => {
        const newData: RawMaterialModel = {
            ...inData
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
                setNewFile,
                openFile,
                saveFile,
                saveFileAs,
            }}
        >
            {children}
        </ComputerContext.Provider>
    );
};

