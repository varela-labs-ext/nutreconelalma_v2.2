import MaintenanceCostsCalc from "../calcs/MaintenanceCostsCalc";
import ClinicaInputRowModel from "../models/row_item/ClinicaInputRowModel";
import EstimatedCostItemModel from "../models/row_item/EstimatedCostItemRowModel";
import UnitCostItemModel from "../models/row_item/UnitCostItemRowModel";
import StaffSalaryGroupModel from "../models/operating_resources/StaffSalaryGroupModel";
import MaintenanceCostsGroupModel from "../models/operating_resources/MaintenanceCostsGroupModel";
import RawMaterialGroupModel from "../models/RawMaterialGroupModel";
import ChemistAssistantSalaryCalc from "../calcs/ChemistAssistantSalaryCalc";
import ChemistSalaryCalc from "../calcs/ChemistSalaryCalc";
import ClinicalInputCalc from "../calcs/ClinicalInputCalc";
import EstimatedCostInputCalc from "../calcs/EstimatedCostInputCalc";
import RawMaterialsCalc from "../calcs/RawMaterialsCalc";
import UnitCostInputCalc from "../calcs/UnitCostInputCalc";
import ProductionCostsGroupModel from "../models/operating_resources/ProductionCostsGroupModel";
import ProductionCostsCalc from "../calcs/ProductionCostsCalc";
import SterileWorkEquipmentCalc from "../calcs/SterileWorkEquipmentCalc";
import SterileWorkEquipmentGroupModel from "../models/operating_resources/SterileWorkEquipmentGroupModel";
import HygieneAndCleaningGroupModel from "../models/operating_resources/HygieneAndCleaningGroupModel";
import HygieneAndCleaningCalc from "../calcs/HygieneAndCleaningCalc";
import PersonalProtectionGroupModel from "../models/operating_resources/PersonalProtectionGroupModel";
import PersonalProtectionCalc from "../calcs/PersonalProtectionCalc";
import AutomatedEquipmentGroupModel from "../models/operating_resources/AutomatedEquipmentGroupModel";
import AutomatedEquipmentCalc from "../calcs/AutomatedEquipmentCalc";

/* Distriye las solicutedes de Calculos a la clase adecuada */
class CalculationService {

    public static computeClinicalInput(inItem: ClinicaInputRowModel): void {
        const calc = new ClinicalInputCalc();
        calc.compute(inItem);
    }

    public static computeRawMaterial(inItem: RawMaterialGroupModel): void {
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

    public static computeChemistAssistantSalary(inItem: StaffSalaryGroupModel): void {
        const calc = new ChemistAssistantSalaryCalc();
        calc.compute(inItem);
    }

    public static computeMaintenanceCosts(inItem: MaintenanceCostsGroupModel, inProductionLines: number, inProductionPerMonth: number): void {
        const calc = new MaintenanceCostsCalc();
        calc.computeByParams(inItem, inProductionLines, inProductionPerMonth);
    }

    public static computeProductionCosts(inItem: ProductionCostsGroupModel, inProductionLines: number, inProductionPerMonth: number): void {
        const calc = new ProductionCostsCalc();
        calc.computeByParams(inItem, inProductionLines, inProductionPerMonth);
    }

    public static computeSterileWorkEquipment(inItem: SterileWorkEquipmentGroupModel): void {
        const calc = new SterileWorkEquipmentCalc();
        calc.compute(inItem);
    }

    public static computeHygieneAndCleaning(inItem: HygieneAndCleaningGroupModel): void {
        const calc = new HygieneAndCleaningCalc();
        calc.compute(inItem);
    }

    public static computePersonalProtection(inItem: PersonalProtectionGroupModel): void {
        const calc = new PersonalProtectionCalc();
        calc.compute(inItem);
    }

    public static computeAutomatedEquipment(inItem: AutomatedEquipmentGroupModel): void {
        const calc = new AutomatedEquipmentCalc();
        calc.compute(inItem);
    }

}

export default CalculationService;