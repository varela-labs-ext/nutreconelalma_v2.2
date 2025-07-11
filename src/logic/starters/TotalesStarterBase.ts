import CentralTypeIdEnum from "../enums/CentralTypeIdEnum";
import UnitCostItemModel from "../models/operating_resources/UnitCostItemModel";
import EstimatedCostItemModel from "../models/operating_resources/EstimatedCostItemModel";


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

    protected iniciarItem(item: UnitCostItemModel, inCantidadXUnidad: number, inCostoUnitario: number): void {
        item.quantity = inCantidadXUnidad;
        item.unitCost = inCostoUnitario;
        item.totalCost = 0;
    }

    protected iniciarEstimado(item: EstimatedCostItemModel, inValorEstimado: number, inValorUnitario: number): void {
        item.valorEstimado = inValorEstimado;
        item.valorUnitario = inValorUnitario;
    }
}

export default TotalesStarterBase;