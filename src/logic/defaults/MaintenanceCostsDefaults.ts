import MaintenanceCostsGroupModel from "../models/operating_resources/MaintenanceCostsGroupModel";
import DefaultsBase from "./DefaultsBase";


class MaintenanceCostsDefaults extends DefaultsBase<MaintenanceCostsGroupModel> {
    protected setCommons(inItem: MaintenanceCostsGroupModel): void {
        inItem.total.value = 0;
    }

    protected setExtras(inItem: MaintenanceCostsGroupModel): void {
    }

    protected setMixingCentral_Manual(inItem: MaintenanceCostsGroupModel): void {
        this.setUnitCostItem(inItem.calibracionManometros, 10.00, 400000.00);
        this.setUnitCostItem(inItem.calibracionTermohigrometros, 5.0, 400000.00);
        this.setUnitCostItem(inItem.calificacionCabinas, 3, 2500000.00);
        this.setUnitCostItem(inItem.cambiosFiltrosUMA, 3.00, 5000000.00);
        this.setUnitCostItem(inItem.desafioDesinfectantes, 1.00, 1000000.00);
        this.setUnitCostItem(inItem.llenadosAsepticosQuimicos, 6.00, 1000000.00);
        this.setUnitCostItem(inItem.mantenimientoCabinas, 6.00, 2000000.00);
        this.setUnitCostItem(inItem.mantenimientosLocativosPintura, 3.00, 575000.00);
        this.setUnitCostItem(inItem.mantenimientoUMA, 2.00, 2000000.00);
        this.setUnitCostItem(inItem.pruebasMicrobiologia, 12.00, 4000000.00);
        this.setUnitCostItem(inItem.validacionSistemaAire, 1.00, 10000000.00);
    }

    protected setMixingCentral_Automatic(inItem: MaintenanceCostsGroupModel): void {
        this.setMixingCentral_Manual(inItem);
    }

}

export default MaintenanceCostsDefaults;