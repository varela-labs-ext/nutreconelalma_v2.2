import MaintenanceCostsGroupModel from "@/logic/models/operating_resources/MaintenanceCostsGroupModel";
import MaintenanceCostsInputs from "./MaintenanceCostsInputs";
import UnitCostItemModel from "@/logic/models/row_item/UnitCostItemRowModel";

interface MaintenanceCostsSetProps {
    inProductionLines: number;
    inData: MaintenanceCostsGroupModel;
    onChange: (inNewItem: MaintenanceCostsGroupModel) => void;
}

const MaintenanceCostsSet = (props: MaintenanceCostsSetProps) => {

    const handleOnMaintenanceCostsInputsChange = (inPropertyName: string, inNewItem: UnitCostItemModel) => {
        const output: MaintenanceCostsGroupModel = {
            ...props.inData,
            [inPropertyName]: inNewItem
        };

        props.onChange(output);
    }

    return (
        <div className="flex flex-col gap-2">
            <MaintenanceCostsInputs
                inProductionLines={props.inProductionLines}
                inData={props.inData}
                onInputChange={handleOnMaintenanceCostsInputsChange}
            />
        </div>
    );
}

export default MaintenanceCostsSet;