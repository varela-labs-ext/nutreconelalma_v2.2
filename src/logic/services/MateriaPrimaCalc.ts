import InsumoItemModel from "../models/common/InsumoItemModel";
import MateriaPrimaModel from "../models/materiaPrima/MateriaPrimaModel";
import InsumoItemCalc from "./InsumoItemCalc";

class MateriaPrimaCalc extends BaseCalc<MateriaPrimaModel> {

    public calcular(inItem: MateriaPrimaModel): void {
        if (this.isValidObj(inItem)) {
            console.log("Objecto 'MateriaPrimaModel' no existe.")
            return;
        }

        const calc = new InsumoItemCalc();
        let total = 0;
        let totalPorMl = 0;

        Object.keys(inItem).forEach((clave) => {
            const subItem = (inItem as Record<string, any>)[clave];

            if (subItem instanceof InsumoItemModel) {
                const insumo = subItem as InsumoItemModel;

                if (insumo.excluirDelCalculo === false) {
                    calc.calcular(insumo);
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

export default MateriaPrimaCalc;