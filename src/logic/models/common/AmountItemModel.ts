import LabelBasicModel from "./LabelBasicModel";

class AmountItemModel extends LabelBasicModel {
    public value: number;

    constructor(inLabel: string) {
        super(inLabel, "AmountItem");
        this.value = 0;
    }
}

export default AmountItemModel;