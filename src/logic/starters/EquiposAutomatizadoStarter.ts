
import AutomatedEquipmentGroupModel from "../models/operating_resources/AutomatedEquipmentGroupModel";
import TotalesStarterBase from "./TotalesStarterBase";

class EquiposAutomatizadoStarter extends TotalesStarterBase<AutomatedEquipmentGroupModel> {

    protected iniciarComunes(inItem: AutomatedEquipmentGroupModel): void {
        inItem.totalCost = 0;
    }

    protected iniciarCentralManual(inItem: AutomatedEquipmentGroupModel): void {
        return;
    }

    protected iniciarCentralAutomatica(inItem: AutomatedEquipmentGroupModel): void {
        this.iniciarItem(inItem.tamperResistantClamps, 1.00, 1000.00);
        this.iniciarItem(inItem.setsTransferenciaX6, 0, 290000.00);
        this.iniciarItem(inItem.setsTransferenciaX9, 0, 343000.00);
    }


    private static _instance: EquiposAutomatizadoStarter

    /* SINGLETON FOR THIS CLASS */
    public static getInstance(): EquiposAutomatizadoStarter {
        if (!EquiposAutomatizadoStarter._instance) {
            EquiposAutomatizadoStarter._instance = new EquiposAutomatizadoStarter();
        }
        return EquiposAutomatizadoStarter._instance;
    }
}

export default EquiposAutomatizadoStarter;