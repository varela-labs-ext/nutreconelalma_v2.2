import CentralTypeIdEnum from "../enums/CentralTypeIdEnum";
import PorcentajeItemModel from "../models/common/PorcentajeItemModel";
import SalarioFiscalesModel from "../models/empleados/StaffTaxesModel";


abstract class ParaFiscalesStarter<T extends SalarioFiscalesModel> {

    public iniciarValores(inItem: T, inTipoCentral: CentralTypeIdEnum): void {
        this.iniciarParafiscales(inItem);
        this.iniciarComunes(inItem);

        switch (inTipoCentral) {
            case CentralTypeIdEnum.Automatico:
                this.iniciarCentralAutomatica(inItem);
                break;

            //TODO: agregar los otros tipos de centrales aqui.

            case CentralTypeIdEnum.Manual:
            default:
                this.iniciarCentralManual(inItem);
                break;
        }
    }

    protected abstract iniciarComunes(inItem: T): void;
    protected abstract iniciarCentralManual(inItem: T): void;
    protected abstract iniciarCentralAutomatica(inItem: T): void;

    protected iniciarParafiscal(inItem: PorcentajeItemModel, inPorcentaje: number): void {
        inItem.porcentaje = inPorcentaje;
        inItem.valor = 0; // , inValor: number
    }

    protected iniciarParafiscales(inItem: T): void {
        this.iniciarParafiscal(inItem.cesantias, 8.00);
        this.iniciarParafiscal(inItem.primas, 8.00);
        this.iniciarParafiscal(inItem.vacaciones, 4.00);
        this.iniciarParafiscal(inItem.interesesCesantias, 1.00);
        this.iniciarParafiscal(inItem.salud, 8.50);
        this.iniciarParafiscal(inItem.pension, 12.00);
        this.iniciarParafiscal(inItem.arlRiesgo1, 2.00);
        this.iniciarParafiscal(inItem.cajaCompensacion, 4.00);
        this.iniciarParafiscal(inItem.sena, 2.00);
        this.iniciarParafiscal(inItem.icbf, 3.00);
    }
}

export default ParaFiscalesStarter;