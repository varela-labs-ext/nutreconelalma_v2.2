import { useState } from "react";
import RawMaterialsOverview from "./RawMaterialsOverview";
import RawMaterialsOtherCosts from "./RawMaterialsOtherCosts";
import AdditionalCostsModel from "@/logic/models/AdditionalCostsModel";
import RawMaterialsAccourd from "./RawMaterialsAccourd";
import RawMaterialGroupModel from "@/logic/models/RawMaterialGroupModel";


interface RawMaterialsSetProps {
    inData: RawMaterialGroupModel;
    onChange: (inNewData: RawMaterialGroupModel) => void;
}

const RawMaterialsSet = (props: RawMaterialsSetProps) => {
    const [showDetails, setShowDetails] = useState(false);
    const [showPresentation, setShowPresentation] = useState(false);

    return (
        <div className="flex flex-col gap-6">
            <RawMaterialsOverview
                // inQuantity={0}
                inTotalPerNpt={0}
                // inTotalPerMl={0}
                inShowDetails={showDetails}
                inShowPresentation={showPresentation}
                // onQuantityChange={handleQuantityChange}
                onShowDetailsChange={setShowDetails}
                onShowPresentation={setShowPresentation}
            />
            {showDetails && (
                <>
                    <RawMaterialsAccourd
                        inData={props.inData}
                        inShowPresentation={showPresentation}
                        onChange={props.onChange}
                    />
                    <RawMaterialsOtherCosts
                        inData={new AdditionalCostsModel()}
                        inShowDetails={true}
                    />
                </>
            )}
        </div>
    );
}

export default RawMaterialsSet;