import CentralTypeIdEnum from "../enums/CentralTypeIdEnum";
import CantidadItemModel from "../models/common/CantidadItemModel";
import EstimadoItemModel from "../models/common/EstimadoItemModel";


abstract class TotalesStarterBase<T> {

    public iniciarValores(inItem: T, inTipoCentral: CentralTypeIdEnum): void {
        this.iniciarComunes(inItem);

        switch (inTipoCentral) {
            case CentralTypeIdEnum.Automatico:
                this.iniciarCentralAutomatica(inItem);
                break
            //TODO: agregar aqui las otras centrales
            case CentralTypeIdEnum.Manual:
            default:
                this.iniciarCentralManual(inItem);
                break
        }
    }

    protected abstract iniciarComunes(inItem: T): void;
    protected abstract iniciarCentralManual(inItem: T): void;
    protected abstract iniciarCentralAutomatica(inItem: T): void;

    protected iniciarItem(item: CantidadItemModel, inCantidadXUnidad: number, inCostoUnitario: number): void {
        item.cantidadUnidad = inCantidadXUnidad;
        item.costoUnitario = inCostoUnitario;
        item.costoTotal = 0;
    }

    protected iniciarEstimado(item: EstimadoItemModel, inValorEstimado: number, inValorUnitario: number): void {
        item.valorEstimado = inValorEstimado;
        item.valorUnitario = inValorUnitario;
    }
}

export default TotalesStarterBase;