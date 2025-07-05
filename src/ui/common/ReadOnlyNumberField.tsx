
interface ReadOnlyNumberFieldProps {
    label: string;
    name: string;
    value: number;
    labelPosition?: "top" | "left";
    labelAlways?: boolean;
    symbol?: string;
}

export const ReadOnlyNumberField: React.FC<ReadOnlyNumberFieldProps> = (props) => {
    const labelPosition = props.labelPosition || "top";
    const labelAlways = props.labelAlways || false;

    const cleanUp = (value: number): number => {
        return isNaN(value) ? -99999 : value;
    }

    const getContainerClass = () => {
        const baseClass = "flex";
        const leftClass = "flex-row items-center justify-between gap-2";
        const topClass = "flex-col";

        return `${baseClass} ${labelPosition === "left" ? leftClass : topClass}`;
    }

    const getLabelClass = () => {
        if (props.label === "sm:hidden") {
            return "";
        }

        const baseClass = "block md:hidden";
        const alwaysClass = "";
        const leftClass = "w-32 text-sm text-gray-500 dark:text-gray-300";
        const topClass = "block text-sm text-gray-500 dark:text-gray-300 mb-1";

        return `${labelAlways === true ? alwaysClass : baseClass} ${labelPosition === "left" ? leftClass : topClass}`;
    };



    // const getInputClass2 = () => {
    //     const baseClass = "border rounded-lg px-3 py-2 w-full text-left border-gray-300";

    //     const moreClass = "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-white";

    //     return `${baseClass} ${moreClass}`;
    // };


    const getInputClass = () => {
        const paddingLeft = props.symbol ? "pl-7" : "pl-3";
        const baseClass = `rounded-xl ${paddingLeft} pr-3 py-2 w-full text-left`;
        const baseClassB = "text-gray-600 shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-0 transition-colors";
        const moreClass = "bg-gray-50 opacity-70 dark:bg-gray-800 dark:text-white";

        const borderClass = "border border-gray-200 focus:border-purple-500 focus:ring-purple-500";
        const cursorClass = "cursor-not-allowed";

        return `${baseClass} ${baseClassB} ${borderClass} ${moreClass} ${cursorClass}`;
    };

    const symbolClass =
        "absolute left-2 top-1/2 transform -translate-y-1/2 text-purple-600 pointer-events-none";

    const inputWrapperClass = "relative w-full";

    return (
        <div className={getContainerClass()} >
            <label htmlFor={props.name} className={getLabelClass()} >
                {props.label}
            </label>
            <div className={inputWrapperClass}>
                {props.symbol && (
                    <span className={symbolClass}>{props.symbol}</span>
                )}
                <input
                    id={props.name}
                    name={props.name}
                    type="number"
                    value={cleanUp(props.value).toFixed(3)}
                    readOnly
                    className={getInputClass()}
                />
            </div>
        </div>
    );
};

export default ReadOnlyNumberField;