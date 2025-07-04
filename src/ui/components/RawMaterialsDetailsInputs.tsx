import RawMaterialsModel from "@/logic/models/materiaPrima/RawMaterialModel";
import ClinicaInputEditor from "../common/ClinicaInputEditor";
import ClinicaInputModel from "@/logic/models/common/ClinicaInputModel";

interface RawMaterialsDetailsInputsProps {
    inData: RawMaterialsModel;
    inShowDetails: boolean;
    onClinicaInputChange: (inName: string, inNewItem: ClinicaInputModel) => void;
}

const RawMaterialsDetailsInputs = (props: RawMaterialsDetailsInputsProps) => {

    const insumoEditorWrapperClass = "p-1";

    const getClinicaInputsList = (): [string, ClinicaInputModel][] => {
        const resultado: [string, ClinicaInputModel][] = [];

        if (props.inData === undefined || props.inData === null) {
            return resultado;
        }

        Object.entries(props.inData).map(([clave, valor]) => {
            if (
                typeof valor === "object" &&
                valor !== null &&
                !valor.excluirDelCalculo
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
                        inShowDetails={props.inShowDetails}
                        inName={inKey}
                        onChange={props.onClinicaInputChange}
                    />
                </div>
            ))}
        </div>
    );
}

export default RawMaterialsDetailsInputs;