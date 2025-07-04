import RawMaterialModel from "@/logic/models/materiaPrima/RawMaterialModel";
import ClinicaInputEditor from "../common/ClinicaInputEditor";
import ClinicaInputModel from "@/logic/models/common/ClinicaInputModel";

interface RawMaterialsDetailsInputsProps {
    inData: RawMaterialModel;
    inShowDetails: boolean;
    onClinicaInputChange: (inName: string, newItem: ClinicaInputModel) => void;
}

const RawMaterialsDetailsInputs = (props: RawMaterialsDetailsInputsProps) => {

    const insumoEditorWrapperClass = "p-1";

    return (
        <div>
            {Object.entries(props.inData).map(([clave, valor]) => {
                if (
                    typeof valor === "object" &&
                    valor !== null &&
                    // valor instanceof InsumoItemModel &&
                    !valor.excluirDelCalculo &&
                    1 == 1
                ) {
                    return (
                        <div id={clave} key={clave} className={insumoEditorWrapperClass} >
                            {/* Fila editable por cada InsumoItemModel */}
                            <ClinicaInputEditor
                                inData={valor}
                                inShowDetails={props.inShowDetails}
                                inName={clave}
                                onChange={props.onClinicaInputChange}
                            />
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );

}

export default RawMaterialsDetailsInputs;