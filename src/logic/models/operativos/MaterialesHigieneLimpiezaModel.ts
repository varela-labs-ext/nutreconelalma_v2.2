import BasicModel from "../common/BasicModel";
import UnitCostItemModel from "../common/UnitCostItemModel";

class MaterialesHigieneLimpiezaModel extends BasicModel {
    public solucionAntisepticaManos: UnitCostItemModel;
    public panosEsterilesSuperficies: UnitCostItemModel;
    public alcohol70: UnitCostItemModel;

    // CALC MANUAL
    public detergentes: UnitCostItemModel;
    public desinfectantes: UnitCostItemModel;

    // CALC AUTO
    public peroxidoHidrogenoAcelerado: UnitCostItemModel;
    public cloruroBenzalconio: UnitCostItemModel;

    constructor() {
        super();

        this.solucionAntisepticaManos = new UnitCostItemModel();
        this.panosEsterilesSuperficies = new UnitCostItemModel();
        this.alcohol70 = new UnitCostItemModel();

        // CALC MANUAL
        this.detergentes = new UnitCostItemModel();
        this.desinfectantes = new UnitCostItemModel();

        // CALC AUTO
        this.peroxidoHidrogenoAcelerado = new UnitCostItemModel();
        this.cloruroBenzalconio = new UnitCostItemModel();
    }
}

export default MaterialesHigieneLimpiezaModel;