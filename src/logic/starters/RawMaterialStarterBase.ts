// import CentralTypeIdEnum from "../enums/CentralTypeIdEnum";
// import ClinicaInputRowModel from "../models/row_item/ClinicaInputRowModel";
// import RawMaterialGroupModel from "../models/RawMaterialGroupModel";


// abstract class RawMaterialStarterBase {
//     protected ZERO: number;

//     public constructor() {
//         this.ZERO = 0.00;
//     }

//     public iniciarInsumos(inItem: RawMaterialGroupModel, inTipoCentral: CentralTypeIdEnum): void {

//         switch (inTipoCentral) {
//             case CentralTypeIdEnum.Automatico:
//                 this.iniciarInsumosCentralAutomaticaComunes(inItem);
//                 this.iniciarInsumosCentralAutomatica(inItem);
//                 break;

//             //TODO: agregar los otros tipos de centrales aqui.

//             case CentralTypeIdEnum.Manual:
//             default:
//                 this.iniciarInsumosCentralManualComunes(inItem);
//                 this.iniciarInsumosCentralManual(inItem);
//                 break;
//         }
//     }

//     protected iniciarInsumo(
//         item: ClinicaInputRowModel,
//         inPresentacionMl: number,
//         inCantidadMl: number,
//         inCantidadUnidad: number,
//         inCostoPorMl: number,
//         inCostoPorUnidad: number,
//         inCostoTotalPorUnidad: number
//     ): void {
//         item.presentacionMl = inPresentacionMl;
//         item.cantidadMl = inCantidadMl;
//         item.cantidadUnidad = inCantidadUnidad;
//         item.costoPorMl = inCostoPorMl;
//         item.costoPorUnidad = inCostoPorUnidad;
//         item.costoTotalPorUnidad = inCostoTotalPorUnidad;
//         item.excluirDelCalculo = false;
//     }

//     protected abstract iniciarInsumosCentralManualComunes(inItem: RawMaterialGroupModel): void;

//     protected abstract iniciarInsumosCentralAutomaticaComunes(inItem: RawMaterialGroupModel): void;

//     protected abstract iniciarInsumosCentralManual(inItem: RawMaterialGroupModel): void;

//     protected abstract iniciarInsumosCentralAutomatica(inItem: RawMaterialGroupModel): void;
// }

// export default RawMaterialStarterBase;