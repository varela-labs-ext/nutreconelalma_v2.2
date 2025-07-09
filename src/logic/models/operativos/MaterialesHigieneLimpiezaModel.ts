import BasicModel from "../common/BasicModel";
import AmountItemModel from "../common/UnitCostItemModel";

class MaterialesHigieneLimpiezaModel extends BasicModel {
    public solucionAntisepticaManos: AmountItemModel;
    public panosEsterilesSuperficies: AmountItemModel;
    public alcohol70: AmountItemModel;

    // CALC MANUAL
    public detergentes: AmountItemModel;
    public desinfectantes: AmountItemModel;

    // CALC AUTO
    public peroxidoHidrogenoAcelerado: AmountItemModel;
    public cloruroBenzalconio: AmountItemModel;

    constructor() {
        super();

        this.solucionAntisepticaManos = new AmountItemModel();
        this.panosEsterilesSuperficies = new AmountItemModel();
        this.alcohol70 = new AmountItemModel();

        // CALC MANUAL
        this.detergentes = new AmountItemModel();
        this.desinfectantes = new AmountItemModel();

        // CALC AUTO
        this.peroxidoHidrogenoAcelerado = new AmountItemModel();
        this.cloruroBenzalconio = new AmountItemModel();
    }
}

export default MaterialesHigieneLimpiezaModel;