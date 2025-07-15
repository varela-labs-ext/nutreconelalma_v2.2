import { isUnitCostItemModel, isValidObj } from "@/utils/itemsUtils";
import MaintenanceCostsGroupModel from "../models/operating_resources/MaintenanceCostsGroupModel";
import BaseCalc from "../services/BaseCalc";
import UnitCostItemModel from "../models/row_item/UnitCostItemRowModel";
import UnitCostInputCalc from "../services/UnitCostInputCalc";

class MaintenanceCostsCalc extends BaseCalc<MaintenanceCostsGroupModel> {
    public compute(inItem: MaintenanceCostsGroupModel): void {
        throw new Error("Method not implemented.");
    }

    public computeByParams(inItem: MaintenanceCostsGroupModel, inProductionLines: number, inProductionPerMonth: number): void {
        console.log("----- MaintenanceCostsCalc ------");
        console.log(inItem);

        if (!isValidObj(inItem)) {
            return;
        }

        const unitCostInputCalc = new UnitCostInputCalc();
        let total: number = 0;

        for (const propertyName in inItem) {
            const posibleItem = inItem[propertyName as keyof MaintenanceCostsGroupModel];

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
        inItem.costoMensual.value = total / 12;

        if (inProductionLines > 0) {
            inItem.costoLineaProduccion.value = inItem.costoMensual.value / inProductionLines;

            if (inProductionPerMonth > 0) {
                inItem.costoNpt.value = inItem.costoLineaProduccion.value / inProductionPerMonth;
            } else {
                inItem.costoNpt.value = 0;
            }
        } else {
            inItem.costoLineaProduccion.value = 0;
            inItem.costoNpt.value = 0;
        }
    }
}

export default MaintenanceCostsCalc;