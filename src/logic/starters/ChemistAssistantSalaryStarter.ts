
import StaffSalaryModel from "../models/empleados/StaffSalaryModel";
import ParaFiscalesStarter from "./SalaryTaxesStarter";

class PersonalAuxiliarFarmaciaStarter extends ParaFiscalesStarter<StaffSalaryModel> {

    protected iniciarComunes(inItem: StaffSalaryModel): void {
        inItem.costoEmpresa.value = 0;
        inItem.auxilioTransporte.value = 0;
        inItem.subsidioTransporte.value = 117000.00;
        inItem.totalParafiscales.value = 0;
        inItem.totalCompensacionSalarial.value = 0;
        inItem.totalValorHora.value = 0;
        this.iniciarParafiscal(inItem.arlRiesgo1, 2.40); // <- Este valor esta así en el Excel.
    }

    protected iniciarCentralManual(inItem: StaffSalaryModel): void {
        inItem.salarioBasico.value = 1500000.00;
    }

    protected iniciarCentralAutomatica(inItem: StaffSalaryModel): void {
        inItem.salarioBasico.value = 1500000.00;
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