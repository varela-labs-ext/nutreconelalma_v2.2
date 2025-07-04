class EstimatedCalcItemModel {
    public valorEstimado: number; // Editable
    public valorUnitario: number; // Calculado
    public excluirDelCalculo: boolean;

    constructor() {
        this.valorEstimado = 0;
        this.valorUnitario = 0;
        this.excluirDelCalculo = false;
    }
}

export default EstimatedCalcItemModel;