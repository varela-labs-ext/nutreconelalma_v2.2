import BasicModel from "../common/BasicModel";
import CantidadItemModel from "../common/CantidadItemModel";

class MantenimientoModel extends BasicModel {

  public validacionSistemaAire: CantidadItemModel; // Validación del sistema de Aire
  public pruebasMicrobiologia: CantidadItemModel; // Pruebas de Microbiologia
  public llenadosAsepticosQuimicos: CantidadItemModel; //Llenados asepticos Quimicos
  public desafioDesinfectantes: CantidadItemModel; // Desafio de Desinfectantes
  public mantenimientoCabinas: CantidadItemModel; // Mantenimiento de Cabinas
  public calificacionCabinas: CantidadItemModel; // Calificación de Cabinas
  public calibracionManometros: CantidadItemModel; // Calibración de manometros de diferenciacion de presion
  public cambiosFiltrosUMA: CantidadItemModel; // Cambios de Filtros UMA
  public mantenimientoUMA: CantidadItemModel; // Mantenimientos UMA
  public calibracionTermohigrometros: CantidadItemModel; // Calibración Termohigrometros
  public mantenimientosLocativosPintura: CantidadItemModel; // Mantenimientos Locativos Pintura

  constructor() {
    super();

    this.validacionSistemaAire = new CantidadItemModel();
    this.pruebasMicrobiologia = new CantidadItemModel();
    this.llenadosAsepticosQuimicos = new CantidadItemModel();
    this.desafioDesinfectantes = new CantidadItemModel();
    this.mantenimientoCabinas = new CantidadItemModel();
    this.calificacionCabinas = new CantidadItemModel();
    this.calibracionManometros = new CantidadItemModel();
    this.cambiosFiltrosUMA = new CantidadItemModel();
    this.mantenimientoUMA = new CantidadItemModel();
    this.calibracionTermohigrometros = new CantidadItemModel();
    this.mantenimientosLocativosPintura = new CantidadItemModel();
  }
}

export default MantenimientoModel;