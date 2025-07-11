import BaseLabelModel from "../base/BaseLabelModel";

class AmountItemModel extends BaseLabelModel {
    public value: number;

    constructor(inLabel: string) {
        super(inLabel);
        this.value = 0;
    }
}

export default AmountItemModel;