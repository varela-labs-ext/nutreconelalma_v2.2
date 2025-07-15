import ProductionCostsGroupModel from "@/logic/models/operating_resources/ProductionCostsGroupModel";
import ProductionCostsHeaders from "./ProductionCostsHeaders";
import EstimatedCostItemModel from "@/logic/models/row_item/EstimatedCostItemRowModel";
import ProductionCostsInputs from "./ProductionCostsInputs";
import { deepClone } from "@/utils/objectUtils";


interface ProductionCostsSetProps {
    inData: ProductionCostsGroupModel;
    inProductionLines: number;
    inProductionPerMonth: number;
    onChange: (newItem: ProductionCostsGroupModel) => void;
}

const ProductionCostsSet = (props: ProductionCostsSetProps) => {

    const handleOnProductionCostsInputs = (inPropertyName: string, inNewItem: EstimatedCostItemModel) => {
        const output: ProductionCostsGroupModel = {
            ...deepClone(props.inData),
            [inPropertyName]: inNewItem
        }

        props.onChange(output);
    }

    return (
        <div className="flex flex-col gap-2">
            <ProductionCostsHeaders />
            <ProductionCostsInputs
                inData={props.inData}
                inProductionLines={props.inProductionLines}
                inProductionPerMonth={props.inProductionPerMonth}
                onInputChange={handleOnProductionCostsInputs}
            />
        </div>
    );
}

export default ProductionCostsSet;