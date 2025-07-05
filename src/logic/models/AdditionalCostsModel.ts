
class AdditionalCostsModel {
    public protectiveMaterialsTotal: number;
    public sterilizedEquipmentTotal: number;
    public maintenanceTotal: number;
    public staffTotal: number;
    public hygieneNCleanlinessTotal: number;
    public automatedEquipmentTotal: number;
    public productionTotal: number;

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