import StaffSalaryModel from "../models/empleados/StaffSalaryModel";
import ParaFiscalesStarter from "./SalaryTaxesStarter";

class PersonalQuimicoFarmaceuticoStarter extends ParaFiscalesStarter<StaffSalaryModel> {

    protected iniciarComunes(inItem: StaffSalaryModel): void {
        inItem.costoEmpresa.value = 0;
        inItem.auxilioTransporte.value = 0;
        inItem.subsidioTransporte.value = 0;
        inItem.totalParafiscales.value = 0;
        inItem.totalCompensacionSalarial.value = 0;
        inItem.totalValorHora.value = 0;
    }

    protected iniciarCentralManual(inItem: StaffSalaryModel): void {
        inItem.salarioBasico.value = 3800000.00;
    }

    protected iniciarCentralAutomatica(inItem: StaffSalaryModel): void {
        inItem.salarioBasico.value = 4000000.00;
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