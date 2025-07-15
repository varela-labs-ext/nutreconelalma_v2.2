import { isUnitCostItemModel, isValidObj } from "@/utils/itemsUtils";
import PersonalProtectionGroupModel from "../models/operating_resources/PersonalProtectionGroupModel";
import BaseCalc from "../services/BaseCalc";
import UnitCostInputCalc from "../services/UnitCostInputCalc";


class PersonalProtectionCalc extends BaseCalc<PersonalProtectionGroupModel> {
    public compute(inItem: PersonalProtectionGroupModel): void {
        if (!isValidObj(inItem)) {
            return;
        }

        const unitCostInputCalc = new UnitCostInputCalc();
        let total: number = 0;

        for (const propertyName in inItem) {
            const posibleItem = inItem[propertyName as keyof PersonalProtectionGroupModel];

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

export default PersonalProtectionCalc;