import BasicModel from "../common/BasicModel";
import CantidadItemModel from "../common/CantidadItemModel";

class EquiposAutomatizadaModel extends BasicModel {
  public tamperResistantClamps: CantidadItemModel;
  public setsTransferenciaX6: CantidadItemModel;
  public setsTransferenciaX9: CantidadItemModel;

  constructor() {
    super();

    this.tamperResistantClamps = new CantidadItemModel();
    this.setsTransferenciaX6 = new CantidadItemModel();
    this.setsTransferenciaX9 = new CantidadItemModel();
  }
}

export default EquiposAutomatizadaModel;