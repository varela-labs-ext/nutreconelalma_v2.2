class LabelBasicModel {
    public label: string;
    public internalType: string;

    constructor(inLabel: string, inType: string) {
        this.label = `${inLabel}:`;
        this.internalType = inType;
    }
}

export default LabelBasicModel;