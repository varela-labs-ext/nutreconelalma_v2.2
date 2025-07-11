import MaintenanceCostsModel from "../models/operating_resources/MaintenanceCostsGroupModel";
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