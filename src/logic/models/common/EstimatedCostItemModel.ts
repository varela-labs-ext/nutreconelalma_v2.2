class EstimatedCostItemModel {
    public valorEstimado: number; // Editable
    public valorUnitario: number; // Calculado
    public exclude: boolean;
    public label: string;

    constructor(inLabel: string) {
        this.valorEstimado = 0;
        this.valorUnitario = 0;
        this.exclude = false;
        this.label = inLabel;
    }
}

export default EstimatedCostItemModel;