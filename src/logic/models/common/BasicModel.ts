import TipoCentralIdEnum from "@/logic/enums/TipoCentralIdEnum";
import TipoPoblacionIdEnum from "@/logic/enums/TipoPoblacionIdEnum";

abstract class BasicModel {
    public costoTotal: number;
    public tipoCentral: TipoCentralIdEnum;
    public tipoPoblacion: TipoPoblacionIdEnum;

    protected constructor() {
        this.costoTotal = 0;
        this.tipoCentral = TipoCentralIdEnum.Manual;
        this.tipoPoblacion = TipoPoblacionIdEnum.Adulto;
    }
}

export default BasicModel;