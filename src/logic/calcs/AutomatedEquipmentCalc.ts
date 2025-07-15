import { isValidObj, isUnitCostItemModel } from "@/utils/itemsUtils";
import AutomatedEquipmentGroupModel from "../models/operating_resources/AutomatedEquipmentGroupModel";
import PersonalProtectionGroupModel from "../models/operating_resources/PersonalProtectionGroupModel";
import BaseCalc from "../services/BaseCalc";
import UnitCostInputCalc from "../services/UnitCostInputCalc";

class AutomatedEquipmentCalc extends BaseCalc<AutomatedEquipmentGroupModel> {
    public compute(inItem: AutomatedEquipmentGroupModel): void {
        if (!isValidObj(inItem)) {
            return;
        }

        const unitCostInputCalc = new UnitCostInputCalc();
        let total: number = 0;

        for (const propertyName in inItem) {
            const posibleItem = inItem[propertyName as keyof AutomatedEquipmentGroupModel];

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

export default AutomatedEquipmentCalc;