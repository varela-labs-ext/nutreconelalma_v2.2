
import { useState } from "react";
import InputNumberField from "../common/InputNumberField";
import InputPercentageField from "../common/InputPercentageField";
import TipoPoblacionField from "../common/TipoPoblacionField";
import TipoPoblacionIdEnum from "@/logic/enums/TipoPoblacionIdEnum";
import ProduccionSettingsModel from "@/logic/models/common/ProduccionSettingsModel";

interface ProduccionFormProps {
    item: ProduccionSettingsModel;
    onChange: (updatedItem: ProduccionSettingsModel) => void;
}

const ProduccionForm = (props: ProduccionFormProps) => {
    const [erroresPorcentaje, setErroresPorcentaje] = useState({
        porcentajeAdulto: "",
        porcentajePediatrico: "",
        porcentajeNeonatal: ""
    });

    const handleTipoPoblacionOnChange = (selected: TipoPoblacionIdEnum) => {
        console.log(selected);

        if (props.item.tipoPoblacion === selected) {
            return;
        }

        const output: ProduccionSettingsModel = {
            ...props.item,
            tipoPoblacion: selected
        }

        props.onChange(output);
    }

    const handleProduccionChange = (field: "lineasProduccion" | "produccionDia", value: number) => {
        if (isNaN(value)) return;
        if (props.item[field] === value) return;

        const output: ProduccionSettingsModel = {
            ...props.item,
            [field]: value
        }

        props.onChange(output);
    }

    const handlePorcentajeChange = (
        field: "porcentajeAdulto" | "porcentajePediatrico" | "porcentajeNeonatal",
        value: number
    ) => {
        if (isNaN(value)) return;
        if (props.item[field] === value) return;

        const output: ProduccionSettingsModel = {
            ...props.item,
            [field]: value
        }

        const total = output.porcentajeAdulto + output.porcentajePediatrico + output.porcentajeNeonatal;

        const nuevosErrores = {
            porcentajeAdulto: "",
            porcentajePediatrico: "",
            porcentajeNeonatal: ""
        };

        // Este codigo evitar digitar los valores
        if (total !== 100) {
            nuevosErrores[field] = "La suma total debe ser 100%";
            setErroresPorcentaje(nuevosErrores);
            // return;
        }

        setErroresPorcentaje(nuevosErrores);
        props.onChange(output);
    }

    return (
        <div className="w-full">
            <h2 className="text-xl font-semibold text-green-600 mb-4">Ingreso de datos</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Columna A */}
                <div className="flex flex-col gap-4">
                    <TipoPoblacionField
                        tipo={props.item.tipoPoblacion}
                        labelAlways={true}
                        onChange={handleTipoPoblacionOnChange}
                    />

                    <InputNumberField
                        label="Líneas de producción"
                        name="lineasProduccion"
                        value={props.item.lineasProduccion}
                        labelAlways={true}
                        // onChange={(e) => handleProduccionChange("lineasProduccion", parseInt(e.target.value))}
                        //onChange={handleProduccionChange}
                        onChange={(name, value) => handleProduccionChange("lineasProduccion", value)}
                    />

                    <InputNumberField
                        label="Producción por día"
                        name="produccionDia"
                        value={props.item.produccionDia}
                        labelAlways={true}
                        // onChange={(e) => handleProduccionChange("produccionDia", parseInt(e.target.value))}
                        onChange={(name, value) => handleProduccionChange("produccionDia", value)}
                    />
                </div>

                {/* Columna B */}
                <div className="flex flex-col gap-4">
                    <div>
                        <InputPercentageField
                            label="Porcentaje Adulto"
                            name="porcentajeAdulto"
                            value={props.item.porcentajeAdulto}
                            labelAlways={true}
                            hayError={(erroresPorcentaje.porcentajeAdulto !== "") ? true : false}
                            onChange={(e) => handlePorcentajeChange("porcentajeAdulto", parseInt(e.target.value))}
                        />
                        {erroresPorcentaje.porcentajeAdulto && (
                            <p className="text-sm font-bold text-orange-600 mt-1 text-right w-full block">{erroresPorcentaje.porcentajeAdulto}</p>
                        )}
                    </div>

                    <div>
                        <InputPercentageField
                            label="Porcentaje Pediátrico"
                            name="porcentajePediatrico"
                            value={props.item.porcentajePediatrico}
                            labelAlways={true}
                            hayError={(erroresPorcentaje.porcentajePediatrico !== "") ? true : false}
                            onChange={(e) => handlePorcentajeChange("porcentajePediatrico", parseInt(e.target.value))}
                        />
                        {erroresPorcentaje.porcentajePediatrico && (
                            <p className="text-sm font-bold text-orange-600 mt-1 text-right w-full block">{erroresPorcentaje.porcentajePediatrico}</p>
                        )}
                    </div>

                    <div>
                        <InputPercentageField
                            label="Porcentaje Neonatal"
                            name="porcentajeNeonatal"
                            value={props.item.porcentajeNeonatal}
                            labelAlways={true}
                            hayError={(erroresPorcentaje.porcentajeNeonatal !== "") ? true : false}
                            onChange={(e) => handlePorcentajeChange("porcentajeNeonatal", parseInt(e.target.value))}
                        />
                        {erroresPorcentaje.porcentajeNeonatal && (
                            <p className="text-sm font-bold text-orange-600 mt-1 text-right w-full block">{erroresPorcentaje.porcentajeNeonatal}</p>
                        )}
                    </div>

                    <p className="text-sm text-purple-600 py-4">
                        Del total de producción diaria indique el % entre adulto, pediátrica y neonatal, asegúrese que la suma de estos sea el 100%
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProduccionForm;