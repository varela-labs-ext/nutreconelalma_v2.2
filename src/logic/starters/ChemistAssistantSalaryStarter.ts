
import StaffSalaryModel from "../models/empleados/StaffSalaryModel";
import SalaryTaxesStarter from "./SalaryTaxesStarter";

class ChemistAssistantSalaryStarter extends SalaryTaxesStarter<StaffSalaryModel> {

    protected iniciarComunes(inItem: StaffSalaryModel): void {
        inItem.costoEmpresa.value = 0;
        inItem.auxilioTransporte.value = 0;
        inItem.subsidioTransporte.value = 117000.00;
        inItem.totalParafiscales.value = 0;
        inItem.totalCompensacionSalarial.value = 0;
        inItem.totalValorHora.value = 0;

        inItem.horasTrabajoMensual.value = 230;
        inItem.personalPreparacion.value = 1;

        this.iniciarParafiscal(inItem.arlRiesgo1, 2.40); // <- Este valor esta así en el Excel.
    }

    protected iniciarCentralManual(inItem: StaffSalaryModel): void {
        inItem.salarioBasico.value = 1500000.00;
    }

    protected iniciarCentralAutomatica(inItem: StaffSalaryModel): void {
        inItem.salarioBasico.value = 1500000.00;
    }

    private static _instance: ChemistAssistantSalaryStarter

    /* SINGLETON FOR THIS CLASS */
    public static getInstance(): ChemistAssistantSalaryStarter {
        if (!ChemistAssistantSalaryStarter._instance) {
            ChemistAssistantSalaryStarter._instance = new ChemistAssistantSalaryStarter();
        }
        return ChemistAssistantSalaryStarter._instance;
    }
}

export default ChemistAssistantSalaryStarter;