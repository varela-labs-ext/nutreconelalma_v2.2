// Antiguo Salario_PersonalBaseModel

import JustValueItemModel from "../base/JustValueItemModel";

abstract class StaffBaseModel {
    public horasTrabajoMensual: JustValueItemModel;
    public personalPreparacion: JustValueItemModel;

    constructor() {
        this.horasTrabajoMensual = new JustValueItemModel("Horas de trabajo al mes");
        this.personalPreparacion = new JustValueItemModel("Personal requerido para preparación");
    }
}

export default StaffBaseModel;