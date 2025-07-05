

class ResultItemModel {
    public label: string;
    public name: string;
    public valueLeft: number;
    public valueRight: number;
    public symbol: string | null;

    constructor(inLabel: string = "", inName: string = "", inSymbol: string | null = null) {
        this.label = inLabel;
        this.name = inName;
        this.valueLeft = 0;
        this.valueRight = 0;
        this.symbol = inSymbol;
    }
}

export default ResultItemModel;