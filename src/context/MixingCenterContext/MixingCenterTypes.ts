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
    setIsProcessing: (inValue: boolean) => void;
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
    recalculateAdditionalCostsSummary: () => void;
}