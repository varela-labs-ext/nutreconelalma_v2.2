// Antigua Cantidad_UnidadTotalItemModel

import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import BasicModel from "./BasicModel";

class UnitCostItemModel extends BasicModel {
    public quantity: number;
    public unitCost: number;
    public totalCost: number;
    public exclude: boolean;
    public label: string;

    constructor(inLabel: string, inCentralType: CentralTypeIdEnum = CentralTypeIdEnum.None) {
        super(inCentralType);

        this.quantity = 0;
        this.unitCost = 0;
        this.totalCost = 0;
        this.exclude = false;
        this.label = `${inLabel}:`;
    }
}

export default UnitCostItemModel;