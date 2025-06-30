
interface ReadOnlyNumberFieldProps {
    label: string;
    name: string;
    value: number;
    labelPosition?: "top" | "left";
    labelAlways?: boolean;
}

export const ReadOnlyNumberField: React.FC<ReadOnlyNumberFieldProps> = (props) => {
    const labelPosition = props.labelPosition || "top";
    const labelAlways = props.labelAlways || false;

    const getContainerClass = () => {
        const baseClass = "flex";
        const leftClass = "flex-row items-center justify-between gap-2";
        const topClass = "flex-col";

        return `${baseClass} ${labelPosition === "left" ? leftClass : topClass}`;
    }

    const getLabelClass = () => {
        const baseClass = "block md:hidden";
        const alwaysClass = "";
        const leftClass = "w-32 text-sm font-medium text-gray-700 dark:text-gray-300";
        const topClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

        return `${labelAlways === true ? alwaysClass : baseClass} ${labelPosition === "left" ? leftClass : topClass}`;
    };

    const inputWrapperClass = "w-full";

    const getInputClass = () => {
        const baseClass = "border rounded-lg px-3 py-2 w-full text-left border-gray-300";

        const moreClass = "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-white";

        return `${baseClass} ${moreClass}`;
    };

    const cleanUp = (value: number): number => {
        return isNaN(value) ? -99999 : value;
    }

    return (
        <div className= { getContainerClass() } >
        <label htmlFor={ props.name } className = { getLabelClass() } >
            { props.label }
            </label>
            < div className = { inputWrapperClass } >
                <input
                    id={ props.name }
    name = { props.name }
    type = "number"
    value = { cleanUp(props.value) }
    readOnly
    className = { getInputClass() }
        />
        </div>
        </div>
    );
};

export default ReadOnlyNumberField;