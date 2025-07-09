import BasicModel from "../common/BasicModel";
import AmountItemModel from "../common/UnitCostItemModel";

class EquipoTrabajoEsterilModel extends BasicModel {
    public jeringas1ml: AmountItemModel;
    public jeringas5ml: AmountItemModel;
    public jeringas10ml: AmountItemModel;
    public jeringas20ml: AmountItemModel;
    public jeringas50ml: AmountItemModel;
    public buretroles: AmountItemModel;
    public compresasEsteriles: AmountItemModel;
    public gasasEsteriles: AmountItemModel;
    public etiquetasIdentificacionBolsas: AmountItemModel;
    public toallasAbsorbentesDesechables: AmountItemModel;
    public contenedoresCortopunzantes: AmountItemModel;
    public agujasEsteriles: AmountItemModel;
    public bolsaRojaBiologicos: AmountItemModel;
    public bolsaNegraNoContaminados: AmountItemModel;
    public boligrafosEtiquetado: AmountItemModel;

    constructor() {
        super();

        this.jeringas1ml = new AmountItemModel();
        this.jeringas5ml = new AmountItemModel();
        this.jeringas10ml = new AmountItemModel();
        this.jeringas20ml = new AmountItemModel();
        this.jeringas50ml = new AmountItemModel();
        this.buretroles = new AmountItemModel();
        this.compresasEsteriles = new AmountItemModel();
        this.gasasEsteriles = new AmountItemModel();
        this.etiquetasIdentificacionBolsas = new AmountItemModel();
        this.toallasAbsorbentesDesechables = new AmountItemModel();
        this.contenedoresCortopunzantes = new AmountItemModel();
        this.agujasEsteriles = new AmountItemModel();
        this.bolsaRojaBiologicos = new AmountItemModel();
        this.bolsaNegraNoContaminados = new AmountItemModel();
        this.boligrafosEtiquetado = new AmountItemModel();
    }
}

export default EquipoTrabajoEsterilModel;