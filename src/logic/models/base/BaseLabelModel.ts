
abstract class BaseLabelModel {
    public label: string;

    constructor(inLabel: string) {
        this.label = `${inLabel} :`;
    }
}

export default BaseLabelModel;