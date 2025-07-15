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