import BasicOperationalModel from "@/logic/models/common/BasicOperationalModel";
import UnitCostItemModel from "@/logic/models/operating_resources/UnitCostItemModel";
import UnitCostInputEditor from "../editors/UnitCostInputEditor";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";

interface UnitCostDetailsInputsProps {
    inCentralType: CentralTypeIdEnum;
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

        for (const [key, value] of Object.entries(props.inData)) {
            if (!isInputValid(value)) {
                continue;
            }

            const item = value as UnitCostItemModel;

            if (item.centralType === CentralTypeIdEnum.None || item.centralType === props.inCentralType) {
                console.log(`Item Valido: ${key}, ${item.centralType}`);
                resultado.push([key, item]);
            } else {
                console.log(`Item INVALIDO: ${key}`);
            }
        }

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