import CentralTypeIdEnum from "../enums/CentralTypeIdEnum";
import RawMaterialModel from "../models/RawMaterialModel";
import ClinicaInputRowModel from "../models/row_item/ClinicaInputRowModel";

abstract class DefaultsRawMaterialsBase<TModel> {
    public setDefaultValues(inItem: TModel, inCentralType: CentralTypeIdEnum): void {

        switch (inCentralType) {
            case CentralTypeIdEnum.Automatico:
                this.setCommons_MixingCentral_Automatic(inItem);
                this.setOthers_MixingCentral_Automatic(inItem);
                break;

            //TODO: agregar los otros tipos de centrales aqui.

            case CentralTypeIdEnum.Manual:
                this.setCommons_MixingCentral_Manual(inItem);
                this.setOthers_MixingCentral_Manual(inItem);
                break;
        }
    }

    protected abstract setCommons_MixingCentral_Manual(inItem: TModel): void;
    protected abstract setOthers_MixingCentral_Manual(inItem: TModel): void;

    protected abstract setCommons_MixingCentral_Automatic(inItem: TModel): void;
    protected abstract setOthers_MixingCentral_Automatic(inItem: TModel): void;

    protected setClinicalInput(
        item: ClinicaInputRowModel,
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
}

export default DefaultsRawMaterialsBase;