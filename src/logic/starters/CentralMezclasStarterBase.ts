// import CentralTypeIdEnum from "@/enums/CentralTypeIdEnum";
// import CentralMezclasModel from "@/models/centralMezclas/CentralMezclasModel";
// import CostosMantenimientoStarter from "./CostosMantenimientoStarter";
// import CostosProduccionStarter from "./CostosProduccionStarter";
// import EquiposAutomatizadoStarter from "./EquiposAutomatizadoStarter";
// import EquipoTrabajoEsterilStarter from "./EquipoTrabajoEsterilStarter";
// import MaterialesHigieneLimpiezaStarter from "./MaterialesHigieneLimpiezaStarter";
// import MaterialesProteccionPersonalStarter from "./MaterialesProteccionPersonalStarter";
// import ChemistAssistantSalaryStarter from "./ChemistAssistantSalaryStarter";
// import ChemistSalaryStarter from "./ChemistSalaryStarter";
// import ProduccionNutricionModel from "@/models/ProduccionNutricionModel";
// import CentralMezclasNPTStarter from "./CentralMezclasNPTStarter";
// import PopulationTypeIdEnum from "@/enums/PopulationTypeIdEnum";


// abstract class CentralMezclasStarterBase<T extends CentralMezclasModel> {

//     public iniciarValores(inItem: T, inProduccionNutricion: ProduccionNutricionModel, inTipoCentral: CentralTypeIdEnum): void {

//         switch (inTipoCentral) {
//             case CentralTypeIdEnum.Automatico:
//                 this.iniciarCentralAutomatica(inItem, inProduccionNutricion);
//                 this.iniciarCentralAutomaticaConfiguracion(inItem, inTipoCentral);
//                 break;

//             //TODO: agregar los otros tipos de centrales aqui.

//             case CentralTypeIdEnum.Manual:
//             default:
//                 this.iniciarCentralManual(inItem, inProduccionNutricion);
//                 this.iniciarCentralManualConfiguracion(inItem, inTipoCentral);
//                 break;
//         }

//         this.iniciarNpts(inItem, inTipoCentral);
//     }

//     protected abstract iniciarCentralManual(inItem: T, inProduccionNutricion: ProduccionNutricionModel): void;

//     protected abstract iniciarCentralAutomatica(inItem: T, inProduccionNutricion: ProduccionNutricionModel): void;

//     private iniciarCentralManualConfiguracion(inItem: T, inTipoCentral: CentralTypeIdEnum): void {
//         CostosMantenimientoStarter.getInstance().iniciarValores(inItem.costosMantenimiento, inTipoCentral);
//         CostosProduccionStarter.getInstance().iniciarValores(inItem.costosProduccion, inTipoCentral);
//         EquipoTrabajoEsterilStarter.getInstance().iniciarValores(inItem.costosEquipoTrabajoEsteril, inTipoCentral);
//         MaterialesHigieneLimpiezaStarter.getInstance().iniciarValores(inItem.costosMaterialesHigieneLimpieza, inTipoCentral);
//         MaterialesProteccionPersonalStarter.getInstance().iniciarValores(inItem.costosMaterialesProteccionPersonal, inTipoCentral);
//         ChemistSalaryStarter.getInstance().iniciarValores(inItem.quimicoFarmaceutico, inTipoCentral);
//         ChemistAssistantSalaryStarter.getInstance().iniciarValores(inItem.auxiliarxFarmacia, inTipoCentral);
//     }

//     private iniciarCentralAutomaticaConfiguracion(inItem: T, inTipoCentral: CentralTypeIdEnum): void {
//         this.iniciarCentralManualConfiguracion(inItem, inTipoCentral);

//         EquiposAutomatizadoStarter.getInstance().iniciarValores(inItem.costosEquiposAutomatizados, CentralTypeIdEnum.Automatico);
//     }

//     protected iniciarNpts(inItem: T, inTipoCentral: CentralTypeIdEnum): void {
//         CentralMezclasNPTStarter.getInstance().iniciarValores(inItem.costosNptAdulto, inTipoCentral, PopulationTypeIdEnum.Adulto);
//         CentralMezclasNPTStarter.getInstance().iniciarValores(inItem.costosNptNeonatal, inTipoCentral, PopulationTypeIdEnum.Neonatal);
//         CentralMezclasNPTStarter.getInstance().iniciarValores(inItem.costosNptPediatrica, inTipoCentral, PopulationTypeIdEnum.Pediatrica);
//     }
// }

// export default CentralMezclasStarterBase;