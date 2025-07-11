import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import BasicModel from "../common/BasicModel";
import UnitCostItemModel from "../operating_resources/UnitCostItemModel";

class MaterialesProteccionModel extends BasicModel {
    public guantesEsterilesDesechables: UnitCostItemModel;
    public bataEsterilUnUso: UnitCostItemModel;
    public gorroDesechable: UnitCostItemModel;
    public mascarillaQuirurgica: UnitCostItemModel;
    public cubrezapatosDesechables: UnitCostItemModel;

    constructor() {
        super(CentralTypeIdEnum.None);

        this.guantesEsterilesDesechables = new UnitCostItemModel("Guantes estériles desechables (par)");
        this.bataEsterilUnUso = new UnitCostItemModel("Bata estéril de un solo uso");
        this.gorroDesechable = new UnitCostItemModel("Gorro desechable");
        this.mascarillaQuirurgica = new UnitCostItemModel("Mascarilla quirúrgica");
        this.cubrezapatosDesechables = new UnitCostItemModel("Cubrezapatos desechables");
    }
}

export default MaterialesProteccionModel;