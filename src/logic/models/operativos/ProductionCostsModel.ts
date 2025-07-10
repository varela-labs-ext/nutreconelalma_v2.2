import BasicModel from "../common/BasicModel";
import EstimatedCostItemModel from "../common/EstimatedCostItemModel";

//Costos de producción 
class ProductionCostsModel extends BasicModel {

    public aguaM3: EstimatedCostItemModel; // Agua (m³)

    public luzKw: EstimatedCostItemModel; // Luz (Kw)

    public manoObraIndirecta: EstimatedCostItemModel; // Mano de obra indirecta

    public telefoniaInternetAdmin: EstimatedCostItemModel; // Teléfono/Internet/Sistema Administrativo

    public depreciacionCabinaFlujoLaminar: EstimatedCostItemModel; // Depreciación mensual cabina flujo laminar

    constructor() {
        super();

        this.aguaM3 = new EstimatedCostItemModel();
        this.luzKw = new EstimatedCostItemModel();
        this.manoObraIndirecta = new EstimatedCostItemModel();
        this.telefoniaInternetAdmin = new EstimatedCostItemModel();
        this.depreciacionCabinaFlujoLaminar = new EstimatedCostItemModel();
    }
}

export default ProductionCostsModel;