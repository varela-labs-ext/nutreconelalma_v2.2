
interface UnitCostInputEditorProps {

}

const UnitCostInputEditor = (props: UnitCostInputEditorProps) => {
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
                <div className="pt-2 pb-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-2 w-full">

                </div>
            </div>
        </>
    );
}

export default UnitCostInputEditor;