import { isEstimatedCostItemModel, isValidObj } from "@/utils/itemsUtils";
import ProductionCostsGroupModel from "../models/operating_resources/ProductionCostsGroupModel";
import BaseCalc from "./BaseCalc";
import EstimatedCostInputCalc from "./EstimatedCostInputCalc";


class ProductionCostsCalc extends BaseCalc<ProductionCostsGroupModel> {
    public compute(inItem: ProductionCostsGroupModel): void {
        throw new Error("Method not implemented.");
    }

    public computeByParams(inItem: ProductionCostsGroupModel, inProductionLines: number, inProductionPerMonth: number): void {
        if (!isValidObj(inItem)) {
            return;
        }

        const estimatedCostInputCalc = new EstimatedCostInputCalc();
        let total: number = 0;

        for (const propertyName in inItem) {
            const posibleItem = inItem[propertyName as keyof ProductionCostsGroupModel];

            if (isEstimatedCostItemModel(posibleItem)) {
                // const item = posibleItem as UnitCostItemModel;

                if (!posibleItem.exclude) {
                    estimatedCostInputCalc.computeByParams(posibleItem, inProductionLines, inProductionPerMonth);

                    if (!isNaN(posibleItem.valorUnitario)) {
                        total += posibleItem.valorUnitario;
                    }
                }
            }
        }

        inItem.total.value = total;
    }

}

export default ProductionCostsCalc;