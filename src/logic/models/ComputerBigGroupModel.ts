import MixingCenterSettingsModel from "./common/MixingCenterSettingsModel";
import AutomatedEquipmentGroupModel from "./operating_resources/AutomatedEquipmentGroupModel";
import HygieneAndCleaningGroupModel from "./operating_resources/HygieneAndCleaningGroupModel";
import MaintenanceCostsGroupModel from "./operating_resources/MaintenanceCostsGroupModel";
import PersonalProtectionGroupModel from "./operating_resources/PersonalProtectionGroupModel";
import ProductionCostsGroupModel from "./operating_resources/ProductionCostsGroupModel";
import StaffSalaryGroupModel from "./operating_resources/StaffSalaryGroupModel";
import SterileWorkEquipmentGroupModel from "./operating_resources/SterileWorkEquipmentGroupModel";
import RawMaterialModel from "./RawMaterialModel";

class ComputerBigGroupModel {

    public mixingCenterSettings: MixingCenterSettingsModel | null;
    public automatedEquipment: AutomatedEquipmentGroupModel | null;
    public hygieneAndCleaning: HygieneAndCleaningGroupModel | null;
    public personalProtection: PersonalProtectionGroupModel | null;
    public sterileWorkEquipment: SterileWorkEquipmentGroupModel | null;
    public maintenanceCosts: MaintenanceCostsGroupModel | null;
    public productionCosts: ProductionCostsGroupModel | null;
    public chemistSalary: StaffSalaryGroupModel | null;
    public assistantSalary: StaffSalaryGroupModel | null;

    public mixingCenterManualAdultoRawMaterial: RawMaterialModel | null;
    public mixingCenterManualNeonatalRawMaterial: RawMaterialModel | null;
    public mixingCenterManualPediatricaRawMaterial: RawMaterialModel | null;

    public mixingCenterAutomaticAdultoRawMaterial: RawMaterialModel | null;
    public mixingCenterAutomaticNeonatalRawMaterial: RawMaterialModel | null;
    public mixingCenterAutomaticPediatricaRawMaterial: RawMaterialModel | null;

    constructor() {
        this.mixingCenterSettings = null;
        this.automatedEquipment = null;
        this.hygieneAndCleaning = null;
        this.personalProtection = null;
        this.sterileWorkEquipment = null;
        this.maintenanceCosts = null;
        this.productionCosts = null;
        this.chemistSalary = null;
        this.assistantSalary = null;

        this.mixingCenterManualAdultoRawMaterial = null;
        this.mixingCenterManualNeonatalRawMaterial = null;
        this.mixingCenterManualPediatricaRawMaterial = null;

        this.mixingCenterAutomaticAdultoRawMaterial = null;
        this.mixingCenterAutomaticNeonatalRawMaterial = null;
        this.mixingCenterAutomaticPediatricaRawMaterial = null;
    }
}

export default ComputerBigGroupModel;