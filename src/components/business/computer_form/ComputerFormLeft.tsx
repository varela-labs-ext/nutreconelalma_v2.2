import { useState } from "react";
import ComputerFormLeftTop from "./ComputerFormLeftTop";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";
import RawMaterialsForm from "@/components/business/Raw_Materials/RawMaterialsForm";

interface ComputerFormLeftProps {
    setMixingCenterConfigLoad: (inStatus: boolean) => void;
    setRawMaterialsLoad: (inStatus: boolean) => void;

}

const ComputerFormLeft = (props: ComputerFormLeftProps) => {
    const [selectedCentralType, setSelectedCentralType] = useState(CentralTypeIdEnum.Manual);
    const [selectedPopulationType, setSelectedPopulationType] = useState(PopulationTypeIdEnum.Adulto);


    return (
        <>
            <div>
                <ComputerFormLeftTop
                    inCentralType={selectedCentralType}
                    onSetLoading={props.setMixingCenterConfigLoad}
                    onPopulationTypeChange={setSelectedPopulationType}
                    onCentralTypeChange={setSelectedCentralType}
                />
            </div>
            <div>
                <RawMaterialsForm
                    inCentralType={selectedCentralType}
                    inPopulationType={selectedPopulationType}
                    onSetLoading={props.setRawMaterialsLoad}
                />
            </div>
        </>
    );
}

export default ComputerFormLeft;