import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
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
        super(CentralTypeIdEnum.None);

        this.aguaM3 = new EstimatedCostItemModel("Agua (m³)");
        this.luzKw = new EstimatedCostItemModel("Luz (kw)");
        this.manoObraIndirecta = new EstimatedCostItemModel("Mano de obra indirecta");
        this.telefoniaInternetAdmin = new EstimatedCostItemModel("Teléfono / Internet / Sistema administrativo");
        this.depreciacionCabinaFlujoLaminar = new EstimatedCostItemModel("Depreciación mensual: cabina de flujo laminar");
    }
}

export default ProductionCostsModel;