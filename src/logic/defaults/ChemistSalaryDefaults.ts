import CentralTypeIdEnum from "../enums/CentralTypeIdEnum";
import StaffSalaryGroupModel from "../models/operating_resources/StaffSalaryGroupModel";
import DefaultsBase from "./DefaultsBase";
import SalaryTaxesDefaults from "./SalaryTaxesDefaults";

class ChemistSalaryDefaults extends DefaultsBase<StaffSalaryGroupModel> {
    protected setCommons(inItem: StaffSalaryGroupModel): void {
        inItem.costoEmpresa.value = 0;
        inItem.auxilioTransporte.value = 0;
        inItem.subsidioTransporte.value = 0;
        inItem.totalParafiscales.value = 0;
        inItem.totalCompensacionSalarial.value = 0;
        inItem.totalValorHora.value = 0;

        inItem.horasTrabajoMensual.value = 230;
        inItem.personalPreparacion.value = 1;
    }

    protected setExtras(inItem: StaffSalaryGroupModel): void {
        const taxes = new SalaryTaxesDefaults();
        taxes.setDefaultValues(inItem, CentralTypeIdEnum.None);
    }

    protected setMixingCentral_Manual(inItem: StaffSalaryGroupModel): void {
        inItem.salarioBasico.value = 3800000.00;
    }

    protected setMixingCentral_Automatic(inItem: StaffSalaryGroupModel): void {
        inItem.salarioBasico.value = 4000000.00;
    }
}

export default ChemistSalaryDefaults;