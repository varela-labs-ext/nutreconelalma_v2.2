

const ResultsFormHeaders = () => {
    const getMainDivClassName = (): string => {
        const base = "flex flex-col md:flex-row md:items-start gap-4 bg-white";
        const over = "hover:bg-purple-50";
        const focus = "focus-within:bg-purple-50";
        const more = "transition-colors duration-300 p-2 border-b border-gray-200";

        return `${base} ${over} ${focus} ${more}`;
    }

    return (
        // <div className="flex flex-col lg:flex-row w-full p-2">
        <div className={getMainDivClassName()}>
            <div className="pt-2 pb-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-2 w-full">
                <div className="md:col-span-2 w-full">
                    <div className="pt-2 text-md text-purple-500">
                        Costos 1 NPT
                    </div>

                </div>

                <div className="md:col-span-1 w-full">
                    <div className="pt-2 text-md text-purple-500">
                        Central de Mezclas Manual
                    </div>
                </div>
                <div className="md:col-span-1 w-full">
                    <div className="pt-2 text-md text-purple-500">
                        Central de Mezclas Automatizada
                    </div>
                </div>
            </div>





            {/* <div className="w-full lg:w-1/3 flex items-center">
                <label className="text-md text-green-700 text-md w-full">Costos 1 NPT</label>
            </div>

            <div className="w-full lg:w-1/3 ">
                <label className="text-md text-green-700 text-md w-full px-2">Central de Mezclas Manual</label>
            </div>


            <div className="w-full lg:w-1/3 ">
                <label className="text-md text-green-700 text-md w-full px-2">Central de Mezclas Automatizada</label>
            </div> */}
        </div>
    );
}

export default ResultsFormHeaders;