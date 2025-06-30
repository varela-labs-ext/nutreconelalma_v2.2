import TipoCentralIdEnum from "@/logic/enums/TipoCentralIdEnum";
import TipoPoblacionIdEnum from "@/logic/enums/TipoPoblacionIdEnum";

class ProduccionSettingsModel {
    public tipoPoblacion: TipoPoblacionIdEnum;
    public tipoCentral: TipoCentralIdEnum;
    public lineasProduccion: number; // Líneas de producción de la central
    public produccionDia: number; // Producción día
    public porcentajeAdulto: number; // Porcentaje de nutriciones de adulto
    public porcentajePediatrico: number; // Porcentaje de nutriciones pediátrica
    public porcentajeNeonatal: number; // Porcentaje de nutriciones neonatal

    constructor() {
        this.tipoPoblacion = TipoPoblacionIdEnum.Adulto; // Se podría configurar mas adelante
        this.tipoCentral = TipoCentralIdEnum.Manual;
        this.lineasProduccion = 0;
        this.produccionDia = 0;
        this.porcentajeAdulto = 0;
        this.porcentajePediatrico = 0;
        this.porcentajeNeonatal = 0;
    }
}

export default ProduccionSettingsModel;