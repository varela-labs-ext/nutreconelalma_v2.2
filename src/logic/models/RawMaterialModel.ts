import InsumoClinicoEnum from "@/logic/enums/InsumoClinicoNamesEnum";
import ClinicaInputModel from "./row_item/ClinicaInputModel";
import RawMaterialBaseModel from "./RawMaterialBaseModel";
import ClinicalInputCategoryEnumId from "../enums/ClinicalInputCategoryEnumId";


class RawMaterialModel extends RawMaterialBaseModel {
    public AguaEsteril_500ml: ClinicaInputModel;
    public Aminoacidos15_1000Ml: ClinicaInputModel;
    public Aminoacidos15_500Ml: ClinicaInputModel;
    public AminoacidosConElectrolitos10_500Ml: ClinicaInputModel;
    public AminoacidosInfantil100Ml: ClinicaInputModel;
    public AminoacidosInfantil1000Ml: ClinicaInputModel;
    public AminoacidosInfantil250Ml: ClinicaInputModel;
    public AminoacidosInfantil500Ml: ClinicaInputModel;
    public AminoacidosSinElectrolitos10_500Ml: ClinicaInputModel;
    public Bolsa1000Ml: ClinicaInputModel;
    public Bolsa2000Ml: ClinicaInputModel;
    public Bolsa500Ml: ClinicaInputModel;
    public CloruroPotasioVial_10cc: ClinicaInputModel;
    public CloruroSodioVial_10cc: ClinicaInputModel;
    public Complejo_B: ClinicaInputModel;
    public Dextrosa_50p_Bolsa_500cc: ClinicaInputModel;
    public ElementosTrazaPediatricos10Ml: ClinicaInputModel;
    public ElementosTraza10Ml: ClinicaInputModel;
    public FosfatoPotasioVial_10cc: ClinicaInputModel;
    public GlicerofosfatoSodio20Ml: ClinicaInputModel;
    public GluconatoCalcioVial_10cc: ClinicaInputModel;
    public LipidosLipofundin100Cc: ClinicaInputModel;
    public LipidosLipofundin500Cc: ClinicaInputModel;
    public Multivitaminas: ClinicaInputModel;
    public MixingEva1000Ml: ClinicaInputModel;
    public MixingEva2000Ml: ClinicaInputModel;
    public MixingEva250Ml: ClinicaInputModel;
    public MixingEva500Ml: ClinicaInputModel;
    public SulfatoMagnesioVial_10cc: ClinicaInputModel;
    public Tiamina: ClinicaInputModel;
    public Vitamina_C: ClinicaInputModel;
    public VitaminasHidrosolubles: ClinicaInputModel;
    public VitaminasLiposolublesAdulto: ClinicaInputModel;
    public VitaminasLiposolublesInfantil: ClinicaInputModel;



