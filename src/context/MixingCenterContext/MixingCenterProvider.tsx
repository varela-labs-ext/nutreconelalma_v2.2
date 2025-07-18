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
    const [additionalCostsSummary, setAdditionalCostsSummary] = useState<AdditionalCostsTotalsModel>(new AdditionalCostsTotalsModel());

    const [activeFilename, setActiveFilename] = useState<string | null>(null);
    const [activeSettings, setActiveSettings] = useState<MixingCenterSettingsModel>(new MixingCenterSettingsModel());
    const [activeRawMaterialGroup, setActiveRawMaterialGroup] = useState<RawMaterialGroupModel>(new RawMaterialGroupModel());
    const [activeAutomatedEquipment, setActiveAutomatedEquipment] = useState<AutomatedEquipmentGroupModel>(new AutomatedEquipmentGroupModel());
    const [activeHygieneAndCleaning, setActiveHygieneAndCleaning] = useState<HygieneAndCleaningGroupModel>(new HygieneAndCleaningGroupModel());
    const [activePersonalProtection, setActivePersonalProtection] = useState<PersonalProtectionGroupModel>(new PersonalProtectionGroupModel());
    const [activeSterileWorkEquipment, setActiveSterileWorkEquipment] = useState<SterileWorkEquipmentGroupModel>(new SterileWorkEquipmentGroupModel());
    const [activeMaintenanceCosts, setActiveMaintenanceCosts] = useState<MaintenanceCostsGroupModel>(new MaintenanceCostsGroupModel());
    const [activeProductionCosts, setActiveProductionCosts] = useState<ProductionCostsGroupModel>(new ProductionCostsGroupModel());
    const [activeChemistSalary, setActiveChemistSalary] = useState<StaffSalaryGroupModel>(new StaffSalaryGroupModel());
    const [activeAssistantSalary, setActiveAssistantSalary] = useState<StaffSalaryGroupModel>(new StaffSalaryGroupModel());


    const [backupSettings, setBackupSettings] = useState<MixingCenterSettingsModel>(new MixingCenterSettingsModel());

    // Materia Prima
    const [manualRawMaterialBackup, setManualRawMaterialBackup] = useState<MixingCenterRawMaterialsModel>(new MixingCenterRawMaterialsModel());
    const [automaticRawMaterialBackup, setAutomaticRawMaterialBackup] = useState<MixingCenterRawMaterialsModel>(new MixingCenterRawMaterialsModel());

    // Recursos Operativos
    const [manualResourceBackup, setManualResourceBackup] = useState<MixingCenterOperatingResourcesModel>(new MixingCenterOperatingResourcesModel());
    const [automaticResourceBackup, setAutomaticResourceBackup] = useState<MixingCenterOperatingResourcesModel>(new MixingCenterOperatingResourcesModel());

    // PUBLIC
    const buildBackupPayload = (): ComputerBigGroupModel => {
        const output: ComputerBigGroupModel = new ComputerBigGroupModel();

        try {
            setIsReady(false);

            backupCurrentOperationalResources(activeSettings.centralType);
            backupCurrentRawMaterials(activeSettings.centralType, activeSettings.populationType);

            output.mixingCenterSettings = deepClone(activeSettings);

            output.backup_MC_Manual_RawMaterials = deepClone(manualRawMaterialBackup);
            output.backup_MC_Automatic_RawMaterials = deepClone(automaticRawMaterialBackup);

            output.backup_MC_Manual_Resources = deepClone(manualResourceBackup);
            output.backup_MC_Automatic_Resources = deepClone(automaticResourceBackup);

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

        setActiveSettings(_copyOfInData.mixingCenterSettings);

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
                setActiveRawMaterialGroup(_adulto);
            },
            () => {
                const _neonatal = deepClone(inData.neonatalRawMaterial);
                setActiveRawMaterialGroup(_neonatal);
            },
            () => {
                const _pediatrica = deepClone(inData.pediatricoRawMaterial);
                setActiveRawMaterialGroup(_pediatrica);
            }
        );
    }

    const setResourcesCurrentFromBackup = (inData: MixingCenterOperatingResourcesModel | null): void => {
        if (inData === null || inData === undefined) {
            throw new Error("setExternalBackupIntoResourcesCurrents(). LA DATA NO PUEDE SER NULA.");
        }

        setActiveAutomatedEquipment(inData.automatedEquipment);
        setActiveHygieneAndCleaning(inData.hygieneAndCleaning);
        setActivePersonalProtection(inData.personalProtection)
        setActiveSterileWorkEquipment(inData.sterileWorkEquipment);
        setActiveMaintenanceCosts(inData.maintenanceCosts);
        setActiveProductionCosts(inData.productionCosts);
        setActiveChemistSalary(inData.staffChemistSalary);
        setActiveAssistantSalary(inData.staffAssistantSalary);

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
            setManualRawMaterialBackup(manual_RawMaterials);
        }

        if (inData?.backup_MC_Automatic_RawMaterials !== null) {
            const automatic_RawMaterials = deepClone(inData.backup_MC_Automatic_RawMaterials);
            setAutomaticRawMaterialBackup(automatic_RawMaterials);
        }
    }

    const setResourceBackupsFromPayload = (inData: ComputerBigGroupModel | null): void => {
        if (inData === null || inData === undefined) {
            throw new Error("loadExternalBackupIntoRecoursesBackups(). LA DATA NO PUEDE SER NULA.");
        }

        if (inData?.backup_MC_Manual_Resources !== null) {
            const manual_Resources = deepClone(inData.backup_MC_Manual_Resources);
            setManualResourceBackup(manual_Resources);
        }

        if (inData?.backup_MC_Automatic_Resources !== null) {
            const automatic_Resources = deepClone(inData.backup_MC_Automatic_Resources);
            setAutomaticResourceBackup(automatic_Resources);
        }
    }

    const restoreRawMaterialFromInternalBackup = (inCentralType: CentralTypeIdEnum, inPopulationType: PopulationTypeIdEnum): void => {
        Logger.info(`RESTAURANDO BACKUP DE MATERIA PRIMA. CENTRAL: ${CentralTypeIdEnum[inCentralType]}, POBLACION: ${PopulationTypeIdEnum[inPopulationType]}`);

        CentralTypeSwitch(
            inCentralType,
            () => {
                setRawMaterialCurrentFromBackup(inPopulationType, manualRawMaterialBackup);
            },
            () => {
                setRawMaterialCurrentFromBackup(inPopulationType, automaticRawMaterialBackup);
            }
        );
    }

    const restoreResourcesFromInternalBackup = (inCentralType: CentralTypeIdEnum): void => {
        Logger.info(`RESTAURANDO BACKUP DE LOS RESOURCES. CENTRAL: ${CentralTypeIdEnum[inCentralType]}`);

        CentralTypeSwitch(
            inCentralType,
            () => {
                const manualResources = deepClone(manualResourceBackup);
                setResourcesCurrentFromBackup(manualResources);
            },
            () => {
                const automaticoResources = deepClone(automaticResourceBackup);
                setResourcesCurrentFromBackup(automaticoResources);
            }
        );
    }

    const cloneCurrentOperationalResources = (): MixingCenterOperatingResourcesModel => {
        const resources: MixingCenterOperatingResourcesModel = new MixingCenterOperatingResourcesModel();
        resources.automatedEquipment = deepClone(activeAutomatedEquipment);
        resources.hygieneAndCleaning = deepClone(activeHygieneAndCleaning);
        resources.maintenanceCosts = deepClone(activeMaintenanceCosts);
        resources.personalProtection = deepClone(activePersonalProtection);
        resources.productionCosts = deepClone(activeProductionCosts);
        resources.sterileWorkEquipment = deepClone(activeSterileWorkEquipment);
        resources.staffAssistantSalary = deepClone(activeAssistantSalary);
        resources.staffChemistSalary = deepClone(activeChemistSalary);
        return resources;
    }

    const backupCurrentOperationalResources = (inCentralType: CentralTypeIdEnum): void => {
        Logger.info(`EJECUTANDO BACKUP DE LOS RESOURCES. CENTRAL: ${CentralTypeIdEnum[inCentralType]}`, getClassName(this));

        CentralTypeSwitch(
            inCentralType,
            () => {
                const resourcesManual = cloneCurrentOperationalResources();
                setManualResourceBackup(resourcesManual);
            },
            () => {
                const resourcesAutomatic = cloneCurrentOperationalResources();
                setAutomaticResourceBackup(resourcesAutomatic);
            }
        );
    }

    const cloneRawMaterialsIntoPopulationGroup = (inPopulationType: PopulationTypeIdEnum, inData: MixingCenterRawMaterialsModel): MixingCenterRawMaterialsModel => {
        const resources = deepClone(inData);

        PopulationTypeSwitch(
            inPopulationType,
            () => {
                resources.adultoRawMaterial = deepClone(activeRawMaterialGroup)
            },
            () => {
                resources.neonatalRawMaterial = deepClone(activeRawMaterialGroup)
            },
            () => {
                resources.pediatricoRawMaterial = deepClone(activeRawMaterialGroup)
            }
        );

        return resources;
    }

    const backupCurrentRawMaterials = (inCentralType: CentralTypeIdEnum, inPopulationType: PopulationTypeIdEnum): void => {
        Logger.info(`EJECUTANDO BACKUP DE MATERIA PRIMA. CENTRAL: ${CentralTypeIdEnum[inCentralType]}, POBLACION: ${PopulationTypeIdEnum[inPopulationType]}`);

        CentralTypeSwitch(
            inCentralType,
            () => {
                const rawMaterialManual = cloneRawMaterialsIntoPopulationGroup(inPopulationType, manualRawMaterialBackup);
                setManualRawMaterialBackup(rawMaterialManual);
            },
            () => {
                const rawMaterialAutomatic = cloneRawMaterialsIntoPopulationGroup(inPopulationType, automaticRawMaterialBackup);
                setAutomaticRawMaterialBackup(rawMaterialAutomatic);
            }
        );
    }

    const switchResourcesAndRawMaterialByCentral = (inNewSettings: MixingCenterSettingsModel): void => {
        Logger.info("EL TIPO DE CENTRAL ES DIFERENTE AL TIPO DE CENTRAL ALMACENADO.");

        // HACE RESPALDO DE LOS DATOS ACTUALES CON LA CONFIGURACION ACTUAL
        backupCurrentOperationalResources(backupSettings.centralType);
        backupCurrentRawMaterials(backupSettings.centralType, backupSettings.populationType);

        // CARGA LOS DATOS USANDO LA CONFIGURACION NUEVA
        restoreResourcesFromInternalBackup(inNewSettings.centralType);
        restoreRawMaterialFromInternalBackup(inNewSettings.centralType, inNewSettings.populationType);
    }

    const switchRawMaterialByPopulationType = (inNewSettings: MixingCenterSettingsModel): void => {
        Logger.info("EL TIPO DE POBLACION ES DIFERENTE AL TIPO DE POBLACION ALMACENADO.");

        // HACE RESPALDO DE LOS DATOS ACTUALES CON LA CONFIGURACION ACTUAL
        backupCurrentRawMaterials(backupSettings.centralType, backupSettings.populationType);

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
        const _maintenanceCosts = deepClone(activeMaintenanceCosts);
        const _productionCosts = deepClone(activeProductionCosts);
        const _manualResourcesBackup = deepClone(manualResourceBackup);
        const _automaticResourcesBackup = deepClone(automaticResourceBackup);

        CalculationService.computeMaintenanceCosts(_maintenanceCosts, _productionLines, _productionPerMonth);
        CalculationService.computeProductionCosts(_productionCosts, _productionLines, _productionPerMonth);
        CalculationService.computeMaintenanceCosts(_manualResourcesBackup.maintenanceCosts, _productionLines, _productionPerMonth);
        CalculationService.computeProductionCosts(_automaticResourcesBackup.productionCosts, _productionLines, _productionPerMonth);

        updateAdditionalCostsSummary(
            activeAutomatedEquipment,
            activeHygieneAndCleaning,
            activePersonalProtection,
            activeSterileWorkEquipment,
            _maintenanceCosts,
            _productionCosts,
            activeChemistSalary,
            activeAssistantSalary,
            setAdditionalCostsSummary
        );

        setActiveMaintenanceCosts(_maintenanceCosts);
        setActiveProductionCosts(_productionCosts);
        setManualResourceBackup(_manualResourcesBackup);
        setAutomaticResourceBackup(_automaticResourcesBackup);
    }

    const hasCentralTypeChanged = (inData: MixingCenterSettingsModel): boolean => {
        return (inData.centralType !== backupSettings.centralType);
    }

    const hasPopulationTypeChanged = (inData: MixingCenterSettingsModel): boolean => {
        return (inData.populationType !== backupSettings.populationType);
    }

    const hasPercentageDistributionChanged = (inData: MixingCenterSettingsModel): boolean => {
        return (
            inData.percentPerAdult != backupSettings.percentPerAdult ||
            inData.percentPerNeonatal != backupSettings.percentPerNeonatal ||
            inData.percentPerPediatric != backupSettings.percentPerPediatric
        );
    }

    const hasProductionChanged = (inData: MixingCenterSettingsModel): boolean => {
        return (
            inData.productionLines != backupSettings.productionLines ||
            inData.productionPerDay != backupSettings.productionPerDay
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
        setBackupSettings(_backup_settings);
    }

    const recalculateAdditionalCostsSummary = (): void => {
        updateAdditionalCostsSummary(
            activeAutomatedEquipment,
            activeHygieneAndCleaning,
            activePersonalProtection,
            activeSterileWorkEquipment,
            activeMaintenanceCosts,
            activeProductionCosts,
            activeChemistSalary,
            activeAssistantSalary,
            setAdditionalCostsSummary
        );
    }

    useEffect(() => {
        handleMixingCenterSettingsChange(activeSettings);
        Logger.info("useEffect -> currentMixingCenterSettings");
        Logger.info(activeSettings);
    }, [activeSettings]);


    useEffect(() => {
        Logger.info("MixingCenterContext.Provider MONTADO!!!");
    }, []);


    return (
        <MixingCenterContext.Provider
            value={{
                isProcessing,
                activeFilename,
                activeSettings,
                activeRawMaterialGroup,
                additionalCostsSummary,
                activeAutomatedEquipment,
                activeHygieneAndCleaning,
                activePersonalProtection,
                activeSterileWorkEquipment,
                activeMaintenanceCosts,
                activeProductionCosts,
                activeChemistSalary,
                activeAssistantSalary,
                setIsProcessing,
                setActiveFilename,
                setActiveSettings,
                setActiveRawMaterialGroup,
                setActiveAutomatedEquipment,
                setActiveHygieneAndCleaning,
                setActivePersonalProtection,
                setActiveSterileWorkEquipment,
                setActiveMaintenanceCosts,
                setActiveProductionCosts,
                setActiveChemistSalary,
                setActiveAssistantSalary,
                buildBackupPayload,
                loadBackupFromPayload,
                recalculateAdditionalCostsSummary
            }}
        >
            <MixingCenterUseEffects>
                {children}
            </MixingCenterUseEffects>
        </MixingCenterContext.Provider >
    );
};


