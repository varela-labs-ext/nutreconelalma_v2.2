import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";

abstract class BasicModel {
    public totalCost: number;
    public centralType: CentralTypeIdEnum;

    protected constructor(inCentralType: CentralTypeIdEnum) {
        this.totalCost = 0;
        this.centralType = inCentralType;
    }
}

export default BasicModel;