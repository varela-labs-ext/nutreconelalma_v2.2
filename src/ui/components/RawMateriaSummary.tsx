import InputNumberField from "../common/InputNumberField";
import ReadOnlyNumberField from "../common/ReadOnlyNumberField";
import { isValidNumber } from "@/utils/validators";

interface RawMateriaSummaryProps {
    inQuantity: number;
    inTotal: number;
    inTotalPerMl: number;
    inShowDetails: boolean;
    onQuantityChange: (newValue: number) => void;
    onShowDetailsChange: (newValue: boolean) => void;
}

const RawMateriaSummary = (props: RawMateriaSummaryProps) => {

    const handleQuantityChange = (name: string, nuevaCantidad: number) => {
        if (isValidNumber(nuevaCantidad)) {
            props.onQuantityChange(nuevaCantidad);
        }
    };

    const handleShowDetailsChange = () => {
        const value: boolean = !props.inShowDetails;
        props.onShowDetailsChange(value);
    }

    const getToggleButtonClass = (): string => {
        const base: string = "w-10 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out";
        return `${base} ${props.inShowDetails ? "bg-blue-500" : "bg-gray-300"}`;
    }

    const getToggleButtonDivClass = (): string => {
        const base: string = "bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out";
        return `${base} ${props.inShowDetails ? "translate-x-4" : "translate-x-0"}`;
    }

    return (
        <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:items-center bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm transition-shadow w-full  ml-auto gap-4">
            {/* Botón Mostrar Detalles (Toggle) */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* ✅ Toggle principal */}
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Mostrar detalles</span>
                    <button onClick={handleShowDetailsChange} className={getToggleButtonClass()}>
                        <div className={getToggleButtonDivClass()} />
                    </button>
                </div>
            </div>

            {/* Campos de resumen */}
            <div className="flex flex-col gap-4 w-full sm:w-auto">
                <InputNumberField
                    label="Cantidad"
                    name="cantidad"
                    value={props.inQuantity}
                    onChange={handleQuantityChange}
                    labelPosition="left"
                    labelAlways={true}
                />
                <ReadOnlyNumberField label="Total" name="total" value={props.inTotal} labelPosition="left" labelAlways={true} />
                <ReadOnlyNumberField label="Total por mL" name="totalPorMl" value={props.inTotalPerMl} labelPosition="left" labelAlways={true} />
            </div>
        </div>
    );
}

export default RawMateriaSummary;