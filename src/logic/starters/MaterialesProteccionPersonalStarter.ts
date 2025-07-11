
import PersonalProtectionGroupModel from "../models/operating_resources/PersonalProtectionGroupModel";
import TotalesStarterBase from "./TotalesStarterBase";


class MaterialesProteccionPersonalStarter extends TotalesStarterBase<PersonalProtectionGroupModel> {

    protected iniciarComunes(inItem: PersonalProtectionGroupModel): void {
        inItem.totalCost = 0;
    }

    protected iniciarCentralManual(inItem: PersonalProtectionGroupModel): void {
        this.iniciarItem(inItem.bataEsterilUnUso, 2.00, 4000.00);
        this.iniciarItem(inItem.cubrezapatosDesechables, 2.00, 300.00);
        this.iniciarItem(inItem.gorroDesechable, 2.00, 300.00);
        this.iniciarItem(inItem.guantesEsterilesDesechables, 4.00, 1000.00);
        this.iniciarItem(inItem.mascarillaQuirurgica, 2.00, 100.00);
    }

    protected iniciarCentralAutomatica(inItem: PersonalProtectionGroupModel): void {
        this.iniciarItem(inItem.bataEsterilUnUso, 2.00, 4000.00);
        this.iniciarItem(inItem.cubrezapatosDesechables, 2.00, 300.00);
        this.iniciarItem(inItem.gorroDesechable, 2.00, 300.00);
        this.iniciarItem(inItem.guantesEsterilesDesechables, 2.00, 500.00);
        this.iniciarItem(inItem.mascarillaQuirurgica, 2.00, 100.00);
    }

    private static _instance: MaterialesProteccionPersonalStarter

    /* SINGLETON FOR THIS CLASS */
    public static getInstance(): MaterialesProteccionPersonalStarter {
        if (!MaterialesProteccionPersonalStarter._instance) {
            MaterialesProteccionPersonalStarter._instance = new MaterialesProteccionPersonalStarter();
        }
        return MaterialesProteccionPersonalStarter._instance;
    }
}

export default MaterialesProteccionPersonalStarter;