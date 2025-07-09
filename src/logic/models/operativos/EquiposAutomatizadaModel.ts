import BasicModel from "../common/BasicModel";
import AmountItemModel from "../common/UnitCostItemModel";

class EquiposAutomatizadaModel extends BasicModel {
    public tamperResistantClamps: AmountItemModel;
    public setsTransferenciaX6: AmountItemModel;
    public setsTransferenciaX9: AmountItemModel;

    constructor() {
        super();

        this.tamperResistantClamps = new AmountItemModel();
        this.setsTransferenciaX6 = new AmountItemModel();
        this.setsTransferenciaX9 = new AmountItemModel();
    }
}

export default EquiposAutomatizadaModel;