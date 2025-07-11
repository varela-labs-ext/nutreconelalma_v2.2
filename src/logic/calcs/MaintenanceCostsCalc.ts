import MaintenanceCostsModel from "../models/operativos/MaintenanceCostsModel";
import BaseCalc from "../services/BaseCalc";


class MaintenanceCostsCalc extends BaseCalc<MaintenanceCostsModel> {
    public compute(inItem: MaintenanceCostsModel): void {
        if (!this.isValidObj(inItem)) {
            return;
        }

        throw new Error("Method not implemented.");
    }

}

export default MaintenanceCostsCalc;