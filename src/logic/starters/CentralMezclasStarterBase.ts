// import TipoCentralIdEnum from "@/enums/TipoCentralIdEnum";
// import CentralMezclasModel from "@/models/centralMezclas/CentralMezclasModel";
// import CostosMantenimientoStarter from "./CostosMantenimientoStarter";
// import CostosProduccionStarter from "./CostosProduccionStarter";
// import EquiposAutomatizadoStarter from "./EquiposAutomatizadoStarter";
// import EquipoTrabajoEsterilStarter from "./EquipoTrabajoEsterilStarter";
// import MaterialesHigieneLimpiezaStarter from "./MaterialesHigieneLimpiezaStarter";
// import MaterialesProteccionPersonalStarter from "./MaterialesProteccionPersonalStarter";
// import PersonalAuxiliarFarmaciaStarter from "./PersonalAuxiliarFarmaciaStarter";
// import PersonalQuimicoFarmaceuticoStarter from "./PersonalQuimicoFarmaceuticoStarter";
// import ProduccionNutricionModel from "@/models/ProduccionNutricionModel";
// import CentralMezclasNPTStarter from "./CentralMezclasNPTStarter";
// import TipoPoblacionIdEnum from "@/enums/TipoPoblacionIdEnum";


// abstract class CentralMezclasStarterBase<T extends CentralMezclasModel> {

//     public iniciarValores(inItem: T, inProduccionNutricion: ProduccionNutricionModel, inTipoCentral: TipoCentralIdEnum): void {

//         switch (inTipoCentral) {
//             case TipoCentralIdEnum.Automatico:
//                 this.iniciarCentralAutomatica(inItem, inProduccionNutricion);
//                 this.iniciarCentralAutomaticaConfiguracion(inItem, inTipoCentral);
//                 break;

//             //TODO: agregar los otros tipos de centrales aqui.

//             case TipoCentralIdEnum.Manual:
//             default:
//                 this.iniciarCentralManual(inItem, inProduccionNutricion);
//                 this.iniciarCentralManualConfiguracion(inItem, inTipoCentral);
//                 break;
//         }

//         this.iniciarNpts(inItem, inTipoCentral);
//     }

//     protected abstract iniciarCentralManual(inItem: T, inProduccionNutricion: ProduccionNutricionModel): void;

//     protected abstract iniciarCentralAutomatica(inItem: T, inProduccionNutricion: ProduccionNutricionModel): void;

//     private iniciarCentralManualConfiguracion(inItem: T, inTipoCentral: TipoCentralIdEnum): void {
//         CostosMantenimientoStarter.getInstance().iniciarValores(inItem.costosMantenimiento, inTipoCentral);
//         CostosProduccionStarter.getInstance().iniciarValores(inItem.costosProduccion, inTipoCentral);
//         EquipoTrabajoEsterilStarter.getInstance().iniciarValores(inItem.costosEquipoTrabajoEsteril, inTipoCentral);
//         MaterialesHigieneLimpiezaStarter.getInstance().iniciarValores(inItem.costosMaterialesHigieneLimpieza, inTipoCentral);
//         MaterialesProteccionPersonalStarter.getInstance().iniciarValores(inItem.costosMaterialesProteccionPersonal, inTipoCentral);
//         PersonalQuimicoFarmaceuticoStarter.getInstance().iniciarValores(inItem.quimicoFarmaceutico, inTipoCentral);
//         PersonalAuxiliarFarmaciaStarter.getInstance().iniciarValores(inItem.auxiliarxFarmacia, inTipoCentral);
//     }

//     private iniciarCentralAutomaticaConfiguracion(inItem: T, inTipoCentral: TipoCentralIdEnum): void {
//         this.iniciarCentralManualConfiguracion(inItem, inTipoCentral);

//         EquiposAutomatizadoStarter.getInstance().iniciarValores(inItem.costosEquiposAutomatizados, TipoCentralIdEnum.Automatico);
//     }

//     protected iniciarNpts(inItem: T, inTipoCentral: TipoCentralIdEnum): void {
//         CentralMezclasNPTStarter.getInstance().iniciarValores(inItem.costosNptAdulto, inTipoCentral, TipoPoblacionIdEnum.Adulto);
//         CentralMezclasNPTStarter.getInstance().iniciarValores(inItem.costosNptNeonatal, inTipoCentral, TipoPoblacionIdEnum.Neonatal);
//         CentralMezclasNPTStarter.getInstance().iniciarValores(inItem.costosNptPediatrica, inTipoCentral, TipoPoblacionIdEnum.Pediatrica);
//     }
// }

// export default CentralMezclasStarterBase;