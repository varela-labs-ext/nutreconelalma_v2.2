import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import { Logger } from "@/utils/logger";

const CentralTypeSwitch = (
    inCentralType: CentralTypeIdEnum,
    byManualCallback: () => void,
    byAutomaticCallback: () => void
): void => {
    switch (inCentralType) {
        case CentralTypeIdEnum.Manual:
            byManualCallback();
            break;
        case CentralTypeIdEnum.Automatico:
            byAutomaticCallback();
            break;
        default:
            Logger.warn(`CentralTypeSwitch. Tipo de central no reconocido: "${inCentralType}"`);
            break;
    }
};

export default CentralTypeSwitch;