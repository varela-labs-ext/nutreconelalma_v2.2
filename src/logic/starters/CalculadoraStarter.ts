

import CentralTypeIdEnum from "../enums/CentralTypeIdEnum";
import PopulationTypeIdEnum from "../enums/PopulationTypeIdEnum";
import CentralConfigModel from "../models/common/CentralConfigModel";

class CalculadoraStarter {
    public buildCentralConfigModel(): CentralConfigModel {
        //inCentralType: CentralTypeIdEnum, inPopulationType: PopulationTypeIdEnum
        const inItem: CentralConfigModel = new CentralConfigModel();

        inItem.percentPerAdult = 34;
        inItem.percentPerNeonatal = 33;
        inItem.percentPerPediatric = 33;

        inItem.centralType = CentralTypeIdEnum.Manual;
        inItem.populationType = PopulationTypeIdEnum.Adulto;

        inItem.productionPerDay = 10;
        inItem.productionLines = 4;

        return inItem;
    }

    // public iniciarValores(inItem: CalculadoraModel): void {

    //     inItem.porcentajeAdulto = 34;
    //     inItem.porcentajeNeonatal = 33;
    //     inItem.porcentajePediatrico = 33;

    //     CentralMezclasStarter.getInstance().iniciarValores(inItem.centralMezclasManual, inItem.produccionNutricion, CentralTypeIdEnum.Manual);

    //     CentralMezclasStarter.getInstance().iniciarValores(inItem.centralMezclasAutomatic, inItem.produccionNutricion, CentralTypeIdEnum.Automatico);

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