import StaffSalaryModel from "../models/empleados/StaffSalaryGroupModel";
import BaseCalc from "./BaseCalc";
import StaffSalaryTaxesCalc from "./StaffSalaryTaxesCalc";

class ChemistSalaryCalc extends BaseCalc<StaffSalaryModel> {

    public compute(inItem: StaffSalaryModel): void {
        if (!this.isValidObj(inItem)) {
            return;
        }

        if (inItem.salarioBasico.value <= 0) {
            console.log("SALARIO NO VALIDO.");
            return;
        }

        const taxes = new StaffSalaryTaxesCalc();
        inItem.totalParafiscales.value = taxes.compute(inItem, inItem.salarioBasico.value);

        inItem.totalCompensacionSalarial.value = inItem.salarioBasico.value + inItem.totalParafiscales.value;
        inItem.totalValorHora.value = inItem.totalCompensacionSalarial.value / inItem.horasTrabajoMensual.value;
    }

}

export default ChemistSalaryCalc;