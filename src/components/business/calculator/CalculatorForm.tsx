import IconTab from "@/components/ui/tabs/icon_tabs/IconTab";
import IconTabs from "@/components/ui/tabs/icon_tabs/IconTabs";
import { useState } from "react";
import { FileText, Home } from "lucide-react";
import CalculatorFormResults from "./CalculatorFormResults";
import CalculatorFormSets from "./CalculatorFormSets";

interface CalculatorFormProps {

}

const CalculatorForm = (props: CalculatorFormProps) => {
    const [activeComputerTabIndex, setActiveComputerTabIndex] = useState<number>(0);

    const handleOnTabsChange = (index: number) => {
        console.log('Cambió a tab:', index); // Just in case
        setActiveComputerTabIndex(index);
    }

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-4 sm:mb-0">
                    CALCULADORA NUTRICIÓN HOSPITALARIA
                </h1>
            </div>
            {/* setActiveTabIndex={setActiveTabIndex} */}
            <IconTabs defaultTabIndex={0} activeTabIndex={activeComputerTabIndex} setActiveTabIndex={handleOnTabsChange}>
                <IconTab label="Central de Mezclas" icon={Home}>
                    <CalculatorFormSets />
                    {/* <ComputerFormLeft
                            inMixingCenterSettings={mixingCenterSettingsData ?? new MixingCenterSettingsModel()}
                            inRawMaterial={rawMaterialsData ?? new RawMaterialGroupModel()}
                            onMixingCenterSettingsChange={handleOnMixingCenterSettingsChange}
                            onRawMaterialChange={handleOnRawMaterialChange}
                        // setMixingCenterConfigLoad={setMixingCenterLoad}
                        // setRawMaterialsLoad={setRawMaterialsLoad}
                        /> */}
                </IconTab>

                <IconTab label="Resultados" icon={FileText}>
                    <CalculatorFormResults />
                </IconTab>
            </IconTabs>
        </div>
    );
}

export default CalculatorForm;