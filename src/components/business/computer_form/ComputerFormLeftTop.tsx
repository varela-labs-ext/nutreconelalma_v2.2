import { useState, useEffect } from "react";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import MixingCenterConfigForm from "../mixing_center_config/MixingCenterConfigForm";
import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";
import PanelTabsSelector from "@/components/ui/tabs/PanelTabsSelector";
import { Bot, FlaskConical } from "lucide-react";
import ComputerActionIdEnum from "@/logic/enums/ComputerActionIdEnum";
import MixingCenterSettingsModel from "@/logic/models/common/MixingCenterSettingsModel";


interface ComputerFormLeftTopProps {
    inData: MixingCenterSettingsModel;
    onChange: (inNewData: MixingCenterSettingsModel) => void;
    // inCentralType: CentralTypeIdEnum;
    // onSetLoading: (inStatus: boolean) => void;
    // onPopulationTypeChange: (newValue: PopulationTypeIdEnum) => void;
    // onCentralTypeChange: (newValue: CentralTypeIdEnum) => void;
}

const ComputerFormLeftTop = (props: ComputerFormLeftTopProps) => {
    // const [selectedIndex, setSelectedIndex] = useState(0);

    // useEffect(() => {
    //     setSelectedIndex(props.inCentralType);
    // }, [props.inCentralType]);

    const handleOnTabChange = (inIndex: number) => {
        const newCentralType: CentralTypeIdEnum = inIndex as CentralTypeIdEnum;
        console.log("NEW Central type: " + newCentralType);

        const output: MixingCenterSettingsModel = {
            ...props.inData,
            centralType: newCentralType
        };

        // setSelectedIndex(inIndex);
        // props.onCentralTypeChange(output);
        props.onChange(output);
    }

    const handleOnChange_MC_Config = (inNewData: MixingCenterSettingsModel): void => {
        const output: MixingCenterSettingsModel = {
            ...inNewData
        };

        props.onChange(output);
    }

    return (
        <>
            <MixingCenterConfigForm
                inData={props.inData}
                onChange={handleOnChange_MC_Config}
            // inCentralType={CentralTypeIdEnum.Manual} // TODO ARREGLAR
            // onPopulationTypeChange={props.onPopulationTypeChange}
            // onSetLoading={props.onSetLoading}
            />
            <div className="text-sm font-medium">
                <PanelTabsSelector
                    titles={[
                        { label: "Central de Mezclas Manual", icon: <FlaskConical />, status: "ok" },
                        { label: "Central de Mezclas Automatizada", icon: <Bot />, status: "ok" },
                        // { label: "Apex", icon: <Cpu />, status: "error" },
                    ]}
                    selectedIndex={props.inData.centralType}
                    onSelect={handleOnTabChange}
                />
            </div>
        </>
    );
}

export default ComputerFormLeftTop;