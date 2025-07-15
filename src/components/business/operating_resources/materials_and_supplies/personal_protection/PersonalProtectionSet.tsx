
import PersonalProtectionGroupModel from "@/logic/models/operating_resources/PersonalProtectionGroupModel";
import UnitCostItemModel from "@/logic/models/row_item/UnitCostItemRowModel";
import PersonalProtectionHeaders from "./PersonalProtectionHeaders";
import PersonalProtectionInputs from "./PersonalProtectionInputs";
import { deepClone } from "@/utils/objectUtils";


interface PersonalProtectionSetProps {
    inData: PersonalProtectionGroupModel;
    onChange: (inNewItem: PersonalProtectionGroupModel) => void;
}

const PersonalProtectionSet = (props: PersonalProtectionSetProps) => {

    const handleOnAutomatedEquipmentInputsChange = (inPropertyName: string, inNewItem: UnitCostItemModel) => {
        const output: PersonalProtectionGroupModel = {
            ...deepClone(props.inData),
            [inPropertyName]: inNewItem
        };

        props.onChange(output);
    }

    return (
        <div className="flex flex-col gap-2">
            <PersonalProtectionHeaders />
            <PersonalProtectionInputs
                inData={props.inData}
                onInputChange={handleOnAutomatedEquipmentInputsChange}
            />
        </div>
    );
}

export default PersonalProtectionSet;