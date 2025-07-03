import TipoCentralIdEnum from "../enums/TipoCentralIdEnum";
import InsumoItemModel from "../models/common/InsumoItemModel";
import MateriaPrimaModel from "../models/materiaPrima/MateriaPrimaModel";


abstract class MateriaPrimaStarterBase {
    protected ZERO: number;

    public constructor() {
        this.ZERO = 0.00;
    }

    public iniciarInsumos(inItem: MateriaPrimaModel, inTipoCentral: TipoCentralIdEnum): void {

        switch (inTipoCentral) {
            case TipoCentralIdEnum.Automatico:
                this.iniciarInsumosCentralAutomaticaComunes(inItem);
                this.iniciarInsumosCentralAutomatica(inItem);
                break;

            //TODO: agregar los otros tipos de centrales aqui.

            case TipoCentralIdEnum.Manual:
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

    protected abstract iniciarInsumosCentralManualComunes(inItem: MateriaPrimaModel): void;

    protected abstract iniciarInsumosCentralAutomaticaComunes(inItem: MateriaPrimaModel): void;

    protected abstract iniciarInsumosCentralManual(inItem: MateriaPrimaModel): void;

    protected abstract iniciarInsumosCentralAutomatica(inItem: MateriaPrimaModel): void;
}

export default MateriaPrimaStarterBase;