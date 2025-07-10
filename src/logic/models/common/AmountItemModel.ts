
class AmountItemModel {
    public valor: number;
    public label: string;

    constructor(inLabel: string) {
        this.valor = 0;
        this.label = `${inLabel}:`;
    }
}

export default AmountItemModel;