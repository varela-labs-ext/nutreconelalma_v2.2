import UnitCostItemModel from "../row_item/UnitCostItemRowModel";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import BaseModel from "../base/BaseModel";
import AmountItemModel from "../row_item/AmountItemRowModel";

class MaintenanceCostsGroupModel extends BaseModel {

    public validacionSistemaAire: UnitCostItemModel;
    public pruebasMicrobiologia: UnitCostItemModel;
    public llenadosAsepticosQuimicos: UnitCostItemModel;
    public desafioDesinfectantes: UnitCostItemModel;
    public mantenimientoCabinas: UnitCostItemModel;
    public calificacionCabinas: UnitCostItemModel;
    public calibracionManometros: UnitCostItemModel;
    public cambiosFiltrosUMA: UnitCostItemModel;
    public mantenimientoUMA: UnitCostItemModel;
    public calibracionTermohigrometros: UnitCostItemModel;
    public mantenimientosLocativosPintura: UnitCostItemModel;
    public total: AmountItemModel;
    public costoMensual: AmountItemModel;
    public costoLineaProduccion: AmountItemModel;
    public costoNpt: AmountItemModel;

    constructor() {
        super("", CentralTypeIdEnum.None);

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
        this.total = new AmountItemModel("Total");
        this.costoMensual = new AmountItemModel("Costo Mensual");
        this.costoLineaProduccion = new AmountItemModel("Costo por linea de producción");
        this.costoNpt = new AmountItemModel("Costos por NPT");
    }
}

export default MaintenanceCostsGroupModel;