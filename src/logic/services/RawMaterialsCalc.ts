import InsumoItemModel from "../models/common/InsumoItemModel";

import BaseCalc from "./BaseCalc";
import RawMaterialsModel from "../models/materiaPrima/RawMaterialModel";
import ClinicalInputCalc from "./ClinicalInputCalc";

class RawMaterialsCalc extends BaseCalc<RawMaterialsModel> {

    public compute(inItem: RawMaterialsModel): void {

        if (!this.isValidObj(inItem)) {
            console.log("Objecto 'MateriaPrimaModel' no existe.");
            console.log(inItem);
            return;
        }

        const calc = new ClinicalInputCalc();
        let total = 0;
        let totalPorMl = 0;

        Object.keys(inItem).forEach((clave) => {
            const subItem = (inItem as Record<string, any>)[clave];

            if (subItem instanceof InsumoItemModel) {
                const insumo = subItem as InsumoItemModel;

                if (insumo && insumo.excluirDelCalculo === false) {
                    calc.compute(insumo);
                    total += insumo.costoTotalPorUnidad;
                    totalPorMl += insumo.costoPorMl;
                } else {
                    console.log(`Propiedad: ${clave} EXCLUIDA`);
                }
            }
        });

        inItem.total = total;
        inItem.totalPorMl = totalPorMl;
    }
}

export default RawMaterialsCalc;