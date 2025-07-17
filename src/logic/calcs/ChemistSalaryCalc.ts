import { isValidObj } from "@/utils/itemsUtils";
import StaffSalaryGroupModel from "../models/operating_resources/StaffSalaryGroupModel";
import BaseCalc from "../services/BaseCalc";
import StaffSalaryTaxesCalc from "../services/StaffSalaryTaxesCalc";

class ChemistSalaryCalc extends BaseCalc<StaffSalaryGroupModel> {

    public compute(inItem: StaffSalaryGroupModel): void {
        if (!isValidObj(inItem)) {
            return;
        }

        if (inItem.salarioBasico.value <= 0) {
            console.log("SALARIO NO VALIDO.");
            return;
        }

        const taxes = new StaffSalaryTaxesCalc();
        inItem.totalParafiscales.value = taxes.compute(inItem, inItem.salarioBasico.value);

        if (isValidObj(inItem.totalParafiscales) && inItem.totalParafiscales.value > 0) {
            inItem.totalCompensacionSalarial.value = (
                inItem.salarioBasico.value +
                inItem.costoEmpresa.value +
                inItem.auxilioTransporte.value +
                inItem.subsidioTransporte.value +
                inItem.totalParafiscales.value
            );

            if (!isNaN(inItem.totalCompensacionSalarial.value) &&
                inItem.totalCompensacionSalarial.value > 0 &&
                inItem.horasTrabajoMensual.value > 0
            ) {
                inItem.totalValorHora.value = inItem.totalCompensacionSalarial.value / inItem.horasTrabajoMensual.value;
            } else {
                inItem.totalValorHora.value = 0;
            }
        }
    }
}

export default ChemistSalaryCalc;