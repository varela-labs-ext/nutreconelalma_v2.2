import BasicModel from "../common/BasicModel";
import BasicOperationalModel from "../common/BasicOperationalModel";
import UnitCostItemModel from "../common/UnitCostItemModel";

class MaintenanceCostsModel extends BasicOperationalModel {

    public validacionSistemaAire: UnitCostItemModel; // Validación del sistema de Aire
    public pruebasMicrobiologia: UnitCostItemModel; // Pruebas de Microbiologia
    public llenadosAsepticosQuimicos: UnitCostItemModel; //Llenados asepticos Quimicos
    public desafioDesinfectantes: UnitCostItemModel; // Desafio de Desinfectantes
    public mantenimientoCabinas: UnitCostItemModel; // Mantenimiento de Cabinas
    public calificacionCabinas: UnitCostItemModel; // Calificación de Cabinas
    public calibracionManometros: UnitCostItemModel; // Calibración de manometros de diferenciacion de presion
    public cambiosFiltrosUMA: UnitCostItemModel; // Cambios de Filtros UMA
    public mantenimientoUMA: UnitCostItemModel; // Mantenimientos UMA
    public calibracionTermohigrometros: UnitCostItemModel; // Calibración Termohigrometros
    public mantenimientosLocativosPintura: UnitCostItemModel; // Mantenimientos Locativos Pintura

    constructor() {
        super();

        this.validacionSistemaAire = new UnitCostItemModel("Validación del sistema de aire");
        this.pruebasMicrobiologia = new UnitCostItemModel("Pruebas de microbiología");
        this.llenadosAsepticosQuimicos = new UnitCostItemModel("Llenados asépticos químicos");
        this.desafioDesinfectantes = new UnitCostItemModel("Desafío de desinfectantes");
        this.mantenimientoCabinas = new UnitCostItemModel("Mantenimiento de cabinas");
        this.calificacionCabinas = new UnitCostItemModel("Calificación de cabinas");
        this.calibracionManometros = new UnitCostItemModel("Calibración de manómetros de diferenciación de presión");
        this.cambiosFiltrosUMA = new UnitCostItemModel("Cambios de filtros UMA");
        this.mantenimientoUMA = new UnitCostItemModel("Mantenimientos UMA");
        this.calibracionTermohigrometros = new UnitCostItemModel("Calibración de termohigrómetros");
        this.mantenimientosLocativosPintura = new UnitCostItemModel("Mantenimientos locativos: pintura");
    }
}

export default MaintenanceCostsModel;