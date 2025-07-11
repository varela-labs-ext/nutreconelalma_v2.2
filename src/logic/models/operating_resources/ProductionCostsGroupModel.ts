import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import EstimatedCostItemModel from "../base/EstimatedCostItemModel";
import BaseModel from "../base/BaseModel";
import AmountItemModel from "../base/AmountItemModel";

//Costos de producción 
class ProductionCostsModel extends BaseModel {

    public aguaM3: EstimatedCostItemModel; // Agua (m³)
    public luzKw: EstimatedCostItemModel; // Luz (Kw)
    public manoObraIndirecta: EstimatedCostItemModel; // Mano de obra indirecta
    public telefoniaInternetAdmin: EstimatedCostItemModel; // Teléfono/Internet/Sistema Administrativo
    public depreciacionCabinaFlujoLaminar: EstimatedCostItemModel; // Depreciación mensual cabina flujo laminar

    public total: AmountItemModel;

    constructor() {
        super("", CentralTypeIdEnum.None);

        this.aguaM3 = new EstimatedCostItemModel("Agua (m³)");
        this.luzKw = new EstimatedCostItemModel("Luz (kw)");
        this.manoObraIndirecta = new EstimatedCostItemModel("Mano de obra indirecta");
        this.telefoniaInternetAdmin = new EstimatedCostItemModel("Teléfono / Internet / Sistema administrativo");
        this.depreciacionCabinaFlujoLaminar = new EstimatedCostItemModel("Depreciación mensual: cabina de flujo laminar");

        this.total = new AmountItemModel("Total");
    }
}

export default ProductionCostsModel;