import ResultItemModel from "@/logic/models/ResultItemModel";
import ReadOnlyNumberField from "../../../ui/common/ReadOnlyNumberField";

interface ResultItemFieldProps {
    inData: ResultItemModel;
    // inLabel: string;
    inName: string;
    // inSymbol: string | null;
    // inValueA: number;
    // inValueB: number;
}

const ResultItemField = (props: ResultItemFieldProps) => {
    return (
        <div className="flex flex-col lg:flex-row w-full">
            {/* Columna 1 - Etiqueta */}
            <div className="w-full lg:w-1/3 flex items-center ">
                {/* px-1 py-1 */}
                <label className="text-sm text-gray-700 w-full">{props.inData.label}</label>
            </div>

            {/* Columna 2 - Input A */}
            <div className="w-full lg:w-1/3 px-4 py-1">
                {/* <input
                    type="number"
                    placeholder="ml por toma"
                    className="w-full border border-gray-300 rounded px-2 py-1"
                /> */}

                <ReadOnlyNumberField
                    label=""
                    name={`${props.inName}_a`}
                    value={props.inData.valueNptManual}
                    labelPosition="top"
                    labelAlways={false}
                    symbol={props.inData.symbol ? props.inData.symbol : ""}
                />
            </div>

            {/* Columna 3 - Input B */}
            <div className="w-full lg:w-1/3 px-1 py-1">
                {/* <input
                    type="number"
                    placeholder="número de tomas"
                    className="w-full border border-gray-300 rounded px-2 py-1"
                /> */}
                <ReadOnlyNumberField
                    label=""
                    name={`${props.inName}_b`}
                    value={props.inData.valueNptAutomatic}
                    labelPosition="top"
                    labelAlways={false}
                    symbol={props.inData.symbol ? props.inData.symbol : ""}
                />
            </div>
        </div>
    );
};

export default ResultItemField;
