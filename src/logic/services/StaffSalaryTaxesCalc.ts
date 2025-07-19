import PorcentajeItemModel from "../models/row_item/PorcentajeItemRowModel";
import StaffTaxesModel from "../models/base/StaffTaxesModel";

class StaffSalaryTaxesCalc {

    public compute(inItem: StaffTaxesModel, inSalarioBasico: number): number {
        let total: number = 0;

        total += this.computePercentage(inItem.cesantias, inSalarioBasico);
        total += this.computePercentage(inItem.primas, inSalarioBasico);
        total += this.computePercentage(inItem.vacaciones, inSalarioBasico);
        total += this.computePercentage(inItem.interesesCesantias, inSalarioBasico);
        total += this.computePercentage(inItem.salud, inSalarioBasico);
        total += this.computePercentage(inItem.pension, inSalarioBasico);
        total += this.computePercentage(inItem.arlRiesgo1, inSalarioBasico);
        total += this.computePercentage(inItem.cajaCompensacion, inSalarioBasico);
        total += this.computePercentage(inItem.sena, inSalarioBasico);
        total += this.computePercentage(inItem.icbf, inSalarioBasico);

        return total;
    }

    private computePercentage(inItem: PorcentajeItemModel, inSalarioBasico: number): number {
        if (inItem.percentage === 0) {
            return 0;
        }

        inItem.value = ((inItem.percentage * inSalarioBasico) / 100);

        return inItem.value;
    }

}

export default StaffSalaryTaxesCalc;