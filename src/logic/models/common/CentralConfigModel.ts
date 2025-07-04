import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";

class CentralConfigModel {
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

        this.productionLines = 0;
        this.productionPerDay = 0;

        this.percentPerAdult = 0;
        this.percentPerPediatric = 0;
        this.percentPerNeonatal = 0;
    }
}

export default CentralConfigModel;