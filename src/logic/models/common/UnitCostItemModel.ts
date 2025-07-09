// Antigua Cantidad_UnidadTotalItemModel

class UnitCostItemModel {
    public quantity: number;
    public unitCost: number;
    public totalCost: number;
    public exclude: boolean;
    public label: string;

    constructor(inLabel: string = "TODO") {
        this.quantity = 0;
        this.unitCost = 0;
        this.totalCost = 0;
        this.exclude = false;
        this.label = inLabel;
    }
}

export default UnitCostItemModel;