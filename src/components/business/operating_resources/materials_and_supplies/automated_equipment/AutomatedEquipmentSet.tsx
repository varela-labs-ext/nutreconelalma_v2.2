
import UnitCostItemModel from "@/logic/models/row_item/UnitCostItemRowModel";
import AutomatedEquipmentGroupModel from "@/logic/models/operating_resources/AutomatedEquipmentGroupModel";
import AutomatedEquipmentInputs from "./AutomatedEquipmentInputs";
import AutomatedEquipmentHeaders from "./AutomatedEquipmentHeaders";
import { deepClone } from "@/utils/objectUtils";

interface AutomatedEquipmentSetProps {
    inData: AutomatedEquipmentGroupModel;
    onChange: (inNewItem: AutomatedEquipmentGroupModel) => void;
}

const AutomatedEquipmentSet = (props: AutomatedEquipmentSetProps) => {

    const handleOnAutomatedEquipmentInputsChange = (inPropertyName: string, inNewItem: UnitCostItemModel) => {
        const output: AutomatedEquipmentGroupModel = {
            ...deepClone(props.inData),
            [inPropertyName]: inNewItem
        };

        props.onChange(output);
    }

    return (
        <div className="flex flex-col gap-2">
            <AutomatedEquipmentHeaders />
            <AutomatedEquipmentInputs
                inData={props.inData}
                onInputChange={handleOnAutomatedEquipmentInputsChange}
            />
        </div>
    );
}

export default AutomatedEquipmentSet;