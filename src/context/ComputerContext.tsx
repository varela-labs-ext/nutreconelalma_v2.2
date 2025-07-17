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
import MixingCenterRawMaterialsModel from "@/logic/models/MixingCenterRawMaterialsModel";
import MixingCenterOperatingResourcesModel from "@/logic/models/MixingCenterOperatingResourcesModel";
import CalculationService from "@/logic/services/CalculationService";
import { getProductionPerMonth, updateAdditionalCostsSummary } from "./ComputerContextExt";
import { Logger } from "@/utils/logger";
import AdditionalCostsTotalsModel from "@/logic/models/AdditionalCostsTotalsModel";

// ------------------- Interfaz del Contexto -------------------
export interface ComputerContextProps {
    executingSomething: boolean; // <- esto es para avisarle al overlay que se active o no.
    currentFilename: string | null;
    currentMixingCenterSettings: MixingCenterSettingsModel;
    currentRawMaterial: RawMaterialGroupModel;
    additionalCostsSummary: AdditionalCostsTotalsModel;
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

    const [isReady, setIsReady] = useState(true);
    const [executingSomething, setExecutingSomething] = useState<boolean>(false);
    const [currentFilename, setCurrentFilename] = useState<string | null>(null);

    const [currentMixingCenterSettings, setCurrentMixingCenterSettings] = useState<MixingCenterSettingsModel>(new MixingCenterSettingsModel());
    const [backup_MixingCenterSettings, setBackup_MixingCenterSettings] = useState<MixingCenterSettingsModel>(new MixingCenterSettingsModel());

    const [additionalCostsSummary, setAdditionalCostsSummary] = useState<AdditionalCostsTotalsModel>(new AdditionalCostsTotalsModel());

    const [currentRawMaterial, setCurrentRawMaterial] = useState<RawMaterialGroupModel>(new RawMaterialGroupModel());

    // Materia Prima
    const [backup_MC_Manual_RawMaterials, setBackup_MC_Manual_RawMaterials] = useState<MixingCenterRawMaterialsModel>(new MixingCenterRawMaterialsModel());
    const [backup_MC_Automatic_RawMaterials, setBackup_MC_Automatic_RawMaterials] = useState<MixingCenterRawMaterialsModel>(new MixingCenterRawMaterialsModel());


    const [currentAutomatedEquipment, setCurrentAutomatedEquipment] = useState<AutomatedEquipmentGroupModel>(new AutomatedEquipmentGroupModel());
    const [currentHygieneAndCleaning, setCurrentHygieneAndCleaning] = useState<HygieneAndCleaningGroupModel>(new HygieneAndCleaningGroupModel());
    const [currentPersonalProtection, setCurrentPersonalProtection] = useState<PersonalProtectionGroupModel>(new PersonalProtectionGroupModel());
    const [currentSterileWorkEquipment, setCurrentSterileWorkEquipment] = useState<SterileWorkEquipmentGroupModel>(new SterileWorkEquipmentGroupModel());
    const [currentMaintenanceCosts, setCurrentMaintenanceCosts] = useState<MaintenanceCostsGroupModel>(new MaintenanceCostsGroupModel());
    const [currentProductionCosts, setCurrentProductionCosts] = useState<ProductionCostsGroupModel>(new ProductionCostsGroupModel());
    const [currentChemistSalary, setCurrentChemistSalary] = useState<StaffSalaryGroupModel>(new StaffSalaryGroupModel());
    const [currentAssistantSalary, setCurrentAssistantSalary] = useState<StaffSalaryGroupModel>(new StaffSalaryGroupModel());

    // Recursos Operativos
    const [backup_MC_Manual_Resources, setBackup_MC_Manual_Resources] = useState<MixingCenterOperatingResourcesModel>(new MixingCenterOperatingResourcesModel());
    const [backup_MC_Automatic_Resources, setBackup_MC_Automatic_Resources] = useState<MixingCenterOperatingResourcesModel>(new MixingCenterOperatingResourcesModel());

