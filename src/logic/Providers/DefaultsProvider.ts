import AutomatedEquipmentDefaults from "../defaults/AutomatedEquipmentDefaults";
import ChemistAssistantSalaryDefaults from "../defaults/ChemistAssistantSalaryDefaults";
import ChemistSalaryDefaults from "../defaults/ChemistSalaryDefaults";
import HygieneAndCleaningDefaults from "../defaults/HygieneAndCleaningDefaults";
import MaintenanceCostsDefaults from "../defaults/MaintenanceCostsDefaults";
import MixingCenterSettingsDefaults from "../defaults/MixingCenterSettingsDefaults";
import PersonalProtectionDefaults from "../defaults/PersonalProtectionDefaults";
import ProductionCostsDefaults from "../defaults/ProductionCostsDefaults";
import RawMaterialAdultDefaults from "../defaults/RawMaterialAdultDefaults";
import RawMaterialNeonatalDefaults from "../defaults/RawMaterialNeonatalDefaults";
import RawMaterialPediatricDefaults from "../defaults/RawMaterialPediatricDefaults";
import SterileWorkEquipmentDefaults from "../defaults/SterileWorkEquipmentDefaults";
import CentralTypeIdEnum from "../enums/CentralTypeIdEnum";
import PopulationTypeIdEnum from "../enums/PopulationTypeIdEnum";
import MixingCenterSettingsModel from "../models/common/MixingCenterSettingsModel";
import AutomatedEquipmentGroupModel from "../models/operating_resources/AutomatedEquipmentGroupModel";
import HygieneAndCleaningGroupModel from "../models/operating_resources/HygieneAndCleaningGroupModel";
import MaintenanceCostsGroupModel from "../models/operating_resources/MaintenanceCostsGroupModel";
import PersonalProtectionGroupModel from "../models/operating_resources/PersonalProtectionGroupModel";
import ProductionCostsGroupModel from "../models/operating_resources/ProductionCostsGroupModel";
import StaffSalaryGroupModel from "../models/operating_resources/StaffSalaryGroupModel";
import SterileWorkEquipmentGroupModel from "../models/operating_resources/SterileWorkEquipmentGroupModel";
import RawMaterialModel from "../models/RawMaterialModel";

class DefaultsProvider {

    public static chemistSalaryDefaults(inItem: StaffSalaryGroupModel, inCentralType: CentralTypeIdEnum = CentralTypeIdEnum.None): void {
        const defaults = new ChemistSalaryDefaults();
        defaults.setDefaultValues(inItem, inCentralType);
    }

    public static chemistAssistantSalaryDefaults(inItem: StaffSalaryGroupModel, inCentralType: CentralTypeIdEnum = CentralTypeIdEnum.None): void {
        const defaults = new ChemistAssistantSalaryDefaults();
        defaults.setDefaultValues(inItem, inCentralType);
    }

    public static productionCostsDefaults(inItem: ProductionCostsGroupModel, inCentralType: CentralTypeIdEnum = CentralTypeIdEnum.None): void {
        const defaults = new ProductionCostsDefaults();
        defaults.setDefaultValues(inItem, inCentralType);
    }

    public static maintenanceCostsDefaults(inItem: MaintenanceCostsGroupModel, inCentralType: CentralTypeIdEnum = CentralTypeIdEnum.None): void {
        const defaults = new MaintenanceCostsDefaults();
        defaults.setDefaultValues(inItem, inCentralType);
    }

    public static sterileWorkEquipmentDefaults(inItem: SterileWorkEquipmentGroupModel, inCentralType: CentralTypeIdEnum): void {
        const defaults = new SterileWorkEquipmentDefaults();
        defaults.setDefaultValues(inItem, inCentralType);
    }

    public static hygieneAndCleaningDefaults(inItem: HygieneAndCleaningGroupModel, inCentralType: CentralTypeIdEnum): void {
        const defaults = new HygieneAndCleaningDefaults();
        defaults.setDefaultValues(inItem, inCentralType);
    }

    public static personalProtectionDefaults(inItem: PersonalProtectionGroupModel, inCentralType: CentralTypeIdEnum): void {
        const defaults = new PersonalProtectionDefaults();
        defaults.setDefaultValues(inItem, inCentralType);
    }

    public static automatedEquipmentDefaults(inItem: AutomatedEquipmentGroupModel): void {
        const defaults = new AutomatedEquipmentDefaults();
        defaults.setDefaultValues(inItem, CentralTypeIdEnum.Automatico);
    }

    public static rawMaterialsDefaults(inItem: RawMaterialModel, inCentralType: CentralTypeIdEnum, inPopulationType: PopulationTypeIdEnum): void {
        switch (inPopulationType) {
            case PopulationTypeIdEnum.Neonatal:
                const neonatalDefaults = new RawMaterialNeonatalDefaults();
                neonatalDefaults.setDefaultValues(inItem, inCentralType);
                break
            case PopulationTypeIdEnum.Pediatrica:
                const pediatricDefaults = new RawMaterialPediatricDefaults();
                pediatricDefaults.setDefaultValues(inItem, inCentralType);
                break
            case PopulationTypeIdEnum.Adulto:
                const adultDefaults = new RawMaterialAdultDefaults();
                adultDefaults.setDefaultValues(inItem, inCentralType);
                break;
            default:
                throw new Error("No implementado...");
        }
    }

    //MixingCenterSettingsDefaults
    public static mixingCenterSettingsDefaults(inItem: MixingCenterSettingsModel): void {
        const defaults = new MixingCenterSettingsDefaults();
        defaults.setDefaultValues(inItem, CentralTypeIdEnum.None);
    }


    // /* SINGLETON FOR THIS CLASS */
    // private static _instance: DefaultsProvider
    // public static getInstance(): DefaultsProvider {
    //     if (!DefaultsProvider._instance) {
    //         DefaultsProvider._instance = new DefaultsProvider();
    //     }
    //     return DefaultsProvider._instance;
    // }
}

export default DefaultsProvider;