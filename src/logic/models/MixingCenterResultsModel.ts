//ResultsModel

import ResultItemModel from "./ResultItemModel";
import JustValueItemModel from "./row_item/OneValueItemRowModel";

class MixingCenterResultsModel {
    public lineasProduccion: JustValueItemModel;
    public produccionDiaria: JustValueItemModel;
    public produccionMensual: JustValueItemModel;

    public porcentajeAdulto: JustValueItemModel;
    public porcentajePediatric: JustValueItemModel;
    public porcentajeNeonatal: JustValueItemModel;

    public PersonalProtectiveMaterialsCosts: ResultItemModel;
    public hygieneNCleaningMaterialsCosts: ResultItemModel;
    public maintenanceCosts: ResultItemModel;
    public productionCosts: ResultItemModel;
    public sterileEquipmentCosts: ResultItemModel;
    public automatedEquipmentCosts: ResultItemModel;

    public chemicalStaffHours: ResultItemModel;
    public costPerChemicalStaff: ResultItemModel;
    public auxiliaryStaffHours: ResultItemModel;
    public costPerAuxiliaryStaff: ResultItemModel;

    public cost1NptAdult: ResultItemModel; //totalAdultCost
    public cost1NptPediatric: ResultItemModel; //totalPediatricCost
    public cost1NptNeonatal: ResultItemModel; //totalNeonatalCost


    public costoTotalPreparacionNptAdult: ResultItemModel;
    public costoTotalPreparacionNptPediatric: ResultItemModel;
    public costoTotalPreparacionNptNeonatal: ResultItemModel;

    public valorTotalAdult: ResultItemModel;
    public valorTotalPediatric: ResultItemModel;
    public valorTotalNeonatal: ResultItemModel;
    public valorTotalNutriciosDia: ResultItemModel;


    constructor() {
        this.lineasProduccion = new JustValueItemModel("Lineas de producción");
        this.produccionDiaria = new JustValueItemModel("Producción diaria");
        this.produccionMensual = new JustValueItemModel("Producción mensual");

        this.porcentajeAdulto = new JustValueItemModel("Porcentaje de nutriciones de adulto");
        this.porcentajePediatric = new JustValueItemModel("Porcentaje de nutriciones de Pediatrica");
        this.porcentajeNeonatal = new JustValueItemModel("Porcentaje de nutriciones de Neonatal");

        //Recursos Operativos
        this.PersonalProtectiveMaterialsCosts = new ResultItemModel("Costos de materiales de protección personal", "$");
        this.hygieneNCleaningMaterialsCosts = new ResultItemModel("Costos de materiales de higiene y limpieza", "$");
        this.maintenanceCosts = new ResultItemModel("Costos de mantenimiento", "$");
        this.productionCosts = new ResultItemModel("Costos de producción", "$");
        this.sterileEquipmentCosts = new ResultItemModel("Costos equipo estéril", "$");
        this.automatedEquipmentCosts = new ResultItemModel("Costos equipo automatizado", "$");

        // Staff
        this.chemicalStaffHours = new ResultItemModel("Horas de químico farmacéutico para 1 NPT", "H");
        this.costPerChemicalStaff = new ResultItemModel("Costo por químico farmacéutico para 1 NPT", "$");

        this.auxiliaryStaffHours = new ResultItemModel("Horas de auxiliar farmacéutico para 1 NPT", "H");
        this.costPerAuxiliaryStaff = new ResultItemModel("Costos por auxiliar farmacéutico para 1 NPT", "$");

        // Costos por npt
        this.cost1NptAdult = new ResultItemModel("Costos 1 NPT adulto", "$");
        this.cost1NptPediatric = new ResultItemModel("Costos 1 NPT pediátrica", "$");
        this.cost1NptNeonatal = new ResultItemModel("Costos 1 NPT neonatal", "$");

        this.costoTotalPreparacionNptAdult = new ResultItemModel("Costos preparación 1 NPT Adulto", "$");
        this.costoTotalPreparacionNptPediatric = new ResultItemModel("Costos preparación 1 NPT Pediatrica", "$");
        this.costoTotalPreparacionNptNeonatal = new ResultItemModel("Costos preparación 1 NPT Neonatal", "$");

        this.valorTotalAdult = new ResultItemModel("Valor total de adulto", "$");
        this.valorTotalPediatric = new ResultItemModel("Valor total pediatrica", "$");
        this.valorTotalNeonatal = new ResultItemModel("Valor total neonatal", "$");

        this.valorTotalNutriciosDia = new ResultItemModel("Valor Total Nutriciones Día", "$");
    }
}

export default MixingCenterResultsModel;