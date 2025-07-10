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

        this.validacionSistemaAire = new UnitCostItemModel();
        this.pruebasMicrobiologia = new UnitCostItemModel();
        this.llenadosAsepticosQuimicos = new UnitCostItemModel();
        this.desafioDesinfectantes = new UnitCostItemModel();
        this.mantenimientoCabinas = new UnitCostItemModel();
        this.calificacionCabinas = new UnitCostItemModel();
        this.calibracionManometros = new UnitCostItemModel();
        this.cambiosFiltrosUMA = new UnitCostItemModel();
        this.mantenimientoUMA = new UnitCostItemModel();
        this.calibracionTermohigrometros = new UnitCostItemModel();
        this.mantenimientosLocativosPintura = new UnitCostItemModel();
    }
}

export default MaintenanceCostsModel;