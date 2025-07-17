//ClinicalInputCalc

import numberValidator from "@/utils/numberValidator";
import ClinicaInputRowModel from "../models/row_item/ClinicaInputRowModel";
import BaseCalc from "./BaseCalc";
import { isValidObj } from "@/utils/itemsUtils";
import { getClassName, Logger } from "@/utils/logger";

class ClinicalInputCalc extends BaseCalc<ClinicaInputRowModel> {

    public compute(inItem: ClinicaInputRowModel): void {
        if (!isValidObj(inItem)) {
            Logger.warn("OBJETO INVALIDO.", "ClinicalInputCalc");
            Logger.info(inItem);
            return;
        }

        Logger.info(`COMPUTE: "${inItem.label}"`, getClassName(this));

        inItem.costoTotalPorUnidad = 0;
        inItem.costoPorMl = 0;

        if (!numberValidator.isValidObj(inItem)) { //<- Temporal
            Logger.info(`Insumo no calculable. [${inItem.label}]`, getClassName(this));
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
            Logger.info(`presentacionMl no puede ser 0 [${inItem.label}]`, getClassName(this));
        }
    }
}

export default ClinicalInputCalc;