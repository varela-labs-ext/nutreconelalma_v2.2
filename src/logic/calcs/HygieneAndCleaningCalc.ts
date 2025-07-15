//HygieneAndCleaningGroupModel

import { isUnitCostItemModel, isValidObj } from "@/utils/itemsUtils";
import HygieneAndCleaningGroupModel from "../models/operating_resources/HygieneAndCleaningGroupModel";
import BaseCalc from "../services/BaseCalc";
import UnitCostInputCalc from "../services/UnitCostInputCalc";

class HygieneAndCleaningCalc extends BaseCalc<HygieneAndCleaningGroupModel> {

    public compute(inItem: HygieneAndCleaningGroupModel): void {
        if (!isValidObj(inItem)) {
            return;
        }

        const unitCostInputCalc = new UnitCostInputCalc();
        let total: number = 0;

        for (const propertyName in inItem) {
            const posibleItem = inItem[propertyName as keyof HygieneAndCleaningGroupModel];

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

export default HygieneAndCleaningCalc;