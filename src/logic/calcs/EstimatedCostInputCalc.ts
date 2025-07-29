import numberValidator from "@/utils/numberValidator";
import EstimatedCostItemModel from "../models/row_item/EstimatedCostItemRowModel";
import BaseCalc from "./BaseCalc";
import { isValidObj } from "@/utils/itemsUtils";


class EstimatedCostInputCalc extends BaseCalc<EstimatedCostItemModel> {
    public compute(inItem: EstimatedCostItemModel): void {
        throw new Error("Method not implemented.");
    }

    public computeByParams(inItem: EstimatedCostItemModel, inProductionLines: number, inProductionPerMonth: number): void {
        if (!isValidObj(inItem)) {
            return;
        }

        if (!numberValidator.isValidObj(inItem)) { //<- Temporal
            console.log(`Item no calculable. [${inItem.label}]`)
            return;
        } else {
            inItem.valorUnitario = 0;
        }

        if (inProductionLines > 0 && inProductionPerMonth > 0) {
            inItem.valorUnitario = ((inItem.valorEstimado / inProductionPerMonth) / inProductionLines);
        } else {
            console.warn("LAS LINEAS DE PRODUCCION Y LA CAPACIDAD MENSUAL TIENEN QUE SER MAYO QUE CERO.");
        }
    }
}

export default EstimatedCostInputCalc;