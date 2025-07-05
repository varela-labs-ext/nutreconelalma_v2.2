//ResultsModel

import ResultItemModel from "./ResultItemModel";

class ResultsModel {
    public PersonalProtectiveMaterialsCosts: ResultItemModel;
    public hygieneNCleaningMaterialsCosts: ResultItemModel;
    public maintenanceCosts: ResultItemModel;


    public productionCosts: ResultItemModel; //productionCosts
    public sterileEquipmentCosts: ResultItemModel; //sterileEquipmentCosts
    public automatedEquipmentCosts: ResultItemModel; //automatedEquipmentCosts
    public chemicalStaffHours: ResultItemModel; //chemicalStaffHours
    public costPerChemicalStaff: ResultItemModel; //costPerChemicalStaff
    public auxiliaryStaffHours: ResultItemModel; //auxiliaryStaffHours
    public costPerAuxiliaryStaff: ResultItemModel; //costPerAuxiliaryStaff
    public totalPreparationCosts: ResultItemModel; //totalPreparationCosts

    public totalAdultCost: ResultItemModel; //totalAdultCost
    public totalPediatricCost: ResultItemModel; //totalPediatricCost
    public totalNeonatalCost: ResultItemModel; //totalNeonatalCost

    public totalCostNutritionPerDay: ResultItemModel; //totalCostNutritionPerDay
    public totalCost: ResultItemModel; //totalCost

    constructor() {
        this.PersonalProtectiveMaterialsCosts = new ResultItemModel("Costos de materiales de protección personal", "PersonalProtectiveMaterialsCosts", "$");
        this.hygieneNCleaningMaterialsCosts = new ResultItemModel("Costos de materiales de higiene y limpieza", "hygieneNCleaningMaterialsCosts", "$");
        this.maintenanceCosts = new ResultItemModel("Costos de mantenimiento", "maintenanceCosts", "$");

        this.productionCosts = new ResultItemModel("Costos de producción", "productionCosts", "$");
        this.sterileEquipmentCosts = new ResultItemModel("Costos equipo estéril", "sterileEquipmentCosts", "$");
        this.automatedEquipmentCosts = new ResultItemModel("Costos equipo automatizado", "automatedEquipmentCosts", "$");
        this.chemicalStaffHours = new ResultItemModel("Horas de químico farmacéutico para 1 nutrición parenteral", "chemicalStaffHours", "H");
        this.costPerChemicalStaff = new ResultItemModel("Costo por químico farmacéutico requerido para preparación", "costPerChemicalStaff", "$");
        this.auxiliaryStaffHours = new ResultItemModel("Horas por auxiliar farmacéutico para 1 nutrición parenteral", "auxiliaryStaffHours", "H");
        this.costPerAuxiliaryStaff = new ResultItemModel("Costos por auxiliar farmacéutico para 1 nutrición parenteral", "costPerAuxiliaryStaff", "$");
        this.totalPreparationCosts = new ResultItemModel("Total de costos preparación 1 nutrición parenteral", "totalPreparationCosts", "$");

        this.totalAdultCost = new ResultItemModel("Valor total de adulto (34%)", "totalAdultCost", "$");
        this.totalPediatricCost = new ResultItemModel("Valor total pediátrica(33 %)", "totalPediatricCost", "$");
        this.totalNeonatalCost = new ResultItemModel("Valor total neonatal (33%)", "totalNeonatalCost", "$");

        this.totalCostNutritionPerDay = new ResultItemModel("Valor Total Nutriciones Día", "totalCostNutritionPerDay", "$");
        this.totalCost = new ResultItemModel("Costo Total", "totalCost", "$");

    }
}

export default ResultsModel;