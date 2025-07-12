// import { AccordionGroup } from "@/components/ui/accordions/AccordionGroup";
// import AccordionItem from "@/components/ui/accordions/AccordionItem";
// import { Wrench, Factory } from "lucide-react";
// import UnitCostDetailsGroup from "../unit_costs/UnitCostDetailsGroup";
// import EstimatedCostsDetailsGroup from "../estimated_costs/EstimatedCostsDetailsGroup";
// import EstimatedCostItemModel from "@/logic/models/row_item/EstimatedCostItemRowModel";
// import UnitCostItemModel from "@/logic/models/row_item/UnitCostItemRowModel";
// import ProductionCostsGroupModel from "@/logic/models/operating_resources/ProductionCostsGroupModel";
// import MaintenanceCostsGroupModel from "@/logic/models/operating_resources/MaintenanceCostsGroupModel";
// import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";

// /*
// - COSTOS OPERATIVOS
//     - COSTOS DE MANTENIMIENTO       MaintC
//     - COSTOS DE PRODUCCION          ProdC

// nota: COSTOS DE PRODUCCION ES UN ESTIMADO, NO CUMPLE CON LA ESTRUCTURA DE LOS OTROS
// */
// interface OperatingCostsDetailsProps {
//     inCentralType: CentralTypeIdEnum;
//     inMaintenanceCostsData: MaintenanceCostsGroupModel;
//     inProductionCostsData: ProductionCostsGroupModel;
//     inMonthlyProductionCapacity: number;
//     inProductionLines: number;
//     onMaintenanceCostsChange: (inNewItem: MaintenanceCostsGroupModel) => void;
//     onProductionCostsChange: (inNewItem: ProductionCostsGroupModel) => void;
// }

// const OperatingCostsDetails = (props: OperatingCostsDetailsProps) => {

//     const handleOnMaintenanceCostsChange = (inName: string, inNewItem: UnitCostItemModel) => {
//         const output: MaintenanceCostsGroupModel = {
//             ...props.inMaintenanceCostsData,
//             [inName]: inNewItem
//         };
//         props.onMaintenanceCostsChange(output);
//     }

//     const handleOnProductionCostsChange = (inName: string, inNewItem: EstimatedCostItemModel) => {
//         const output: ProductionCostsGroupModel = {
//             ...props.inProductionCostsData,
//             [inName]: inNewItem
//         };
//         props.onProductionCostsChange(output);
//     }

//     return (
//         <div>
//             <AccordionGroup multiOpen={false} >
//                 <AccordionItem id="id_MaintC" title="Costos de Mantenimiento" icon={Wrench}>
//                     <UnitCostDetailsGroupX
//                         inCentralType={props.inCentralType}
//                         inData={props.inMaintenanceCostsData}
//                         onInputChange={handleOnMaintenanceCostsChange}
//                     />
//                 </AccordionItem>
//                 <AccordionItem id="id_ProdC" title="Costos de Producción" icon={Factory}>
//                     <EstimatedCostsDetailsGroup
//                         inData={props.inProductionCostsData}
//                         inMonthlyProductionCapacity={props.inMonthlyProductionCapacity}
//                         inProductionLines={props.inProductionLines}
//                         onInputChange={handleOnProductionCostsChange}
//                     />
//                 </AccordionItem>
//             </AccordionGroup>
//         </div>
//     );
// }

// export default OperatingCostsDetails;