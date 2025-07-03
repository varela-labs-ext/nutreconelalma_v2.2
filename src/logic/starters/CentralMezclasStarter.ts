// import CentralMezclasStarterBase from "./CentralMezclasStarterBase";



// class CentralMezclasStarter extends CentralMezclasStarterBase<CentralMezclasModel> {

//     protected iniciarCentralManual(inItem: CentralMezclasModel, inProduccionNutricion: ProduccionNutricionModel): void {
//         inProduccionNutricion.lineasProduccion = 4;
//         inProduccionNutricion.produccionDia = 10;

//         inItem.horasQuimicoFarmaceutico1NutricionParental = 0.36;
//         inItem.horasAuxiliarFarmacia1NutricionParental = 0.36;
//         inItem.setManguerasDia = 0;
//     }

//     protected iniciarCentralAutomatica(inItem: CentralMezclasModel, inProduccionNutricion: ProduccionNutricionModel): void {
//         inProduccionNutricion.lineasProduccion = 5;
//         inProduccionNutricion.produccionDia = 10;

//         inItem.horasQuimicoFarmaceutico1NutricionParental = 0.08;
//         inItem.horasAuxiliarFarmacia1NutricionParental = 0.08;
//         inItem.setManguerasDia = 1;
//     }

//     private static _instance: CentralMezclasStarter

//     /* SINGLETON FOR THIS CLASS */
//     public static getInstance(): CentralMezclasStarter {
//         if (!CentralMezclasStarter._instance) {
//             CentralMezclasStarter._instance = new CentralMezclasStarter();
//         }
//         return CentralMezclasStarter._instance;
//     }
// }

// export default CentralMezclasStarter;