import BasicModel from "../common/BasicModel";
import EstimatedCalcItemModel from "../common/EstimatedCalcItemModel";

//Costos de producción 
class ProduccionModel extends BasicModel {

  public aguaM3: EstimatedCalcItemModel; // Agua (m³)

  public luzKw: EstimatedCalcItemModel; // Luz (Kw)

  public manoObraIndirecta: EstimatedCalcItemModel; // Mano de obra indirecta

  public telefoniaInternetAdmin: EstimatedCalcItemModel; // Teléfono/Internet/Sistema Administrativo

  public depreciacionCabinaFlujoLaminar: EstimatedCalcItemModel; // Depreciación mensual cabina flujo laminar

  constructor() {
    super();

    this.aguaM3 = new EstimatedCalcItemModel();
    this.luzKw = new EstimatedCalcItemModel();
    this.manoObraIndirecta = new EstimatedCalcItemModel();
    this.telefoniaInternetAdmin = new EstimatedCalcItemModel();
    this.depreciacionCabinaFlujoLaminar = new EstimatedCalcItemModel();
  }
}

export default ProduccionModel;