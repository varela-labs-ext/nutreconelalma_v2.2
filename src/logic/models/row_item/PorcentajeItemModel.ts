import BaseLabelModel from "../base/BaseLabelModel";

class PorcentajeItemModel extends BaseLabelModel {
    public percentage: number;
    public value: number;

    constructor(inLabel: string) {
        super(inLabel);
        this.percentage = 0;
        this.value = 0;
    }
}

export default PorcentajeItemModel;