import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import BasicModel from "../common/BasicModel";
import UnitCostItemModel from "../operating_resources/UnitCostItemModel";

class AutomatedEquipmentModel extends BasicModel {
    public tamperResistantClamps: UnitCostItemModel;
    public setsTransferenciaX6: UnitCostItemModel;
    public setsTransferenciaX9: UnitCostItemModel;

    constructor() {
        super(CentralTypeIdEnum.None);

        this.tamperResistantClamps = new UnitCostItemModel("Tamper-Resistant Clamps");
        this.setsTransferenciaX6 = new UnitCostItemModel("Sets de transferencia universales (x6)");
        this.setsTransferenciaX9 = new UnitCostItemModel("Sets de transferencia universales (x9)");
    }
}

export default AutomatedEquipmentModel;