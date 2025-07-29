//ClinicalInputCalc

import numberValidator from "@/utils/numberValidator";
import ClinicaInputRowModel from "../models/row_item/ClinicaInputRowModel";
import BaseCalc from "./BaseCalc";
import { isValidObj } from "@/utils/itemsUtils";
import { getClassName, Logger } from "@/utils/logger";
import FormulaTypeIdEnum from "../enums/FormulaTypeIdEnum";

class ClinicalInputCalc extends BaseCalc<ClinicaInputRowModel> {

    public compute(inItem: ClinicaInputRowModel): void {
        if (!isValidObj(inItem)) {
            Logger.warn("OBJETO INVALIDO.", "ClinicalInputCalc");
            Logger.info(inItem);
            return;
        }

        Logger.info(`COMPUTE: "${inItem.label}"`, getClassName(this));

        inItem.costoTotalPorUnidad = 0;
        inItem.costoPorMl = 0;

        if (inItem.exclude === true) {
            return;
        }

        if (!numberValidator.isValidObj(inItem)) { //<- Temporal
            Logger.info(`Insumo no calculable. [${inItem.label}]`, getClassName(this));
            return;
        }

        inItem.costoPorMl = this.calculaCostoPorML(inItem);
        inItem.costoTotalPorUnidad = this.calcularCostoTotalPorUnidad(inItem);

        if (inItem.presentacionMl <= 0) {
            Logger.info(`presentacionMl no puede ser 0 [${inItem.label}]`, getClassName(this));
        }
    }


    private calculaCostoPorML(inItem: ClinicaInputRowModel): number {
        if (inItem.presentacionMl > 0) {
            return (inItem.cantidadMl * inItem.costoPorUnidad) / inItem.presentacionMl;
        }

        return 0;
    }

    // Este valor depende de la forma que le corresponda según el tipo de materia prima
    private calcularCostoTotalPorUnidad(inItem: ClinicaInputRowModel): number {

        if (inItem.formulaId === FormulaTypeIdEnum.Formula_A) {
            return this.formula_A(inItem);
        } else if (inItem.formulaId === FormulaTypeIdEnum.Formula_B) {
            return this.formula_B(inItem);
        } else if (inItem.formulaId === FormulaTypeIdEnum.Formula_C) {
            return this.formula_C(inItem);
        }

        return 0;
    }

    // Formula: ( Costo X unidad / Presentacion Ml ) * Cantidad Ml
    private formula_A(inItem: ClinicaInputRowModel): number {
        if (inItem.presentacionMl > 0) {
            return (inItem.costoPorUnidad / inItem.presentacionMl) * inItem.cantidadMl;
        }

        return 0;
    }

    // Formula: Cantidad (unidad) * Costo X Unidad
    private formula_B(inItem: ClinicaInputRowModel): number {
        if (inItem.cantidadUnidad > 0) {
            return inItem.cantidadUnidad * inItem.costoPorUnidad;
        }

        return 0;
    }

    // Formula C: copiar el costo x ml que ya fue calculado.
    private formula_C(inItem: ClinicaInputRowModel): number {
        if (inItem.cantidadUnidad > 0) {
            return inItem.costoPorMl;
        }

        return 0;
    }
}

export default ClinicalInputCalc;