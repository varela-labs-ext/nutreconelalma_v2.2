import ClinicalInputCategoryEnumId from "@/logic/enums/ClinicalInputCategoryEnumId";
import RawMaterialGroupModel from "@/logic/models/RawMaterialGroupModel";
import ClinicaInputRowModel from "@/logic/models/row_item/ClinicaInputRowModel";
import ClinicaInputEditor from "../editors/ClinicaInputEditor";

type ValidItemType = {
    key: string;
    value: ClinicaInputRowModel;
};

interface ClinicalInputsEditorsProps {
    inData: RawMaterialGroupModel;
    inCategory?: ClinicalInputCategoryEnumId;
    inShowPresentation: boolean;
    onClinicaInputChange: (inName: string, inNewItem: ClinicaInputRowModel) => void;
}

const ClinicalInputsEditors = (props: ClinicalInputsEditorsProps) => {

    const isInputValid = (
        inValue: unknown,
        inCategory?: ClinicalInputCategoryEnumId
    ): inValue is ClinicaInputRowModel => {
        return (
            typeof inValue === "object" &&
            inValue !== null &&
            "exclude" in inValue &&
            (inValue as ClinicaInputRowModel).exclude === false &&
            (inCategory === undefined || (inValue as ClinicaInputRowModel).category === inCategory)
        );
    };

    const getInputsList = (): [string, ClinicaInputRowModel][] => {
        let resultado: [string, ClinicaInputRowModel][] = [];

        if (props.inData === undefined || props.inData === null) {
            return resultado;
        }

        resultado = Object.entries(props.inData)
            .filter(([_, inValue]) => isInputValid(inValue, props.inCategory))
            .map(([inKey, inValue]) => [inKey, inValue as ClinicaInputRowModel]);

        resultado.sort(([, valueA], [, valueB]) =>
            valueA.label.localeCompare(valueB.label, 'es', { sensitivity: 'base' })
        );

        return resultado;
    };

    return (
        <div>
            {getInputsList().map(([inKey, inValue]) => (
                <div id={inKey} key={inKey}>
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

export default ClinicalInputsEditors;