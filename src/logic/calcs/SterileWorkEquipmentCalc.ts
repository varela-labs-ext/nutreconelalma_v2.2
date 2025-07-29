import { isUnitCostItemModel, isValidObj } from "@/utils/itemsUtils";
import SterileWorkEquipmentGroupModel from "../models/operating_resources/SterileWorkEquipmentGroupModel";
import BaseCalc from "./BaseCalc";
import UnitCostInputCalc from "./UnitCostInputCalc";

class SterileWorkEquipmentCalc extends BaseCalc<SterileWorkEquipmentGroupModel> {

    public compute(inItem: SterileWorkEquipmentGroupModel): void {
        if (!isValidObj(inItem)) {
            return;
        }

        const unitCostInputCalc = new UnitCostInputCalc();
        let total: number = 0;

        for (const propertyName in inItem) {
            const posibleItem = inItem[propertyName as keyof SterileWorkEquipmentGroupModel];

            if (isUnitCostItemModel(posibleItem)) {
                // const item = posibleItem as UnitCostItemModel;

                if (!posibleItem.exclude) {
                    unitCostInputCalc.compute(posibleItem);

                    if (!isNaN(posibleItem.totalCost)) {
                        total += posibleItem.totalCost;
                    }
                }
            }
        }

        inItem.total.value = total;
    }
}

export default SterileWorkEquipmentCalc;