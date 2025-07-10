import AmountItemModel from "../common/AmountItemModel";
import SalarioFiscalesModel from "./SalarioFiscalesModel";

class SalarioPersonalModel extends SalarioFiscalesModel {
    public salarioBasico: AmountItemModel;
    public costoEmpresa: AmountItemModel;
    public auxilioTransporte: AmountItemModel;
    public subsidioTransporte: AmountItemModel;
    public totalParafiscales: AmountItemModel;
    public totalCompensacionSalarial: AmountItemModel;
    public totalValorHora: AmountItemModel;

    constructor() {
        super();

        this.salarioBasico = new AmountItemModel("Salario básico");
        this.costoEmpresa = new AmountItemModel("Costo empresa");
        this.auxilioTransporte = new AmountItemModel("Auxilio de transporte");
        this.subsidioTransporte = new AmountItemModel("Subsidio de transporte");
        this.totalParafiscales = new AmountItemModel("Total aportes parafiscales");
        this.totalCompensacionSalarial = new AmountItemModel("Total compensación salarial");
        this.totalValorHora = new AmountItemModel("Valor hora");
    }
}

export default SalarioPersonalModel;