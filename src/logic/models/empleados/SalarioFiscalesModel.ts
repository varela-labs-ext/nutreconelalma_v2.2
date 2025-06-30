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

        this.cesantias = new PorcentajeItemModel();
        this.primas = new PorcentajeItemModel();
        this.vacaciones = new PorcentajeItemModel();
        this.interesesCesantias = new PorcentajeItemModel();
        this.salud = new PorcentajeItemModel();
        this.pension = new PorcentajeItemModel();
        this.arlRiesgo1 = new PorcentajeItemModel();
        this.cajaCompensacion = new PorcentajeItemModel();
        this.sena = new PorcentajeItemModel();
        this.icbf = new PorcentajeItemModel();
    }
}

export default SalarioFiscalesModel;