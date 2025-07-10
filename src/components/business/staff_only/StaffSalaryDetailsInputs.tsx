import BasicOperationalModel from "@/logic/models/common/BasicOperationalModel";
import UnitCostItemModel from "@/logic/models/common/UnitCostItemModel";
import UnitCostInputEditor from "../editors/UnitCostInputEditor";
import StaffSalaryModel from "@/logic/models/empleados/StaffSalaryModel";
import AmountItemModel from "@/logic/models/common/AmountItemModel";
import JustValueItemModel from "@/logic/models/common/JustValueItemModel";
import PorcentajeItemModel from "@/logic/models/common/PorcentajeItemModel";
import LabelBasicModel from "@/logic/models/common/LabelBasicModel";

interface StaffSalaryDetailsInputsProps {
    inData: StaffSalaryModel;
    onAmountItemModelInputChange: (inPropertyName: string, inNewItem: AmountItemModel) => void;
    onPorcentajeInputChange: (inPropertyName: string, inNewItem: PorcentajeItemModel) => void;
    onJustValueInputChange: (inPropertyName: string, inNewItem: JustValueItemModel) => void;
}

const StaffSalaryDetailsInputs = (props: StaffSalaryDetailsInputsProps) => {

    const isJustValueItemModelModel = (
        inValue: unknown
    ): inValue is JustValueItemModel => {
        return (
            typeof inValue === "object" &&
            inValue !== null &&
            "label" in inValue &&
            typeof (inValue as JustValueItemModel).label === "string"
        );
    };

    const isAmountItemModel = (
        inValue: unknown
    ): inValue is AmountItemModel => {
        return (
            typeof inValue === "object" &&
            inValue !== null &&
            "label" in inValue &&
            typeof (inValue as AmountItemModel).label === "string"
        );
    };

    const isPorcentajeItemModel = (
        inValue: unknown
    ): inValue is PorcentajeItemModel => {
        return (
            typeof inValue === "object" &&
            inValue !== null &&
            "label" in inValue &&
            typeof (inValue as PorcentajeItemModel).label === "string"
        );
    };

    const getInputsList = <TModel extends LabelBasicModel>(
        isValid: (value: unknown) => value is TModel,
        inFilter: string,
        inExclude: boolean
    ): [string, TModel][] => {
        let resultado: [string, TModel][] = [];

        if (props.inData === undefined || props.inData === null) {
            return resultado;
        }

        const filtroNormalizado = inFilter.trim().toLocaleLowerCase();

        // resultado = Object.entries(props.inData)
        //     .filter(([_, inValue]) => isValid(inValue))
        //     .map(([inKey, inValue]) => [inKey, inValue as TModel]);

        resultado = Object.entries(props.inData)
            .filter(([_, inValue]) => isValid(inValue))
            .map(([inKey, inValue]) => [inKey, inValue as TModel])
            .filter(([_, inValue]) => {
                const label = inValue.label?.toLocaleLowerCase() ?? "";
                const contieneFiltro = label.includes(filtroNormalizado);
                return inExclude ? !contieneFiltro : contieneFiltro;
            });

        resultado.sort(([, valueA], [, valueB]) =>
            valueA.label.localeCompare(valueB.label, 'es', { sensitivity: 'base' })
        );

        return resultado;
    };

    const insumoEditorWrapperClass = ""; //"p-1";

    return (
        <div>
            {getInputsList<JustValueItemModel>(isJustValueItemModelModel).map(([inKey, inValue]) => (
                <div id={inKey} key={inKey} className={insumoEditorWrapperClass}>
                    {/* <UnitCostInputEditor
                        inData={inValue}
                        inName={inKey}
                        onChange={props.onInputChange}
                    /> */}
                </div>
            ))}

            {getInputsList<PorcentajeItemModel>(isPorcentajeItemModel).map(([inKey, inValue]) => (
                <div id={inKey} key={inKey} className={insumoEditorWrapperClass}>
                    {/* <UnitCostInputEditor
                        inData={inValue}
                        inName={inKey}
                        onChange={props.onInputChange}
                    /> */}
                </div>
            ))}

            {getInputsList<AmountItemModel>(isAmountItemModel).map(([inKey, inValue]) => (
                <div id={inKey} key={inKey} className={insumoEditorWrapperClass}>
                    {/* <UnitCostInputEditor
                        inData={inValue}
                        inName={inKey}
                        onChange={props.onInputChange}
                    /> */}
                </div>
            ))}
        </div>
    );
}

export default StaffSalaryDetailsInputs;