import CentralTypeIdEnum from "../enums/CentralTypeIdEnum";
import InsumoItemModel from "../models/common/InsumoItemModel";
import RawMaterialsModel from "../models/materiaPrima/RawMaterialsModel";


abstract class RawMaterialStarterBase {
    protected ZERO: number;

    public constructor() {
        this.ZERO = 0.00;
    }

    public iniciarInsumos(inItem: RawMaterialsModel, inTipoCentral: CentralTypeIdEnum): void {

        switch (inTipoCentral) {
            case CentralTypeIdEnum.Automatico:
                this.iniciarInsumosCentralAutomaticaComunes(inItem);
                this.iniciarInsumosCentralAutomatica(inItem);
                break;

            //TODO: agregar los otros tipos de centrales aqui.

            case CentralTypeIdEnum.Manual:
            default:
                this.iniciarInsumosCentralManualComunes(inItem);
                this.iniciarInsumosCentralManual(inItem);
                break;
        }
    }

    protected iniciarInsumo(
        item: InsumoItemModel,
        inPresentacionMl: number,
        inCantidadMl: number,
        inCantidadUnidad: number,
        inCostoPorMl: number,
        inCostoPorUnidad: number,
        inCostoTotalPorUnidad: number
    ): void {
        item.presentacionMl = inPresentacionMl;
        item.cantidadMl = inCantidadMl;
        item.cantidadUnidad = inCantidadUnidad;
        item.costoPorMl = inCostoPorMl;
        item.costoPorUnidad = inCostoPorUnidad;
        item.costoTotalPorUnidad = inCostoTotalPorUnidad;
        item.excluirDelCalculo = false;
    }

    protected abstract iniciarInsumosCentralManualComunes(inItem: RawMaterialsModel): void;

    protected abstract iniciarInsumosCentralAutomaticaComunes(inItem: RawMaterialsModel): void;

    protected abstract iniciarInsumosCentralManual(inItem: RawMaterialsModel): void;

    protected abstract iniciarInsumosCentralAutomatica(inItem: RawMaterialsModel): void;
}

export default RawMaterialStarterBase;