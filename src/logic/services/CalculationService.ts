import MaintenanceCostsCalc from "../calcs/MaintenanceCostsCalc";
import ClinicaInputRowModel from "../models/row_item/ClinicaInputRowModel";
import EstimatedCostItemModel from "../models/row_item/EstimatedCostItemRowModel";
import UnitCostItemModel from "../models/row_item/UnitCostItemRowModel";
import StaffSalaryGroupModel from "../models/operating_resources/StaffSalaryGroupModel";
import MaintenanceCostsGroupModel from "../models/operating_resources/MaintenanceCostsGroupModel";
import RawMaterialModel from "../models/RawMaterialModel";
import ChemistAssistantSalaryCalc from "../calcs/ChemistAssistantSalaryCalc";
import ChemistSalaryCalc from "../calcs/ChemistSalaryCalc";
import ClinicalInputCalc from "./ClinicalInputCalc";
import EstimatedCostInputCalc from "./EstimatedCostInputCalc";
import RawMaterialsCalc from "./RawMaterialsCalc";
import UnitCostInputCalc from "./UnitCostInputCalc";

/* Distriye las solicutedes de Calculos a la clase adecuada */
class CalculationService {

    public static computeClinicalInput(inItem: ClinicaInputRowModel): void {
        const calc = new ClinicalInputCalc();
        calc.compute(inItem);
    }

    public static computeRawMaterial(inItem: RawMaterialModel): void {
        const calc = new RawMaterialsCalc();
        calc.compute(inItem);
    }

    public static computeUnitCostInput(inItem: UnitCostItemModel): void {
        const calc = new UnitCostInputCalc();
        calc.compute(inItem);
    }

    public static computeEstimatedCostsInput(inItem: EstimatedCostItemModel, inProductionLines: number, inProductionPerMonth: number): void {
        const calc = new EstimatedCostInputCalc();
        calc.computeByParams(inItem, inProductionLines, inProductionPerMonth);
    }

    public static computeChemistSalary(inItem: StaffSalaryGroupModel): void {
        const calc = new ChemistSalaryCalc();
        calc.compute(inItem);
    }

    public static chemistAssistantSalary(inItem: StaffSalaryGroupModel): void {
        const calc = new ChemistAssistantSalaryCalc();
        calc.compute(inItem);
    }

    public static computeMaintenanceCosts(inItem: MaintenanceCostsGroupModel, inProductionLines: number, inProductionPerMonth: number): void {
        const calc = new MaintenanceCostsCalc();
        calc.computeByParams(inItem, inProductionLines, inProductionPerMonth);
    }


}

export default CalculationService;