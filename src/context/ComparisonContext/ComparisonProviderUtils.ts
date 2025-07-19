import AdditionalCostsTotalsModel from "@/logic/models/AdditionalCostsTotalsModel";
import MixingCenterOperatingResourcesModel from "@/logic/models/MixingCenterOperatingResourcesModel";
import { getAdditionalCostsSummary } from "../MixingCenterContext/MixingCenterUtils";
import MixingCenterResultsModel from "@/logic/models/MixingCenterResultsModel";
import { padText } from "@/components/business/reporting/textPadding";
import JustValueItemModel from "@/logic/models/row_item/OneValueItemRowModel";
import ResultItemModel from "@/logic/models/ResultItemModel";
import { format } from 'date-fns';

export const calculateResources = (inData: MixingCenterOperatingResourcesModel | null): AdditionalCostsTotalsModel => {
    if (inData === null) {
        throw new Error("EL VALOR NO PUEDE SER NULO");
    }

    return getAdditionalCostsSummary(
        inData.automatedEquipment,
        inData.hygieneAndCleaning,
        inData.personalProtection,
        inData.sterileWorkEquipment,
        inData.maintenanceCosts,
        inData.productionCosts,
        inData.staffChemistSalary,
        inData.staffAssistantSalary
    );
}

export const calculateResourcesTotal = (newSummary: AdditionalCostsTotalsModel, manual: boolean): void => {
    newSummary.totalSinStaff =
        (manual === true ? 0 : newSummary.automatedEquipmentTotal) +
        newSummary.hygieneNCleanlinessTotal +
        newSummary.protectiveMaterialsTotal +
        newSummary.sterilizedEquipmentTotal +
        newSummary.maintenanceTotal +
        newSummary.productionTotal;
}

export const BuildTextPlainReport = (brandNewResults: MixingCenterResultsModel): string[] => {
    const _printingResults: string[] = [];
    const headerSeparator = ('-'.repeat(90));
    const now = new Date();
    const formatted = format(now, 'yyyy-MM-dd hh:mm a');

    _printingResults.push("CALCULADORA NUTRICIÓN HOSPITALARIA");
    _printingResults.push("B. Braun Medical");
    _printingResults.push(" ");
    _printingResults.push(" ");
    _printingResults.push(buildSubMainHeaderline("Reporte de Análisis de Costos", formatted));
    _printingResults.push(headerSeparator);

    _printingResults.push(buildPrintResultSingleLine(brandNewResults.lineasProduccion));
    _printingResults.push(buildPrintResultSingleLine(brandNewResults.produccionDiaria));
    _printingResults.push(buildPrintResultSingleLine(brandNewResults.produccionMensual));
    _printingResults.push(buildPrintResultSingleLine(brandNewResults.porcentajeAdulto));
    _printingResults.push(buildPrintResultSingleLine(brandNewResults.porcentajePediatric));
    _printingResults.push(buildPrintResultSingleLine(brandNewResults.porcentajeNeonatal));

    _printingResults.push(" ");
    _printingResults.push(buildPrintResultHeader("Costos Recursos Operativos"));
    _printingResults.push(headerSeparator);
    _printingResults.push(buildPrintResultLine(brandNewResults.PersonalProtectiveMaterialsCosts));
    _printingResults.push(buildPrintResultLine(brandNewResults.hygieneNCleaningMaterialsCosts));
    _printingResults.push(buildPrintResultLine(brandNewResults.maintenanceCosts));
    _printingResults.push(buildPrintResultLine(brandNewResults.productionCosts));
    _printingResults.push(buildPrintResultLine(brandNewResults.sterileEquipmentCosts));
    _printingResults.push(buildPrintResultLine(brandNewResults.automatedEquipmentCosts));

    _printingResults.push(" ");
    _printingResults.push(buildPrintResultHeader("Costos Personal Farmacéutico"));
    _printingResults.push(headerSeparator);
    _printingResults.push(buildPrintResultLine(brandNewResults.chemicalStaffHours));
    _printingResults.push(buildPrintResultLine(brandNewResults.costPerChemicalStaff));
    _printingResults.push(buildPrintResultLine(brandNewResults.auxiliaryStaffHours));
    _printingResults.push(buildPrintResultLine(brandNewResults.costPerAuxiliaryStaff));

    _printingResults.push(" ");
    _printingResults.push(buildPrintResultHeader("Costos por 1 NPT"));
    _printingResults.push(headerSeparator);
    _printingResults.push(buildPrintResultLine(brandNewResults.cost1NptAdult));
    _printingResults.push(buildPrintResultLine(brandNewResults.cost1NptPediatric));
    _printingResults.push(buildPrintResultLine(brandNewResults.cost1NptNeonatal));

    _printingResults.push(" ");
    _printingResults.push(buildPrintResultHeader("Costos Preparación 1 NPT"));
    _printingResults.push(headerSeparator);
    _printingResults.push(buildPrintResultLine(brandNewResults.costoTotalPreparacionNptAdult));
    _printingResults.push(buildPrintResultLine(brandNewResults.costoTotalPreparacionNptPediatric));
    _printingResults.push(buildPrintResultLine(brandNewResults.costoTotalPreparacionNptNeonatal));

    _printingResults.push(" ");
    _printingResults.push(buildPrintResultHeader("Totales"));
    _printingResults.push(headerSeparator);
    _printingResults.push(buildPrintResultLine(brandNewResults.valorTotalAdult));
    _printingResults.push(buildPrintResultLine(brandNewResults.valorTotalPediatric));
    _printingResults.push(buildPrintResultLine(brandNewResults.valorTotalNeonatal));
    _printingResults.push(" ");
    _printingResults.push(buildPrintResultLine(brandNewResults.valorTotalNutriciosDia));
    _printingResults.push(" ");
    _printingResults.push(" ");
    _printingResults.push(headerSeparator);
    _printingResults.push(buildSubMainHeaderline("B. Braun Medical", formatted));



    return _printingResults;
}

export const buildSubMainHeaderline = (inLeft: string, inRight: string): string => {
    const leftStr = padText(inLeft, 45);
    const rightStr = padText(inRight, 44, 'right');
    return `${leftStr} ${rightStr}`;
}

export const buildPrintResultHeader = (inDesc: string | null = null): string => {
    const label = padText(inDesc ? inDesc : "Descripción", 48);
    const manual = padText("Central Manual", 20, 'right');
    const automatic = padText("Central Automática", 20, 'right');
    return `${label} ${manual} ${automatic}`;
}

export const buildPrintResultSingleLine = (inData: JustValueItemModel): string => {
    const label = padText(inData.label, 48);
    const manual = padText("", 20, 'right');
    const automatic = padText(inData.value.toFixed(2), 20, 'right');
    return `${label} ${manual} ${automatic}`;
}

export const buildPrintResultLine = (inData: ResultItemModel): string => {
    const label = padText(inData.label, 53);
    const symbol = inData.symbol !== "" ?
        (inData.symbol === "H" ? " " : inData.symbol)
        : " ";
    const chars: string = "     ";

    const valueNptManual = formatNumber(inData.valueNptManual);
    const valueNptAutomatic = formatNumber(inData.valueNptAutomatic);

    const manual = padText(valueNptManual, 15, 'right');
    const automatic = padText(valueNptAutomatic, 15, 'right');

    return `${label}${symbol}${manual}${chars}${symbol}${automatic}`;
}

export const formatNumber = (inValue: number): string => {
    const formatedValue: string = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(inValue);
    return formatedValue;
}