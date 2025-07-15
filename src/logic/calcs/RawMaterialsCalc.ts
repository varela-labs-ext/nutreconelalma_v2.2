import BaseCalc from "../services/BaseCalc";
import RawMaterialModel from "../models/RawMaterialGroupModel";
import ClinicalInputCalc from "../services/ClinicalInputCalc";
import { isClinicaInputRowModel, isValidObj } from "@/utils/itemsUtils";

class RawMaterialsCalc extends BaseCalc<RawMaterialModel> {

    public compute(inItem: RawMaterialModel): void {
        if (!isValidObj(inItem)) {
            console.log("Objecto 'RawMaterialModel' no ES VALIDO.");
            console.log(inItem);
            return;
        }

        const clinicalInputCalc = new ClinicalInputCalc();
        let total = 0;
        let totalPorMl = 0;

        for (const propertyName in inItem) {
            const posibleItem = inItem[propertyName as keyof RawMaterialModel];

            if (isClinicaInputRowModel(posibleItem)) {
                // const item = posibleItem as ClinicaInputRowModel;

                if (posibleItem.exclude === false) {
                    clinicalInputCalc.compute(posibleItem);

                    if (!isNaN(posibleItem.costoTotalPorUnidad)) {
                        total += posibleItem.costoTotalPorUnidad;
                    }

                    if (!isNaN(posibleItem.costoPorMl)) {
                        totalPorMl += posibleItem.costoPorMl;
                    }
                } else {
                    console.log(`Propiedad: ${propertyName} EXCLUIDA`);
                }
            }
        }

        inItem.total = total;
        inItem.totalPorMl = totalPorMl;
    }
}

export default RawMaterialsCalc;