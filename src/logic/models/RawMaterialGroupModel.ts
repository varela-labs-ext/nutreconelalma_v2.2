import InsumoClinicoEnum from "@/logic/enums/InsumoClinicoNamesEnum";
import ClinicaInputRowModel from "./row_item/ClinicaInputRowModel";
import RawMaterialBaseModel from "./RawMaterialBaseModel";
import ClinicalInputCategoryEnumId from "../enums/ClinicalInputCategoryEnumId";


class RawMaterialModel extends RawMaterialBaseModel {
    public AguaEsteril_500ml: ClinicaInputRowModel;
    public Aminoacidos15_1000Ml: ClinicaInputRowModel;
    public Aminoacidos15_500Ml: ClinicaInputRowModel;
    public AminoacidosConElectrolitos10_500Ml: ClinicaInputRowModel;
    public AminoacidosInfantil100Ml: ClinicaInputRowModel;
    public AminoacidosInfantil1000Ml: ClinicaInputRowModel;
    public AminoacidosInfantil250Ml: ClinicaInputRowModel;
    public AminoacidosInfantil500Ml: ClinicaInputRowModel;
    public AminoacidosSinElectrolitos10_500Ml: ClinicaInputRowModel;
    public Bolsa1000Ml: ClinicaInputRowModel;
    public Bolsa2000Ml: ClinicaInputRowModel;
    public Bolsa500Ml: ClinicaInputRowModel;
    public CloruroPotasioVial_10cc: ClinicaInputRowModel;
    public CloruroSodioVial_10cc: ClinicaInputRowModel;
    public Complejo_B: ClinicaInputRowModel;
    public Dextrosa_50p_Bolsa_500cc: ClinicaInputRowModel;
    public ElementosTrazaPediatricos10Ml: ClinicaInputRowModel;
    public ElementosTraza10Ml: ClinicaInputRowModel;
    public FosfatoPotasioVial_10cc: ClinicaInputRowModel;
    public GlicerofosfatoSodio20Ml: ClinicaInputRowModel;
    public GluconatoCalcioVial_10cc: ClinicaInputRowModel;
    public LipidosLipofundin100Cc: ClinicaInputRowModel;
    public LipidosLipofundin500Cc: ClinicaInputRowModel;
    public Multivitaminas: ClinicaInputRowModel;
    public MixingEva1000Ml: ClinicaInputRowModel;
    public MixingEva2000Ml: ClinicaInputRowModel;
    public MixingEva250Ml: ClinicaInputRowModel;
    public MixingEva500Ml: ClinicaInputRowModel;
    public SulfatoMagnesioVial_10cc: ClinicaInputRowModel;
    public Tiamina: ClinicaInputRowModel;
    public Vitamina_C: ClinicaInputRowModel;
    public VitaminasHidrosolubles: ClinicaInputRowModel;
    public VitaminasLiposolublesAdulto: ClinicaInputRowModel;
    public VitaminasLiposolublesInfantil: ClinicaInputRowModel;



