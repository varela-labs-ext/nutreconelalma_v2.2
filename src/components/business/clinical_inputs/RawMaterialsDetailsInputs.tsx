import RawMaterialModel from "@/logic/models/RawMaterialModel";
import ClinicaInputEditor from "../editors/ClinicaInputEditor";
import ClinicaInputRowModel from "@/logic/models/row_item/ClinicaInputRowModel";
import ClinicalInputCategoryEnumId from "@/logic/enums/ClinicalInputCategoryEnumId";
import { useEffect, useState } from "react";

type ValidItemType = {
    key: string;
    value: ClinicaInputRowModel;
};

interface RawMaterialsDetailsInputsProps {
    inData: RawMaterialModel;
    inCategory?: ClinicalInputCategoryEnumId;
    inShowPresentation: boolean;
    onClinicaInputChange: (inName: string, inNewItem: ClinicaInputRowModel) => void;
}

const RawMaterialsDetailsInputs = (props: RawMaterialsDetailsInputsProps) => {
    // const [internalData, setInternalData] = useState<RawMaterialModel>(props.inData);
    // const [inputList, setInputList] = useState<ValidItemType[]>([]);

    // useEffect(() => {
    //     setInternalData(props.inData);
    // }, [props.inData]);

    // useEffect(() => {
    //     setInternalData(props.inData);
    // }, [inputList]);


    const isInputValid = (
        inValue: unknown,
        inCategory?: ClinicalInputCategoryEnumId
    ): inValue is ClinicaInputRowModel => {
        return (
            typeof inValue === "object" &&
            inValue !== null &&
            "excluirDelCalculo" in inValue &&
            (inValue as ClinicaInputRowModel).excluirDelCalculo === false &&
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

    const insumoEditorWrapperClass = ""; //"p-1";

    return (
        <div>
            {getInputsList().map(([inKey, inValue]) => (
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