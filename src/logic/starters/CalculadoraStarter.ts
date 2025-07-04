

import TipoCentralIdEnum from "../enums/TipoCentralIdEnum";
import TipoPoblacionIdEnum from "../enums/TipoPoblacionIdEnum";
import ProduccionSettingsModel from "../models/common/ProduccionSettingsModel";

class CalculadoraStarter {
    public iniciarIngresoDatos(inItem: ProduccionSettingsModel, inTipoCentral: TipoCentralIdEnum, inTipoPoblacion: TipoPoblacionIdEnum): void {
        inItem.porcentajeAdulto = 34;
        inItem.porcentajeNeonatal = 33;
        inItem.porcentajePediatrico = 33;

        inItem.tipoCentral = inTipoCentral;
        inItem.tipoPoblacion = inTipoPoblacion;

        inItem.produccionDia = 10;
        inItem.lineasProduccion = 4;
    }

    // public iniciarValores(inItem: CalculadoraModel): void {

    //     inItem.porcentajeAdulto = 34;
    //     inItem.porcentajeNeonatal = 33;
    //     inItem.porcentajePediatrico = 33;

    //     CentralMezclasStarter.getInstance().iniciarValores(inItem.centralMezclasManual, inItem.produccionNutricion, TipoCentralIdEnum.Manual);

    //     CentralMezclasStarter.getInstance().iniciarValores(inItem.centralMezclasAutomatic, inItem.produccionNutricion, TipoCentralIdEnum.Automatico);

    //     console.log("CalculadoraStarter: Inicializando Calculadora");
    //     console.log(inItem);
    // }

    private static _instance: CalculadoraStarter

    /* SINGLETON FOR THIS CLASS */
    public static getInstance(): CalculadoraStarter {
        if (!CalculadoraStarter._instance) {
            CalculadoraStarter._instance = new CalculadoraStarter();
        }
        return CalculadoraStarter._instance;
    }
}

export default CalculadoraStarter;