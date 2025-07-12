import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import HygieneAndCleaningGroupModel from "@/logic/models/operating_resources/HygieneAndCleaningGroupModel";
import UnitCostItemModel from "@/logic/models/row_item/UnitCostItemRowModel";
import HygieneAndCleaningHeaders from "./HygieneAndCleaningHeaders";
import HygieneAndCleaningInputs from "./HygieneAndCleaningInputs";


interface HygieneAndCleaningSetProps {
    inCentralType: CentralTypeIdEnum;
    inData: HygieneAndCleaningGroupModel;
    onChange: (inNewItem: HygieneAndCleaningGroupModel) => void;
}

const HygieneAndCleaningSet = (props: HygieneAndCleaningSetProps) => {

    const handleOnHygieneAndCleaningInputsChange = (inPropertyName: string, inNewItem: UnitCostItemModel) => {
        const output: HygieneAndCleaningGroupModel = {
            ...props.inData,
            [inPropertyName]: inNewItem
        };

        props.onChange(output);
    }

    return (
        <div className="flex flex-col gap-2">
            <HygieneAndCleaningHeaders />
            <HygieneAndCleaningInputs
                inCentralType={props.inCentralType}
                inData={props.inData}
                onInputChange={handleOnHygieneAndCleaningInputsChange}
            />
        </div>
    );
}

export default HygieneAndCleaningSet;