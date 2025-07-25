import InsumoClinicoEnum from "@/logic/enums/InsumoClinicoNamesEnum";
import ClinicaInputRowModel from "./row_item/ClinicaInputRowModel";
import RawMaterialBaseModel from "./RawMaterialBaseModel";
import ClinicalInputCategoryEnumId from "../enums/ClinicalInputCategoryEnumId";
import InsumoClinicoIdEnum from "../enums/InsumoClinicoIdEnum";
import FormulaTypeIdEnum from "../enums/FormulaTypeIdEnum";


class RawMaterialGroupModel extends RawMaterialBaseModel {
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

        this.AguaEsteril_500ml = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.AguaEsteril_500ml,
            InsumoClinicoEnum.AguaEsteril_500ml,
            ClinicalInputCategoryEnumId.DiluyentesVehiculos,
            FormulaTypeIdEnum.Formula_A);

        this.Aminoacidos15_1000Ml = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.Aminoacidos15_1000Ml,
            InsumoClinicoEnum.Aminoacidos15_1000Ml,
            ClinicalInputCategoryEnumId.Aminoacidos,
            FormulaTypeIdEnum.Formula_A);

        this.Aminoacidos15_500Ml = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.Aminoacidos15_500Ml,
            InsumoClinicoEnum.Aminoacidos15_500Ml,
            ClinicalInputCategoryEnumId.Aminoacidos,
            FormulaTypeIdEnum.Formula_A);

        this.AminoacidosConElectrolitos10_500Ml = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.AminoacidosConElectrolitos10_500Ml,
            InsumoClinicoEnum.AminoacidosConElectrolitos10_500Ml,
            ClinicalInputCategoryEnumId.Aminoacidos,
            FormulaTypeIdEnum.Formula_A);

        this.AminoacidosInfantil100Ml = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.AminoacidosInfantil100Ml,
            InsumoClinicoEnum.AminoacidosInfantil100Ml,
            ClinicalInputCategoryEnumId.Aminoacidos,
            FormulaTypeIdEnum.Formula_C);

        this.AminoacidosInfantil1000Ml = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.AminoacidosInfantil1000Ml,
            InsumoClinicoEnum.AminoacidosInfantil1000Ml,
            ClinicalInputCategoryEnumId.Aminoacidos,
            FormulaTypeIdEnum.Formula_B);

        this.AminoacidosInfantil250Ml = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.AminoacidosInfantil250Ml,
            InsumoClinicoEnum.AminoacidosInfantil250Ml,
            ClinicalInputCategoryEnumId.Aminoacidos,
            FormulaTypeIdEnum.Formula_B);

        this.AminoacidosInfantil500Ml = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.AminoacidosInfantil500Ml,
            InsumoClinicoEnum.AminoacidosInfantil500Ml,
            ClinicalInputCategoryEnumId.Aminoacidos,
            FormulaTypeIdEnum.Formula_B);

        this.AminoacidosSinElectrolitos10_500Ml = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.AminoacidosSinElectrolitos10_500Ml,
            InsumoClinicoEnum.AminoacidosSinElectrolitos10_500Ml,
            ClinicalInputCategoryEnumId.Aminoacidos,
            FormulaTypeIdEnum.Formula_A);

        this.Bolsa1000Ml = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.Bolsa1000Ml,
            InsumoClinicoEnum.Bolsa1000Ml,
            ClinicalInputCategoryEnumId.ContenedoresMezcladores,
            FormulaTypeIdEnum.Formula_A);

        this.Bolsa2000Ml = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.Bolsa2000Ml,
            InsumoClinicoEnum.Bolsa2000Ml,
            ClinicalInputCategoryEnumId.ContenedoresMezcladores,
            FormulaTypeIdEnum.Formula_A);

        this.Bolsa500Ml = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.Bolsa500Ml,
            InsumoClinicoEnum.Bolsa500Ml,
            ClinicalInputCategoryEnumId.ContenedoresMezcladores,
            FormulaTypeIdEnum.Formula_A);

        this.CloruroPotasioVial_10cc = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.CloruroPotasioVial_10cc,
            InsumoClinicoEnum.CloruroPotasioVial_10cc,
            ClinicalInputCategoryEnumId.ElectrolitosMinerales,
            FormulaTypeIdEnum.Formula_A);

        this.CloruroSodioVial_10cc = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.CloruroSodioVial_10cc,
            InsumoClinicoEnum.CloruroSodioVial_10cc,
            ClinicalInputCategoryEnumId.ElectrolitosMinerales,
            FormulaTypeIdEnum.Formula_A);


        this.Complejo_B = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.Complejo_B,
            InsumoClinicoEnum.Complejo_B,
            ClinicalInputCategoryEnumId.Vitaminas,
            FormulaTypeIdEnum.Formula_A);

        this.Dextrosa_50p_Bolsa_500cc = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.Dextrosa_50p_Bolsa_500cc,
            InsumoClinicoEnum.Dextrosa_50p_Bolsa_500cc,
            ClinicalInputCategoryEnumId.CarbohidratosEnergeticos,
            FormulaTypeIdEnum.Formula_A);

        this.ElementosTrazaPediatricos10Ml = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.ElementosTrazaPediatricos10Ml,
            InsumoClinicoEnum.ElementosTrazaPediatricos10Ml,
            ClinicalInputCategoryEnumId.ElementosTraza,
            FormulaTypeIdEnum.Formula_A);

        this.ElementosTraza10Ml = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.ElementosTraza10Ml,
            InsumoClinicoEnum.ElementosTraza10Ml,
            ClinicalInputCategoryEnumId.ElementosTraza,
            FormulaTypeIdEnum.Formula_A);

        this.FosfatoPotasioVial_10cc = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.FosfatoPotasioVial_10cc,
            InsumoClinicoEnum.FosfatoPotasioVial_10cc,
            ClinicalInputCategoryEnumId.ElectrolitosMinerales,
            FormulaTypeIdEnum.Formula_B);

        this.GlicerofosfatoSodio20Ml = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.GlicerofosfatoSodio20Ml,
            InsumoClinicoEnum.GlicerofosfatoSodio20Ml,
            ClinicalInputCategoryEnumId.ElectrolitosMinerales,
            FormulaTypeIdEnum.Formula_A);

        this.GluconatoCalcioVial_10cc = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.GluconatoCalcioVial_10cc,
            InsumoClinicoEnum.GluconatoCalcioVial_10cc,
            ClinicalInputCategoryEnumId.ElectrolitosMinerales,
            FormulaTypeIdEnum.Formula_A);

        this.LipidosLipofundin100Cc = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.LipidosLipofundin100Cc,
            InsumoClinicoEnum.LipidosLipofundin100Cc,
            ClinicalInputCategoryEnumId.Lipidos,
            FormulaTypeIdEnum.Formula_A);

        this.LipidosLipofundin500Cc = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.LipidosLipofundin500Cc,
            InsumoClinicoEnum.LipidosLipofundin500Cc,
            ClinicalInputCategoryEnumId.Lipidos,
            FormulaTypeIdEnum.Formula_A);

        this.Multivitaminas = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.Multivitaminas,
            InsumoClinicoEnum.Multivitaminas,
            ClinicalInputCategoryEnumId.Vitaminas,
            FormulaTypeIdEnum.Formula_B);

        this.MixingEva1000Ml = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.MixingEva1000Ml,
            InsumoClinicoEnum.MixingEva1000Ml,
            ClinicalInputCategoryEnumId.ContenedoresMezcladores,
            FormulaTypeIdEnum.Formula_B);

        this.MixingEva2000Ml = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.MixingEva2000Ml,
            InsumoClinicoEnum.MixingEva2000Ml,
            ClinicalInputCategoryEnumId.ContenedoresMezcladores,
            FormulaTypeIdEnum.Formula_B);

        this.MixingEva250Ml = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.MixingEva250Ml,
            InsumoClinicoEnum.MixingEva250Ml,
            ClinicalInputCategoryEnumId.ContenedoresMezcladores,
            FormulaTypeIdEnum.Formula_B);

        this.MixingEva500Ml = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.MixingEva500Ml,
            InsumoClinicoEnum.MixingEva500Ml,
            ClinicalInputCategoryEnumId.ContenedoresMezcladores,
            FormulaTypeIdEnum.Formula_B);

        this.SulfatoMagnesioVial_10cc = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.SulfatoMagnesioVial_10cc,
            InsumoClinicoEnum.SulfatoMagnesioVial_10cc,
            ClinicalInputCategoryEnumId.ElectrolitosMinerales,
            FormulaTypeIdEnum.Formula_A);

        this.Tiamina = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.Tiamina,
            InsumoClinicoEnum.Tiamina,
            ClinicalInputCategoryEnumId.Vitaminas,
            FormulaTypeIdEnum.Formula_A);

        this.Vitamina_C = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.Vitamina_C,
            InsumoClinicoEnum.Vitamina_C,
            ClinicalInputCategoryEnumId.Vitaminas,
            FormulaTypeIdEnum.Formula_A);

        this.VitaminasHidrosolubles = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.VitaminasHidrosolubles,
            InsumoClinicoEnum.VitaminasHidrosolubles,
            ClinicalInputCategoryEnumId.Vitaminas,
            FormulaTypeIdEnum.Formula_A);

        this.VitaminasLiposolublesAdulto = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.VitaminasLiposolublesAdulto,
            InsumoClinicoEnum.VitaminasLiposolublesAdulto,
            ClinicalInputCategoryEnumId.Vitaminas,
            FormulaTypeIdEnum.Formula_A);

        this.VitaminasLiposolublesInfantil = new ClinicaInputRowModel(
            InsumoClinicoIdEnum.VitaminasLiposolublesInfantil,
            InsumoClinicoEnum.VitaminasLiposolublesInfantil,
            ClinicalInputCategoryEnumId.Vitaminas,
            FormulaTypeIdEnum.Formula_A);
    }
}

export default RawMaterialGroupModel;