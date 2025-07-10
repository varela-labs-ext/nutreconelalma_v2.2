
import MaterialesHigieneLimpiezaModel from "../models/operativos/HygieneAndCleaningModel";
import TotalesStarterBase from "./TotalesStarterBase";


class MaterialesHigieneLimpiezaStarter extends TotalesStarterBase<MaterialesHigieneLimpiezaModel> {
    protected iniciarComunes(inItem: MaterialesHigieneLimpiezaModel): void {
        inItem.costoTotal = 0;
    }

    protected iniciarCentralManual(inItem: MaterialesHigieneLimpiezaModel): void {
        this.iniciarItem(inItem.solucionAntisepticaManos, 0.08, 9000.00);
        this.iniciarItem(inItem.panosEsterilesSuperficies, 0.10, 1000.00);
        this.iniciarItem(inItem.alcohol70, 0.15, 1200.00);
        this.iniciarItem(inItem.detergentes, (1 / 200), 70479.00);
        this.iniciarItem(inItem.desinfectantes, (1 / 200), 55000.00);
    }

    protected iniciarCentralAutomatica(inItem: MaterialesHigieneLimpiezaModel): void {
        this.iniciarItem(inItem.solucionAntisepticaManos, 0, 9000.00);
        this.iniciarItem(inItem.panosEsterilesSuperficies, 1.00, 1000.00);
        this.iniciarItem(inItem.alcohol70, 0, 1200.00);
        this.iniciarItem(inItem.peroxidoHidrogenoAcelerado, (1 / 200), 70479.00);
        this.iniciarItem(inItem.cloruroBenzalconio, (1 / 200), 55000.00);
    }

    private static _instance: MaterialesHigieneLimpiezaStarter

    /* SINGLETON FOR THIS CLASS */
    public static getInstance(): MaterialesHigieneLimpiezaStarter {
        if (!MaterialesHigieneLimpiezaStarter._instance) {
            MaterialesHigieneLimpiezaStarter._instance = new MaterialesHigieneLimpiezaStarter();
        }
        return MaterialesHigieneLimpiezaStarter._instance;
    }
}

export default MaterialesHigieneLimpiezaStarter;