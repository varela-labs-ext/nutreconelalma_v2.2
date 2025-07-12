
import MaintenanceCostsGroupModel from "../models/operating_resources/MaintenanceCostsGroupModel";
import TotalesStarterBase from "./TotalesStarterBase";

class CostosMantenimientoStarter extends TotalesStarterBase<MaintenanceCostsGroupModel> {

    protected iniciarComunes(inItem: MaintenanceCostsGroupModel): void {
        inItem.total.value = 0;

        // inItem.costoMensual = 0
        // inItem.costoPorLineaProduccion = 0;
        // inItem.costosPorNPT = 0;
    }

    protected iniciarCentralManual(inItem: MaintenanceCostsGroupModel): void {
        this.iniciarItem(inItem.calibracionManometros, 10.00, 400000.00);
        this.iniciarItem(inItem.calibracionTermohigrometros, 5.0, 400000.00);
        this.iniciarItem(inItem.calificacionCabinas, 3, 2500000.00);
        this.iniciarItem(inItem.cambiosFiltrosUMA, 1.00, 5000000.00);
        this.iniciarItem(inItem.desafioDesinfectantes, 1.00, 1000000.00);
        this.iniciarItem(inItem.llenadosAsepticosQuimicos, 6.00, 1000000.00);
        this.iniciarItem(inItem.mantenimientoCabinas, 6.00, 2000000.00);
        this.iniciarItem(inItem.mantenimientosLocativosPintura, 1.00, 10000000.00);
        this.iniciarItem(inItem.mantenimientoUMA, 2.00, 2000000.00);
        this.iniciarItem(inItem.pruebasMicrobiologia, 12.00, 4000000.00);
        this.iniciarItem(inItem.validacionSistemaAire, 1.00, 10000000.00);
    }

    protected iniciarCentralAutomatica(inItem: MaintenanceCostsGroupModel): void {
        this.iniciarCentralManual(inItem);
    }

    private static _instance: CostosMantenimientoStarter

    /* SINGLETON FOR THIS CLASS */
    public static getInstance(): CostosMantenimientoStarter {
        if (!CostosMantenimientoStarter._instance) {
            CostosMantenimientoStarter._instance = new CostosMantenimientoStarter();
        }
        return CostosMantenimientoStarter._instance;
    }
}

export default CostosMantenimientoStarter;