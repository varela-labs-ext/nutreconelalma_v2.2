import CentralTypeIdEnum from "../enums/CentralTypeIdEnum";
import ProductionCostsGroupModel from "../models/operating_resources/ProductionCostsGroupModel";
import DefaultsBase from "./DefaultsBase";

class ProductionCostsDefaults extends DefaultsBase<ProductionCostsGroupModel> {

    public setDefaultValuesB(inItem: ProductionCostsGroupModel, inCentralType: CentralTypeIdEnum): void {
        this.setDefaultValues(inItem, inCentralType);
    }

    protected setCommons(inItem: ProductionCostsGroupModel): void {
        inItem.total.value = 0;
    }

    protected setExtras(inItem: ProductionCostsGroupModel): void {
    }

    protected setMixingCentral_Manual(inItem: ProductionCostsGroupModel): void {
        this.setEstimatedCostItem(inItem.aguaM3, 2388262.00, 0);
        this.setEstimatedCostItem(inItem.depreciacionCabinaFlujoLaminar, 63000.00, 0);
        this.setEstimatedCostItem(inItem.luzKw, 6775276.50, 0);
        this.setEstimatedCostItem(inItem.manoObraIndirecta, 4783964.40, 0);
        this.setEstimatedCostItem(inItem.telefoniaInternetAdmin, 6688.00, 0);
    }

    protected setMixingCentral_Automatic(inItem: ProductionCostsGroupModel): void {
        this.setMixingCentral_Manual(inItem);
    }
}

export default ProductionCostsDefaults;