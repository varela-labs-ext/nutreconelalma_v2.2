import StaffSalaryModel from "@/logic/models/empleados/StaffSalaryModel";
import AmountItemModel from "@/logic/models/common/AmountItemModel";
import JustValueItemModel from "@/logic/models/common/JustValueItemModel";
import PorcentajeItemModel from "@/logic/models/common/PorcentajeItemModel";
import LabelBasicModel from "@/logic/models/common/LabelBasicModel";
import JustValueInputEditor from "../editors/JustValueInputEditor";
import AmountItemInputEditor from "../editors/AmountItemInputEditor";
import PorcentajeItemInputEditor from "../editors/PorcentajeItemInputEditor";

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
        inFilter: string | null,
        inInclude: boolean
    ): [string, TModel][] => {
        let resultado: [string, TModel][] = [];

        if (props.inData === undefined || props.inData === null) {
            return resultado;
        }

        const filtroNormalizado = inFilter?.trim().toLocaleLowerCase() ?? "";

        for (const [key, value] of Object.entries(props.inData)) {
            if (!isValid(value)) {
                continue;
            }

            const item = value as TModel;

            // Si no hay filtro, incluimos el elemento sin evaluar nada más
            if (!filtroNormalizado) {
                resultado.push([key, item]);
                continue;
            }

            const label = item.label?.toLocaleLowerCase() ?? "";

            if (label === "") {
                continue;
            }

            const contieneFiltro = label.includes(filtroNormalizado);
            const debeIncluir = inInclude ? contieneFiltro : !contieneFiltro;

            if (debeIncluir) {
                resultado.push([key, item]);
            }
        }

        resultado.sort(([, valueA], [, valueB]) =>
            valueA.label.localeCompare(valueB.label, "es", { sensitivity: "base" })
        );

        return resultado;
    };


    const insumoEditorWrapperClass = ""; //"p-1";

    return (
        <div>
            {getInputsList<JustValueItemModel>(isJustValueItemModelModel, null, false).map(([inKey, inValue]) => (
                <div id={inKey} key={inKey} className={insumoEditorWrapperClass}>
                    <JustValueInputEditor
                        inData={inValue}
                        inName={inKey}
                        onChange={props.onJustValueInputChange}
                    />
                </div>
            ))}

            {getInputsList<AmountItemModel>(isAmountItemModel, "total", false).map(([inKey, inValue]) => (
                <div id={inKey} key={inKey} className={insumoEditorWrapperClass}>
                    <AmountItemInputEditor
                        inData={inValue}
                        inName={inKey}
                        inReadOnly={false}
                        onChange={props.onAmountItemModelInputChange}
                    />
                </div>
            ))}

            {getInputsList<PorcentajeItemModel>(isPorcentajeItemModel, null, false).map(([inKey, inValue]) => (
                <div id={inKey} key={inKey} className={insumoEditorWrapperClass}>
                    <PorcentajeItemInputEditor
                        inData={inValue}
                        inName={inKey}
                        onChange={props.onPorcentajeInputChange}
                    />
                </div>
            ))}

            {getInputsList<AmountItemModel>(isAmountItemModel, "total", true).map(([inKey, inValue]) => (
                <div id={inKey} key={inKey} className={insumoEditorWrapperClass}>
                    <AmountItemInputEditor
                        inData={inValue}
                        inName={inKey}
                        inReadOnly={false}
                        onChange={(x, y) => (console.log("nothing"))}
                    />
                </div>
            ))}
        </div>
    );
}

export default StaffSalaryDetailsInputs;