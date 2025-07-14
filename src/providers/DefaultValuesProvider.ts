import AutomatedEquipmentDefaults from "@/logic/defaults/AutomatedEquipmentDefaults";
import ChemistAssistantSalaryDefaults from "@/logic/defaults/ChemistAssistantSalaryDefaults";
import ChemistSalaryDefaults from "@/logic/defaults/ChemistSalaryDefaults";
import HygieneAndCleaningDefaults from "@/logic/defaults/HygieneAndCleaningDefaults";
import MaintenanceCostsDefaults from "@/logic/defaults/MaintenanceCostsDefaults";
import MixingCenterSettingsDefaults from "@/logic/defaults/MixingCenterSettingsDefaults";
import PersonalProtectionDefaults from "@/logic/defaults/PersonalProtectionDefaults";
import ProductionCostsDefaults from "@/logic/defaults/ProductionCostsDefaults";
import RawMaterialAdultDefaults from "@/logic/defaults/RawMaterialAdultDefaults";
import RawMaterialNeonatalDefaults from "@/logic/defaults/RawMaterialNeonatalDefaults";
import RawMaterialPediatricDefaults from "@/logic/defaults/RawMaterialPediatricDefaults";
import SterileWorkEquipmentDefaults from "@/logic/defaults/SterileWorkEquipmentDefaults";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";
import MixingCenterSettingsModel from "@/logic/models/common/MixingCenterSettingsModel";
import AutomatedEquipmentGroupModel from "@/logic/models/operating_resources/AutomatedEquipmentGroupModel";
import HygieneAndCleaningGroupModel from "@/logic/models/operating_resources/HygieneAndCleaningGroupModel";
import MaintenanceCostsGroupModel from "@/logic/models/operating_resources/MaintenanceCostsGroupModel";
import PersonalProtectionGroupModel from "@/logic/models/operating_resources/PersonalProtectionGroupModel";
import ProductionCostsGroupModel from "@/logic/models/operating_resources/ProductionCostsGroupModel";
import StaffSalaryGroupModel from "@/logic/models/operating_resources/StaffSalaryGroupModel";
import SterileWorkEquipmentGroupModel from "@/logic/models/operating_resources/SterileWorkEquipmentGroupModel";
import RawMaterialModel from "@/logic/models/RawMaterialModel";

class DefaultValuesProvider {
    public static chemistSalaryDefaults(inCentralType: CentralTypeIdEnum = CentralTypeIdEnum.None): StaffSalaryGroupModel {
        const output: StaffSalaryGroupModel = new StaffSalaryGroupModel();
        const defaults = new ChemistSalaryDefaults();

        defaults.setDefaultValues(output, inCentralType);

        return output;
    }

    public static chemistAssistantSalaryDefaults(inCentralType: CentralTypeIdEnum = CentralTypeIdEnum.None): StaffSalaryGroupModel {
        const output: StaffSalaryGroupModel = new StaffSalaryGroupModel();
        const defaults = new ChemistAssistantSalaryDefaults();

        defaults.setDefaultValues(output, inCentralType);

        return output;
    }

    public static productionCostsDefaults(inCentralType: CentralTypeIdEnum = CentralTypeIdEnum.None): ProductionCostsGroupModel {
        const output: ProductionCostsGroupModel = new ProductionCostsGroupModel();
        const defaults = new ProductionCostsDefaults();

        defaults.setDefaultValues(output, inCentralType);

        return output;
    }

    public static maintenanceCostsDefaults(inCentralType: CentralTypeIdEnum = CentralTypeIdEnum.None): MaintenanceCostsGroupModel {
        const output: MaintenanceCostsGroupModel = new MaintenanceCostsGroupModel();
        const defaults = new MaintenanceCostsDefaults();

        defaults.setDefaultValues(output, inCentralType);

        return output;
    }

    public static sterileWorkEquipmentDefaults(inCentralType: CentralTypeIdEnum): SterileWorkEquipmentGroupModel {
        const output: SterileWorkEquipmentGroupModel = new SterileWorkEquipmentGroupModel();
        const defaults = new SterileWorkEquipmentDefaults();

        defaults.setDefaultValues(output, inCentralType);

        return output;
    }

    public static hygieneAndCleaningDefaults(inCentralType: CentralTypeIdEnum): HygieneAndCleaningGroupModel {
        const output: HygieneAndCleaningGroupModel = new HygieneAndCleaningGroupModel();
        const defaults = new HygieneAndCleaningDefaults();

        defaults.setDefaultValues(output, inCentralType);

        return output;
    }

    public static personalProtectionDefaults(inCentralType: CentralTypeIdEnum): PersonalProtectionGroupModel {
        const output: PersonalProtectionGroupModel = new PersonalProtectionGroupModel();
        const defaults = new PersonalProtectionDefaults();

        defaults.setDefaultValues(output, inCentralType);

        return output;
    }

    public static automatedEquipmentDefaults(): AutomatedEquipmentGroupModel {
        const output: AutomatedEquipmentGroupModel = new AutomatedEquipmentGroupModel();
        const defaults = new AutomatedEquipmentDefaults();

        defaults.setDefaultValues(output, CentralTypeIdEnum.Automatico);

        return output;
    }

    public static rawMaterialsDefaults(inCentralType: CentralTypeIdEnum, inPopulationType: PopulationTypeIdEnum): RawMaterialModel {
        const output: RawMaterialModel = new RawMaterialModel();

        switch (inPopulationType) {
            case PopulationTypeIdEnum.Neonatal:
                const neonatalDefaults = new RawMaterialNeonatalDefaults();
                neonatalDefaults.setDefaultValues(output, inCentralType);
                break
            case PopulationTypeIdEnum.Pediatrica:
                const pediatricDefaults = new RawMaterialPediatricDefaults();
                pediatricDefaults.setDefaultValues(output, inCentralType);
                break
            case PopulationTypeIdEnum.Adulto:
                const adultDefaults = new RawMaterialAdultDefaults();
                adultDefaults.setDefaultValues(output, inCentralType);
                break;
            default:
                throw new Error("No implementado...");
        }

        return output;
    }

    public static mixingCenterSettingsDefaults(): MixingCenterSettingsModel {
        const output: MixingCenterSettingsModel = new MixingCenterSettingsModel();
        const defaults = new MixingCenterSettingsDefaults();

        defaults.setDefaultValues(output, CentralTypeIdEnum.None);

        return output;
    }
}

export default DefaultValuesProvider;