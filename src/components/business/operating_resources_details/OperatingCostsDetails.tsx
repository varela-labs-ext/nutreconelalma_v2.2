import { AccordionGroup } from "@/components/ui/accordions/AccordionGroup";
import AccordionItem from "@/components/ui/accordions/AccordionItem";
import { Wrench, Factory } from "lucide-react";
import UnitCostDetailsGroup from "../unit_costs/UnitCostDetailsGroup";
import OperatingCostsModel from "@/logic/models/OperatingCostsModel";
import EstimatedCostsDetailsGroup from "../estimated_costs/EstimatedCostsDetailsGroup";
import EstimatedCostItemModel from "@/logic/models/common/EstimatedCostItemModel";
import UnitCostItemModel from "@/logic/models/common/UnitCostItemModel";

/*
- COSTOS OPERATIVOS
    - COSTOS DE MANTENIMIENTO       MaintC
    - COSTOS DE PRODUCCION          ProdC

nota: COSTOS DE PRODUCCION ES UN ESTIMADO, NO CUMPLE CON LA ESTRUCTURA DE LOS OTROS
*/
interface OperatingCostsDetailsProps {
    inData: OperatingCostsModel;
    inMonthlyProductionCapacity: number;
    inProductionLines: number;
    onChange: (inNewItem: OperatingCostsModel) => void;
}

const OperatingCostsDetails = (props: OperatingCostsDetailsProps) => {

    const handleOnMaintenanceCostsChange = (inPropertyName: string, inNewItem: UnitCostItemModel) => {
        //TODO
    }

    const handleOnEstimatedCostsDetailsGroupChange = (inPropertyName: string, inNewItem: EstimatedCostItemModel) => {
        //TODO
    }

    return (
        <div>
            <AccordionGroup multiOpen={false} >
                <AccordionItem id="id_MaintC" title="Costos de Mantenimiento" icon={Wrench}>
                    <UnitCostDetailsGroup
                        inData={props.inData.maintenanceCosts}
                        onInputChange={handleOnMaintenanceCostsChange}
                    />
                </AccordionItem>
                <AccordionItem id="id_ProdC" title="Costos de Producción" icon={Factory}>
                    <EstimatedCostsDetailsGroup
                        inData={props.inData.productionCosts}
                        inMonthlyProductionCapacity={props.inMonthlyProductionCapacity}
                        inProductionLines={props.inProductionLines}
                        onInputChange={handleOnEstimatedCostsDetailsGroupChange}
                    />
                </AccordionItem>
            </AccordionGroup>
        </div>
    );
}

export default OperatingCostsDetails;