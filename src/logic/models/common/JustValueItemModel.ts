import LabelBasicModel from "./LabelBasicModel";

class JustValueItemModel extends LabelBasicModel {
    public value: number;

    constructor(inLabel: string) {
        super(inLabel);
        this.value = 0;
    }
}

export default JustValueItemModel;