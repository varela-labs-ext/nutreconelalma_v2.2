import ResultItemModel from "@/logic/models/ResultItemModel";
import ReadOnlyNumberField from "@/ui/common/ReadOnlyNumberField";

interface ResultItemFieldProps {
    inData: ResultItemModel;
    inName: string;
}

const ResultItemField = (props: ResultItemFieldProps) => {
    const getMainDivClassName = (): string => {
        const base = "flex flex-col md:flex-row md:items-start gap-4 bg-white";
        const over = "hover:bg-purple-50";
        const focus = "focus-within:bg-purple-50";
        const more = "transition-colors duration-300 p-2 border-b border-gray-200";

        return `${base} ${over} ${focus} ${more}`;
    }

    return (
        <>
            <div className={getMainDivClassName()}>
                <div className="pt-2 pb-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-2 w-full">
                    <div className="md:col-span-2 w-full text-left">
                        <div className="pt-2 text-sm text-gray-500">
                            {props.inData.label}
                        </div>
                    </div>
                </div>
            </div>

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

        </>
    );
};

export default ResultItemField;
