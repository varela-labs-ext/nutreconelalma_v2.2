import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import BasicModel from "./BasicModel";


class BasicOperationalModel extends BasicModel {
    constructor(inCentralType: CentralTypeIdEnum = CentralTypeIdEnum.None) {
        super(inCentralType);
    }
}

export default BasicOperationalModel;