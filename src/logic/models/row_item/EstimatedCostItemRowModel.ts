import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import BaseLabelModel from "../base/BaseLabelModel";
import BaseModel from "../base/BaseModel";

class EstimatedCostItemModel extends BaseModel {
    public valorEstimado: number; // Editable
    public valorUnitario: number; // Calculado
    public exclude: boolean;

    constructor(inLabel: string, inCentralType: CentralTypeIdEnum = CentralTypeIdEnum.None) {
        super(inLabel, inCentralType);
        this.valorEstimado = 0;
        this.valorUnitario = 0;
        this.exclude = false;
    }
}

export default EstimatedCostItemModel;