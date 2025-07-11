import MaintenanceCostsCalc from "../calcs/MaintenanceCostsCalc";
import ClinicaInputModel from "../models/row_item/ClinicaInputModel";
import EstimatedCostItemModel from "../models/row_item/EstimatedCostItemRowModel";
import UnitCostItemModel from "../models/row_item/UnitCostItemRowModel";
import StaffSalaryGroupModel from "../models/operating_resources/StaffSalaryGroupModel";
import MaintenanceCostsGroupModel from "../models/operating_resources/MaintenanceCostsGroupModel";
import RawMaterialModel from "../models/RawMaterialModel";
import ChemistAssistantSalaryCalc from "./ChemistAssistantSalaryCalc";
import ChemistSalaryCalc from "./ChemistSalaryCalc";
import ClinicalInputCalc from "./ClinicalInputCalc";
import EstimatedCostInputCalc from "./EstimatedCostInputCalc";
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

    public static ComputeEstimatedCostsInput(inItem: EstimatedCostItemModel, inMonthlyProductionCapacity: number, inProductionLines: number): void {
        const calc = new EstimatedCostInputCalc();
        calc.computeByParams(inItem, inMonthlyProductionCapacity, inProductionLines);
    }

    public static ComputeChemistSalary(inItem: StaffSalaryGroupModel): void {
        const calc = new ChemistSalaryCalc();
        calc.compute(inItem);
    }

    public static ChemistAssistantSalary(inItem: StaffSalaryGroupModel): void {
        const calc = new ChemistAssistantSalaryCalc();
        calc.compute(inItem);
    }

    public static ComputeMaintenanceCosts(inItem: MaintenanceCostsGroupModel): void {
        const calc = new MaintenanceCostsCalc();
        calc.compute(inItem);
    }


}

export default CalculationService;