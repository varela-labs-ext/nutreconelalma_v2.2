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
                    <div className="md:col-span-1 w-full">
                        <ReadOnlyNumberField
                            label=""
                            name={`${props.inName}_a`}
                            value={props.inData.valueNptManual}
                            labelPosition="top"
                            labelAlways={false}
                            symbol={props.inData.symbol ? props.inData.symbol : ""}
                        />
                    </div>

                    <div className="md:col-span-1 w-full">
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
            </div>
        </>
    );
};

export default ResultItemField;
