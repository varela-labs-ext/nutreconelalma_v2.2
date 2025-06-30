import BasicModel from "../common/BasicModel";
import CantidadItemModel from "../common/CantidadItemModel";

class MaterialesHigieneLimpiezaModel extends BasicModel {
  public solucionAntisepticaManos: CantidadItemModel;
  public panosEsterilesSuperficies: CantidadItemModel;
  public alcohol70: CantidadItemModel;

  // CALC MANUAL
  public detergentes: CantidadItemModel;
  public desinfectantes: CantidadItemModel;

  // CALC AUTO
  public peroxidoHidrogenoAcelerado: CantidadItemModel;
  public cloruroBenzalconio: CantidadItemModel;

  constructor() {
    super();

    this.solucionAntisepticaManos = new CantidadItemModel();
    this.panosEsterilesSuperficies = new CantidadItemModel();
    this.alcohol70 = new CantidadItemModel();

    // CALC MANUAL
    this.detergentes = new CantidadItemModel();
    this.desinfectantes = new CantidadItemModel();

    // CALC AUTO
    this.peroxidoHidrogenoAcelerado = new CantidadItemModel();
    this.cloruroBenzalconio = new CantidadItemModel();
  }
}

export default MaterialesHigieneLimpiezaModel;