    constructor() {
        super();

        this.AguaEsteril_500ml = new ClinicaInputModel(InsumoClinicoEnum.AguaEsteril_500ml, ClinicalInputCategoryEnumId.DiluyentesVehiculos);
        this.Aminoacidos15_1000Ml = new ClinicaInputModel(InsumoClinicoEnum.Aminoacidos15_1000Ml, ClinicalInputCategoryEnumId.Aminoacidos);
        this.Aminoacidos15_500Ml = new ClinicaInputModel(InsumoClinicoEnum.Aminoacidos15_500Ml, ClinicalInputCategoryEnumId.Aminoacidos);
        this.AminoacidosConElectrolitos10_500Ml = new ClinicaInputModel(InsumoClinicoEnum.AminoacidosConElectrolitos10_500Ml, ClinicalInputCategoryEnumId.Aminoacidos);
        this.AminoacidosInfantil100Ml = new ClinicaInputModel(InsumoClinicoEnum.AminoacidosInfantil100Ml, ClinicalInputCategoryEnumId.Aminoacidos);
        this.AminoacidosInfantil1000Ml = new ClinicaInputModel(InsumoClinicoEnum.AminoacidosInfantil1000Ml, ClinicalInputCategoryEnumId.Aminoacidos);
        this.AminoacidosInfantil250Ml = new ClinicaInputModel(InsumoClinicoEnum.AminoacidosInfantil250Ml, ClinicalInputCategoryEnumId.Aminoacidos);
        this.AminoacidosInfantil500Ml = new ClinicaInputModel(InsumoClinicoEnum.AminoacidosInfantil500Ml, ClinicalInputCategoryEnumId.Aminoacidos);
        this.AminoacidosSinElectrolitos10_500Ml = new ClinicaInputModel(InsumoClinicoEnum.AminoacidosSinElectrolitos10_500Ml, ClinicalInputCategoryEnumId.Aminoacidos);
        this.Bolsa1000Ml = new ClinicaInputModel(InsumoClinicoEnum.Bolsa1000Ml, ClinicalInputCategoryEnumId.ContenedoresMezcladores);
        this.Bolsa2000Ml = new ClinicaInputModel(InsumoClinicoEnum.Bolsa2000Ml, ClinicalInputCategoryEnumId.ContenedoresMezcladores);
        this.Bolsa500Ml = new ClinicaInputModel(InsumoClinicoEnum.Bolsa500Ml, ClinicalInputCategoryEnumId.ContenedoresMezcladores);
        this.CloruroPotasioVial_10cc = new ClinicaInputModel(InsumoClinicoEnum.CloruroPotasioVial_10cc, ClinicalInputCategoryEnumId.ElectrolitosMinerales);
        this.CloruroSodioVial_10cc = new ClinicaInputModel(InsumoClinicoEnum.CloruroSodioVial_10cc, ClinicalInputCategoryEnumId.ElectrolitosMinerales);

        this.Complejo_B = new ClinicaInputModel(InsumoClinicoEnum.Complejo_B, ClinicalInputCategoryEnumId.Vitaminas);
        this.Dextrosa_50p_Bolsa_500cc = new ClinicaInputModel(InsumoClinicoEnum.Dextrosa_50p_Bolsa_500cc, ClinicalInputCategoryEnumId.CarbohidratosEnergeticos);
        this.ElementosTrazaPediatricos10Ml = new ClinicaInputModel(InsumoClinicoEnum.ElementosTrazaPediatricos10Ml, ClinicalInputCategoryEnumId.ElementosTraza);
        this.ElementosTraza10Ml = new ClinicaInputModel(InsumoClinicoEnum.ElementosTraza10Ml, ClinicalInputCategoryEnumId.ElementosTraza);
        this.FosfatoPotasioVial_10cc = new ClinicaInputModel(InsumoClinicoEnum.FosfatoPotasioVial_10cc, ClinicalInputCategoryEnumId.ElectrolitosMinerales);
        this.GlicerofosfatoSodio20Ml = new ClinicaInputModel(InsumoClinicoEnum.GlicerofosfatoSodio20Ml, ClinicalInputCategoryEnumId.ElectrolitosMinerales);
        this.GluconatoCalcioVial_10cc = new ClinicaInputModel(InsumoClinicoEnum.GluconatoCalcioVial_10cc, ClinicalInputCategoryEnumId.ElectrolitosMinerales);
        this.LipidosLipofundin100Cc = new ClinicaInputModel(InsumoClinicoEnum.LipidosLipofundin100Cc, ClinicalInputCategoryEnumId.Lipidos);
        this.LipidosLipofundin500Cc = new ClinicaInputModel(InsumoClinicoEnum.LipidosLipofundin500Cc, ClinicalInputCategoryEnumId.Lipidos);
        this.Multivitaminas = new ClinicaInputModel(InsumoClinicoEnum.Multivitaminas, ClinicalInputCategoryEnumId.Vitaminas);
        this.MixingEva1000Ml = new ClinicaInputModel(InsumoClinicoEnum.MixingEva1000Ml, ClinicalInputCategoryEnumId.ContenedoresMezcladores);
        this.MixingEva2000Ml = new ClinicaInputModel(InsumoClinicoEnum.MixingEva2000Ml, ClinicalInputCategoryEnumId.ContenedoresMezcladores);
        this.MixingEva250Ml = new ClinicaInputModel(InsumoClinicoEnum.MixingEva250Ml, ClinicalInputCategoryEnumId.ContenedoresMezcladores);
        this.MixingEva500Ml = new ClinicaInputModel(InsumoClinicoEnum.MixingEva500Ml, ClinicalInputCategoryEnumId.ContenedoresMezcladores);
        this.SulfatoMagnesioVial_10cc = new ClinicaInputModel(InsumoClinicoEnum.SulfatoMagnesioVial_10cc, ClinicalInputCategoryEnumId.ElectrolitosMinerales);
        this.Tiamina = new ClinicaInputModel(InsumoClinicoEnum.Tiamina, ClinicalInputCategoryEnumId.Vitaminas);

        this.Vitamina_C = new ClinicaInputModel(InsumoClinicoEnum.Vitamina_C, ClinicalInputCategoryEnumId.Vitaminas);
        this.VitaminasHidrosolubles = new ClinicaInputModel(InsumoClinicoEnum.VitaminasHidrosolubles, ClinicalInputCategoryEnumId.Vitaminas);
        this.VitaminasLiposolublesAdulto = new ClinicaInputModel(InsumoClinicoEnum.VitaminasLiposolublesAdulto, ClinicalInputCategoryEnumId.Vitaminas);
        this.VitaminasLiposolublesInfantil = new ClinicaInputModel(InsumoClinicoEnum.VitaminasLiposolublesInfantil, ClinicalInputCategoryEnumId.Vitaminas);
    }
}

export default RawMaterialModel;