    // const [internalCentralType, setInternalCentralType] = useState<CentralTypeIdEnum>(CentralTypeIdEnum.Manual);
    // const [internalPopulationType, setInternalPopulationType] = useState<PopulationTypeIdEnum>(PopulationTypeIdEnum.Adulto);

    /* *********************************************************************************************************************** */


    // PUBLIC
    const gatherExternalBackup = (): ComputerBigGroupModel => {
        const output: ComputerBigGroupModel = new ComputerBigGroupModel();

        try {
            setIsReady(false);

            runFullOperationalResourcesBackup(currentMixingCenterSettings.centralType);
            runFullRawMaterialBackup(currentMixingCenterSettings.centralType, currentMixingCenterSettings.populationType);

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

    // PUBLIC
    const loadExternalBackup = (inExternalData: ComputerBigGroupModel | undefined | null): void => {
        try {
            setIsReady(false);
            Logger.info("ComputerProvider.loadExternalBackup() STARTS...");

            if (inExternalData !== undefined && inExternalData !== null && isExternalDataValid(inExternalData)) {
                loadExternalBackupProcess(inExternalData);
            } else {
                throw new Error("Datos de backup inválidos!");
            }

        } catch (err) {
            throw err;
        } finally {
            setIsReady(true);
            Logger.info("ComputerProvider.loadExternalBackup() ENDS...");
        }
    }

    /* *********************************************************************************************************************** */

    const isExternalDataValid = (inExternalData: ComputerBigGroupModel): boolean => {
        return (
            inExternalData.mixingCenterSettings !== undefined && inExternalData.mixingCenterSettings != null &&
            inExternalData.backup_MC_Automatic_RawMaterials !== undefined && inExternalData.backup_MC_Automatic_RawMaterials !== null &&
            inExternalData.backup_MC_Automatic_Resources !== undefined && inExternalData.backup_MC_Automatic_Resources !== null &&
            inExternalData.backup_MC_Manual_RawMaterials !== undefined && inExternalData.backup_MC_Manual_RawMaterials !== null &&
            inExternalData.backup_MC_Manual_Resources !== undefined && inExternalData.backup_MC_Manual_Resources !== null
        );
    }

    // Este metodo permite al sistema cargar desde una fuente cualquiera el bloque de datos.
    const loadExternalBackupProcess = (inExternalData: ComputerBigGroupModel): void => {
        const _copyOfInData = deepClone(inExternalData);

        if (_copyOfInData?.mixingCenterSettings === null) {
            throw new Error("loadExternalBackupProcess() - Los datos no pueden ser nulos.");
        }

        Logger.info("ComputerContext.loadExternalBackupProcess() STARTS");

        loadExternalBackupIntoRawMaterialBackups(_copyOfInData); // Raw material
        loadExternalBackupIntoRecoursesBackups(_copyOfInData); // Resources
        loadExternalBackupIntoCurrents(
            _copyOfInData.mixingCenterSettings?.centralType,
            _copyOfInData.mixingCenterSettings?.populationType,
            _copyOfInData);

        setCurrentMixingCenterSettings(_copyOfInData.mixingCenterSettings);

        Logger.info("ComputerContext.loadExternalBackupProcess() ENDS");
    }

    const loadExternalBackupIntoCurrents = (inCentralType: CentralTypeIdEnum, inPopulationType: PopulationTypeIdEnum, inExternalData: ComputerBigGroupModel): void => {

        switch (inCentralType) {
            case CentralTypeIdEnum.Manual:
                setExternalBackupIntoRawMaterialCurrents(inPopulationType, inExternalData.backup_MC_Manual_RawMaterials);
                setExternalBackupIntoResourcesCurrents(inExternalData?.backup_MC_Manual_Resources);
                break;
            case CentralTypeIdEnum.Automatico:
                setExternalBackupIntoRawMaterialCurrents(inPopulationType, inExternalData.backup_MC_Automatic_RawMaterials);
                setExternalBackupIntoResourcesCurrents(inExternalData?.backup_MC_Automatic_Resources);
                break;
            default:
                console.warn("callByCentralTypeWithReturn. Tipo de central no reconocido:", inCentralType);
                break;
        }
    }

    const setExternalBackupIntoRawMaterialCurrents = (inPopulationType: PopulationTypeIdEnum, inData: MixingCenterRawMaterialsModel | null): void => {
        if (inData === null || inData === undefined) {
            throw new Error("setExternalBackupIntoRawCurrents(). LA DATA NO PUEDE SER NULA.");
        }

        switch (inPopulationType) {
            case PopulationTypeIdEnum.Adulto:
                const _adulto = deepClone(inData.adultoRawMaterial);
                setCurrentRawMaterial(_adulto);
                break;
            case PopulationTypeIdEnum.Neonatal:
                const _neonatal = deepClone(inData.neonatalRawMaterial);
                setCurrentRawMaterial(_neonatal);
                break;
            case PopulationTypeIdEnum.Pediatrica:
                const _pediatrica = deepClone(inData.pediatricoRawMaterial);
                setCurrentRawMaterial(_pediatrica);
                break;
            default:
                console.warn("setExternalBackupIntoRawCurrents. Tipo de Población no reconocido:", inPopulationType);
                break;
        }
    }

    const setExternalBackupIntoResourcesCurrents = (inData: MixingCenterOperatingResourcesModel | null): void => {
        if (inData === null || inData === undefined) {
            throw new Error("setExternalBackupIntoResourcesCurrents(). LA DATA NO PUEDE SER NULA.");
        }

        setCurrentAutomatedEquipment(inData.automatedEquipment);
        setCurrentHygieneAndCleaning(inData.hygieneAndCleaning);
        setCurrentPersonalProtection(inData.personalProtection)
        setCurrentSterileWorkEquipment(inData.sterileWorkEquipment);
        setCurrentMaintenanceCosts(inData.maintenanceCosts);
        setCurrentProductionCosts(inData.productionCosts);
        setCurrentChemistSalary(inData.staffChemistSalary);
        setCurrentAssistantSalary(inData.staffAssistantSalary);

        updateAdditionalCostsSummary(
            inData.automatedEquipment,
            inData.hygieneAndCleaning,
            inData.personalProtection,
            inData.sterileWorkEquipment,
            inData.maintenanceCosts,
            inData.productionCosts,
            inData.staffChemistSalary,
            inData.staffAssistantSalary,
            setAdditionalCostsSummary
        );
    }

    const loadExternalBackupIntoRawMaterialBackups = (inData: ComputerBigGroupModel | null): void => {
        if (inData === null || inData === undefined) {
            throw new Error("loadExternalBackupIntoRawMaterialBackups(). LA DATA NO PUEDE SER NULA.");
        }

        if (inData?.backup_MC_Manual_RawMaterials !== null) {
            const manual_RawMaterials = deepClone(inData.backup_MC_Manual_RawMaterials)
            setBackup_MC_Manual_RawMaterials(manual_RawMaterials);
        }

        if (inData?.backup_MC_Automatic_RawMaterials !== null) {
            const automatic_RawMaterials = deepClone(inData.backup_MC_Automatic_RawMaterials);
            setBackup_MC_Automatic_RawMaterials(automatic_RawMaterials);
        }
    }

    const loadExternalBackupIntoRecoursesBackups = (inData: ComputerBigGroupModel | null): void => {
        if (inData === null || inData === undefined) {
            throw new Error("loadExternalBackupIntoRecoursesBackups(). LA DATA NO PUEDE SER NULA.");
        }

        if (inData?.backup_MC_Manual_Resources !== null) {
            const manual_Resources = deepClone(inData.backup_MC_Manual_Resources);
            setBackup_MC_Manual_Resources(manual_Resources);
        }

        if (inData?.backup_MC_Automatic_Resources !== null) {
            const automatic_Resources = deepClone(inData.backup_MC_Automatic_Resources);
            setBackup_MC_Automatic_Resources(automatic_Resources);
        }
    }

    const reloadInternalRawMaterialBackupsIntoCurrents = (inCentralType: CentralTypeIdEnum, inPopulationType: PopulationTypeIdEnum): void => {
        Logger.info(`RESTAURANDO BACKUP DE MATERIA PRIMA. CENTRAL: ${CentralTypeIdEnum[inCentralType]}, POBLACION: ${PopulationTypeIdEnum[inPopulationType]}`);

        switch (inCentralType) {
            case CentralTypeIdEnum.Manual:
                setExternalBackupIntoRawMaterialCurrents(inPopulationType, backup_MC_Manual_RawMaterials);
                break;
            case CentralTypeIdEnum.Automatico:
                setExternalBackupIntoRawMaterialCurrents(inPopulationType, backup_MC_Automatic_RawMaterials);
                break;
            default:
                console.warn("reloadInternalResourcesBackupsIntoCurrents. Tipo de central no reconocido:", inCentralType);
                break;
        }
    }

    const reloadInternalResourcesBackupsIntoCurrents = (inCentralType: CentralTypeIdEnum): void => {
        Logger.info(`RESTAURANDO BACKUP DE LOS RESOURCES. CENTRAL: ${CentralTypeIdEnum[inCentralType]}`);

        switch (inCentralType) {
            case CentralTypeIdEnum.Manual:
                const manualResources = deepClone(backup_MC_Manual_Resources);
                setExternalBackupIntoResourcesCurrents(manualResources);
                break;
            case CentralTypeIdEnum.Automatico:
                const automaticoResources = deepClone(backup_MC_Automatic_Resources);
                setExternalBackupIntoResourcesCurrents(automaticoResources);
                break;
            default:
                console.warn("reloadInternalResourcesBackupsIntoCurrents. Tipo de central no reconocido:", inCentralType);
                break;
        }
    }

    const getCopyOfOperationalResources = (): MixingCenterOperatingResourcesModel => {
        const resources: MixingCenterOperatingResourcesModel = new MixingCenterOperatingResourcesModel();
        resources.automatedEquipment = deepClone(currentAutomatedEquipment);
        resources.hygieneAndCleaning = deepClone(currentHygieneAndCleaning);
        resources.maintenanceCosts = deepClone(currentMaintenanceCosts);
        resources.personalProtection = deepClone(currentPersonalProtection);
        resources.productionCosts = deepClone(currentProductionCosts);
        resources.sterileWorkEquipment = deepClone(currentSterileWorkEquipment);
        resources.staffAssistantSalary = deepClone(currentAssistantSalary);
        resources.staffChemistSalary = deepClone(currentChemistSalary);
        return resources;
    }

    const runFullOperationalResourcesBackup = (inCentralType: CentralTypeIdEnum): void => {
        Logger.info(`EJECUTANDO BACKUP DE LOS RESOURCES. CENTRAL: ${CentralTypeIdEnum[inCentralType]}`);

        switch (inCentralType) {
            case CentralTypeIdEnum.Manual:
                const resourcesManual = getCopyOfOperationalResources();
                setBackup_MC_Manual_Resources(resourcesManual);
                break
            case CentralTypeIdEnum.Automatico:
                const resourcesAutomatic = getCopyOfOperationalResources();
                setBackup_MC_Automatic_Resources(resourcesAutomatic);
                break;
            default:
                console.warn("runFullOperationalResourcesBackup. Tipo de central no reconocido:", inCentralType);
                break;
        }
    }

    const getCopyOfRawMaterials = (inPopulationType: PopulationTypeIdEnum, inData: MixingCenterRawMaterialsModel): MixingCenterRawMaterialsModel => {
        const resources = deepClone(inData);

        switch (inPopulationType) {
            case PopulationTypeIdEnum.Adulto:
                resources.adultoRawMaterial = deepClone(currentRawMaterial)
                break
            case PopulationTypeIdEnum.Neonatal:
                resources.neonatalRawMaterial = deepClone(currentRawMaterial)
                break;
            case PopulationTypeIdEnum.Pediatrica:
                resources.pediatricoRawMaterial = deepClone(currentRawMaterial)
                break;
            default:
                console.warn("getCopyOfRawMaterials. Tipo de Población no reconocido:", inPopulationType);
                break;
        }

        return resources;
    }

    const runFullRawMaterialBackup = (inCentralType: CentralTypeIdEnum, inPopulationType: PopulationTypeIdEnum): void => {
        Logger.info(`EJECUTANDO BACKUP DE MATERIA PRIMA. CENTRAL: ${CentralTypeIdEnum[inCentralType]}, POBLACION: ${PopulationTypeIdEnum[inPopulationType]}`);

        switch (inCentralType) {
            case CentralTypeIdEnum.Manual:
                const rawMaterialManual = getCopyOfRawMaterials(inPopulationType, backup_MC_Manual_RawMaterials);
                setBackup_MC_Manual_RawMaterials(rawMaterialManual);
                break;
            case CentralTypeIdEnum.Automatico:
                const rawMaterialAutomatic = getCopyOfRawMaterials(inPopulationType, backup_MC_Automatic_RawMaterials);
                setBackup_MC_Automatic_RawMaterials(rawMaterialAutomatic);
                break;
            default:
                console.warn("runFullRawMaterialBackup. Tipo de central no reconocido:", inCentralType);
                break;
        }
    }

    const handleOnCentralTypeChange = (inNewSettings: MixingCenterSettingsModel): void => {
        Logger.info("EL TIPO DE CENTRAL ES DIFERENTE AL TIPO DE CENTRAL ALMACENADO.");

        // HACE RESPALDO DE LOS DATOS ACTUALES CON LA CONFIGURACION ACTUAL
        runFullOperationalResourcesBackup(backup_MixingCenterSettings.centralType);
        runFullRawMaterialBackup(backup_MixingCenterSettings.centralType, backup_MixingCenterSettings.populationType);

        // CARGA LOS DATOS USANDO LA CONFIGURACION NUEVA
        reloadInternalResourcesBackupsIntoCurrents(inNewSettings.centralType);
        reloadInternalRawMaterialBackupsIntoCurrents(inNewSettings.centralType, inNewSettings.populationType);
    }

    const handleOnPopulationTypeChange = (inNewSettings: MixingCenterSettingsModel): void => {
        Logger.info("EL TIPO DE POBLACION ES DIFERENTE AL TIPO DE POBLACION ALMACENADO.");

        // HACE RESPALDO DE LOS DATOS ACTUALES CON LA CONFIGURACION ACTUAL
        runFullRawMaterialBackup(backup_MixingCenterSettings.centralType, backup_MixingCenterSettings.populationType);

        // CARGA LOS DATOS USANDO LA CONFIGURACION NUEVA
        reloadInternalRawMaterialBackupsIntoCurrents(inNewSettings.centralType, inNewSettings.populationType);
    }

    const handleOnPercentagesChange = (inData: MixingCenterSettingsModel): void => {
        Logger.info("LOS PORCENTAJES CAMBIARON");
    }

    const handleOnProductionChange = (inData: MixingCenterSettingsModel): void => {
        Logger.info("LA PRODUCCION CAMBIO");

        const _productionPerMonth = getProductionPerMonth(inData);
        const _productionLines = inData.productionLines;
        const _maintenanceCosts = deepClone(currentMaintenanceCosts);
        const _productionCosts = deepClone(currentProductionCosts);
        const _manualResourcesBackup = deepClone(backup_MC_Manual_Resources);
        const _automaticResourcesBackup = deepClone(backup_MC_Automatic_Resources);

        CalculationService.computeMaintenanceCosts(_maintenanceCosts, _productionLines, _productionPerMonth);
        CalculationService.computeProductionCosts(_productionCosts, _productionLines, _productionPerMonth);
        CalculationService.computeMaintenanceCosts(_manualResourcesBackup.maintenanceCosts, _productionLines, _productionPerMonth);
        CalculationService.computeProductionCosts(_automaticResourcesBackup.productionCosts, _productionLines, _productionPerMonth);

        updateAdditionalCostsSummary(
            currentAutomatedEquipment,
            currentHygieneAndCleaning,
            currentPersonalProtection,
            currentSterileWorkEquipment,
            _maintenanceCosts,
            _productionCosts,
            currentChemistSalary,
            currentAssistantSalary,
            setAdditionalCostsSummary
        );

        setCurrentMaintenanceCosts(_maintenanceCosts);
        setCurrentProductionCosts(_productionCosts);
        setBackup_MC_Manual_Resources(_manualResourcesBackup);
        setBackup_MC_Automatic_Resources(_automaticResourcesBackup);
    }

    const isDifferentCentralType = (inData: MixingCenterSettingsModel): boolean => {
        return (inData.centralType !== backup_MixingCenterSettings.centralType);
    }

    const isDifferentPopulationType = (inData: MixingCenterSettingsModel): boolean => {
        return (inData.populationType !== backup_MixingCenterSettings.populationType);
    }

    const areDifferentPercentages = (inData: MixingCenterSettingsModel): boolean => {
        return (
            inData.percentPerAdult != backup_MixingCenterSettings.percentPerAdult ||
            inData.percentPerNeonatal != backup_MixingCenterSettings.percentPerNeonatal ||
            inData.percentPerPediatric != backup_MixingCenterSettings.percentPerPediatric
        );
    }

    const isDifferentProduction = (inData: MixingCenterSettingsModel): boolean => {
        return (
            inData.productionLines != backup_MixingCenterSettings.productionLines ||
            inData.productionPerDay != backup_MixingCenterSettings.productionPerDay
        );
    }

    const runOnMixingCenterSettingsChange = (inMC_Settings: MixingCenterSettingsModel): void => {
        Logger.info("runOnMixingCenterSettingsChange");

        if (isDifferentCentralType(inMC_Settings) === true) {
            handleOnCentralTypeChange(inMC_Settings);
        } else if (isDifferentPopulationType(inMC_Settings) === true) {
            handleOnPopulationTypeChange(inMC_Settings);
        } else if (areDifferentPercentages(inMC_Settings) === true) {
            handleOnPercentagesChange(inMC_Settings);
        } else if (isDifferentProduction(inMC_Settings) === true) {
            handleOnProductionChange(inMC_Settings);
        } else {
            Logger.info("NO HUBO NINGUN CAMBIO EN LA CONFIGURACION DE LA CENTRAL");
            return;
        }

        // HACE EL RESPALDO DE LA CONFIGURACIO NUEVA PARA QUE SIRVA COMO PUNTO DE COMPARACION
        const _backup_settings = deepClone(inMC_Settings);
        setBackup_MixingCenterSettings(_backup_settings);
    }

    /* *************************************** AREA DE LOS USE-EFFECT *************************************** */


    useEffect(() => {
        runOnMixingCenterSettingsChange(currentMixingCenterSettings);
        Logger.info("useEffect -> currentMixingCenterSettings");
        Logger.info(currentMixingCenterSettings);
    }, [currentMixingCenterSettings]);

    useEffect(() => {
        Logger.info("ComputerContext.Provider MONTADO!!!");
    }, []);

    return (
        <ComputerContext.Provider
            value={{
                executingSomething,
                currentFilename,
                currentMixingCenterSettings,
                currentRawMaterial,
                additionalCostsSummary,
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
