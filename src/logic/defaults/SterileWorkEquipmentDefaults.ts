import SterileWorkEquipmentGroupModel from "../models/operating_resources/SterileWorkEquipmentGroupModel";
import DefaultsBase from "./DefaultsBase";

class SterileWorkEquipmentDefaults extends DefaultsBase<SterileWorkEquipmentGroupModel> {
    protected setCommons(inItem: SterileWorkEquipmentGroupModel): void {
        inItem.total.value = 0;
    }

    protected setExtras(inItem: SterileWorkEquipmentGroupModel): void {
    }

    protected setMixingCentral_Manual(inItem: SterileWorkEquipmentGroupModel): void {
        this.setUnitCostItem(inItem.agujasEsteriles, 10.00, 400.00);
        this.setUnitCostItem(inItem.boligrafosEtiquetado, (1.00 / 60.00), 1500.00);
        this.setUnitCostItem(inItem.bolsaNegraNoContaminados, 0.50, 500.00);
        this.setUnitCostItem(inItem.bolsaRojaBiologicos, 0.10, 500.00);
        this.setUnitCostItem(inItem.buretroles, 4.00, 2500.00);
        this.setUnitCostItem(inItem.compresasEsteriles, 1.00, 2000.00);
        this.setUnitCostItem(inItem.contenedoresCortopunzantes, 0.05, 8000.00);
        this.setUnitCostItem(inItem.etiquetasIdentificacionBolsas, 1.00, 5000.00);
        this.setUnitCostItem(inItem.gasasEsteriles, 3.00, 200.00);
        this.setUnitCostItem(inItem.jeringas1ml, 1.00, 400.00);
        this.setUnitCostItem(inItem.jeringas5ml, 1.00, 400.00); // Orden ajustado aqui
        this.setUnitCostItem(inItem.jeringas10ml, 2.00, 400.00);
        this.setUnitCostItem(inItem.jeringas20ml, 3.00, 500.00);
        this.setUnitCostItem(inItem.jeringas50ml, 3.00, 2000.00);
        this.setUnitCostItem(inItem.toallasAbsorbentesDesechables, 1.00, 1000.00);
    }

    protected setMixingCentral_Automatic(inItem: SterileWorkEquipmentGroupModel): void {
        this.setUnitCostItem(inItem.agujasEsteriles, 2.00, 400.00);
        this.setUnitCostItem(inItem.boligrafosEtiquetado, (1.00 / 60.00), 1500.00);
        this.setUnitCostItem(inItem.bolsaNegraNoContaminados, 0.50, 500.00);
        this.setUnitCostItem(inItem.bolsaRojaBiologicos, 0.10, 500.00);
        this.setUnitCostItem(inItem.buretroles, 0, 2500.00);
        this.setUnitCostItem(inItem.compresasEsteriles, 1.00, 2000.00);
        this.setUnitCostItem(inItem.contenedoresCortopunzantes, 0.05, 8000.00);
        this.setUnitCostItem(inItem.etiquetasIdentificacionBolsas, 1.00, 5000.00);
        this.setUnitCostItem(inItem.gasasEsteriles, 2.00, 400.00);
        this.setUnitCostItem(inItem.jeringas1ml, 1.00, 400.00);
        this.setUnitCostItem(inItem.jeringas5ml, 1.00, 400.00); // Orden ajustado aqui
        this.setUnitCostItem(inItem.jeringas10ml, 0, 400.00);
        this.setUnitCostItem(inItem.jeringas20ml, 0, 500.00);
        this.setUnitCostItem(inItem.jeringas50ml, 0, 2000.00);
        this.setUnitCostItem(inItem.toallasAbsorbentesDesechables, 1.00, 1000.00);
    }

}

export default SterileWorkEquipmentDefaults;