
import SalarioPersonalModel from "../models/empleados/SalarioPersonalModel";
import ParaFiscalesStarter from "./ParaFiscalesStarter";

class PersonalAuxiliarFarmaciaStarter extends ParaFiscalesStarter<SalarioPersonalModel> {

    protected iniciarComunes(inItem: SalarioPersonalModel): void {
        inItem.costoEmpresa = 0;
        inItem.auxilioTransporte = 0;
        inItem.subsidioTransporte = 117000.00;
        inItem.totalParafiscales = 0;
        inItem.totalCompensacionSalarial = 0;
        inItem.totalValorHora = 0;
        this.iniciarParafiscal(inItem.arlRiesgo1, 2.40); // <- Este valor esta así en el Excel.
    }

    protected iniciarCentralManual(inItem: SalarioPersonalModel): void {
        inItem.salarioBasico = 1500000.00;
    }

    protected iniciarCentralAutomatica(inItem: SalarioPersonalModel): void {
        inItem.salarioBasico = 1500000.00;
    }

    private static _instance: PersonalAuxiliarFarmaciaStarter

    /* SINGLETON FOR THIS CLASS */
    public static getInstance(): PersonalAuxiliarFarmaciaStarter {
        if (!PersonalAuxiliarFarmaciaStarter._instance) {
            PersonalAuxiliarFarmaciaStarter._instance = new PersonalAuxiliarFarmaciaStarter();
        }
        return PersonalAuxiliarFarmaciaStarter._instance;
    }
}

export default PersonalAuxiliarFarmaciaStarter;