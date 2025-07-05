import ReadOnlyNumberField from "./ReadOnlyNumberField";

interface ResultItemFieldProps {
    inLabel: string;
    inName: string;
    inSymbol: string | null;
    inValueA: number;
    inValueB: number;
}

const ResultItemField = (props: ResultItemFieldProps) => {
    return (
        <div className="flex flex-col lg:flex-row w-full">
            {/* Columna 1 - Etiqueta */}
            <div className="w-full lg:w-1/3 flex items-center ">
                {/* px-1 py-1 */}
                <label className="text-sm text-gray-700 w-full">{props.inLabel}</label>
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
                    value={props.inValueA}
                    labelPosition="top"
                    labelAlways={false}
                    symbol={props.inSymbol ? props.inSymbol : ""}
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
                    value={props.inValueB}
                    labelPosition="top"
                    labelAlways={false}
                    symbol={props.inSymbol ? props.inSymbol : ""}
                />
            </div>
        </div>
    );
};

export default ResultItemField;
