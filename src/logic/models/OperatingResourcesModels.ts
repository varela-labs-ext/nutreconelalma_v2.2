import MaterialsNSuppliesCostsModel from "./MaterialsNSuppliesCostsModel";
import OperatingCostsModel from "./OperatingCostsModel";
import StaffPersonnelCostsModel from "./StaffPersonnelCostsModel";

class OperatingResourcesModels {
    public operatingCosts: OperatingCostsModel;
    public materialsNSuppliesCosts: MaterialsNSuppliesCostsModel;
    public staffPersonnelCosts: StaffPersonnelCostsModel;

    constructor() {
        this.operatingCosts = new OperatingCostsModel();
        this.materialsNSuppliesCosts = new MaterialsNSuppliesCostsModel();
        this.staffPersonnelCosts = new StaffPersonnelCostsModel();
    }
}

export default OperatingResourcesModels;