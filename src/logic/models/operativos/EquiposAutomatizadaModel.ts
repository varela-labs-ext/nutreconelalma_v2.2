import BasicModel from "../common/BasicModel";
import UnitCostItemModel from "../common/UnitCostItemModel";

class EquiposAutomatizadaModel extends BasicModel {
    public tamperResistantClamps: UnitCostItemModel;
    public setsTransferenciaX6: UnitCostItemModel;
    public setsTransferenciaX9: UnitCostItemModel;

    constructor() {
        super();

        this.tamperResistantClamps = new UnitCostItemModel();
        this.setsTransferenciaX6 = new UnitCostItemModel();
        this.setsTransferenciaX9 = new UnitCostItemModel();
    }
}

export default EquiposAutomatizadaModel;