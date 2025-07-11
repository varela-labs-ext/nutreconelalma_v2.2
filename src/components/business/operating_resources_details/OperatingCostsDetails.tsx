import { AccordionGroup } from "@/components/ui/accordions/AccordionGroup";
import AccordionItem from "@/components/ui/accordions/AccordionItem";
import { Wrench, Factory } from "lucide-react";
import UnitCostDetailsGroup from "../unit_costs/UnitCostDetailsGroup";
import EstimatedCostsDetailsGroup from "../estimated_costs/EstimatedCostsDetailsGroup";
import EstimatedCostItemModel from "@/logic/models/common/EstimatedCostItemModel";
import UnitCostItemModel from "@/logic/models/common/UnitCostItemModel";
import ProductionCostsModel from "@/logic/models/operativos/ProductionCostsModel";
import MaintenanceCostsModel from "@/logic/models/operativos/MaintenanceCostsModel";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";

/*
- COSTOS OPERATIVOS
    - COSTOS DE MANTENIMIENTO       MaintC
    - COSTOS DE PRODUCCION          ProdC

nota: COSTOS DE PRODUCCION ES UN ESTIMADO, NO CUMPLE CON LA ESTRUCTURA DE LOS OTROS
*/
interface OperatingCostsDetailsProps {
    inCentralType: CentralTypeIdEnum;
    inMaintenanceCostsData: MaintenanceCostsModel;
    inProductionCostsData: ProductionCostsModel;
    inMonthlyProductionCapacity: number;
    inProductionLines: number;
    onMaintenanceCostsChange: (inNewItem: MaintenanceCostsModel) => void;
    onProductionCostsChange: (inNewItem: ProductionCostsModel) => void;
}

const OperatingCostsDetails = (props: OperatingCostsDetailsProps) => {

    const handleOnMaintenanceCostsChange = (inName: string, inNewItem: UnitCostItemModel) => {
        const output: MaintenanceCostsModel = {
            ...props.inMaintenanceCostsData,
            [inName]: inNewItem
        };
        props.onMaintenanceCostsChange(output);
    }

    const handleOnProductionCostsChange = (inName: string, inNewItem: EstimatedCostItemModel) => {
        const output: ProductionCostsModel = {
            ...props.inProductionCostsData,
            [inName]: inNewItem
        };
        props.onProductionCostsChange(output);
    }

    return (
        <div>
            <AccordionGroup multiOpen={false} >
                <AccordionItem id="id_MaintC" title="Costos de Mantenimiento" icon={Wrench}>
                    <UnitCostDetailsGroup
                        inCentralType={props.inCentralType}
                        inData={props.inMaintenanceCostsData}
                        onInputChange={handleOnMaintenanceCostsChange}
                    />
                </AccordionItem>
                <AccordionItem id="id_ProdC" title="Costos de Producción" icon={Factory}>
                    <EstimatedCostsDetailsGroup
                        inData={props.inProductionCostsData}
                        inMonthlyProductionCapacity={props.inMonthlyProductionCapacity}
                        inProductionLines={props.inProductionLines}
                        onInputChange={handleOnProductionCostsChange}
                    />
                </AccordionItem>
            </AccordionGroup>
        </div>
    );
}

export default OperatingCostsDetails;