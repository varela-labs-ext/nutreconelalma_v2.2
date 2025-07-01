import numberValidator from "@/utils/numberValidator";
import InsumoItemModel from "../models/common/InsumoItemModel";


class InsumoItemCalc extends BaseCalc<InsumoItemModel> {

    public calcular(inItem: InsumoItemModel): void {
        if (inItem === null || inItem == undefined) {
            console.log("Objecto insumo no existe.")
            return;
        }

        if (!numberValidator.isValidateObj(inItem)) { //<- Temporal
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

export default InsumoItemCalc;