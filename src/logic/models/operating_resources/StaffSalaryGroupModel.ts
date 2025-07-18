import AmountItemModel from "../row_item/AmountItemRowModel";
import StaffTaxesModel from "../base/StaffTaxesModel";

class StaffSalaryGroupModel extends StaffTaxesModel {
    public salarioBasico: AmountItemModel;
    public costoEmpresa: AmountItemModel;
    public auxilioTransporte: AmountItemModel;
    public subsidioTransporte: AmountItemModel;

    public totalParafiscales: AmountItemModel;
    public totalCompensacionSalarial: AmountItemModel;
    public totalValorHora: AmountItemModel;

    public horasPersonalFarmaceuticoPorNP: AmountItemModel;
    public costoPersonalFarmaceuticoPorPreparacion: AmountItemModel;

    constructor() {
        super();

        this.salarioBasico = new AmountItemModel("Salario básico");
        this.costoEmpresa = new AmountItemModel("Costo empresa");
        this.auxilioTransporte = new AmountItemModel("Auxilio de transporte");
        this.subsidioTransporte = new AmountItemModel("Subsidio de transporte");
        this.totalParafiscales = new AmountItemModel("Total aportes parafiscales");
        this.totalCompensacionSalarial = new AmountItemModel("Total compensación salarial");
        this.totalValorHora = new AmountItemModel("Valor total por hora");
        this.horasPersonalFarmaceuticoPorNP = new AmountItemModel("Horas de personal farmacéutico para 1 nutrición parenteral"); // Es una constante 0.36
        this.costoPersonalFarmaceuticoPorPreparacion = new AmountItemModel("Costo por personal farmacéutico requerido para preparación");
    }
}

export default StaffSalaryGroupModel;