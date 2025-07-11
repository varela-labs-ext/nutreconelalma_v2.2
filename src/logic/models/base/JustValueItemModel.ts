import BaseLabelModel from "./BaseLabelModel";

class JustValueItemModel extends BaseLabelModel {
    public value: number;

    constructor(inLabel: string) {
        super(inLabel);
        this.value = 0;
    }
}

export default JustValueItemModel;