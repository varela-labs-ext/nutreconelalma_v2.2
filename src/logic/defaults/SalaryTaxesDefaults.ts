import StaffTaxesModel from "../models/base/StaffTaxesModel";
import DefaultsBase from "./DefaultsBase";

class SalaryTaxesDefaults extends DefaultsBase<StaffTaxesModel> {
    protected setCommons(inItem: StaffTaxesModel): void {
    }
    protected setExtras(inItem: StaffTaxesModel): void {
        this.setPorcentajeItem(inItem.cesantias, 8.00);
        this.setPorcentajeItem(inItem.primas, 8.00);
        this.setPorcentajeItem(inItem.vacaciones, 4.00);
        this.setPorcentajeItem(inItem.interesesCesantias, 1.00);
        this.setPorcentajeItem(inItem.salud, 8.50);
        this.setPorcentajeItem(inItem.pension, 12.00);
        this.setPorcentajeItem(inItem.arlRiesgo1, 2.00);
        this.setPorcentajeItem(inItem.cajaCompensacion, 4.00);
        this.setPorcentajeItem(inItem.sena, 2.00);
        this.setPorcentajeItem(inItem.icbf, 3.00);
    }
    protected setMixingCentral_Manual(inItem: StaffTaxesModel): void {
    }
    protected setMixingCentral_Automatic(inItem: StaffTaxesModel): void {
    }
}

export default SalaryTaxesDefaults;