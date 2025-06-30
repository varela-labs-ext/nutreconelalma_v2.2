import InsumoClinicoEnum from "@/logic/enums/InsumoClinicoNamesEnum";
import InsumoItemModel from "../common/InsumoItemModel";


class MateriaPrimaInsumosModel {
    public AguaEsteril_500ml: InsumoItemModel;
    public Complejo_B: InsumoItemModel;
    public Vitamina_C: InsumoItemModel;

    constructor() {
        this.AguaEsteril_500ml = new InsumoItemModel(InsumoClinicoEnum.AguaEsteril_500ml);
        this.Complejo_B = new InsumoItemModel(InsumoClinicoEnum.Complejo_B);
        this.Vitamina_C = new InsumoItemModel(InsumoClinicoEnum.Vitamina_C);
    }
}

export default MateriaPrimaInsumosModel;