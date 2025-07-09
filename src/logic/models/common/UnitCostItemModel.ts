// Antigua Cantidad_UnidadTotalItemModel

class AmountItemModel {
    public cantidadUnidad: number;
    public costoUnitario: number;
    public costoTotal: number;
    public excluirDelCalculo: boolean;

    constructor() {
        this.cantidadUnidad = 0;
        this.costoUnitario = 0;
        this.costoTotal = 0;
        this.excluirDelCalculo = false;
    }
}

export default AmountItemModel;