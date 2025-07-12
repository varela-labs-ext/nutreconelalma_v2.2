import SterileWorkEquipmentGroupModel from "@/logic/models/operating_resources/SterileWorkEquipmentGroupModel";
import UnitCostItemModel from "@/logic/models/row_item/UnitCostItemRowModel";
import SterileWorkEquipmentHeaders from "./SterileWorkEquipmentHeaders";
import SterileWorkEquipmentInputs from "./SterileWorkEquipmentInputs";

interface SterileWorkEquipmentSetProps {
    inData: SterileWorkEquipmentGroupModel;
    onChange: (inNewItem: SterileWorkEquipmentGroupModel) => void;
}

const SterileWorkEquipmentSet = (props: SterileWorkEquipmentSetProps) => {

    const handleOnSterileWorkEquipmentInputsChange = (inPropertyName: string, inNewItem: UnitCostItemModel) => {
        const output: SterileWorkEquipmentGroupModel = {
            ...props.inData,
            [inPropertyName]: inNewItem
        };

        props.onChange(output);
    }

    return (
        <div className="flex flex-col gap-2">
            <SterileWorkEquipmentHeaders />
            <SterileWorkEquipmentInputs
                inData={props.inData}
                onInputChange={handleOnSterileWorkEquipmentInputsChange}
            />
        </div>
    );
}

export default SterileWorkEquipmentSet;