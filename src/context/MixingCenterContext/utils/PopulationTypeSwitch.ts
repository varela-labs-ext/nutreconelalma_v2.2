import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";
import { Logger } from "@/utils/logger";

const PopulationTypeSwitch = (
    inPopulationType: PopulationTypeIdEnum,
    byAdultoCallback: () => void,
    byNeonatalCallback: () => void,
    byPediatricaCallback: () => void
): void => {
    switch (inPopulationType) {
        case PopulationTypeIdEnum.Adulto:
            byAdultoCallback();
            break;
        case PopulationTypeIdEnum.Neonatal:
            byNeonatalCallback();
            break;
        case PopulationTypeIdEnum.Pediatrica:
            byPediatricaCallback();
            break;
        default:
            Logger.warn(`CentralTypeSwitch. Tipo de población no reconocido: "${inPopulationType}"`);
            break;
    }
};

export default PopulationTypeSwitch;