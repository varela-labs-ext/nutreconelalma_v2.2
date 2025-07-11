//ClinicalInputCalc

import numberValidator from "@/utils/numberValidator";
import ClinicaInputModel from "../models/row_item/ClinicaInputModel";
import BaseCalc from "./BaseCalc";

class ClinicalInputCalc extends BaseCalc<ClinicaInputModel> {

    public compute(inItem: ClinicaInputModel): void {
        if (inItem === null || inItem == undefined) {
            console.log("Objecto insumo no existe.")
            return;
        }

        inItem.costoTotalPorUnidad = 0;
        inItem.costoPorMl = 0;

        if (!numberValidator.isValidObj(inItem)) { //<- Temporal
            console.log(`Insumo no calculable. [${inItem.label}]`)
            return;
        }

        if (inItem.presentacionMl === 0) {
            console.log(`presentacionMl no puede ser 0 [${inItem.label}]`)
            return;
        }

        inItem.costoTotalPorUnidad =
            (inItem.costoPorUnidad / inItem.presentacionMl)
            * inItem.cantidadMl;

        inItem.costoPorMl =
            (inItem.cantidadMl * inItem.costoPorUnidad)
            / inItem.presentacionMl;
    }

}

export default ClinicalInputCalc;