    constructor() {
        super();

        this.AguaEsteril_500ml = new ClinicaInputRowModel(InsumoClinicoEnum.AguaEsteril_500ml, ClinicalInputCategoryEnumId.DiluyentesVehiculos);
        this.Aminoacidos15_1000Ml = new ClinicaInputRowModel(InsumoClinicoEnum.Aminoacidos15_1000Ml, ClinicalInputCategoryEnumId.Aminoacidos);
        this.Aminoacidos15_500Ml = new ClinicaInputRowModel(InsumoClinicoEnum.Aminoacidos15_500Ml, ClinicalInputCategoryEnumId.Aminoacidos);
        this.AminoacidosConElectrolitos10_500Ml = new ClinicaInputRowModel(InsumoClinicoEnum.AminoacidosConElectrolitos10_500Ml, ClinicalInputCategoryEnumId.Aminoacidos);
        this.AminoacidosInfantil100Ml = new ClinicaInputRowModel(InsumoClinicoEnum.AminoacidosInfantil100Ml, ClinicalInputCategoryEnumId.Aminoacidos);
        this.AminoacidosInfantil1000Ml = new ClinicaInputRowModel(InsumoClinicoEnum.AminoacidosInfantil1000Ml, ClinicalInputCategoryEnumId.Aminoacidos);
        this.AminoacidosInfantil250Ml = new ClinicaInputRowModel(InsumoClinicoEnum.AminoacidosInfantil250Ml, ClinicalInputCategoryEnumId.Aminoacidos);
        this.AminoacidosInfantil500Ml = new ClinicaInputRowModel(InsumoClinicoEnum.AminoacidosInfantil500Ml, ClinicalInputCategoryEnumId.Aminoacidos);
        this.AminoacidosSinElectrolitos10_500Ml = new ClinicaInputRowModel(InsumoClinicoEnum.AminoacidosSinElectrolitos10_500Ml, ClinicalInputCategoryEnumId.Aminoacidos);
        this.Bolsa1000Ml = new ClinicaInputRowModel(InsumoClinicoEnum.Bolsa1000Ml, ClinicalInputCategoryEnumId.ContenedoresMezcladores);
        this.Bolsa2000Ml = new ClinicaInputRowModel(InsumoClinicoEnum.Bolsa2000Ml, ClinicalInputCategoryEnumId.ContenedoresMezcladores);
        this.Bolsa500Ml = new ClinicaInputRowModel(InsumoClinicoEnum.Bolsa500Ml, ClinicalInputCategoryEnumId.ContenedoresMezcladores);
        this.CloruroPotasioVial_10cc = new ClinicaInputRowModel(InsumoClinicoEnum.CloruroPotasioVial_10cc, ClinicalInputCategoryEnumId.ElectrolitosMinerales);
        this.CloruroSodioVial_10cc = new ClinicaInputRowModel(InsumoClinicoEnum.CloruroSodioVial_10cc, ClinicalInputCategoryEnumId.ElectrolitosMinerales);

        this.Complejo_B = new ClinicaInputRowModel(InsumoClinicoEnum.Complejo_B, ClinicalInputCategoryEnumId.Vitaminas);
        this.Dextrosa_50p_Bolsa_500cc = new ClinicaInputRowModel(InsumoClinicoEnum.Dextrosa_50p_Bolsa_500cc, ClinicalInputCategoryEnumId.CarbohidratosEnergeticos);
        this.ElementosTrazaPediatricos10Ml = new ClinicaInputRowModel(InsumoClinicoEnum.ElementosTrazaPediatricos10Ml, ClinicalInputCategoryEnumId.ElementosTraza);
        this.ElementosTraza10Ml = new ClinicaInputRowModel(InsumoClinicoEnum.ElementosTraza10Ml, ClinicalInputCategoryEnumId.ElementosTraza);
        this.FosfatoPotasioVial_10cc = new ClinicaInputRowModel(InsumoClinicoEnum.FosfatoPotasioVial_10cc, ClinicalInputCategoryEnumId.ElectrolitosMinerales);
        this.GlicerofosfatoSodio20Ml = new ClinicaInputRowModel(InsumoClinicoEnum.GlicerofosfatoSodio20Ml, ClinicalInputCategoryEnumId.ElectrolitosMinerales);
        this.GluconatoCalcioVial_10cc = new ClinicaInputRowModel(InsumoClinicoEnum.GluconatoCalcioVial_10cc, ClinicalInputCategoryEnumId.ElectrolitosMinerales);
        this.LipidosLipofundin100Cc = new ClinicaInputRowModel(InsumoClinicoEnum.LipidosLipofundin100Cc, ClinicalInputCategoryEnumId.Lipidos);
        this.LipidosLipofundin500Cc = new ClinicaInputRowModel(InsumoClinicoEnum.LipidosLipofundin500Cc, ClinicalInputCategoryEnumId.Lipidos);
        this.Multivitaminas = new ClinicaInputRowModel(InsumoClinicoEnum.Multivitaminas, ClinicalInputCategoryEnumId.Vitaminas);
        this.MixingEva1000Ml = new ClinicaInputRowModel(InsumoClinicoEnum.MixingEva1000Ml, ClinicalInputCategoryEnumId.ContenedoresMezcladores);
        this.MixingEva2000Ml = new ClinicaInputRowModel(InsumoClinicoEnum.MixingEva2000Ml, ClinicalInputCategoryEnumId.ContenedoresMezcladores);
        this.MixingEva250Ml = new ClinicaInputRowModel(InsumoClinicoEnum.MixingEva250Ml, ClinicalInputCategoryEnumId.ContenedoresMezcladores);
        this.MixingEva500Ml = new ClinicaInputRowModel(InsumoClinicoEnum.MixingEva500Ml, ClinicalInputCategoryEnumId.ContenedoresMezcladores);
        this.SulfatoMagnesioVial_10cc = new ClinicaInputRowModel(InsumoClinicoEnum.SulfatoMagnesioVial_10cc, ClinicalInputCategoryEnumId.ElectrolitosMinerales);
        this.Tiamina = new ClinicaInputRowModel(InsumoClinicoEnum.Tiamina, ClinicalInputCategoryEnumId.Vitaminas);

        this.Vitamina_C = new ClinicaInputRowModel(InsumoClinicoEnum.Vitamina_C, ClinicalInputCategoryEnumId.Vitaminas);
        this.VitaminasHidrosolubles = new ClinicaInputRowModel(InsumoClinicoEnum.VitaminasHidrosolubles, ClinicalInputCategoryEnumId.Vitaminas);
        this.VitaminasLiposolublesAdulto = new ClinicaInputRowModel(InsumoClinicoEnum.VitaminasLiposolublesAdulto, ClinicalInputCategoryEnumId.Vitaminas);
        this.VitaminasLiposolublesInfantil = new ClinicaInputRowModel(InsumoClinicoEnum.VitaminasLiposolublesInfantil, ClinicalInputCategoryEnumId.Vitaminas);
    }
}

export default RawMaterialModel;