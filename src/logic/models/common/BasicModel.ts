import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";

abstract class BasicModel {
    public totalCost: number;
    public centralType: CentralTypeIdEnum;

    protected constructor(inCentralType: CentralTypeIdEnum = CentralTypeIdEnum.None) {
        this.totalCost = inCentralType;
        this.centralType = CentralTypeIdEnum.None;
    }
}

export default BasicModel;