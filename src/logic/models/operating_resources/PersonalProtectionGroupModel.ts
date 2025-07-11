import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import UnitCostItemModel from "../row_item/UnitCostItemModel";
import BaseModel from "../base/BaseModel";
import AmountItemModel from "../row_item/AmountItemModel";

class MaterialesProteccionModel extends BaseModel {
    public guantesEsterilesDesechables: UnitCostItemModel;
    public bataEsterilUnUso: UnitCostItemModel;
    public gorroDesechable: UnitCostItemModel;
    public mascarillaQuirurgica: UnitCostItemModel;
    public cubrezapatosDesechables: UnitCostItemModel;

    public total: AmountItemModel;

    constructor() {
        super("", CentralTypeIdEnum.None);

        this.guantesEsterilesDesechables = new UnitCostItemModel("Guantes estériles desechables (par)");
        this.bataEsterilUnUso = new UnitCostItemModel("Bata estéril de un solo uso");
        this.gorroDesechable = new UnitCostItemModel("Gorro desechable");
        this.mascarillaQuirurgica = new UnitCostItemModel("Mascarilla quirúrgica");
        this.cubrezapatosDesechables = new UnitCostItemModel("Cubrezapatos desechables");

        this.total = new AmountItemModel("Total");
    }
}

export default MaterialesProteccionModel;