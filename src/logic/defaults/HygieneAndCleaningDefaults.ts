import HygieneAndCleaningGroupModel from "../models/operating_resources/HygieneAndCleaningGroupModel";
import DefaultsBase from "./DefaultsBase";

class HygieneAndCleaningDefaults extends DefaultsBase<HygieneAndCleaningGroupModel> {
    protected setCommons(inItem: HygieneAndCleaningGroupModel): void {
        inItem.total.value = 0;
    }

    protected setExtras(inItem: HygieneAndCleaningGroupModel): void {
    }

    protected setMixingCentral_Manual(inItem: HygieneAndCleaningGroupModel): void {
        this.setUnitCostItem(inItem.solucionAntisepticaManos, 0.08, 9000.00);
        this.setUnitCostItem(inItem.panosEsterilesSuperficies, 0.10, 1000.00);
        this.setUnitCostItem(inItem.alcohol70, 0.15, 1200.00);
        this.setUnitCostItem(inItem.detergentes, (1 / 200), 70479.00);
        this.setUnitCostItem(inItem.desinfectantes, (1 / 200), 55000.00);
    }

    protected setMixingCentral_Automatic(inItem: HygieneAndCleaningGroupModel): void {
        this.setUnitCostItem(inItem.solucionAntisepticaManos, 0, 9000.00);
        this.setUnitCostItem(inItem.panosEsterilesSuperficies, 1.00, 1000.00);
        this.setUnitCostItem(inItem.alcohol70, 0, 1200.00);
        this.setUnitCostItem(inItem.peroxidoHidrogenoAcelerado, (1 / 200), 70479.00);
        this.setUnitCostItem(inItem.cloruroBenzalconio, (1 / 200), 55000.00);
    }
}

export default HygieneAndCleaningDefaults;