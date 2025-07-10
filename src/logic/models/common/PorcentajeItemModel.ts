// Antiguo Para_FiscalesItemModel

import LabelBasicModel from "./LabelBasicModel";

class PorcentajeItemModel extends LabelBasicModel {
    public percentage: number;
    public value: number;

    constructor(inLabel: string) {
        super(inLabel);
        this.percentage = 0;
        this.value = 0;
    }
}

export default PorcentajeItemModel;