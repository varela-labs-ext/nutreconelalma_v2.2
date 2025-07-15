//ClinicalInputCalc

import numberValidator from "@/utils/numberValidator";
import ClinicaInputRowModel from "../models/row_item/ClinicaInputRowModel";
import BaseCalc from "./BaseCalc";
import { isValidObj } from "@/utils/itemsUtils";

class ClinicalInputCalc extends BaseCalc<ClinicaInputRowModel> {

    public compute(inItem: ClinicaInputRowModel): void {
        if (!isValidObj(inItem)) {
            console.log("Objecto insumo NO ES VALIDO.")
            console.log(inItem);
            return;
        }

        inItem.costoTotalPorUnidad = 0;
        inItem.costoPorMl = 0;

        if (!numberValidator.isValidObj(inItem)) { //<- Temporal
            console.log(`Insumo no calculable. [${inItem.label}]`)
            return;
        }

        if (inItem.presentacionMl > 0) {
            inItem.costoTotalPorUnidad =
                (inItem.costoPorUnidad / inItem.presentacionMl)
                * inItem.cantidadMl;

            inItem.costoPorMl =
                (inItem.cantidadMl * inItem.costoPorUnidad)
                / inItem.presentacionMl;
        } else {
            console.log(`presentacionMl no puede ser 0 [${inItem.label}]`)
        }
    }
}

export default ClinicalInputCalc;