import RawMaterialModel from "@/logic/models/RawMaterialModel";
import ClinicaInputEditor from "../../../ui/common/ClinicaInputEditor";
import ClinicaInputModel from "@/logic/models/common/ClinicaInputModel";

interface RawMaterialsDetailsInputsProps {
    inData: RawMaterialModel;
    inShowPresentation: boolean;
    onClinicaInputChange: (inName: string, inNewItem: ClinicaInputModel) => void;
}

const RawMaterialsDetailsInputs = (props: RawMaterialsDetailsInputsProps) => {

    const insumoEditorWrapperClass = ""; //"p-1";

    const getClinicaInputsList = (): [string, ClinicaInputModel][] => {
        const resultado: [string, ClinicaInputModel][] = [];

        if (props.inData === undefined || props.inData === null) {
            return resultado;
        }

        Object.entries(props.inData).map(([clave, valor]) => {
            if (
                typeof valor === "object" &&
                valor !== null &&
                valor.excluirDelCalculo === false
            ) {
                resultado.push([clave, valor as ClinicaInputModel]);
            }
        });

        return resultado;
    };

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