import EstimatedCostItemModel from "@/logic/models/row_item/EstimatedCostItemRowModel";
import ProductionCostsGroupModel from "@/logic/models/operating_resources/ProductionCostsGroupModel";
import EstimatedCostsDetailsHeaders from "./EstimatedCostsDetailsHeaders";
import EstimatedCostsDetailsInputs from "./EstimatedCostsDetailsInputs";

interface EstimatedCostsDetailsGroupProps {
    inData: ProductionCostsGroupModel;
    inMonthlyProductionCapacity: number;
    inProductionLines: number;
    onInputChange: (inPropertyName: string, inNewItem: EstimatedCostItemModel) => void;
}

const EstimatedCostsDetailsGroup = (props: EstimatedCostsDetailsGroupProps) => {

    return (
        <>
            <div className="flex flex-col gap-2">
                <EstimatedCostsDetailsHeaders />
                <EstimatedCostsDetailsInputs
                    inData={props.inData}
                    inMonthlyProductionCapacity={props.inMonthlyProductionCapacity}
                    inProductionLines={props.inProductionLines}
                    onInputChange={props.onInputChange}
                />
            </div>
        </>
    );
}

export default EstimatedCostsDetailsGroup;