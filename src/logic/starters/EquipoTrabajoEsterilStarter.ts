
// import SterileWorkEquipmentGroupModel from "../models/operating_resources/SterileWorkEquipmentGroupModel";
// import TotalesStarterBase from "./TotalesStarterBase";


// class EquipoTrabajoEsterilStarter extends TotalesStarterBase<SterileWorkEquipmentGroupModel> {

//     protected iniciarComunes(inItem: SterileWorkEquipmentGroupModel): void {
//         inItem.total.value = 0;
//     }

//     protected iniciarCentralManual(inItem: SterileWorkEquipmentGroupModel): void {
//         this.iniciarItem(inItem.agujasEsteriles, 10.00, 400.00);
//         this.iniciarItem(inItem.boligrafosEtiquetado, (1.00 / 60.00), 1500.00);
//         this.iniciarItem(inItem.bolsaNegraNoContaminados, 0.50, 500.00);
//         this.iniciarItem(inItem.bolsaRojaBiologicos, 0.10, 500.00);
//         this.iniciarItem(inItem.buretroles, 4.00, 2500.00);
//         this.iniciarItem(inItem.compresasEsteriles, 1.00, 2000.00);
//         this.iniciarItem(inItem.contenedoresCortopunzantes, 0.05, 8000.00);
//         this.iniciarItem(inItem.etiquetasIdentificacionBolsas, 1.00, 5000.00);
//         this.iniciarItem(inItem.gasasEsteriles, 3.00, 200.00);
//         this.iniciarItem(inItem.jeringas1ml, 1.00, 400.00);
//         this.iniciarItem(inItem.jeringas5ml, 1.00, 400.00); // Orden ajustado aqui
//         this.iniciarItem(inItem.jeringas10ml, 2.00, 400.00);
//         this.iniciarItem(inItem.jeringas20ml, 3.00, 500.00);
//         this.iniciarItem(inItem.jeringas50ml, 3.00, 2000.00);
//         this.iniciarItem(inItem.toallasAbsorbentesDesechables, 1.00, 1000.00);
//     }

//     protected iniciarCentralAutomatica(inItem: SterileWorkEquipmentGroupModel): void {
//         this.iniciarItem(inItem.agujasEsteriles, 2.00, 400.00);
//         this.iniciarItem(inItem.boligrafosEtiquetado, (1.00 / 60.00), 1500.00);
//         this.iniciarItem(inItem.bolsaNegraNoContaminados, 0.50, 500.00);
//         this.iniciarItem(inItem.bolsaRojaBiologicos, 0.10, 500.00);
//         this.iniciarItem(inItem.buretroles, 0, 2500.00);
//         this.iniciarItem(inItem.compresasEsteriles, 1.00, 2000.00);
//         this.iniciarItem(inItem.contenedoresCortopunzantes, 0.05, 8000.00);
//         this.iniciarItem(inItem.etiquetasIdentificacionBolsas, 1.00, 5000.00);
//         this.iniciarItem(inItem.gasasEsteriles, 2.00, 400.00);
//         this.iniciarItem(inItem.jeringas1ml, 1.00, 400.00);
//         this.iniciarItem(inItem.jeringas5ml, 1.00, 400.00); // Orden ajustado aqui
//         this.iniciarItem(inItem.jeringas10ml, 0, 400.00);
//         this.iniciarItem(inItem.jeringas20ml, 0, 500.00);
//         this.iniciarItem(inItem.jeringas50ml, 0, 2000.00);
//         this.iniciarItem(inItem.toallasAbsorbentesDesechables, 1.00, 1000.00);
//     }

//     private static _instance: EquipoTrabajoEsterilStarter

//     /* SINGLETON FOR THIS CLASS */
//     public static getInstance(): EquipoTrabajoEsterilStarter {
//         if (!EquipoTrabajoEsterilStarter._instance) {
//             EquipoTrabajoEsterilStarter._instance = new EquipoTrabajoEsterilStarter();
//         }
//         return EquipoTrabajoEsterilStarter._instance;
//     }
// }

// export default EquipoTrabajoEsterilStarter;