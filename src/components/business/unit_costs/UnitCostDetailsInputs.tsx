import BasicOperationalModel from "@/logic/models/common/BasicOperationalModel";
import UnitCostItemModel from "@/logic/models/common/UnitCostItemModel";
import UnitCostInputEditor from "../editors/UnitCostInputEditor";

interface UnitCostDetailsInputsProps {
    inData: BasicOperationalModel;
    onInputChange: (inPropertyName: string, inNewItem: UnitCostItemModel) => void;
}

const UnitCostDetailsInputs = (props: UnitCostDetailsInputsProps) => {

    const isInputValid = (
        inValue: unknown
    ): inValue is UnitCostItemModel => {
        return (
            typeof inValue === "object" &&
            inValue !== null &&
            "exclude" in inValue &&
            (inValue as UnitCostItemModel).exclude === false
        );
    };

    const getInputsList = (): [string, UnitCostItemModel][] => {
        let resultado: [string, UnitCostItemModel][] = [];

        if (props.inData === undefined || props.inData === null) {
            return resultado;
        }

        resultado = Object.entries(props.inData)
            .filter(([_, inValue]) => isInputValid(inValue))
            .map(([inKey, inValue]) => [inKey, inValue as UnitCostItemModel]);

        return resultado;
    };

    const insumoEditorWrapperClass = ""; //"p-1";

    return (
        <div>
            {getInputsList().map(([inKey, inValue]) => (
                <div id={inKey} key={inKey} className={insumoEditorWrapperClass}>
                    <UnitCostInputEditor
                        inData={inValue}
                        inName={inKey}
                        onChange={props.onInputChange}
                    />
                </div>
            ))}
        </div>
    );
}

export default UnitCostDetailsInputs;