import BasicModel from "../common/BasicModel";
import CantidadItemModel from "../common/CantidadItemModel";

class MaterialesProteccionModel extends BasicModel {
  public guantesEsterilesDesechables: CantidadItemModel;
  public bataEsterilUnUso: CantidadItemModel;
  public gorroDesechable: CantidadItemModel;
  public mascarillaQuirurgica: CantidadItemModel;
  public cubrezapatosDesechables: CantidadItemModel;

  constructor() {
    super();

    this.guantesEsterilesDesechables = new CantidadItemModel();
    this.bataEsterilUnUso = new CantidadItemModel();
    this.gorroDesechable = new CantidadItemModel();
    this.mascarillaQuirurgica = new CantidadItemModel();
    this.cubrezapatosDesechables = new CantidadItemModel();
  }
}

export default MaterialesProteccionModel;