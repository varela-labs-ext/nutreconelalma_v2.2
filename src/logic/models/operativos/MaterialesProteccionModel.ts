import BasicModel from "../common/BasicModel";
import UnitCostItemModel from "../common/UnitCostItemModel";

class MaterialesProteccionModel extends BasicModel {
    public guantesEsterilesDesechables: UnitCostItemModel;
    public bataEsterilUnUso: UnitCostItemModel;
    public gorroDesechable: UnitCostItemModel;
    public mascarillaQuirurgica: UnitCostItemModel;
    public cubrezapatosDesechables: UnitCostItemModel;

    constructor() {
        super();

        this.guantesEsterilesDesechables = new UnitCostItemModel();
        this.bataEsterilUnUso = new UnitCostItemModel();
        this.gorroDesechable = new UnitCostItemModel();
        this.mascarillaQuirurgica = new UnitCostItemModel();
        this.cubrezapatosDesechables = new UnitCostItemModel();
    }
}

export default MaterialesProteccionModel;