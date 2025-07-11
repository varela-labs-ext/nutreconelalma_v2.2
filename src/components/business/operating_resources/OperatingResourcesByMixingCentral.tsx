import PanelView from "@/components/ui/tabs/panel_views/PanelView";
import PanelViewsSelector from "@/components/ui/tabs/panel_views/PanelViewsSelector";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import OperatingResourcesModels from "@/logic/models/OperatingResourcesModels";
import { PackageOpen, Settings, Users, Wrench } from "lucide-react";
import OperatingCostsDetails from "../operating_resources_details/OperatingCostsDetails";
import OperatingCostsModel from "@/logic/models/OperatingCostsModel";
import StaffCostsDetails from "../operating_resources_details/StaffCostsDetails";
import StaffPersonnelCostsModel from "@/logic/models/StaffPersonnelCostsModel";
import MaterialsNSuppliesCostsDetails from "../operating_resources_details/MaterialsNSuppliesCostsDetails";
import MaterialsNSuppliesCostsModel from "@/logic/models/MaterialsNSuppliesCostsModel";
import OperatingCostsForm from "../operating_resources_subs/OperatingCostsForm";
import StaffPersonnelForm from "../operating_resources_subs/StaffPersonnelCostsForm";
import MaterialsNSuppliesCostsForm from "../operating_resources_subs/MaterialsNSuppliesCostsForm";

interface OperatingResourcesByMixingCentralProps {
    inCentralType: CentralTypeIdEnum;
    // inData: OperatingResourcesModels;
    inMonthlyProductionCapacity: number;
    inProductionLines: number;
}

const OperatingResourcesByMixingCentral = (props: OperatingResourcesByMixingCentralProps) => {

    const getMixingCentralName = (): string => {
        let name = "Central de Mezclas Manual";

        if (props.inCentralType === CentralTypeIdEnum.Automatico) {
            name = "Central de Mezclas Automática";
        }

        return `Parámetros de Operación - ${name}`;
    }

    return (
        <>
            <h3 className="text-lg font-semibold text-green-600 mb-4">{getMixingCentralName()}</h3>
            <PanelViewsSelector defaultIndex={0}>
                <PanelView label="Costos Operativos" icon={<Settings />} status="ok">
                    <OperatingCostsForm
                        inCentralType={props.inCentralType}
                        inMonthlyProductionCapacity={props.inMonthlyProductionCapacity}
                        inProductionLines={props.inProductionLines}
                    />
                </PanelView>
                <PanelView label="Staff / Personal" icon={<Users />} status="warning">
                    <StaffPersonnelForm
                        inCentralType={props.inCentralType}
                    />
                </PanelView>
                <PanelView label="Materiales e Insumos" icon={<PackageOpen />} status="warning">
                    <MaterialsNSuppliesCostsForm
                        inCentralType={props.inCentralType}
                    />
                </PanelView>
            </PanelViewsSelector>
        </>
    );
}

export default OperatingResourcesByMixingCentral;