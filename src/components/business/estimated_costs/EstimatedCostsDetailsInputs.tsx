
import EstimatedCostItemModel from "@/logic/models/operating_resources/EstimatedCostItemModel";
import EstimatedCostsInputEditor from "../editors/EstimatedCostsInputEditor";
import ProductionCostsModel from "@/logic/models/operativos/ProductionCostsModel";

interface EstimatedCostsDetailsInputsProps {
    inData: ProductionCostsModel;
    inMonthlyProductionCapacity: number;
    inProductionLines: number;
    onInputChange: (inPropertyName: string, inNewItem: EstimatedCostItemModel) => void;
}

const EstimatedCostsDetailsInputs = (props: EstimatedCostsDetailsInputsProps) => {

    const isInputValid = (
        inValue: unknown
    ): inValue is EstimatedCostItemModel => {
        return (
            typeof inValue === "object" &&
            inValue !== null &&
            "exclude" in inValue &&
            (inValue as EstimatedCostItemModel).exclude === false
        );
    };

    const getInputsList = (): [string, EstimatedCostItemModel][] => {
        let resultado: [string, EstimatedCostItemModel][] = [];

        if (props.inData === undefined || props.inData === null) {
            return resultado;
        }

        resultado = Object.entries(props.inData)
            .filter(([_, inValue]) => isInputValid(inValue))
            .map(([inKey, inValue]) => [inKey, inValue as EstimatedCostItemModel]);

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
                    <EstimatedCostsInputEditor
                        inData={inValue}
                        inName={inKey}
                        inMonthlyProductionCapacity={props.inMonthlyProductionCapacity}
                        inProductionLines={props.inProductionLines}
                        onChange={props.onInputChange}
                    />
                </div>
            ))}
        </div>
    );
}

export default EstimatedCostsDetailsInputs;