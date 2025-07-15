import RawMaterialModel from "../models/RawMaterialGroupModel";
import DefaultsRawMaterialsBase from "./DefaultsRawMaterialsBase";

class RawMaterialAdultDefaults extends DefaultsRawMaterialsBase<RawMaterialModel> {

    protected setCommons_MixingCentral_Manual(inItem: RawMaterialModel): void {
        this.setClinicalInput(inItem.AguaEsteril_500ml, 500, 100, 1.0, 0, 4000.00, 0); // 800.00
        this.setClinicalInput(inItem.CloruroPotasioVial_10cc, 10.00, 30.00, 1.00, 0, 1500.00, 0); //4500.00
        this.setClinicalInput(inItem.CloruroSodioVial_10cc, 10.00, 30.00, 0, 0, 1500.00, 0); //4500.00
        this.setClinicalInput(inItem.Complejo_B, 10.00, 1.00, 0, 0, 3000.00, 0); //300.00
        this.setClinicalInput(inItem.Dextrosa_50p_Bolsa_500cc, 500.00, 250.00, 0, 0, 10814.00, 0); //5407.00
        this.setClinicalInput(inItem.FosfatoPotasioVial_10cc, 10.00, 10.00, 1.00, 0, 5700.00, 0); //5700.00
        this.setClinicalInput(inItem.GluconatoCalcioVial_10cc, 10.00, 20.00, 0, 0, 1800.00, 0); // 3600.00
        this.setClinicalInput(inItem.Multivitaminas, 1.00, 0, 0, 0, 25000.00, 0); //0.00
        this.setClinicalInput(inItem.SulfatoMagnesioVial_10cc, 10.00, 12.00, 1.00, 0, 1500.00, 0); //1800.00
        this.setClinicalInput(inItem.Vitamina_C, 5.00, 1.00, 0, 0, 2000.00, 0); //400.00
        this.setClinicalInput(inItem.VitaminasHidrosolubles, 1.00, 1.00, 0, 0, 23000.00, 0); //23000.00
    }

    protected setOthers_MixingCentral_Manual(inItem: RawMaterialModel): void {
        this.setClinicalInput(inItem.Aminoacidos15_1000Ml, 1000.00, 0, 0, 0, 135000.00, 0); // 0.00
        this.setClinicalInput(inItem.Aminoacidos15_500Ml, 500.00, 0, 0, 0, 66000.00, 0); // 0.00
        this.setClinicalInput(inItem.AminoacidosConElectrolitos10_500Ml, 500.00, 0, 0, 0, 61000.00, 0); // 0.00
        this.setClinicalInput(inItem.AminoacidosSinElectrolitos10_500Ml, 500.00, 600.00, 1.00, 0, 40000.00, 0); // 48000.00
        this.setClinicalInput(inItem.Bolsa2000Ml, 1.00, 1.00, 1.00, 0, 39000.00, 0); // 39000.00
        this.setClinicalInput(inItem.Bolsa500Ml, 1.00, 0, 0, 0, 30000.00, 0); // 0.00
        this.setClinicalInput(inItem.ElementosTraza10Ml, 10.00, 1.00, 1.00, 0, 20000.00, 0); //2000.00
        this.setClinicalInput(inItem.GlicerofosfatoSodio20Ml, 20.00, 0, 1.00, 0, 20000.00, 0); // 0.00
        this.setClinicalInput(inItem.LipidosLipofundin500Cc, 500.00, 200.00, 0, 0, 80000.00, 0); //32000.00
        this.setClinicalInput(inItem.Tiamina, 5.00, 1.00, 0, 0, 3000.00, 0); // 600.00
        this.setClinicalInput(inItem.VitaminasLiposolublesAdulto, 1.00, 1.00, 1.00, 0, 13000.00, 0); // 13000.00
    }

    protected setCommons_MixingCentral_Automatic(inItem: RawMaterialModel): void {
        this.setClinicalInput(inItem.AguaEsteril_500ml, 500, 100, 1.0, 0, 4000.00, 0); //4000.00
        this.setClinicalInput(inItem.CloruroPotasioVial_10cc, 10.00, 30.00, 1.00, 0, 1500.00, 0); //1500.00
        this.setClinicalInput(inItem.CloruroSodioVial_10cc, 10.00, 30.00, 0, 0, 1500.00, 0); //1500.00
        this.setClinicalInput(inItem.Complejo_B, 0, 1.00, 0, 0, 3000.00, 0); //0.00
        this.setClinicalInput(inItem.Dextrosa_50p_Bolsa_500cc, 500.00, 250.00, 0, 0, 10814.00, 0); //10814.00
        this.setClinicalInput(inItem.FosfatoPotasioVial_10cc, 10.00, 10.00, 1.00, 0, 5700.00, 0); //5700.00
        this.setClinicalInput(inItem.GluconatoCalcioVial_10cc, 10.00, 20.00, 0, 0, 1800.00, 0); //1800.00
        this.setClinicalInput(inItem.Multivitaminas, 0, 0, 0, 0, 25000.00, 0); //0.00
        this.setClinicalInput(inItem.SulfatoMagnesioVial_10cc, 10.00, 12.00, 1.00, 0, 1500.00, 0); //1500.00
        this.setClinicalInput(inItem.Vitamina_C, 0, 1.00, 0, 0, 2000.00, 0); //0.00
        this.setClinicalInput(inItem.VitaminasHidrosolubles, 0, 1.00, 0, 0, 23000.00, 0); //23000.00
    }

    protected setOthers_MixingCentral_Automatic(inItem: RawMaterialModel): void {
        this.setClinicalInput(inItem.Aminoacidos15_1000Ml, 1000.00, 0, 0, 0, 135000.00, 0); // 0.00
        this.setClinicalInput(inItem.Aminoacidos15_500Ml, 500.00, 0, 0, 0, 66000.00, 0); // 0.00
        this.setClinicalInput(inItem.AminoacidosConElectrolitos10_500Ml, 500.00, 0, 0, 0, 61000.00, 0); // 0.00
        this.setClinicalInput(inItem.AminoacidosSinElectrolitos10_500Ml, 500.00, 600.00, 1.00, 0, 40000.00, 0); //40000.00
        this.setClinicalInput(inItem.ElementosTraza10Ml, 10.00, 0, 1.00, 0, 20000.00, 0); //20000.00
        this.setClinicalInput(inItem.GlicerofosfatoSodio20Ml, 20.00, 0, 1.00, 0, 20000.00, 0); //20000.00
        this.setClinicalInput(inItem.LipidosLipofundin500Cc, 500.00, 200.00, 0, 0, 80000.00, 0); //80000.00
        this.setClinicalInput(inItem.MixingEva1000Ml, 0, 0, 0, 0, 31000.00, 0); // 0.00
        this.setClinicalInput(inItem.MixingEva2000Ml, 0, 1.00, 1.00, 0, 39000.00, 0); //39000.00
        this.setClinicalInput(inItem.MixingEva250Ml, 1000.00, 0, 0, 0, 31000.00, 0); // 0.00
        this.setClinicalInput(inItem.MixingEva500Ml, 500.00, 0, 0, 0, 30000.00, 0); // 0.00
        this.setClinicalInput(inItem.Tiamina, 0, 1.00, 0, 0, 3000.00, 0); // 0.00
        this.setClinicalInput(inItem.VitaminasLiposolublesAdulto, 0, 1.00, 1.00, 0, 13000.00, 0); //13000.00
    }

}

export default RawMaterialAdultDefaults;