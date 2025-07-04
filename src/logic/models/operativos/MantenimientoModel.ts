import BasicModel from "../common/BasicModel";
import AmountItemModel from "../common/AmountItemModel";

class MantenimientoModel extends BasicModel {

  public validacionSistemaAire: AmountItemModel; // Validación del sistema de Aire
  public pruebasMicrobiologia: AmountItemModel; // Pruebas de Microbiologia
  public llenadosAsepticosQuimicos: AmountItemModel; //Llenados asepticos Quimicos
  public desafioDesinfectantes: AmountItemModel; // Desafio de Desinfectantes
  public mantenimientoCabinas: AmountItemModel; // Mantenimiento de Cabinas
  public calificacionCabinas: AmountItemModel; // Calificación de Cabinas
  public calibracionManometros: AmountItemModel; // Calibración de manometros de diferenciacion de presion
  public cambiosFiltrosUMA: AmountItemModel; // Cambios de Filtros UMA
  public mantenimientoUMA: AmountItemModel; // Mantenimientos UMA
  public calibracionTermohigrometros: AmountItemModel; // Calibración Termohigrometros
  public mantenimientosLocativosPintura: AmountItemModel; // Mantenimientos Locativos Pintura

  constructor() {
    super();

    this.validacionSistemaAire = new AmountItemModel();
    this.pruebasMicrobiologia = new AmountItemModel();
    this.llenadosAsepticosQuimicos = new AmountItemModel();
    this.desafioDesinfectantes = new AmountItemModel();
    this.mantenimientoCabinas = new AmountItemModel();
    this.calificacionCabinas = new AmountItemModel();
    this.calibracionManometros = new AmountItemModel();
    this.cambiosFiltrosUMA = new AmountItemModel();
    this.mantenimientoUMA = new AmountItemModel();
    this.calibracionTermohigrometros = new AmountItemModel();
    this.mantenimientosLocativosPintura = new AmountItemModel();
  }
}

export default MantenimientoModel;