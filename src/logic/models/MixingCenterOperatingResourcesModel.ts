import AutomatedEquipmentGroupModel from "./operating_resources/AutomatedEquipmentGroupModel";
import HygieneAndCleaningGroupModel from "./operating_resources/HygieneAndCleaningGroupModel";
import MaintenanceCostsGroupModel from "./operating_resources/MaintenanceCostsGroupModel";
import PersonalProtectionGroupModel from "./operating_resources/PersonalProtectionGroupModel";
import ProductionCostsGroupModel from "./operating_resources/ProductionCostsGroupModel";
import StaffSalaryGroupModel from "./operating_resources/StaffSalaryGroupModel";
import SterileWorkEquipmentGroupModel from "./operating_resources/SterileWorkEquipmentGroupModel";

class MixingCenterOperatingResourcesModel {
    public automatedEquipment: AutomatedEquipmentGroupModel;
    public hygieneAndCleaning: HygieneAndCleaningGroupModel;
    public personalProtection: PersonalProtectionGroupModel;
    public sterileWorkEquipment: SterileWorkEquipmentGroupModel;
    public maintenanceCosts: MaintenanceCostsGroupModel;
    public productionCosts: ProductionCostsGroupModel;
    public staffChemistSalary: StaffSalaryGroupModel;
    public staffAssistantSalary: StaffSalaryGroupModel;

    constructor() {
        this.automatedEquipment = new AutomatedEquipmentGroupModel();
        this.hygieneAndCleaning = new HygieneAndCleaningGroupModel();
        this.personalProtection = new PersonalProtectionGroupModel();
        this.sterileWorkEquipment = new SterileWorkEquipmentGroupModel();
        this.maintenanceCosts = new MaintenanceCostsGroupModel();
        this.productionCosts = new ProductionCostsGroupModel();
        this.staffChemistSalary = new StaffSalaryGroupModel();
        this.staffAssistantSalary = new StaffSalaryGroupModel();
    }
}

export default MixingCenterOperatingResourcesModel;