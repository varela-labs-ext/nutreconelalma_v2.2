import ClinicaInputModel from "../models/common/ClinicaInputModel";
import UnitCostItemModel from "../models/common/UnitCostItemModel";
import RawMaterialModel from "../models/RawMaterialModel";
import ClinicalInputCalc from "./ClinicalInputCalc";
import RawMaterialsCalc from "./RawMaterialsCalc";
import UnitCostInputCalc from "./UnitCostInputCalc";

/* Distriye las solicutedes de Calculos a la clase adecuada */
class CalculationService {

    public static ComputeClinicalInput(inItem: ClinicaInputModel): void {
        const calc = new ClinicalInputCalc();
        calc.compute(inItem);
    }

    public static ComputeRawMaterial(inItem: RawMaterialModel): void {
        const calc = new RawMaterialsCalc();
        calc.compute(inItem);
    }

    public static ComputeUnitCostInput(inItem: UnitCostItemModel): void {
        const calc = new UnitCostInputCalc();
        calc.compute(inItem);
    }
}

export default CalculationService;