import IconTabs from "@/components/ui/tabs/icon_tabs/IconTabs";
import OperatingResourcesOverview from "./OperatingResourcesOverview";
import IconTab from "@/components/ui/tabs/icon_tabs/IconTab";
import { Bot, FlaskConical } from "lucide-react";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import OperatingResourcesByMixingCentral from "./OperatingResourcesByMixingCentral";
import { useMixingCenterContext } from "@/context/MixingCenterContext/MixingCenterProvider";
import { deepClone } from "@/utils/objectUtils";

interface OperatingResourcesFormProps {
}

const OperatingResourcesForm = (props: OperatingResourcesFormProps) => {
    const {
        currentMixingCenterSettings,
        setCurrentMixingCenterSettings
    } = useMixingCenterContext();

    const getActiveTab = (): number => {
        let index: number = currentMixingCenterSettings.centralType;

        if (index === 0) {
            return index;
        } else {
            return (index - 1);
        }
    }

    const handleOnTabsChange = (index: number) => {
        const newCentralType: CentralTypeIdEnum = (index + 1);
        const newCM = deepClone(currentMixingCenterSettings);
        newCM.centralType = newCentralType;

        setCurrentMixingCenterSettings(newCM);
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
                <IconTabs
                    defaultTabIndex={0}
                    activeTabIndex={getActiveTab()}
                    setActiveTabIndex={handleOnTabsChange}>
                    <IconTab label="Central de Mezclas Manual" icon={FlaskConical}>
                        <OperatingResourcesByMixingCentral
                            inCentralTypeEdt={CentralTypeIdEnum.Manual}
                        />
                    </IconTab>
                    <IconTab label="Central de Mezclas Automatica" icon={Bot}>
                        <OperatingResourcesByMixingCentral
                            inCentralTypeEdt={CentralTypeIdEnum.Automatico}
                        />
                    </IconTab>
                </IconTabs>
            </div>
        </>
    );
}

export default OperatingResourcesForm;