
import MateriaPrimaModel from "../models/materiaPrima/MateriaPrimaModel";
import MateriaPrimaStarterBase from "./MateriaPrimaStarterBase";

class MateriaPrimaPediatricaStarter extends MateriaPrimaStarterBase {
    /* 11 LINES */
    protected iniciarInsumosCentralManualComunes(inItem: MateriaPrimaModel): void {
        this.iniciarInsumo(inItem.AguaEsteril_500ml, 500.00, 0, 1.00, 0, 4000.00, 0); // 4000.00
        // this.iniciarInsumo(inItem.CloruroPotasioVial_10cc, 10.00, 0, 1.00, 0, 1500.00, 0); //1500.00
        // this.iniciarInsumo(inItem.CloruroSodioVial_10cc, 10.00, 0, 1.00, 0, 1500.00, 0); //1500.00
        this.iniciarInsumo(inItem.Complejo_B, 10.00, 0, 0, 0, 3000.00, 0); // 0.00
        // this.iniciarInsumo(inItem.Dextrosa_50p_Bolsa_500cc, 500.00, 0, 0, 0, 10814.00, 0); // 0.00
        // this.iniciarInsumo(inItem.FosfatoPotasioVial_10cc, 10.00, 0, 1.00, 0, 5700.00, 0); //5700.00
        // this.iniciarInsumo(inItem.GluconatoCalcioVial_10cc, 10.00, 0, 0, 0, 1800.00, 0);  // 0.00
        // this.iniciarInsumo(inItem.Multivitaminas, 1.00, 0, 0, 0, 25000.00, 0); // 0.00
        // this.iniciarInsumo(inItem.SulfatoMagnesioVial_10cc, 10.00, 0, 1.00, 0, 1500.00, 0); //1500.00
        this.iniciarInsumo(inItem.Vitamina_C, 5.00, 0, 0, 0, 2000.00, 0); // 0.00
        // this.iniciarInsumo(inItem.VitaminasHidrosolubles, 1.00, 0, 0, 0, 23000.00, 0); //23000.00
    }

    /* 11 LINES */
    protected iniciarInsumosCentralAutomaticaComunes(inItem: MateriaPrimaModel): void {
        this.iniciarInsumo(inItem.AguaEsteril_500ml, 500.00, 98.37, 1.00, 0, 4000.00, 0); // 4000.00
        // this.iniciarInsumo(inItem.CloruroPotasioVial_10cc, 10.00, 0, 1.00, 0, 1500.00, 0); //1500.00
        // this.iniciarInsumo(inItem.CloruroSodioVial_10cc, 10.00, 2.50, 1.00, 0, 1500.00, 0); //1500.00
        this.iniciarInsumo(inItem.Complejo_B, 0, 0, 0, 0, 3000.00, 0); // 0.00
        // this.iniciarInsumo(inItem.Dextrosa_50p_Bolsa_500cc, 500.00, 127.00, 0, 0, 10814.00, 0); // 0.00
        // this.iniciarInsumo(inItem.FosfatoPotasioVial_10cc, 10.00, 2.45, 1.00, 0, 5700.00, 0); //5700.00
        // this.iniciarInsumo(inItem.GluconatoCalcioVial_10cc, 10.00, 2.50, 0, 0, 1800.00, 0); // 0.00
        // this.iniciarInsumo(inItem.Multivitaminas, 0, 5.00, 0, 0, 25000.00, 0); // 0.00
        // this.iniciarInsumo(inItem.SulfatoMagnesioVial_10cc, 10.00, 9.80, 1.00, 0, 1500.00, 0); //1500.00
        this.iniciarInsumo(inItem.Vitamina_C, 0, 0, 0, 0, 2000.00, 0); // 0.00
        // this.iniciarInsumo(inItem.VitaminasHidrosolubles, 0, 0, 0, 0, 23000.00, 0); //23000.00
    }

    /* 10 lines */
    protected iniciarInsumosCentralManual(inItem: MateriaPrimaModel): void {
        // this.iniciarInsumo(inItem.AminoacidosInfantil100Ml, 100.00, 0, 1.00, 0, 40000.00, 0); // 0.00
        // this.iniciarInsumo(inItem.AminoacidosInfantil1000Ml, 1000.00, 0, 0, 0, 20546.6, 0); // 0.00
        // this.iniciarInsumo(inItem.AminoacidosInfantil250Ml, 250.00, 0, 0, 0, 50000.00, 0); // 0.00
        // this.iniciarInsumo(inItem.AminoacidosInfantil500Ml, 500.00, 0, 0, 0, 100000.00, 0); // 0.00
        // this.iniciarInsumo(inItem.Bolsa1000Ml, 1.00, 0, 0, 0, 21000.00, 0); //21000.00
        // this.iniciarInsumo(inItem.Bolsa500Ml, 1.00, 0, 0, 0, 20000.00, 0); // 0.00
        // this.iniciarInsumo(inItem.ElementosTrazaPediatricos10Ml, 10.00, 0, 1.00, 0, 15000.00, 0); //15000.00
        // this.iniciarInsumo(inItem.LipidosLipofundin100Cc, 100.00, 0, 0, 0, 80000.00, 0); // 0.00
        // this.iniciarInsumo(inItem.VitaminasLiposolublesAdulto, 1.00, 0, 1.00, 0, 13000.00, 0); // 0.00
        // this.iniciarInsumo(inItem.VitaminasLiposolublesInfantil, 1.00, 0, 1.00, 0, 13000.00, 0); //13000.00
    }

    /* 12 lines */
    protected iniciarInsumosCentralAutomatica(inItem: MateriaPrimaModel): void {
        // this.iniciarInsumo(inItem.AminoacidosInfantil100Ml, 100.00, 0, 1.00, 0, 40000.00, 0); // 0.00
        // this.iniciarInsumo(inItem.AminoacidosInfantil1000Ml, 1000.00, 0, 0, 0, 20546.6, 0); // 0.00
        // this.iniciarInsumo(inItem.AminoacidosInfantil250Ml, 250.00, 0, 0, 0, 50000.00, 0); // 0.00
        // this.iniciarInsumo(inItem.AminoacidosInfantil500Ml, 500.00, 147, 0, 0, 100000.00, 0); // 29400.00
        // this.iniciarInsumo(inItem.ElementosTrazaPediatricos10Ml, 10.00, 0, 1.00, 0, 15000.00, 0); //15000.00
        // this.iniciarInsumo(inItem.LipidosLipofundin100Cc, 100.00, 73.50, 0, 0, 80000.00, 0); // 58800.00
        // this.iniciarInsumo(inItem.MixingEva1000Ml, 0, 0, 0, 0, 31000.00, 0); // 0.00
        // this.iniciarInsumo(inItem.MixingEva2000Ml, 0, 0, 0, 0, 31000.00, 0); // 0.00
        // this.iniciarInsumo(inItem.MixingEva250Ml, 0, 1.00, 0, 0, 31000.00, 0); //31000.00
        // this.iniciarInsumo(inItem.MixingEva500Ml, 0, 0, 0, 0, 30000.00, 0); // 0.00
        // this.iniciarInsumo(inItem.VitaminasLiposolublesAdulto, 0, 0, 1.00, 0, 13000.00, 0); // 0.00
        // this.iniciarInsumo(inItem.VitaminasLiposolublesInfantil, 0, 0, 1.00, 0, 13000.00, 0); //13000.00
    }

}

export default MateriaPrimaPediatricaStarter;