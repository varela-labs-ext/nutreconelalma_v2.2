import { AccordionGroup } from "@/components/ui/accordions/AccordionGroup";
import AccordionItem from "@/components/ui/accordions/AccordionItem";
import { Wrench, Factory } from "lucide-react";
import UnitCostDetailsGroup from "../unit_costs/UnitCostDetailsGroup";
import EstimatedCostsDetailsGroup from "../estimated_costs/EstimatedCostsDetailsGroup";
import EstimatedCostItemModel from "@/logic/models/common/EstimatedCostItemModel";
import UnitCostItemModel from "@/logic/models/common/UnitCostItemModel";
import ProductionCostsModel from "@/logic/models/operativos/ProductionCostsModel";
import MaintenanceCostsModel from "@/logic/models/operativos/MaintenanceCostsModel";

/*
- COSTOS OPERATIVOS
    - COSTOS DE MANTENIMIENTO       MaintC
    - COSTOS DE PRODUCCION          ProdC

nota: COSTOS DE PRODUCCION ES UN ESTIMADO, NO CUMPLE CON LA ESTRUCTURA DE LOS OTROS
*/
interface OperatingCostsDetailsProps {
    inMaintenanceCostsData: MaintenanceCostsModel;
    inProductionCostsData: ProductionCostsModel;
    inMonthlyProductionCapacity: number;
    inProductionLines: number;
    onMaintenanceCostsChange: (inPropertyName: string, inNewItem: UnitCostItemModel) => void;
    onProductionCostsChange: (inPropertyName: string, inNewItem: EstimatedCostItemModel) => void;
}

const OperatingCostsDetails = (props: OperatingCostsDetailsProps) => {
    return (
        <div>
            <AccordionGroup multiOpen={false} >
                <AccordionItem id="id_MaintC" title="Costos de Mantenimiento" icon={Wrench}>
                    <UnitCostDetailsGroup
                        inData={props.inMaintenanceCostsData}
                        onInputChange={props.onMaintenanceCostsChange}
                    />
                </AccordionItem>
                <AccordionItem id="id_ProdC" title="Costos de Producción" icon={Factory}>
                    <EstimatedCostsDetailsGroup
                        inData={props.inProductionCostsData}
                        inMonthlyProductionCapacity={props.inMonthlyProductionCapacity}
                        inProductionLines={props.inProductionLines}
                        onInputChange={props.onProductionCostsChange}
                    />
                </AccordionItem>
            </AccordionGroup>
        </div>
    );
}

export default OperatingCostsDetails;