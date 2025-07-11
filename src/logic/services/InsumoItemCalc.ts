// import numberValidator from "@/utils/numberValidator";
// import ClinicaInputRowModel from "../models/common/ClinicaInputRowModel";
// import BaseCalc from "./BaseCalc";

// class InsumoItemCalc extends BaseCalc<ClinicaInputRowModel> {
//     public calcular(inItem: ClinicaInputRowModel): void {
//         if (inItem === null || inItem == undefined) {
//             console.log("Objecto insumo no existe.")
//             return;
//         }

//         inItem.costoTotalPorUnidad = 0;
//         inItem.costoPorMl = 0;

//         if (!numberValidator.isValidObj(inItem)) { //<- Temporal
//             console.log(`Insumo no calculable. [${inItem.label}]`)
//             return;
//         }

//         if (inItem.presentacionMl === 0) {
//             console.log(`presentacionMl no puede ser 0 [${inItem.label}]`)
//             return;
//         }

//         inItem.costoTotalPorUnidad =
//             (inItem.costoPorUnidad / inItem.presentacionMl)
//             * inItem.cantidadMl;

//         inItem.costoPorMl =
//             (inItem.cantidadMl * inItem.costoPorUnidad)
//             / inItem.presentacionMl;
//     }

// }

// export default InsumoItemCalc;