import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";

class ComputerBasicSettingsModel {
    public centralType: CentralTypeIdEnum;
    public populationType: PopulationTypeIdEnum;

    constructor() {
        this.centralType = CentralTypeIdEnum.Manual; // Valor por defecto, se puede cambiar más adelante
        this.populationType = PopulationTypeIdEnum.Adulto; // Valor por defecto, se puede cambiar más adelante
    }
}

export default ComputerBasicSettingsModel;