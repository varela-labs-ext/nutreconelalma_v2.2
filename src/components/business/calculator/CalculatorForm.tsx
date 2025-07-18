import IconTab from "@/components/ui/tabs/icon_tabs/IconTab";
import IconTabs from "@/components/ui/tabs/icon_tabs/IconTabs";
import { useState } from "react";
import { FileText, Home } from "lucide-react";
import CalculatorFormResults from "./CalculatorFormResults";
import CalculatorFormSets from "./CalculatorFormSets";
import SectionTitle from "@/components/ui/titles/SectionTitle";
import useMixingCenterContext from "@/context/MixingCenterContext/useMixingCenterContext";
import { useMixingCenterComparison } from "@/context/ComparisonContext/MixingCenterComparisonContext";


interface CalculatorFormProps {

}

const CalculatorForm = (props: CalculatorFormProps) => {
    const { activeFilename } = useMixingCenterContext();
    const { setStartComparision } = useMixingCenterComparison();


    const [activeComputerTabIndex, setActiveComputerTabIndex] = useState<number>(0);

    const handleOnSetActiveTabIndexChaged = (index: number): void => {
        console.log('Cambió a tab:', index); // Just in case
        setActiveComputerTabIndex(index);
    }

    const handleOnTabChanged = (index: number): void => {
        if (index === 1) {
            setStartComparision(true);
        }
    }

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-4 sm:mb-0">
                    CALCULADORA NUTRICIÓN HOSPITALARIA
                </h1>
            </div>
            <div>
                {activeFilename && (
                    <SectionTitle titleText={activeFilename} />
                )}
            </div>
            {/* setActiveTabIndex={setActiveTabIndex} */}
            <IconTabs
                defaultTabIndex={0}
                activeTabIndex={activeComputerTabIndex}
                setActiveTabIndex={handleOnSetActiveTabIndexChaged}
                onTabChange={handleOnTabChanged}
            >
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