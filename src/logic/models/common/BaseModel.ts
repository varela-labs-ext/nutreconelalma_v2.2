import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import BaseLabelModel from "./BaseLabelModel";

abstract class BaseModel extends BaseLabelModel {
    public centralType: CentralTypeIdEnum;

    protected constructor(inLabel: string, inCentralType: CentralTypeIdEnum) {
        super(inLabel);
        this.centralType = inCentralType;
    }
}

export default BaseModel;