
import EquiposAutomatizadaModel from "../models/operativos/EquiposAutomatizadaModel";
import TotalesStarterBase from "./TotalesStarterBase";

class EquiposAutomatizadoStarter extends TotalesStarterBase<EquiposAutomatizadaModel> {

    protected iniciarComunes(inItem: EquiposAutomatizadaModel): void {
        inItem.costoTotal = 0;
    }

    protected iniciarCentralManual(inItem: EquiposAutomatizadaModel): void {
        return;
    }

    protected iniciarCentralAutomatica(inItem: EquiposAutomatizadaModel): void {
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