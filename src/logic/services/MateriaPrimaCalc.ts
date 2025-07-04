// import InsumoItemModel from "../models/common/InsumoItemModel";
// import RawMaterialsModel from "../models/materiaPrima/RawMaterialsModel";
// import InsumoItemCalc from "./InsumoItemCalc";
// import BaseCalc from "./BaseCalc";

// class MateriaPrimaCalc extends BaseCalc<RawMaterialsModel> {

//     public calcular(inItem: RawMaterialsModel): void {
//         if (!this.isValidObj(inItem)) {
//             console.log("Objecto 'RawMaterialsModel' no existe.");
//             console.log(inItem);
//             return;
//         }

//         const calc = new InsumoItemCalc();
//         let total = 0;
//         let totalPorMl = 0;

//         Object.keys(inItem).forEach((clave) => {
//             const subItem = (inItem as Record<string, any>)[clave];

//             if (subItem instanceof InsumoItemModel) {
//                 const insumo = subItem as InsumoItemModel;

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