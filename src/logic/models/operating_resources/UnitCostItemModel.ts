// Antigua Cantidad_UnidadTotalItemModel

import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import BaseModel from "../common/BaseModel";

class UnitCostItemModel extends BaseModel {
    public quantity: number;
    public unitCost: number;
    public totalCost: number;
    public exclude: boolean;

    constructor(inLabel: string, inCentralType: CentralTypeIdEnum = CentralTypeIdEnum.None) {
        super(inLabel, inCentralType);

        this.quantity = 0;
        this.unitCost = 0;
        this.totalCost = 0;
        this.exclude = false;
    }
}

export default UnitCostItemModel;