import IconTabs from "@/components/ui/tabs/icon_tabs/IconTabs";
import OperatingResourcesOverview from "./OperatingResourcesOverview";
import { useState } from "react";
import IconTab from "@/components/ui/tabs/icon_tabs/IconTab";
import { Bot, FlaskConical } from "lucide-react";
import OperatingResourcesModels from "@/logic/models/OperatingResourcesModels";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import OperatingResourcesByMixingCentral from "./OperatingResourcesByMixingCentral";


interface OperatingResourcesFormProps {
}

const OperatingResourcesForm = (props: OperatingResourcesFormProps) => {
    const [activeComputerTabIndex, setActiveComputerTabIndex] = useState<number>(0);

    // const [resourcesMixingCentralManual, setResourcesMixingCentralManual] = useState<OperatingResourcesModels>(new OperatingResourcesModels());
    // const [resourcesMixingCentralAutomatic, setResourcesMixingCentralAutomatic] = useState<OperatingResourcesModels>(new OperatingResourcesModels());

    //OperatingResourcesModels

    const handleOnTabsChange = (index: number) => {
        console.log('Cambió a tab:', index); // Just in case
        setActiveComputerTabIndex(index);
    }

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-4 sm:mb-0">
                    Recursos Operativos
                </h1>
            </div>
            <div>
                <OperatingResourcesOverview />
            </div>
            <div>
                <IconTabs defaultTabIndex={0} activeTabIndex={activeComputerTabIndex} setActiveTabIndex={handleOnTabsChange}>
                    <IconTab label="Central de Mezclas Manual" icon={FlaskConical}>
                        <OperatingResourcesByMixingCentral
                            inCentralType={CentralTypeIdEnum.Manual}
                            inMonthlyProductionCapacity={0}
                            inProductionLines={0}
                        />
                    </IconTab>
                    <IconTab label="Central de Mezclas Automatica" icon={Bot}>
                        <OperatingResourcesByMixingCentral
                            inCentralType={CentralTypeIdEnum.Automatico}
                            inMonthlyProductionCapacity={0}
                            inProductionLines={0}
                        />
                    </IconTab>
                </IconTabs>
            </div>
        </>
    );
}

export default OperatingResourcesForm;