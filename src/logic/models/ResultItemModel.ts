import BaseLabelModel from "./base/BaseLabelModel";
class ResultItemModel extends BaseLabelModel {
    public valueNptManual: number;
    public valueNptAutomatic: number;
    public symbol: string | null;

    constructor(inLabel: string, inSymbol: string | null) {
        super(inLabel);

        this.valueNptManual = 0;
        this.valueNptAutomatic = 0;
        this.symbol = inSymbol;
    }
}

export default ResultItemModel;