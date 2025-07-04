
import CentralTypeIdEnum from "../enums/CentralTypeIdEnum";
import PopulationTypeIdEnum from "../enums/PopulationTypeIdEnum";
import RawMaterialsModel from "../models/materiaPrima/RawMaterialsModel";
import MateriaPrimaAdultoStarter from "./MateriaPrimaAdultoStarter";
import MateriaPrimaNeonatalStarter from "./MateriaPrimaNeonatalStarter";
import MateriaPrimaPediatricaStarter from "./MateriaPrimaPediatricaStarter";

class RawMaterialStarter {

    private _adultoStarter: MateriaPrimaAdultoStarter;
    private _neonatalStarter: MateriaPrimaNeonatalStarter;
    private _pediatricaStarter: MateriaPrimaPediatricaStarter;

    protected constructor() {
        this._adultoStarter = new MateriaPrimaAdultoStarter();
        this._neonatalStarter = new MateriaPrimaNeonatalStarter();
        this._pediatricaStarter = new MateriaPrimaPediatricaStarter();
    }


    public iniciarInsumos(inItem: RawMaterialsModel, inTipoCentral: CentralTypeIdEnum, inTipoPoblacion: PopulationTypeIdEnum): void {
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

    private static _instance: RawMaterialStarter

    /* SINGLETON FOR THIS CLASS */
    public static getInstance(): RawMaterialStarter {
        if (!RawMaterialStarter._instance) {
            RawMaterialStarter._instance = new RawMaterialStarter();
        }
        return RawMaterialStarter._instance;
    }
}

export default RawMaterialStarter;