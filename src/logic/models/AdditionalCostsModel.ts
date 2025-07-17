
class AdditionalCostsModel {
    public maintenanceTotal: number;
    public productionTotal: number;
    public staffTotal: number;
    public protectiveMaterialsTotal: number;
    public hygieneNCleanlinessTotal: number;
    public sterilizedEquipmentTotal: number;
    public automatedEquipmentTotal: number;

    constructor() {
        this.protectiveMaterialsTotal = 0;
        this.sterilizedEquipmentTotal = 0;
        this.maintenanceTotal = 0;
        this.staffTotal = 0;
        this.hygieneNCleanlinessTotal = 0;
        this.automatedEquipmentTotal = 0;
        this.productionTotal = 0;
    }
}

export default AdditionalCostsModel;