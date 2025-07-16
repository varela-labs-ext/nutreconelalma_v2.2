import MixingCenterSettingsModel from "./common/MixingCenterSettingsModel";
import MixingCenterOperatingResourcesModel from "./MixingCenterOperatingResourcesModel";
import MixingCenterRawMaterialsModel from "./MixingCenterRawMaterialsModel";

class ComputerBigGroupModel {

    public mixingCenterSettings: MixingCenterSettingsModel | null;

    public backup_MC_Manual_RawMaterials: MixingCenterRawMaterialsModel | null;
    public backup_MC_Automatic_RawMaterials: MixingCenterRawMaterialsModel | null;

    public backup_MC_Manual_Resources: MixingCenterOperatingResourcesModel | null;
    public backup_MC_Automatic_Resources: MixingCenterOperatingResourcesModel | null;

    constructor() {
        this.mixingCenterSettings = null;

        this.backup_MC_Manual_RawMaterials = null;
        this.backup_MC_Automatic_RawMaterials = null;

        this.backup_MC_Manual_Resources = null;
        this.backup_MC_Automatic_Resources = null;
    }
}

export default ComputerBigGroupModel;