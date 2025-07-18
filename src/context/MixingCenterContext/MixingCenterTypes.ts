import AdditionalCostsTotalsModel from "@/logic/models/AdditionalCostsTotalsModel";
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

export default interface MixingCenterContextProps {
    isProcessing: boolean; // <- esto es para avisarle al overlay que se active o no.
    additionalCostsSummary: AdditionalCostsTotalsModel;

    activeFilename: string | null;
    activeSettings: MixingCenterSettingsModel;
    activeRawMaterialGroup: RawMaterialGroupModel;
    activeAutomatedEquipment: AutomatedEquipmentGroupModel;
    activeHygieneAndCleaning: HygieneAndCleaningGroupModel;
    activePersonalProtection: PersonalProtectionGroupModel;
    activeSterileWorkEquipment: SterileWorkEquipmentGroupModel;
    activeMaintenanceCosts: MaintenanceCostsGroupModel;
    activeProductionCosts: ProductionCostsGroupModel;
    activeChemistSalary: StaffSalaryGroupModel;
    activeAssistantSalary: StaffSalaryGroupModel;

    setIsProcessing: (inValue: boolean) => void;
    setActiveFilename: (inFileName: string | null) => void;
    setActiveSettings: (inValue: MixingCenterSettingsModel) => void;
    setActiveRawMaterialGroup: (inValue: RawMaterialGroupModel) => void;
    setActiveAutomatedEquipment: (inValue: AutomatedEquipmentGroupModel) => void;
    setActiveHygieneAndCleaning: (inValue: HygieneAndCleaningGroupModel) => void;
    setActivePersonalProtection: (inValue: PersonalProtectionGroupModel) => void;
    setActiveSterileWorkEquipment: (inValue: SterileWorkEquipmentGroupModel) => void;
    setActiveMaintenanceCosts: (inValue: MaintenanceCostsGroupModel) => void;
    setActiveProductionCosts: (inValue: ProductionCostsGroupModel) => void;
    setActiveChemistSalary: (inValue: StaffSalaryGroupModel) => void;
    setActiveAssistantSalary: (inValue: StaffSalaryGroupModel) => void;

    buildBackupPayload: () => ComputerBigGroupModel;
    loadBackupFromPayload: (inExternalData: ComputerBigGroupModel | undefined | null) => void;
    recalculateAdditionalCostsSummary: () => void;
};
