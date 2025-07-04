class ClinicaInputModel {
    public presentacionMl: number; // Editable
    public cantidadMl: number; // Editable
    public cantidadUnidad: number; // Editable
    public costoPorMl: number; // Calculado
    public costoPorUnidad: number; // Editable
    public costoTotalPorUnidad: number; // Calculado
    public label: string;
    public excluirDelCalculo: boolean;

    constructor(inLabel: string) {
        this.excluirDelCalculo = true; // La idea es que todos se excluyan por defecto. Y al momento de usar el factory, justo ahí se definen los que estaran dentro del calculo final.
        this.label = inLabel;
        this.presentacionMl = 0;
        this.cantidadMl = 0;
        this.cantidadUnidad = 0;
        this.costoPorMl = 0;
        this.costoPorUnidad = 0;
        this.costoTotalPorUnidad = 0;
    }
}

export default ClinicaInputModel;