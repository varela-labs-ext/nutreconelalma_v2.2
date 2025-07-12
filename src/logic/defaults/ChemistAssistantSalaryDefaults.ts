import CentralTypeIdEnum from "../enums/CentralTypeIdEnum";
import StaffSalaryGroupModel from "../models/operating_resources/StaffSalaryGroupModel";
import DefaultsBase from "./DefaultsBase";
import SalaryTaxesDefaults from "./SalaryTaxesDefaults";

class ChemistAssistantSalaryDefaults extends DefaultsBase<StaffSalaryGroupModel> {
    protected setCommons(inItem: StaffSalaryGroupModel): void {
        inItem.costoEmpresa.value = 0;
        inItem.auxilioTransporte.value = 0;
        inItem.subsidioTransporte.value = 117000.00;
        inItem.totalParafiscales.value = 0;
        inItem.totalCompensacionSalarial.value = 0;
        inItem.totalValorHora.value = 0;

        inItem.horasTrabajoMensual.value = 230;
        inItem.personalPreparacion.value = 1;
    }

    protected setExtras(inItem: StaffSalaryGroupModel): void {
        const taxes = new SalaryTaxesDefaults();
        taxes.setDefaultValues(inItem, CentralTypeIdEnum.None);
        this.setPorcentajeItem(inItem.arlRiesgo1, 2.40); // <- Este valor esta así en el Excel.
    }

    protected setMixingCentral_Manual(inItem: StaffSalaryGroupModel): void {
        inItem.salarioBasico.value = 1500000.00;
    }

    protected setMixingCentral_Automatic(inItem: StaffSalaryGroupModel): void {
        inItem.salarioBasico.value = 1500000.00;
    }
}

export default ChemistAssistantSalaryDefaults;