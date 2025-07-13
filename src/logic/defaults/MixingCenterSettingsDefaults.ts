//MixingCenterSettings

import CentralTypeIdEnum from "../enums/CentralTypeIdEnum";
import PopulationTypeIdEnum from "../enums/PopulationTypeIdEnum";
import MixingCenterSettingsModel from "../models/common/MixingCenterSettingsModel";
import DefaultsBase from "./DefaultsBase";

class MixingCenterSettingsDefaults extends DefaultsBase<MixingCenterSettingsModel> {

    protected setCommons(inItem: MixingCenterSettingsModel): void {
        inItem.percentPerAdult = 34;
        inItem.percentPerNeonatal = 33;
        inItem.percentPerPediatric = 33;

        inItem.centralType = CentralTypeIdEnum.Manual;
        inItem.populationType = PopulationTypeIdEnum.Adulto;

        inItem.productionPerDay = 10;
        inItem.productionLines = 4;
    }

    protected setExtras(inItem: MixingCenterSettingsModel): void {
    }

    protected setMixingCentral_Manual(inItem: MixingCenterSettingsModel): void {
    }

    protected setMixingCentral_Automatic(inItem: MixingCenterSettingsModel): void {
    }

}

export default MixingCenterSettingsDefaults;