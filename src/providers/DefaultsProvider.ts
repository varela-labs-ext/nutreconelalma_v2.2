import ComputerBigGroupModel from "@/logic/models/ComputerBigGroupModel";
import DefaultValuesProvider from "./DefaultValuesProvider";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import { deepClone } from "@/utils/objectUtils";
import MixingCenterOperatingResourcesModel from "@/logic/models/MixingCenterOperatingResourcesModel";
import MixingCenterRawMaterialsModel from "@/logic/models/MixingCenterRawMaterialsModel";
import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";


class DefaultsProvider {
    public static getDefaultsForBigGroupData(): ComputerBigGroupModel {
        const output: ComputerBigGroupModel = new ComputerBigGroupModel();

        const _mixingCenterSettings = DefaultValuesProvider.mixingCenterSettingsDefaults();
        const _productionLines: number = _mixingCenterSettings.productionLines;
        const _productionPerMonth: number = (_mixingCenterSettings.productionPerDay * 30);

        output.mixingCenterSettings = deepClone(_mixingCenterSettings);

        output.backup_MC_Manual_Resources = DefaultsProvider.getDefaultsForResources(CentralTypeIdEnum.Manual, _productionLines, _productionPerMonth);
        output.backup_MC_Automatic_Resources = DefaultsProvider.getDefaultsForResources(CentralTypeIdEnum.Automatico, _productionLines, _productionPerMonth);

        output.backup_MC_Manual_RawMaterials = DefaultsProvider.getDefaultsForRawMaterials(CentralTypeIdEnum.Manual);
        output.backup_MC_Automatic_RawMaterials = DefaultsProvider.getDefaultsForRawMaterials(CentralTypeIdEnum.Automatico);

        return output;
    }

    public static getDefaultsForRawMaterials(inCentralType: CentralTypeIdEnum): MixingCenterRawMaterialsModel {
        const output: MixingCenterRawMaterialsModel = new MixingCenterRawMaterialsModel();

        output.adultoRawMaterial = deepClone(DefaultValuesProvider.rawMaterialsDefaults(inCentralType, PopulationTypeIdEnum.Adulto));
        output.neonatalRawMaterial = deepClone(DefaultValuesProvider.rawMaterialsDefaults(inCentralType, PopulationTypeIdEnum.Neonatal));
        output.pediatricoRawMaterial = deepClone(DefaultValuesProvider.rawMaterialsDefaults(inCentralType, PopulationTypeIdEnum.Pediatrica));

        return output;
    }

    public static getDefaultsForResources(
        inCentralType: CentralTypeIdEnum,
        inProductionLines: number,
        inProductionPerMonth: number): MixingCenterOperatingResourcesModel {

        const output: MixingCenterOperatingResourcesModel = new MixingCenterOperatingResourcesModel();

        output.automatedEquipment = deepClone(DefaultValuesProvider.automatedEquipmentDefaults());
        output.hygieneAndCleaning = deepClone(DefaultValuesProvider.hygieneAndCleaningDefaults(inCentralType));
        output.personalProtection = deepClone(DefaultValuesProvider.personalProtectionDefaults(inCentralType));
        output.sterileWorkEquipment = deepClone(DefaultValuesProvider.sterileWorkEquipmentDefaults(inCentralType));
        output.maintenanceCosts = deepClone(DefaultValuesProvider.maintenanceCostsDefaults(inCentralType, inProductionLines, inProductionPerMonth));
        output.productionCosts = deepClone(DefaultValuesProvider.productionCostsDefaults(inCentralType, inProductionLines, inProductionPerMonth));
        output.staffChemistSalary = deepClone(DefaultValuesProvider.chemistSalaryDefaults(inCentralType));
        output.staffAssistantSalary = deepClone(DefaultValuesProvider.chemistAssistantSalaryDefaults(inCentralType));

        return output;
    }
}

export default DefaultsProvider;