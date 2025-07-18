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


        inItem.costoPersonalFarmaceuticoPorPreparacion.value = 0;
    }

    protected setExtras(inItem: StaffSalaryGroupModel): void {
        const taxes = new SalaryTaxesDefaults();
        taxes.setDefaultValues(inItem, CentralTypeIdEnum.None);
    }

    protected setMixingCentral_Manual(inItem: StaffSalaryGroupModel): void {
        inItem.salarioBasico.value = 3800000.00;
        inItem.horasPersonalFarmaceuticoPorNP.value = 0.36; // Esta es la constante por defecto.
    }

    protected setMixingCentral_Automatic(inItem: StaffSalaryGroupModel): void {
        inItem.salarioBasico.value = 4000000.00;
        inItem.horasPersonalFarmaceuticoPorNP.value = 0.08; // Esta es la constante por defecto.
    }
}

export default ChemistSalaryDefaults;