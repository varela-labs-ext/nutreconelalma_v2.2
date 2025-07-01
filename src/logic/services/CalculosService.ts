import InsumoItemModel from "../models/common/InsumoItemModel";
import InsumoItemCalc from "./InsumoItemCalc";
import MateriaPrimaModel from '@/logic/models/materiaPrima/MateriaPrimaModel';
import MateriaPrimaCalc from "./MateriaPrimaCalc";


/* Distriye las solicutedes de Calculos a la clase adecuada */
class CalculosService {

    public static CalcularInsumo(inItem: InsumoItemModel): void {
        const calc = new InsumoItemCalc();
        calc.calcular(inItem);
    }

    public static CalcularMateriaPrima(inItem: MateriaPrimaModel): void {
        const calc = new MateriaPrimaCalc();
        calc.calcular(inItem);
    }
}

export default CalculosService;