
// import CentralTypeIdEnum from "../enums/CentralTypeIdEnum";
// import PopulationTypeIdEnum from "../enums/PopulationTypeIdEnum";
// import RawMaterialModel from "../models/RawMaterialModel";
// import RawMaterialAdultStarter from "./RawMaterialAdultStarter";
// import RawMaterialNeonatalStarter from "./RawMaterialNeonatalStarter";
// import RawMaterialPediatricStarter from "./RawMaterialPediatricStarter";

// class RawMaterialStarter {

//     private _adultStarter: RawMaterialAdultStarter;
//     private _neonatalStarter: RawMaterialNeonatalStarter;
//     private _pediatricStarter: RawMaterialPediatricStarter;

//     protected constructor() {
//         this._adultStarter = new RawMaterialAdultStarter();
//         this._neonatalStarter = new RawMaterialNeonatalStarter();
//         this._pediatricStarter = new RawMaterialPediatricStarter();
//     }


//     public buildRawMaterialModel(inCentralType: CentralTypeIdEnum, inPopulationType: PopulationTypeIdEnum): RawMaterialModel {
//         try {
//             const inItem = new RawMaterialModel();

//             inItem.cantidad = 1;
//             inItem.total = 0;
//             inItem.totalPorMl = 0;

//             switch (inPopulationType) {
//                 case PopulationTypeIdEnum.Neonatal:
//                     this._neonatalStarter.iniciarInsumos(inItem, inCentralType);
//                     break
//                 case PopulationTypeIdEnum.Pediatrica:
//                     this._pediatricStarter.iniciarInsumos(inItem, inCentralType);
//                     break
//                 case PopulationTypeIdEnum.Adulto:
//                 default:
//                     this._adultStarter.iniciarInsumos(inItem, inCentralType);
//                     break
//             }

//             console.log("-------");
//             console.log("-------");
//             console.log(`inCentralType: ${inCentralType}, inPopulationType: ${inPopulationType}`);
//             console.log(inItem);

//             return inItem;
//         } catch (ex) {
//             console.error(ex);
//             throw new Error("UNKNOW");
//         }
//     }

//     private static _instance: RawMaterialStarter

//     /* SINGLETON FOR THIS CLASS */
//     public static getInstance(): RawMaterialStarter {
//         if (!RawMaterialStarter._instance) {
//             RawMaterialStarter._instance = new RawMaterialStarter();
//         }
//         return RawMaterialStarter._instance;
//     }
// }

// export default RawMaterialStarter;