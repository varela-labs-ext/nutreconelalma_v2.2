import SalarioPersonalModel from "../models/empleados/SalarioPersonalModel";
import ParaFiscalesStarter from "./ParaFiscalesStarter";

class PersonalQuimicoFarmaceuticoStarter extends ParaFiscalesStarter<SalarioPersonalModel> {

    protected iniciarComunes(inItem: SalarioPersonalModel): void {
        inItem.costoEmpresa = 0;
        inItem.auxilioTransporte = 0;
        inItem.subsidioTransporte = 0;
        inItem.totalParafiscales = 0;
        inItem.totalCompensacionSalarial = 0;
        inItem.totalValorHora = 0;
    }

    protected iniciarCentralManual(inItem: SalarioPersonalModel): void {
        inItem.salarioBasico = 3800000.00;
    }

    protected iniciarCentralAutomatica(inItem: SalarioPersonalModel): void {
        inItem.salarioBasico = 4000000.00;
    }

    private static _instance: PersonalQuimicoFarmaceuticoStarter

    /* SINGLETON FOR THIS CLASS */
    public static getInstance(): PersonalQuimicoFarmaceuticoStarter {
        if (!PersonalQuimicoFarmaceuticoStarter._instance) {
            PersonalQuimicoFarmaceuticoStarter._instance = new PersonalQuimicoFarmaceuticoStarter();
        }
        return PersonalQuimicoFarmaceuticoStarter._instance;
    }
}

export default PersonalQuimicoFarmaceuticoStarter;