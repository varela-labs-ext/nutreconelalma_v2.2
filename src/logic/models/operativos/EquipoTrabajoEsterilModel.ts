import BasicModel from "../common/BasicModel";
import UnitCostItemModel from "../common/UnitCostItemModel";

class EquipoTrabajoEsterilModel extends BasicModel {
    public jeringas1ml: UnitCostItemModel;
    public jeringas5ml: UnitCostItemModel;
    public jeringas10ml: UnitCostItemModel;
    public jeringas20ml: UnitCostItemModel;
    public jeringas50ml: UnitCostItemModel;
    public buretroles: UnitCostItemModel;
    public compresasEsteriles: UnitCostItemModel;
    public gasasEsteriles: UnitCostItemModel;
    public etiquetasIdentificacionBolsas: UnitCostItemModel;
    public toallasAbsorbentesDesechables: UnitCostItemModel;
    public contenedoresCortopunzantes: UnitCostItemModel;
    public agujasEsteriles: UnitCostItemModel;
    public bolsaRojaBiologicos: UnitCostItemModel;
    public bolsaNegraNoContaminados: UnitCostItemModel;
    public boligrafosEtiquetado: UnitCostItemModel;

    constructor() {
        super();

        this.jeringas1ml = new UnitCostItemModel();
        this.jeringas5ml = new UnitCostItemModel();
        this.jeringas10ml = new UnitCostItemModel();
        this.jeringas20ml = new UnitCostItemModel();
        this.jeringas50ml = new UnitCostItemModel();
        this.buretroles = new UnitCostItemModel();
        this.compresasEsteriles = new UnitCostItemModel();
        this.gasasEsteriles = new UnitCostItemModel();
        this.etiquetasIdentificacionBolsas = new UnitCostItemModel();
        this.toallasAbsorbentesDesechables = new UnitCostItemModel();
        this.contenedoresCortopunzantes = new UnitCostItemModel();
        this.agujasEsteriles = new UnitCostItemModel();
        this.bolsaRojaBiologicos = new UnitCostItemModel();
        this.bolsaNegraNoContaminados = new UnitCostItemModel();
        this.boligrafosEtiquetado = new UnitCostItemModel();
    }
}

export default EquipoTrabajoEsterilModel;