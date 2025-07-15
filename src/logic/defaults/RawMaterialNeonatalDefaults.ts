import RawMaterialModel from "../models/RawMaterialGroupModel";
import DefaultsRawMaterialsBase from "./DefaultsRawMaterialsBase";

class RawMaterialNeonatalDefaults extends DefaultsRawMaterialsBase<RawMaterialModel> {

    protected setCommons_MixingCentral_Manual(inItem: RawMaterialModel): void {
        this.setClinicalInput(inItem.AguaEsteril_500ml, 500.00, 0, 0, 0, 4000.00, 0); //4000.00
        this.setClinicalInput(inItem.CloruroPotasioVial_10cc, 10.00, 0, 1.00, 0, 1500.00, 0); //1500.00
        this.setClinicalInput(inItem.CloruroSodioVial_10cc, 10.00, 0, 1.00, 0, 1500.00, 0); //1500.00
        this.setClinicalInput(inItem.Complejo_B, 10.00, 0.00, 0, 0, 3000.00, 0); // 0.00
        this.setClinicalInput(inItem.Dextrosa_50p_Bolsa_500cc, 500.00, 0, 0, 0, 10814.00, 0); //0.00
        this.setClinicalInput(inItem.FosfatoPotasioVial_10cc, 10.00, 0, 1.00, 0, 5700.00, 0); //5700.00
        this.setClinicalInput(inItem.GluconatoCalcioVial_10cc, 10.00, 0, 0, 0, 1800.00, 0); //1800.00
        this.setClinicalInput(inItem.Multivitaminas, 1.00, 0, 0, 0, 25000.00, 0); //0.00
        this.setClinicalInput(inItem.SulfatoMagnesioVial_10cc, 10.00, 0, 1.00, 0, 1500.00, 0);//1500.00
        this.setClinicalInput(inItem.Vitamina_C, 5.00, 0, 0, 0, 2000.00, 0); //0.00
        this.setClinicalInput(inItem.VitaminasHidrosolubles, 1.00, 0, 0, 0, 23000.00, 0); //23000.00
    }

    protected setOthers_MixingCentral_Manual(inItem: RawMaterialModel): void {
        this.setClinicalInput(inItem.AminoacidosInfantil100Ml, 100.00, 50.00, 1.00, 0, 40000.00, 0); // 20000.00
        this.setClinicalInput(inItem.AminoacidosInfantil1000Ml, 1000.00, 0, 0, 0, 20546.6, 0); // 0.00
        this.setClinicalInput(inItem.AminoacidosInfantil250Ml, 250.00, 0, 0, 0, 50000.00, 0); // 0.00
        this.setClinicalInput(inItem.AminoacidosInfantil500Ml, 500.00, 100.00, 0, 0, 100000.00, 0); // 0.00
        this.setClinicalInput(inItem.Bolsa1000Ml, 1.00, 0, 0, 0, 31000.00, 0); // 0.00
        this.setClinicalInput(inItem.Bolsa500Ml, 1.00, 0, 0, 0, 20000.00, 0); // 20000.00
        this.setClinicalInput(inItem.ElementosTrazaPediatricos10Ml, 10.00, 0, 0, 0, 15000.00, 0); // 15000.00
        this.setClinicalInput(inItem.LipidosLipofundin100Cc, 100.00, 0, 1.00, 0, 80000.00, 0); // 0.00
        this.setClinicalInput(inItem.VitaminasLiposolublesInfantil, 1.00, 0, 0, 0, 13000.00, 0); //13000.00
    }

    protected setCommons_MixingCentral_Automatic(inItem: RawMaterialModel): void {
        this.setClinicalInput(inItem.AguaEsteril_500ml, 500.00, 100.00, 0, 0, 4000.00, 0); //4000.00
        this.setClinicalInput(inItem.CloruroPotasioVial_10cc, 10.00, 0.4, 1.00, 0, 1500.00, 0); //1500.00
        this.setClinicalInput(inItem.CloruroSodioVial_10cc, 10.00, 1.57, 1.00, 0, 1500.00, 0); //1500.00
        this.setClinicalInput(inItem.Complejo_B, 0, 0, 0, 0, 3000.00, 0); //0.00
        this.setClinicalInput(inItem.Dextrosa_50p_Bolsa_500cc, 500.00, 18.00, 0, 0, 10814.00, 0); // 0.00
        this.setClinicalInput(inItem.FosfatoPotasioVial_10cc, 10.00, 0.3624, 1.00, 0, 5700.00, 0); //5700.00
        this.setClinicalInput(inItem.GluconatoCalcioVial_10cc, 10.00, 2.0540, 0, 0, 1800.00, 0); //1800.00
        this.setClinicalInput(inItem.Multivitaminas, 0, 1.00, 0, 0, 25000.00, 0); //0.00
        this.setClinicalInput(inItem.SulfatoMagnesioVial_10cc, 10.00, 0.3624, 1.00, 0, 1500.00, 0); //1500.00
        this.setClinicalInput(inItem.Vitamina_C, 0, 0, 0, 0, 2000.00, 0); //0.00
        this.setClinicalInput(inItem.VitaminasHidrosolubles, 0, 1.00, 0, 0, 23000.00, 0); //23000.00
    }

    protected setOthers_MixingCentral_Automatic(inItem: RawMaterialModel): void {
        this.setClinicalInput(inItem.AminoacidosInfantil100Ml, 100.00, 20.54, 1.00, 0, 40000.00, 0); // 8216.00
        this.setClinicalInput(inItem.AminoacidosInfantil1000Ml, 1000.00, 0, 0, 0, 20546.6, 0); // 0.00
        this.setClinicalInput(inItem.AminoacidosInfantil250Ml, 250.00, 0, 0, 0, 50000.00, 0); // 0.00
        this.setClinicalInput(inItem.AminoacidosInfantil500Ml, 500.00, 0, 0, 0, 100000.00, 0); // 0.00
        this.setClinicalInput(inItem.Bolsa1000Ml, 1000.00, 1.00, 0, 0, 31000.00, 0); // 0.00
        this.setClinicalInput(inItem.Bolsa500Ml, 500.00, 0, 0, 0, 30000.00, 0); // 30000.00
        this.setClinicalInput(inItem.ElementosTrazaPediatricos10Ml, 10.00, 0, 0, 0, 15000.00, 0); // 15000.00
        this.setClinicalInput(inItem.LipidosLipofundin100Cc, 100.00, 10.1490, 1.00, 0, 80000.00, 0); // 8119.20
        this.setClinicalInput(inItem.VitaminasLiposolublesInfantil, 0, 1.00, 0, 0, 13000.00, 0); // 13000.00
    }

}

export default RawMaterialNeonatalDefaults;