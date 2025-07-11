import StaffSalaryGroupModel from "../models/operating_resources/StaffSalaryGroupModel";
import BaseCalc from "./BaseCalc";
import StaffSalaryTaxesCalc from "./StaffSalaryTaxesCalc";

class ChemistSalaryCalc extends BaseCalc<StaffSalaryGroupModel> {

    public compute(inItem: StaffSalaryGroupModel): void {
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