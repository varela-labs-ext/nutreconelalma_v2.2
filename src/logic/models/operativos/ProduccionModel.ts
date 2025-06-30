import BasicModel from "../common/BasicModel";
import EstimadoItemModel from "../common/EstimadoItemModel";

//Costos de producción 
class ProduccionModel extends BasicModel {

  public aguaM3: EstimadoItemModel; // Agua (m³)

  public luzKw: EstimadoItemModel; // Luz (Kw)

  public manoObraIndirecta: EstimadoItemModel; // Mano de obra indirecta

  public telefoniaInternetAdmin: EstimadoItemModel; // Teléfono/Internet/Sistema Administrativo

  public depreciacionCabinaFlujoLaminar: EstimadoItemModel; // Depreciación mensual cabina flujo laminar

  constructor() {
    super();

    this.aguaM3 = new EstimadoItemModel();
    this.luzKw = new EstimadoItemModel();
    this.manoObraIndirecta = new EstimadoItemModel();
    this.telefoniaInternetAdmin = new EstimadoItemModel();
    this.depreciacionCabinaFlujoLaminar = new EstimadoItemModel();
  }
}

export default ProduccionModel;