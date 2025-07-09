import numberValidator from "@/utils/numberValidator";
import UnitCostItemModel from "../models/common/UnitCostItemModel";
import BaseCalc from "./BaseCalc";


class UnitCostInputCalc extends BaseCalc<UnitCostItemModel> {
    public compute(inItem: UnitCostItemModel): void {
        if (inItem === null || inItem == undefined) {
            console.log("Objecto insumo no existe.")
            return;
        }

        if (!numberValidator.isValidObj(inItem)) { //<- Temporal
            console.log(`Item no calculable. [${inItem.label}]`)
            return;
        } else {
            inItem.totalCost = 0;
        }

        inItem.totalCost = (inItem.quantity * inItem.unitCost);
    }
}

export default UnitCostInputCalc;