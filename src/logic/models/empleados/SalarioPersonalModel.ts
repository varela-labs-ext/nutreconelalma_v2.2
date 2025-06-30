import SalarioFiscalesModel from "./SalarioFiscalesModel";

class SalarioPersonalModel extends SalarioFiscalesModel {
    public salarioBasico: number;
    public costoEmpresa: number;
    public auxilioTransporte: number;
    public subsidioTransporte: number;
    public totalParafiscales: number;
    public totalCompensacionSalarial: number;
    public totalValorHora: number;

    constructor() {
        super();

        this.salarioBasico = 0;
        this.costoEmpresa = 0;
        this.auxilioTransporte = 0;
        this.subsidioTransporte = 0;
        this.totalParafiscales = 0;
        this.totalCompensacionSalarial = 0;
        this.totalValorHora = 0;
    }
}

export default SalarioPersonalModel;