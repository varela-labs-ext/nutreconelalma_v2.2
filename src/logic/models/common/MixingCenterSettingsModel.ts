import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";

class MixingCenterSettingsModel {
    public populationType: PopulationTypeIdEnum;
    public centralType: CentralTypeIdEnum;

    public productionLines: number; // Líneas de producción de la central
    public productionPerDay: number; // Producción día

    public percentPerAdult: number; // Porcentaje de nutriciones de adulto
    public percentPerPediatric: number; // Porcentaje de nutriciones pediátrica
    public percentPerNeonatal: number; // Porcentaje de nutriciones neonatal

    constructor() {
        this.populationType = PopulationTypeIdEnum.Adulto; // Se podría configurar mas adelante
        this.centralType = CentralTypeIdEnum.Manual;

        this.productionLines = 4;
        this.productionPerDay = 10;

        this.percentPerAdult = 34;
        this.percentPerPediatric = 33;
        this.percentPerNeonatal = 33;
    }
}

export default MixingCenterSettingsModel;