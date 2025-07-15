import AccordionGroup from "@/components/ui/accordions/AccordionGroup";
import AccordionItem from "@/components/ui/accordions/AccordionItem";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import MaintenanceCostsGroupModel from "@/logic/models/operating_resources/MaintenanceCostsGroupModel";
import ProductionCostsGroupModel from "@/logic/models/operating_resources/ProductionCostsGroupModel";
import { Wrench, Factory } from "lucide-react";
import ProductionCostsSet from "./production_costs/ProductionCostsSet";
import MaintenanceCostsSet from "./maintenance_costs/MaintenanceCostsSet";

/*
- COSTOS OPERATIVOS
    - COSTOS DE MANTENIMIENTO       MaintC
    - COSTOS DE PRODUCCION          ProdC

nota: COSTOS DE PRODUCCION ES UN ESTIMADO, NO CUMPLE CON LA ESTRUCTURA DE LOS OTROS
*/
interface OperatingCostsAccourdProps {
    inCentralType: CentralTypeIdEnum;
    inMaintenanceCostsData: MaintenanceCostsGroupModel;
    inProductionCostsData: ProductionCostsGroupModel;
    inProductionLines: number;
    inProductionPerMonth: number
    onMaintenanceCostsChange: (inNewItem: MaintenanceCostsGroupModel) => void;
    onProductionCostsChange: (inNewItem: ProductionCostsGroupModel) => void;
}

const OperatingCostsAccourd = (props: OperatingCostsAccourdProps) => {
    return (
        <div>
            <AccordionGroup multiOpen={false} >
                <AccordionItem id="id_MaintC" title="Costos de Mantenimiento" icon={Wrench}>
                    <MaintenanceCostsSet
                        inData={props.inMaintenanceCostsData}
                        inProductionLines={props.inProductionLines}
                        inProductionPerMonth={props.inProductionPerMonth}
                        onChange={props.onMaintenanceCostsChange}
                    />
                </AccordionItem>
                <AccordionItem id="id_ProdC" title="Costos de Producción" icon={Factory}>
                    <ProductionCostsSet
                        inData={props.inProductionCostsData}
                        inProductionLines={props.inProductionLines}
                        inProductionPerMonth={props.inProductionPerMonth}
                        onChange={props.onProductionCostsChange}
                    />
                </AccordionItem>
            </AccordionGroup>
        </div>
    );
}

export default OperatingCostsAccourd;