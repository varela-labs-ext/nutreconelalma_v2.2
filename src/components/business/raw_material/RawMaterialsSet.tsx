import { useState } from "react";
import RawMaterialsOverview from "./RawMaterialsOverview";
import RawMaterialsOtherCosts from "./RawMaterialsOtherCosts";
import AdditionalCostsTotalsModel from "@/logic/models/AdditionalCostsTotalsModel";
import RawMaterialsAccourd from "./RawMaterialsAccourd";
import RawMaterialGroupModel from "@/logic/models/RawMaterialGroupModel";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";


interface RawMaterialsSetProps {
    inData: RawMaterialGroupModel;
    inAdditionalCosts: AdditionalCostsTotalsModel;
    inCentralType: CentralTypeIdEnum;
    onChange: (inNewData: RawMaterialGroupModel) => void;
}

const RawMaterialsSet = (props: RawMaterialsSetProps) => {
    const [showDetails, setShowDetails] = useState(false);
    const [showPresentation, setShowPresentation] = useState(true);

    return (
        <div className="flex flex-col gap-6">
            <RawMaterialsOverview
                // inQuantity={0}
                inTotalPerNpt={props.inData.total}
                // inTotalPerMl={0}
                inShowDetails={showDetails}
                inShowPresentation={showPresentation}
                // onQuantityChange={handleQuantityChange}
                onShowDetailsChange={setShowDetails}
                onShowPresentation={setShowPresentation}
            />
            {showDetails && (
                <RawMaterialsAccourd
                    inData={props.inData}
                    inShowPresentation={showPresentation}
                    onChange={props.onChange}
                />
            )}
            <RawMaterialsOtherCosts
                inData={props.inAdditionalCosts}
                inCentralType={props.inCentralType}
            />
        </div>
    );
}

export default RawMaterialsSet;