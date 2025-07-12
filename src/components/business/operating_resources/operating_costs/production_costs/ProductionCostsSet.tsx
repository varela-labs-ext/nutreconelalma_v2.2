import ProductionCostsGroupModel from "@/logic/models/operating_resources/ProductionCostsGroupModel";
import ProductionCostsHeaders from "./ProductionCostsHeaders";
import EstimatedCostItemModel from "@/logic/models/row_item/EstimatedCostItemRowModel";
import ProductionCostsInputs from "./ProductionCostsInputs";


interface ProductionCostsSetProps {
    inData: ProductionCostsGroupModel;
    inMonthlyProductionCapacity: number;
    inProductionLines: number;
    onChange: (newItem: ProductionCostsGroupModel) => void;
}

const ProductionCostsSet = (props: ProductionCostsSetProps) => {

    const handleOnProductionCostsInputs = (inPropertyName: string, inNewItem: EstimatedCostItemModel) => {
        const output: ProductionCostsGroupModel = {
            ...props.inData,
            [inPropertyName]: inNewItem
        }

        props.onChange(output);
    }

    return (
        <div className="flex flex-col gap-2">
            <ProductionCostsHeaders />
            <ProductionCostsInputs
                inData={props.inData}
                inMonthlyProductionCapacity={props.inMonthlyProductionCapacity}
                inProductionLines={props.inProductionLines}
                onInputChange={handleOnProductionCostsInputs}
            />
        </div>
    );
}

export default ProductionCostsSet;