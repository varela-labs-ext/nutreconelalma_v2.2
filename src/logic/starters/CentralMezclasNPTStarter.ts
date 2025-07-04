// import CentralTypeIdEnum from "@/enums/CentralTypeIdEnum";
// import PopulationTypeIdEnum from "@/enums/PopulationTypeIdEnum";
// import CentralMezclasNPTModel from "@/models/centralMezclas/CentralMezclasNPTModel";
// import MateriaPrimaStarter from "./MateriaPrimaStarter";

// class CentralMezclasNPTStarter {

//     public iniciarValores(inItem: CentralMezclasNPTModel, inTipoCentral: CentralTypeIdEnum, inTipoPoblacion: PopulationTypeIdEnum): void {

//         switch (inTipoCentral) {
//             case CentralTypeIdEnum.Automatico:
//                 this.iniciarCentralNptAutomatica(inItem, inTipoPoblacion);
//                 break;

//             //TODO: agregar los otros tipos de centrales aqui.

//             case CentralTypeIdEnum.Manual:
//             default:
//                 this.iniciarCentralNptManual(inItem, inTipoPoblacion);
//                 break;
//         }

//         MateriaPrimaStarter.getInstance().iniciarInsumos(inItem.costosMateriaPrima, inTipoCentral, inTipoPoblacion);
//     }

//     private iniciarCentralNptManual(inItem: CentralMezclasNPTModel, inTipoPoblacion: PopulationTypeIdEnum): void {
//         switch (inTipoPoblacion) {
//             case PopulationTypeIdEnum.Neonatal:
//                 inItem.porcentajeNutricion = 33;
//                 break;
//             case PopulationTypeIdEnum.Pediatrica:
//                 inItem.porcentajeNutricion = 33;
//                 break
//             case PopulationTypeIdEnum.Adulto:
//             default:
//                 inItem.porcentajeNutricion = 34;
//                 break;
//         }
//     }

//     private iniciarCentralNptAutomatica(inItem: CentralMezclasNPTModel, inTipoPoblacion: PopulationTypeIdEnum): void {
//         switch (inTipoPoblacion) {
//             case PopulationTypeIdEnum.Neonatal:
//                 inItem.porcentajeNutricion = 33;
//                 break;
//             case PopulationTypeIdEnum.Pediatrica:
//                 inItem.porcentajeNutricion = 33;
//                 break
//             case PopulationTypeIdEnum.Adulto:
//             default:
//                 inItem.porcentajeNutricion = 34;
//                 break;
//         }
//     }

//     private static _instance: CentralMezclasNPTStarter

//     /* SINGLETON FOR THIS CLASS */
//     public static getInstance(): CentralMezclasNPTStarter {
//         if (!CentralMezclasNPTStarter._instance) {
//             CentralMezclasNPTStarter._instance = new CentralMezclasNPTStarter();
//         }
//         return CentralMezclasNPTStarter._instance;
//     }
// }

// export default CentralMezclasNPTStarter;