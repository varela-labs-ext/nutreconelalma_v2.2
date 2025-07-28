import ClinicalInputCategoryEnumId from "@/logic/enums/ClinicalInputCategoryEnumId";
import FormulaTypeIdEnum from "@/logic/enums/FormulaTypeIdEnum";
import InsumoClinicoIdEnum from "@/logic/enums/InsumoClinicoIdEnum";

class ClinicaInputRowModel {
    public presentacionMl: number; // Editable
    public presentacionMlReadOnly: boolean;

    public cantidadMl: number; // Editable
    public cantidadMlReadOnly: boolean;

    public cantidadUnidad: number; // Editable
    public cantidadUnidadReadOnly: boolean;

    public costoPorMl: number; // Calculado

    public costoPorUnidad: number; // Editable
    public costoTotalPorUnidad: number; // Calculado

    public label: string;
    public exclude: boolean;
    public category: ClinicalInputCategoryEnumId;

    public insumoId: InsumoClinicoIdEnum;

    public formulaId: FormulaTypeIdEnum;

    constructor(
        inInsumoId: InsumoClinicoIdEnum,
        inLabel: string,
        inCategory: ClinicalInputCategoryEnumId,
        inFormulaId: FormulaTypeIdEnum) {

        this.insumoId = inInsumoId;
        this.formulaId = inFormulaId;

        this.exclude = true;
        this.label = inLabel;

        this.presentacionMl = 0;
        this.presentacionMlReadOnly = false;

        this.cantidadMl = 0;
        this.cantidadMlReadOnly = false;

        this.cantidadUnidad = 0;
        this.cantidadUnidadReadOnly = false;

        this.costoPorMl = 0;
        this.costoPorUnidad = 0;
        this.costoTotalPorUnidad = 0;
        this.category = inCategory;

        if (inFormulaId === FormulaTypeIdEnum.Formula_A || inFormulaId === FormulaTypeIdEnum.Formula_C) {
            this.cantidadUnidadReadOnly = true;
        }

        if (inFormulaId === FormulaTypeIdEnum.Formula_B) {
            this.presentacionMlReadOnly = true;
            this.cantidadMlReadOnly = true;
        }
    }
}

export default ClinicaInputRowModel;