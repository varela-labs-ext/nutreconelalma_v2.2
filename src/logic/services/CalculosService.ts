import InsumoItemModel from "../models/common/InsumoItemModel";
import InsumoItemCalc from "./InsumoItemCalc";


/* Distriye las solicutedes de Calculos a la clase adecuada */
class CalculosService {

    public static CalcularInsumo(inItem: InsumoItemModel): void {
        const calc = new InsumoItemCalc();
        calc.calcular(inItem);
    }
}

export default CalculosService;