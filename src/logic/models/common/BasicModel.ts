import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";

abstract class BasicModel {
    public costoTotal: number;
    public tipoCentral: CentralTypeIdEnum;
    // public tipoPoblacion: PopulationTypeIdEnum;

    protected constructor() {
        this.costoTotal = 0;
        this.tipoCentral = CentralTypeIdEnum.Manual;
        // this.tipoPoblacion = PopulationTypeIdEnum.Adulto;
    }
}

export default BasicModel;