import AutomatedEquipmentGroupModel from "../models/operating_resources/AutomatedEquipmentGroupModel";
import DefaultsBase from "./DefaultsBase";

class AutomatedEquipmentDefaults extends DefaultsBase<AutomatedEquipmentGroupModel> {
    protected setCommons(inItem: AutomatedEquipmentGroupModel): void {
        inItem.total.value = 0;
    }

    protected setExtras(inItem: AutomatedEquipmentGroupModel): void {
    }

    protected setMixingCentral_Manual(inItem: AutomatedEquipmentGroupModel): void {
    }

    protected setMixingCentral_Automatic(inItem: AutomatedEquipmentGroupModel): void {
        this.setUnitCostItem(inItem.tamperResistantClamps, 1.00, 1000.00);
        this.setUnitCostItem(inItem.setsTransferenciaX6, 0, 290000.00);
        this.setUnitCostItem(inItem.setsTransferenciaX9, 0, 343000.00);
    }
}

export default AutomatedEquipmentDefaults;