import BasicOperationalModel from "@/logic/models/common/BasicOperationalModel";
import UnitCostItemModel from "@/logic/models/common/UnitCostItemModel";

import UnitCostDetailsInputs from "./UnitCostDetailsInputs";
import UnitCostDetailsHeaders from "./UnitCostDetailsHeaders";


interface UnitCostDetailsGroupProps {
    inData: BasicOperationalModel;
    onInputChange: (inName: string, inNewItem: UnitCostItemModel) => void;
}

const UnitCostDetailsGroup = (props: UnitCostDetailsGroupProps) => {

    return (
        <>
            <div className="flex flex-col gap-2">
                <UnitCostDetailsHeaders />
                <UnitCostDetailsInputs
                    inData={props.inData}
                    onInputChange={props.onInputChange}
                />
            </div>
        </>
    );
}

export default UnitCostDetailsGroup;