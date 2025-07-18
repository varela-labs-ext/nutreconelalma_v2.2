

const ResultsFormHeaders = () => {
    return (
        <div className="flex flex-col lg:flex-row w-full p-2">
            {/* Columna 1 - Etiqueta */}
            <div className="w-full lg:w-1/3 flex items-center">
                <label className="text-md text-green-700 text-md w-full">Costos 1 NPT</label>
            </div>
            {/* Columna 2 - Input A */}
            <div className="w-full lg:w-1/3 ">
                <label className="text-md text-green-700 text-md w-full px-2">Central de Mezclas Manual</label>
            </div>

            {/* Columna 3 - Input B */}
            <div className="w-full lg:w-1/3 ">
                <label className="text-md text-green-700 text-md w-full px-2">Central de Mezclas Automatizada</label>
            </div>
        </div>
    );
}

export default ResultsFormHeaders;