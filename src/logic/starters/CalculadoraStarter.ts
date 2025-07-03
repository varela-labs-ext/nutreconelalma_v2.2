
// import CentralMezclasStarter from "./CentralMezclasStarter";

// class CalculadoraStarter {
//     public iniciarValores(inItem: CalculadoraModel): void {

//         inItem.produccionNutricion.porcentajeAdulto = 34;
//         inItem.produccionNutricion.porcentajeNeonatal = 33;
//         inItem.produccionNutricion.porcentajePediatrico = 33;

//         CentralMezclasStarter.getInstance().iniciarValores(inItem.centralMezclasManual, inItem.produccionNutricion, TipoCentralIdEnum.Manual);

//         CentralMezclasStarter.getInstance().iniciarValores(inItem.centralMezclasAutomatic, inItem.produccionNutricion, TipoCentralIdEnum.Automatico);

//         console.log("CalculadoraStarter: Inicializando Calculadora");
//         console.log(inItem);
//     }

//     private static _instance: CalculadoraStarter

//     /* SINGLETON FOR THIS CLASS */
//     public static getInstance(): CalculadoraStarter {
//         if (!CalculadoraStarter._instance) {
//             CalculadoraStarter._instance = new CalculadoraStarter();
//         }
//         return CalculadoraStarter._instance;
//     }
// }

// export default CalculadoraStarter;