// Antiguo Salario_PersonalBaseModel

abstract class SalarioBaseModel {
    public horasTrabajoMensual: number;
    public personalPreparacion: number;

    constructor() {
        this.horasTrabajoMensual = 0;
        this.personalPreparacion = 0;
    }
}

export default SalarioBaseModel;