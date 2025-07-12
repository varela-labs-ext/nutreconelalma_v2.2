// import StaffSalaryGroupModel from "../models/operating_resources/StaffSalaryGroupModel";
// import SalaryTaxesStarter from "./SalaryTaxesStarter";

// class ChemistSalaryStarter extends SalaryTaxesStarter<StaffSalaryGroupModel> {

//     protected iniciarComunes(inItem: StaffSalaryGroupModel): void {
//         inItem.costoEmpresa.value = 0;
//         inItem.auxilioTransporte.value = 0;
//         inItem.subsidioTransporte.value = 0;
//         inItem.totalParafiscales.value = 0;
//         inItem.totalCompensacionSalarial.value = 0;
//         inItem.totalValorHora.value = 0;

//         inItem.horasTrabajoMensual.value = 230;
//         inItem.personalPreparacion.value = 1;
//     }

//     protected iniciarCentralManual(inItem: StaffSalaryGroupModel): void {
//         inItem.salarioBasico.value = 3800000.00;
//     }

//     protected iniciarCentralAutomatica(inItem: StaffSalaryGroupModel): void {
//         inItem.salarioBasico.value = 4000000.00;
//     }

//     private static _instance: ChemistSalaryStarter

//     /* SINGLETON FOR THIS CLASS */
//     public static getInstance(): ChemistSalaryStarter {
//         if (!ChemistSalaryStarter._instance) {
//             ChemistSalaryStarter._instance = new ChemistSalaryStarter();
//         }
//         return ChemistSalaryStarter._instance;
//     }
// }

// export default ChemistSalaryStarter;