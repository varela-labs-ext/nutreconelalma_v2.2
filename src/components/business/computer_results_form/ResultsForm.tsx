//ResultsForm

import ResultItemModel from "@/logic/models/ResultItemModel";
import ResultsModel from "@/logic/models/MixingCenterResultsModel";
import ResultItemField from "./ResultItemField";


interface ResultsFormProps {
    inData: ResultsModel;
}

const ResultsForm = (props: ResultsFormProps) => {


    const getResultItemsList = (): [string, ResultItemModel][] => {
        const resultado: [string, ResultItemModel][] = [];

        if (props.inData === undefined || props.inData === null) {
            return resultado;
        }

        Object.entries(props.inData).map(([clave, valor]) => {
            if (
                typeof valor === "object" &&
                valor !== null
            ) {
                resultado.push([clave, valor as ResultItemModel]);
            }
        });

        return resultado;
    };



    return (
        <div>
            <div className="w-full">
                <h3 className="text-lg font-semibold text-purple-500 mb-4">Resultados</h3>

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
                <div className="p-2">
                    {getResultItemsList().map(([inKey, inValue]) => (
                        <div id={`${inKey}_`} key={inKey} className="py-1">
                            <ResultItemField
                                inLabel={inValue.label}
                                inName={inValue.name}
                                inSymbol={inValue.symbol}
                                inValueA={inValue.valueLeft}
                                inValueB={inValue.valueRight}
                            />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default ResultsForm;