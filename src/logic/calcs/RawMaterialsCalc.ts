import BaseCalc from "../services/BaseCalc";
import RawMaterialGroupModel from "../models/RawMaterialGroupModel";
import ClinicalInputCalc from "../services/ClinicalInputCalc";
import { isClinicaInputRowModel, isValidObj } from "@/utils/itemsUtils";

class RawMaterialsCalc extends BaseCalc<RawMaterialGroupModel> {

    public compute(inItem: RawMaterialGroupModel): void {
        if (!isValidObj(inItem)) {
            console.log("Objecto 'RawMaterialGroupModel' no ES VALIDO.");
            console.log(inItem);
            return;
        }

        const clinicalInputCalc = new ClinicalInputCalc();
        let total = 0;
        let totalPorMl = 0;

        for (const propertyName in inItem) {
            const posibleItem = inItem[propertyName as keyof RawMaterialGroupModel];

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