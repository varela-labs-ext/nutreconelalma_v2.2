// import ClinicaInputModel from "../models/common/ClinicaInputModel";
// import RawMaterialModel from "../models/materiaPrima/RawMaterialModel";
// import InsumoItemCalc from "./InsumoItemCalc";
// import BaseCalc from "./BaseCalc";

// class MateriaPrimaCalc extends BaseCalc<RawMaterialModel> {

//     public calcular(inItem: RawMaterialModel): void {
//         if (!this.isValidObj(inItem)) {
//             console.log("Objecto 'RawMaterialModel' no existe.");
//             console.log(inItem);
//             return;
//         }

//         const calc = new InsumoItemCalc();
//         let total = 0;
//         let totalPorMl = 0;

//         Object.keys(inItem).forEach((clave) => {
//             const subItem = (inItem as Record<string, any>)[clave];

//             if (subItem instanceof ClinicaInputModel) {
//                 const insumo = subItem as ClinicaInputModel;

//                 if (insumo && insumo.excluirDelCalculo === false) {
//                     calc.calcular(insumo);
//                     total += insumo.costoTotalPorUnidad;
//                     totalPorMl += insumo.costoPorMl;
//                 } else {
//                     console.log(`Propiedad: ${clave} EXCLUIDA`);
//                 }
//             }
//         });

//         inItem.total = total;
//         inItem.totalPorMl = totalPorMl;
//     }
// }

// export default MateriaPrimaCalc;