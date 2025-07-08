import { useState, useEffect } from "react";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import MixingCenterConfigForm from "../mixing_center_config/MixingCenterConfigForm";
import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";
import PanelTabsSelector from "@/components/ui/tabs/PanelTabsSelector";
import { Bot, FlaskConical } from "lucide-react";


interface ComputerFormLeftTopProps {
    inCentralType: CentralTypeIdEnum;
    onSetLoading: (inStatus: boolean) => void;
    onPopulationTypeChange: (newValue: PopulationTypeIdEnum) => void;
    onCentralTypeChange: (newValue: CentralTypeIdEnum) => void;
}

const ComputerFormLeftTop = (props: ComputerFormLeftTopProps) => {
    // const [selectedIndex, setSelectedIndex] = useState(0);

    // useEffect(() => {
    //     setSelectedIndex(props.inCentralType);
    // }, [props.inCentralType]);

    const handleOnTabChange = (inIndex: number) => {
        const output: CentralTypeIdEnum = inIndex as CentralTypeIdEnum;
        console.log("Central type: " + output);

        // setSelectedIndex(inIndex);
        props.onCentralTypeChange(output);
    }

    // TODO: por el momento es "Manual", hasta que se define si se necesita o no. Entonces siempre se va a salvar como manual esta parte.
    return (
        <>
            <MixingCenterConfigForm
                // inCentralType={CentralTypeIdEnum.Manual} // TODO ARREGLAR
                onPopulationTypeChange={props.onPopulationTypeChange}
                onSetLoading={props.onSetLoading}
            />
            <div className="text-sm font-medium">
                <PanelTabsSelector
                    titles={[
                        { label: "Central de Mezclas Manual", icon: <FlaskConical />, status: "ok" },
                        { label: "Central de Mezclas Automatizada", icon: <Bot />, status: "ok" },
                        // { label: "Apex", icon: <Cpu />, status: "error" },
                    ]}
                    selectedIndex={props.inCentralType}
                    onSelect={handleOnTabChange}
                />
            </div>
        </>
    );
}

export default ComputerFormLeftTop;