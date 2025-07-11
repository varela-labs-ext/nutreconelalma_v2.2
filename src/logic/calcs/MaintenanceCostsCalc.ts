import MaintenanceCostsGroupModel from "../models/operating_resources/MaintenanceCostsGroupModel";
import BaseCalc from "../services/BaseCalc";


class MaintenanceCostsCalc extends BaseCalc<MaintenanceCostsGroupModel> {
    public compute(inItem: MaintenanceCostsGroupModel): void {
        if (!this.isValidObj(inItem)) {
            return;
        }

        throw new Error("Method not implemented.");
    }

}

export default MaintenanceCostsCalc;