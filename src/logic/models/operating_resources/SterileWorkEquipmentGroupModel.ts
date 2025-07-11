import UnitCostItemModel from "../row_item/UnitCostItemRowModel";
import BaseModel from "../base/BaseModel";
import AmountItemModel from "../row_item/AmountItemRowModel";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";

class SterileWorkEquipmentGroupModel extends BaseModel {
    public jeringas1ml: UnitCostItemModel;
    public jeringas5ml: UnitCostItemModel;
    public jeringas10ml: UnitCostItemModel;
    public jeringas20ml: UnitCostItemModel;
    public jeringas50ml: UnitCostItemModel;
    public buretroles: UnitCostItemModel;
    public compresasEsteriles: UnitCostItemModel;
    public gasasEsteriles: UnitCostItemModel;
    public etiquetasIdentificacionBolsas: UnitCostItemModel;
    public toallasAbsorbentesDesechables: UnitCostItemModel;
    public contenedoresCortopunzantes: UnitCostItemModel;
    public agujasEsteriles: UnitCostItemModel;
    public bolsaRojaBiologicos: UnitCostItemModel;
    public bolsaNegraNoContaminados: UnitCostItemModel;
    public boligrafosEtiquetado: UnitCostItemModel;

    public total: AmountItemModel;

    constructor() {
        super("", CentralTypeIdEnum.None);

        this.jeringas1ml = new UnitCostItemModel("Jeringas estériles de 1 mL");
        this.jeringas5ml = new UnitCostItemModel("Jeringas estériles de 5 mL");
        this.jeringas10ml = new UnitCostItemModel("Jeringas estériles de 10 mL");
        this.jeringas20ml = new UnitCostItemModel("Jeringas estériles de 20 mL");
        this.jeringas50ml = new UnitCostItemModel("Jeringas estériles de 50 mL");
        this.buretroles = new UnitCostItemModel("Buretroles");
        this.compresasEsteriles = new UnitCostItemModel("Compresas estériles");
        this.gasasEsteriles = new UnitCostItemModel("Gasas estériles");
        this.etiquetasIdentificacionBolsas = new UnitCostItemModel("Etiquetas estériles para identificar cada bolsa");
        this.toallasAbsorbentesDesechables = new UnitCostItemModel("Toallas absorbentes desechables");
        this.contenedoresCortopunzantes = new UnitCostItemModel("Contenedores para residuos cortopunzantes");
        this.agujasEsteriles = new UnitCostItemModel("Agujas estériles 16G - 18G");
        this.bolsaRojaBiologicos = new UnitCostItemModel("Bolsa roja para residuos biológicos");
        this.bolsaNegraNoContaminados = new UnitCostItemModel("Bolsa negra para residuos no contaminados");
        this.boligrafosEtiquetado = new UnitCostItemModel("Bolígrafos para etiquetado de soluciones");

        this.total = new AmountItemModel("Total");
    }
}

export default SterileWorkEquipmentGroupModel;