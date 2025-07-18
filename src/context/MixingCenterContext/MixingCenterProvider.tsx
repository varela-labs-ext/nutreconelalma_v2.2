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
import { getProductionPerMonth, updateAdditionalCostsSummary } from "./MixingCenterUtils";
import { getClassName, Logger } from "@/utils/logger";
import AdditionalCostsTotalsModel from "@/logic/models/AdditionalCostsTotalsModel";
import MixingCenterContextProps from "./MixingCenterTypes";
import CentralTypeSwitch from "./utils/CentralTypeSwitch";
import PopulationTypeSwitch from "./utils/PopulationTypeSwitch";
import MixingCenterUseEffects from "./MixingCenterUseEffects";
import { isValidBackupPayload } from "./utils/MixingCenterUtils";


// ------------------- Contexto -------------------
export const MixingCenterContext = createContext<MixingCenterContextProps | undefined>(undefined);

// ------------------- Provider -------------------
// Antiguo calculadora provider
export const MixingCenterProvider = ({ children }: { children: React.ReactNode }) => {
    const msgInvalidData = "Datos leidos del backup internos son inválidos!";

    const [isReady, setIsReady] = useState(true);
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
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

    // PUBLIC
    const buildBackupPayload = (): ComputerBigGroupModel => {
        const output: ComputerBigGroupModel = new ComputerBigGroupModel();

        try {
            setIsReady(false);

            backupCurrentOperationalResources(currentMixingCenterSettings.centralType);
            backupCurrentRawMaterials(currentMixingCenterSettings.centralType, currentMixingCenterSettings.populationType);

            output.mixingCenterSettings = deepClone(currentMixingCenterSettings);

            output.backup_MC_Manual_RawMaterials = deepClone(backup_MC_Manual_RawMaterials);
            output.backup_MC_Automatic_RawMaterials = deepClone(backup_MC_Automatic_RawMaterials);

            output.backup_MC_Manual_Resources = deepClone(backup_MC_Manual_Resources);
            output.backup_MC_Automatic_Resources = deepClone(backup_MC_Automatic_Resources);

        } catch (err) {
            Logger.error(err);
        } finally {
            setIsReady(true);
        }

        return output;
    }

    // PUBLIC
    const loadBackupFromPayload = (inExternalData: ComputerBigGroupModel | undefined | null): void => {
        try {
            setIsReady(false);
            Logger.info("MixingCenterProvider.loadExternalBackup() STARTS...");

            if (inExternalData !== undefined && inExternalData !== null && isValidBackupPayload(inExternalData)) {
                hydrateFromBackupPayload(inExternalData);
            } else {
                throw new Error("Datos de backup inválidos!");
            }

        } catch (err) {
            throw err;
        } finally {
            setIsReady(true);
            Logger.info("MixingCenterProvider.loadExternalBackup() ENDS...");
        }
    }

    // const isExternalDataValid = (inExternalData: ComputerBigGroupModel): boolean => {
    //     return (
    //         inExternalData.mixingCenterSettings !== undefined && inExternalData.mixingCenterSettings != null &&
    //         inExternalData.backup_MC_Automatic_RawMaterials !== undefined && inExternalData.backup_MC_Automatic_RawMaterials !== null &&
    //         inExternalData.backup_MC_Automatic_Resources !== undefined && inExternalData.backup_MC_Automatic_Resources !== null &&
    //         inExternalData.backup_MC_Manual_RawMaterials !== undefined && inExternalData.backup_MC_Manual_RawMaterials !== null &&
    //         inExternalData.backup_MC_Manual_Resources !== undefined && inExternalData.backup_MC_Manual_Resources !== null
    //     );
    // }

    // Este metodo permite al sistema cargar desde una fuente cualquiera el bloque de datos.
    const hydrateFromBackupPayload = (inExternalData: ComputerBigGroupModel): void => {
        const _copyOfInData = deepClone(inExternalData);

        if (_copyOfInData?.mixingCenterSettings === null) {
            throw new Error("loadExternalBackupProcess() - Los datos no pueden ser nulos.");
        }

        Logger.info("MixingCenterContext.loadExternalBackupProcess() STARTS");

        setRawMaterialBackupsFromPayload(_copyOfInData); // Raw material
        setResourceBackupsFromPayload(_copyOfInData); // Resources
        loadExternalBackupIntoCurrents(
            _copyOfInData.mixingCenterSettings?.centralType,
            _copyOfInData.mixingCenterSettings?.populationType,
            _copyOfInData);

        setCurrentMixingCenterSettings(_copyOfInData.mixingCenterSettings);

        Logger.info("MixingCenterContext.loadExternalBackupProcess() ENDS");
    }

    const loadExternalBackupIntoCurrents = (inCentralType: CentralTypeIdEnum, inPopulationType: PopulationTypeIdEnum, inExternalData: ComputerBigGroupModel): void => {

        CentralTypeSwitch(
            inCentralType,
            () => {
                setRawMaterialCurrentFromBackup(inPopulationType, inExternalData.backup_MC_Manual_RawMaterials);
                setResourcesCurrentFromBackup(inExternalData?.backup_MC_Manual_Resources);
            },
            () => {
                setRawMaterialCurrentFromBackup(inPopulationType, inExternalData.backup_MC_Automatic_RawMaterials);
                setResourcesCurrentFromBackup(inExternalData?.backup_MC_Automatic_Resources);
            }
        );
    }

    const setRawMaterialCurrentFromBackup = (inPopulationType: PopulationTypeIdEnum, inData: MixingCenterRawMaterialsModel | null): void => {
        if (inData === null || inData === undefined) {
            throw new Error("setExternalBackupIntoRawCurrents(). LA DATA NO PUEDE SER NULA.");
        }

        PopulationTypeSwitch(
            inPopulationType,
            () => {
                const _adulto = deepClone(inData.adultoRawMaterial);
                setCurrentRawMaterial(_adulto);
            },
            () => {
                const _neonatal = deepClone(inData.neonatalRawMaterial);
                setCurrentRawMaterial(_neonatal);
            },
            () => {
                const _pediatrica = deepClone(inData.pediatricoRawMaterial);
                setCurrentRawMaterial(_pediatrica);
            }
        );
    }

    const setResourcesCurrentFromBackup = (inData: MixingCenterOperatingResourcesModel | null): void => {
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



    const setRawMaterialBackupsFromPayload = (inData: ComputerBigGroupModel | null): void => {
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

    const setResourceBackupsFromPayload = (inData: ComputerBigGroupModel | null): void => {
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

    const restoreRawMaterialFromInternalBackup = (inCentralType: CentralTypeIdEnum, inPopulationType: PopulationTypeIdEnum): void => {
        Logger.info(`RESTAURANDO BACKUP DE MATERIA PRIMA. CENTRAL: ${CentralTypeIdEnum[inCentralType]}, POBLACION: ${PopulationTypeIdEnum[inPopulationType]}`);

        CentralTypeSwitch(
            inCentralType,
            () => {
                setRawMaterialCurrentFromBackup(inPopulationType, backup_MC_Manual_RawMaterials);
            },
            () => {
                setRawMaterialCurrentFromBackup(inPopulationType, backup_MC_Automatic_RawMaterials);
            }
        );
    }

    const restoreResourcesFromInternalBackup = (inCentralType: CentralTypeIdEnum): void => {
        Logger.info(`RESTAURANDO BACKUP DE LOS RESOURCES. CENTRAL: ${CentralTypeIdEnum[inCentralType]}`);

        CentralTypeSwitch(
            inCentralType,
            () => {
                const manualResources = deepClone(backup_MC_Manual_Resources);
                setResourcesCurrentFromBackup(manualResources);
            },
            () => {
                const automaticoResources = deepClone(backup_MC_Automatic_Resources);
                setResourcesCurrentFromBackup(automaticoResources);
            }
        );
    }

    const cloneCurrentOperationalResources = (): MixingCenterOperatingResourcesModel => {
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

    const backupCurrentOperationalResources = (inCentralType: CentralTypeIdEnum): void => {
        Logger.info(`EJECUTANDO BACKUP DE LOS RESOURCES. CENTRAL: ${CentralTypeIdEnum[inCentralType]}`, getClassName(this));

        CentralTypeSwitch(
            inCentralType,
            () => {
                const resourcesManual = cloneCurrentOperationalResources();
                setBackup_MC_Manual_Resources(resourcesManual);
            },
            () => {
                const resourcesAutomatic = cloneCurrentOperationalResources();
                setBackup_MC_Automatic_Resources(resourcesAutomatic);
            }
        );
    }

    const cloneRawMaterialsIntoPopulationGroup = (inPopulationType: PopulationTypeIdEnum, inData: MixingCenterRawMaterialsModel): MixingCenterRawMaterialsModel => {
        const resources = deepClone(inData);

        PopulationTypeSwitch(
            inPopulationType,
            () => {
                resources.adultoRawMaterial = deepClone(currentRawMaterial)
            },
            () => {
                resources.neonatalRawMaterial = deepClone(currentRawMaterial)
            },
            () => {
                resources.pediatricoRawMaterial = deepClone(currentRawMaterial)
            }
        );

        return resources;
    }

    const backupCurrentRawMaterials = (inCentralType: CentralTypeIdEnum, inPopulationType: PopulationTypeIdEnum): void => {
        Logger.info(`EJECUTANDO BACKUP DE MATERIA PRIMA. CENTRAL: ${CentralTypeIdEnum[inCentralType]}, POBLACION: ${PopulationTypeIdEnum[inPopulationType]}`);

        CentralTypeSwitch(
            inCentralType,
            () => {
                const rawMaterialManual = cloneRawMaterialsIntoPopulationGroup(inPopulationType, backup_MC_Manual_RawMaterials);
                setBackup_MC_Manual_RawMaterials(rawMaterialManual);
            },
            () => {
                const rawMaterialAutomatic = cloneRawMaterialsIntoPopulationGroup(inPopulationType, backup_MC_Automatic_RawMaterials);
                setBackup_MC_Automatic_RawMaterials(rawMaterialAutomatic);
            }
        );
    }

    const switchResourcesAndRawMaterialByCentral = (inNewSettings: MixingCenterSettingsModel): void => {
        Logger.info("EL TIPO DE CENTRAL ES DIFERENTE AL TIPO DE CENTRAL ALMACENADO.");

        // HACE RESPALDO DE LOS DATOS ACTUALES CON LA CONFIGURACION ACTUAL
        backupCurrentOperationalResources(backup_MixingCenterSettings.centralType);
        backupCurrentRawMaterials(backup_MixingCenterSettings.centralType, backup_MixingCenterSettings.populationType);

        // CARGA LOS DATOS USANDO LA CONFIGURACION NUEVA
        restoreResourcesFromInternalBackup(inNewSettings.centralType);
        restoreRawMaterialFromInternalBackup(inNewSettings.centralType, inNewSettings.populationType);
    }

    const switchRawMaterialByPopulationType = (inNewSettings: MixingCenterSettingsModel): void => {
        Logger.info("EL TIPO DE POBLACION ES DIFERENTE AL TIPO DE POBLACION ALMACENADO.");

        // HACE RESPALDO DE LOS DATOS ACTUALES CON LA CONFIGURACION ACTUAL
        backupCurrentRawMaterials(backup_MixingCenterSettings.centralType, backup_MixingCenterSettings.populationType);

        // CARGA LOS DATOS USANDO LA CONFIGURACION NUEVA
        restoreRawMaterialFromInternalBackup(inNewSettings.centralType, inNewSettings.populationType);
    }

    const handleOnPercentagesChange = (inData: MixingCenterSettingsModel): void => {
        Logger.info("LOS PORCENTAJES CAMBIARON");
        //TODO: PENDIENTE DE DEFINIR POR EL USUARIO
    }

    const recalculateCostsByProduction = (inData: MixingCenterSettingsModel): void => {
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

    const hasCentralTypeChanged = (inData: MixingCenterSettingsModel): boolean => {
        return (inData.centralType !== backup_MixingCenterSettings.centralType);
    }

    const hasPopulationTypeChanged = (inData: MixingCenterSettingsModel): boolean => {
        return (inData.populationType !== backup_MixingCenterSettings.populationType);
    }

    const hasPercentageDistributionChanged = (inData: MixingCenterSettingsModel): boolean => {
        return (
            inData.percentPerAdult != backup_MixingCenterSettings.percentPerAdult ||
            inData.percentPerNeonatal != backup_MixingCenterSettings.percentPerNeonatal ||
            inData.percentPerPediatric != backup_MixingCenterSettings.percentPerPediatric
        );
    }

    const hasProductionChanged = (inData: MixingCenterSettingsModel): boolean => {
        return (
            inData.productionLines != backup_MixingCenterSettings.productionLines ||
            inData.productionPerDay != backup_MixingCenterSettings.productionPerDay
        );
    }

    const handleMixingCenterSettingsChange = (inMC_Settings: MixingCenterSettingsModel): void => {
        Logger.info("handleMixingCenterSettingsChange");

        if (hasCentralTypeChanged(inMC_Settings) === true) {
            switchResourcesAndRawMaterialByCentral(inMC_Settings);
        } else if (hasPopulationTypeChanged(inMC_Settings) === true) {
            switchRawMaterialByPopulationType(inMC_Settings);
        } else if (hasPercentageDistributionChanged(inMC_Settings) === true) {
            handleOnPercentagesChange(inMC_Settings);
        } else if (hasProductionChanged(inMC_Settings) === true) {
            recalculateCostsByProduction(inMC_Settings);
        } else {
            Logger.info("NO HUBO NINGUN CAMBIO EN LA CONFIGURACION DE LA CENTRAL");
            return;
        }

        // HACE EL RESPALDO DE LA CONFIGURACIO NUEVA PARA QUE SIRVA COMO PUNTO DE COMPARACION
        const _backup_settings = deepClone(inMC_Settings);
        setBackup_MixingCenterSettings(_backup_settings);
    }

    const recalculateAdditionalCostsSummary = (): void => {
        updateAdditionalCostsSummary(
            currentAutomatedEquipment,
            currentHygieneAndCleaning,
            currentPersonalProtection,
            currentSterileWorkEquipment,
            currentMaintenanceCosts,
            currentProductionCosts,
            currentChemistSalary,
            currentAssistantSalary,
            setAdditionalCostsSummary
        );
    }

    useEffect(() => {
        handleMixingCenterSettingsChange(currentMixingCenterSettings);
        Logger.info("useEffect -> currentMixingCenterSettings");
        Logger.info(currentMixingCenterSettings);
    }, [currentMixingCenterSettings]);


    useEffect(() => {
        Logger.info("MixingCenterContext.Provider MONTADO!!!");
    }, []);


    return (
        <MixingCenterContext.Provider
            value={{
                isProcessing,
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
                setIsProcessing,
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
                gatherExternalBackup: buildBackupPayload,
                loadExternalBackup: loadBackupFromPayload,
                recalculateAdditionalCostsSummary
            }}
        >
            <MixingCenterUseEffects>
                {children}
            </MixingCenterUseEffects>
        </MixingCenterContext.Provider >
    );
};


