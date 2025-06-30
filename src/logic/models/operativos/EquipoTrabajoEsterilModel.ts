import BasicModel from "../common/BasicModel";
import CantidadItemModel from "../common/CantidadItemModel";

class EquipoTrabajoEsterilModel extends BasicModel {
  public jeringas1ml: CantidadItemModel;
  public jeringas5ml: CantidadItemModel;
  public jeringas10ml: CantidadItemModel;
  public jeringas20ml: CantidadItemModel;
  public jeringas50ml: CantidadItemModel;
  public buretroles: CantidadItemModel;
  public compresasEsteriles: CantidadItemModel;
  public gasasEsteriles: CantidadItemModel;
  public etiquetasIdentificacionBolsas: CantidadItemModel;
  public toallasAbsorbentesDesechables: CantidadItemModel;
  public contenedoresCortopunzantes: CantidadItemModel;
  public agujasEsteriles: CantidadItemModel;
  public bolsaRojaBiologicos: CantidadItemModel;
  public bolsaNegraNoContaminados: CantidadItemModel;
  public boligrafosEtiquetado: CantidadItemModel;

  constructor() {
    super();

    this.jeringas1ml = new CantidadItemModel();
    this.jeringas5ml = new CantidadItemModel();
    this.jeringas10ml = new CantidadItemModel();
    this.jeringas20ml = new CantidadItemModel();
    this.jeringas50ml = new CantidadItemModel();
    this.buretroles = new CantidadItemModel();
    this.compresasEsteriles = new CantidadItemModel();
    this.gasasEsteriles = new CantidadItemModel();
    this.etiquetasIdentificacionBolsas = new CantidadItemModel();
    this.toallasAbsorbentesDesechables = new CantidadItemModel();
    this.contenedoresCortopunzantes = new CantidadItemModel();
    this.agujasEsteriles = new CantidadItemModel();
    this.bolsaRojaBiologicos = new CantidadItemModel();
    this.bolsaNegraNoContaminados = new CantidadItemModel();
    this.boligrafosEtiquetado = new CantidadItemModel();
  }
}

export default EquipoTrabajoEsterilModel;