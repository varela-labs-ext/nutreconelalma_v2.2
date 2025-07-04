
import CentralTypeIdEnum from "../enums/CentralTypeIdEnum";
import PopulationTypeIdEnum from "../enums/PopulationTypeIdEnum";
import MateriaPrimaModel from "../models/materiaPrima/MateriaPrimaModel";
import MateriaPrimaAdultoStarter from "./MateriaPrimaAdultoStarter";
import MateriaPrimaNeonatalStarter from "./MateriaPrimaNeonatalStarter";
import MateriaPrimaPediatricaStarter from "./MateriaPrimaPediatricaStarter";

class MateriaPrimaStarter {

    private _adultoStarter: MateriaPrimaAdultoStarter;
    private _neonatalStarter: MateriaPrimaNeonatalStarter;
    private _pediatricaStarter: MateriaPrimaPediatricaStarter;

    protected constructor() {
        this._adultoStarter = new MateriaPrimaAdultoStarter();
        this._neonatalStarter = new MateriaPrimaNeonatalStarter();
        this._pediatricaStarter = new MateriaPrimaPediatricaStarter();
    }


    public iniciarInsumos(inItem: MateriaPrimaModel, inTipoCentral: CentralTypeIdEnum, inTipoPoblacion: PopulationTypeIdEnum): void {
        inItem.cantidad = 1;
        inItem.total = 0;
        inItem.totalPorMl = 0;

        switch (inTipoPoblacion) {
            case PopulationTypeIdEnum.Neonatal:
                this._neonatalStarter.iniciarInsumos(inItem, inTipoCentral);
                break
            case PopulationTypeIdEnum.Pediatrica:
                this._pediatricaStarter.iniciarInsumos(inItem, inTipoCentral);
                break
            case PopulationTypeIdEnum.Adulto:
            default:
                this._adultoStarter.iniciarInsumos(inItem, inTipoCentral);
                break
        }
    }

    private static _instance: MateriaPrimaStarter

    /* SINGLETON FOR THIS CLASS */
    public static getInstance(): MateriaPrimaStarter {
        if (!MateriaPrimaStarter._instance) {
            MateriaPrimaStarter._instance = new MateriaPrimaStarter();
        }
        return MateriaPrimaStarter._instance;
    }
}

export default MateriaPrimaStarter;