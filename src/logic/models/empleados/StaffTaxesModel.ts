// Antiguo Salario_PersonalFiscalesModel

import PorcentajeItemModel from "../common/PorcentajeItemModel";
import SalarioBaseModel from "./SalarioBaseModel";

abstract class SalarioFiscalesModel extends SalarioBaseModel {
    public cesantias: PorcentajeItemModel;
    public primas: PorcentajeItemModel;
    public vacaciones: PorcentajeItemModel;
    public interesesCesantias: PorcentajeItemModel;
    public salud: PorcentajeItemModel;
    public pension: PorcentajeItemModel;
    public arlRiesgo1: PorcentajeItemModel;
    public cajaCompensacion: PorcentajeItemModel;
    public sena: PorcentajeItemModel;
    public icbf: PorcentajeItemModel;

    constructor() {
        super();

        this.cesantias = new PorcentajeItemModel("Cesantías");
        this.primas = new PorcentajeItemModel("Primas");
        this.vacaciones = new PorcentajeItemModel("Vacaciones");
        this.interesesCesantias = new PorcentajeItemModel("Intereses de cesantías");
        this.salud = new PorcentajeItemModel("Salud");
        this.pension = new PorcentajeItemModel("Pensión");
        this.arlRiesgo1 = new PorcentajeItemModel("ARL (riesgo I)");
        this.cajaCompensacion = new PorcentajeItemModel("Caja de compensación");
        this.sena = new PorcentajeItemModel("SENA");
        this.icbf = new PorcentajeItemModel("ICBF");
    }
}

export default SalarioFiscalesModel;