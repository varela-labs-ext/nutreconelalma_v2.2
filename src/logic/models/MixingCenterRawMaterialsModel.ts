import RawMaterialGroupModel from "./RawMaterialGroupModel";

class MixingCenterRawMaterialsModel {
    public adultoRawMaterial: RawMaterialGroupModel;
    public neonatalRawMaterial: RawMaterialGroupModel;
    public pediatricoRawMaterial: RawMaterialGroupModel;

    constructor() {
        this.adultoRawMaterial = new RawMaterialGroupModel();
        this.neonatalRawMaterial = new RawMaterialGroupModel();
        this.pediatricoRawMaterial = new RawMaterialGroupModel();
    }
}

export default MixingCenterRawMaterialsModel;