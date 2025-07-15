import ClinicaInputRowModel from "@/logic/models/row_item/ClinicaInputRowModel";
import EstimatedCostItemModel from "@/logic/models/row_item/EstimatedCostItemRowModel";
import UnitCostItemModel from "@/logic/models/row_item/UnitCostItemRowModel";

export const isValidObj = (inItem: unknown): boolean => {
    return inItem !== null && inItem !== undefined && typeof inItem === 'object';
}

export const isUnitCostItemModel = (valor: unknown): valor is UnitCostItemModel => {
    return (
        valor !== null &&
        typeof valor === "object" &&
        "quantity" in valor &&
        "unitCost" in valor &&
        "totalCost" in valor
    );
};

export const isEstimatedCostItemModel = (valor: unknown): valor is EstimatedCostItemModel => {
    return (
        valor !== null &&
        typeof valor === "object" &&
        "valorEstimado" in valor &&
        "valorUnitario" in valor
    );
};


export const isClinicaInputRowModel = (valor: unknown): valor is ClinicaInputRowModel => {
    return (
        valor !== null &&
        typeof valor === "object" &&
        "costoTotalPorUnidad" in valor &&
        "costoPorUnidad" in valor
    );
};