import numberValidator from "@/utils/numberValidator";
import EstimatedCostItemModel from "../models/common/EstimatedCostItemModel";
import BaseCalc from "./BaseCalc";


class EstimatedCostInputCalc extends BaseCalc<EstimatedCostItemModel> {
    public compute(inItem: EstimatedCostItemModel): void {
        throw new Error("Method not implemented.");
    }

    public computeByParams(inItem: EstimatedCostItemModel, inMonthlyProductionCapacity: number, inProductionLines: number): void {
        if (inItem === null || inItem == undefined) {
            console.log("Objecto insumo no existe.")
            return;
        }

        if (!numberValidator.isValidObj(inItem)) { //<- Temporal
            console.log(`Item no calculable. [${inItem.label}]`)
            return;
        } else {
            inItem.valorUnitario = 0;
        }

        if (inMonthlyProductionCapacity === 0) {
            console.log(`MonthlyProductionCapacity no puede ser 0 [${inItem.label}]`)
            return;
        }

        if (inProductionLines === 0) {
            console.log(`ProductionLines no puede ser 0 [${inItem.label}]`)
            return;
        }

        inItem.valorUnitario = ((inItem.valorEstimado / inMonthlyProductionCapacity) / inProductionLines);
    }
}

export default EstimatedCostInputCalc;