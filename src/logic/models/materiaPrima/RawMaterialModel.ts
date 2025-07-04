import InsumoClinicoEnum from "@/logic/enums/InsumoClinicoNamesEnum";
import RawMaterialBaseModel from "./RawMaterialBaseModel";
import ClinicaInputModel from "../common/ClinicaInputModel";


class RawMaterialModel extends RawMaterialBaseModel {
    public AguaEsteril_500ml: ClinicaInputModel;
    public Complejo_B: ClinicaInputModel;
    public Vitamina_C: ClinicaInputModel;

    constructor() {
        super();

        this.AguaEsteril_500ml = new ClinicaInputModel(InsumoClinicoEnum.AguaEsteril_500ml);
        this.Complejo_B = new ClinicaInputModel(InsumoClinicoEnum.Complejo_B);
        this.Vitamina_C = new ClinicaInputModel(InsumoClinicoEnum.Vitamina_C);
    }
}

export default RawMaterialModel;