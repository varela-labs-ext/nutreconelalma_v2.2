import InsumoClinicoEnum from "@/logic/enums/InsumoClinicoNamesEnum";
import ClinicaInputModel from "./common/ClinicaInputModel";
import RawMaterialBaseModel from "./RawMaterialBaseModel";


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

        this.AguaEsteril_500ml = new ClinicaInputModel(InsumoClinicoEnum.AguaEsteril_500ml);
        this.Aminoacidos15_1000Ml = new ClinicaInputModel(InsumoClinicoEnum.Aminoacidos15_1000Ml);
        this.Aminoacidos15_500Ml = new ClinicaInputModel(InsumoClinicoEnum.Aminoacidos15_500Ml);
        this.AminoacidosConElectrolitos10_500Ml = new ClinicaInputModel(InsumoClinicoEnum.AminoacidosConElectrolitos10_500Ml);
        this.AminoacidosInfantil100Ml = new ClinicaInputModel(InsumoClinicoEnum.AminoacidosInfantil100Ml);
        this.AminoacidosInfantil1000Ml = new ClinicaInputModel(InsumoClinicoEnum.AminoacidosInfantil1000Ml);
        this.AminoacidosInfantil250Ml = new ClinicaInputModel(InsumoClinicoEnum.AminoacidosInfantil250Ml);
        this.AminoacidosInfantil500Ml = new ClinicaInputModel(InsumoClinicoEnum.AminoacidosInfantil500Ml);
        this.AminoacidosSinElectrolitos10_500Ml = new ClinicaInputModel(InsumoClinicoEnum.AminoacidosSinElectrolitos10_500Ml);
        this.Bolsa1000Ml = new ClinicaInputModel(InsumoClinicoEnum.Bolsa1000Ml);
        this.Bolsa2000Ml = new ClinicaInputModel(InsumoClinicoEnum.Bolsa2000Ml);
        this.Bolsa500Ml = new ClinicaInputModel(InsumoClinicoEnum.Bolsa500Ml);
        this.CloruroPotasioVial_10cc = new ClinicaInputModel(InsumoClinicoEnum.CloruroPotasioVial_10cc);
        this.CloruroSodioVial_10cc = new ClinicaInputModel(InsumoClinicoEnum.CloruroSodioVial_10cc);

        this.Complejo_B = new ClinicaInputModel(InsumoClinicoEnum.Complejo_B);
        this.Dextrosa_50p_Bolsa_500cc = new ClinicaInputModel(InsumoClinicoEnum.Dextrosa_50p_Bolsa_500cc);
        this.ElementosTrazaPediatricos10Ml = new ClinicaInputModel(InsumoClinicoEnum.ElementosTrazaPediatricos10Ml);
        this.ElementosTraza10Ml = new ClinicaInputModel(InsumoClinicoEnum.ElementosTraza10Ml);
        this.FosfatoPotasioVial_10cc = new ClinicaInputModel(InsumoClinicoEnum.FosfatoPotasioVial_10cc);
        this.GlicerofosfatoSodio20Ml = new ClinicaInputModel(InsumoClinicoEnum.GlicerofosfatoSodio20Ml);
        this.GluconatoCalcioVial_10cc = new ClinicaInputModel(InsumoClinicoEnum.GluconatoCalcioVial_10cc);
        this.LipidosLipofundin100Cc = new ClinicaInputModel(InsumoClinicoEnum.LipidosLipofundin100Cc);
        this.LipidosLipofundin500Cc = new ClinicaInputModel(InsumoClinicoEnum.LipidosLipofundin500Cc);
        this.Multivitaminas = new ClinicaInputModel(InsumoClinicoEnum.Multivitaminas);
        this.MixingEva1000Ml = new ClinicaInputModel(InsumoClinicoEnum.MixingEva1000Ml);
        this.MixingEva2000Ml = new ClinicaInputModel(InsumoClinicoEnum.MixingEva2000Ml);
        this.MixingEva250Ml = new ClinicaInputModel(InsumoClinicoEnum.MixingEva250Ml);
        this.MixingEva500Ml = new ClinicaInputModel(InsumoClinicoEnum.MixingEva500Ml);
        this.SulfatoMagnesioVial_10cc = new ClinicaInputModel(InsumoClinicoEnum.SulfatoMagnesioVial_10cc);
        this.Tiamina = new ClinicaInputModel(InsumoClinicoEnum.Tiamina);

        this.Vitamina_C = new ClinicaInputModel(InsumoClinicoEnum.Vitamina_C);
        this.VitaminasHidrosolubles = new ClinicaInputModel(InsumoClinicoEnum.VitaminasHidrosolubles);
        this.VitaminasLiposolublesAdulto = new ClinicaInputModel(InsumoClinicoEnum.VitaminasLiposolublesAdulto);
        this.VitaminasLiposolublesInfantil = new ClinicaInputModel(InsumoClinicoEnum.VitaminasLiposolublesInfantil);
    }
}

export default RawMaterialModel;