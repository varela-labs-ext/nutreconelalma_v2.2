import BasicModel from "../common/BasicModel";
import AmountItemModel from "../common/UnitCostItemModel";

class MaterialesProteccionModel extends BasicModel {
    public guantesEsterilesDesechables: AmountItemModel;
    public bataEsterilUnUso: AmountItemModel;
    public gorroDesechable: AmountItemModel;
    public mascarillaQuirurgica: AmountItemModel;
    public cubrezapatosDesechables: AmountItemModel;

    constructor() {
        super();

        this.guantesEsterilesDesechables = new AmountItemModel();
        this.bataEsterilUnUso = new AmountItemModel();
        this.gorroDesechable = new AmountItemModel();
        this.mascarillaQuirurgica = new AmountItemModel();
        this.cubrezapatosDesechables = new AmountItemModel();
    }
}

export default MaterialesProteccionModel;