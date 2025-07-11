import LabelBasicModel from "./LabelBasicModel";

class AmountItemModel extends LabelBasicModel {
    public value: number;

    constructor(inLabel: string) {
        super(inLabel);
        this.value = 0;
    }
}

export default AmountItemModel;