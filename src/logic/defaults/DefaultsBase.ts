import CentralTypeIdEnum from "../enums/CentralTypeIdEnum";
import EstimatedCostItemModel from "../models/row_item/EstimatedCostItemRowModel";
import PorcentajeItemModel from "../models/row_item/PorcentajeItemRowModel";
import UnitCostItemModel from "../models/row_item/UnitCostItemRowModel";

abstract class DefaultsBase<TModel> {
    public setDefaultValues(inItem: TModel, inCentralType: CentralTypeIdEnum): void {
        this.setCommons(inItem);
        this.setExtras(inItem);

        switch (inCentralType) {
            case CentralTypeIdEnum.Automatico:
                this.setMixingCentral_Automatic(inItem);
                break
            //TODO: agregar aqui las otras centrales
            case CentralTypeIdEnum.Manual:
                this.setMixingCentral_Manual(inItem);
                break
        }
    }

    protected abstract setCommons(inItem: TModel): void;
    protected abstract setExtras(inItem: TModel): void;
    protected abstract setMixingCentral_Manual(inItem: TModel): void;
    protected abstract setMixingCentral_Automatic(inItem: TModel): void;

    //AGREGAR AQUI PARA MAS CENTRALES

    protected setUnitCostItem(item: UnitCostItemModel, inCantidadXUnidad: number, inCostoUnitario: number): void {
        item.quantity = inCantidadXUnidad;
        item.unitCost = inCostoUnitario;
        item.totalCost = 0;
    }

    protected setEstimatedCostItem(item: EstimatedCostItemModel, inValorEstimado: number, inValorUnitario: number): void {
        item.valorEstimado = inValorEstimado;
        item.valorUnitario = inValorUnitario;
    }

    protected setPorcentajeItem(inItem: PorcentajeItemModel, inPorcentaje: number): void {
        inItem.percentage = inPorcentaje;
        inItem.value = 0; // , inValor: number
    }
}

export default DefaultsBase;