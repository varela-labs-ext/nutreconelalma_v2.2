import RawMaterialModel from "@/logic/models/RawMaterialModel";
import ClinicaInputEditor from "../editors/ClinicaInputEditor";
import ClinicaInputModel from "@/logic/models/common/ClinicaInputModel";
import ClinicalInputCategoryEnumId from "@/logic/enums/ClinicalInputCategoryEnumId";

interface RawMaterialsDetailsInputsProps {
    inData: RawMaterialModel;
    inCategory?: ClinicalInputCategoryEnumId;
    inShowPresentation: boolean;
    onClinicaInputChange: (inName: string, inNewItem: ClinicaInputModel) => void;
}

const RawMaterialsDetailsInputs = (props: RawMaterialsDetailsInputsProps) => {
    const isClinicaInputValid = (
        inValue: unknown,
        inCategory?: ClinicalInputCategoryEnumId
    ): inValue is ClinicaInputModel => {
        return (
            typeof inValue === "object" &&
            inValue !== null &&
            "excluirDelCalculo" in inValue &&
            (inValue as ClinicaInputModel).excluirDelCalculo === false &&
            (inCategory === undefined || (inValue as ClinicaInputModel).category === inCategory)
        );
    };

    const getClinicaInputsList = (): [string, ClinicaInputModel][] => {
        let resultado: [string, ClinicaInputModel][] = [];

        if (props.inData === undefined || props.inData === null) {
            return resultado;
        }

        resultado = Object.entries(props.inData)
            .filter(([_, inValue]) => isClinicaInputValid(inValue, props.inCategory))
            .map(([inKey, inValue]) => [inKey, inValue as ClinicaInputModel]);

        return resultado;
    };

    const insumoEditorWrapperClass = ""; //"p-1";

    return (
        <div>
            {getClinicaInputsList().map(([inKey, inValue]) => (
                <div id={inKey} key={inKey} className={insumoEditorWrapperClass}>
                    <ClinicaInputEditor
                        inData={inValue}
                        inShowPresentation={props.inShowPresentation}
                        inName={inKey}
                        onChange={props.onClinicaInputChange}
                    />
                </div>
            ))}
        </div>
    );
}

export default RawMaterialsDetailsInputs;