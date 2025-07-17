import AdditionalCostsTotalsModel from "@/logic/models/AdditionalCostsTotalsModel";
import ReadOnlyNumberField from "@/ui/common/ReadOnlyNumberField";

interface RawMaterialsOtherCostsProps {
    inData: AdditionalCostsTotalsModel;
    inShowDetails: boolean;
}

const RawMaterialsOtherCosts = (props: RawMaterialsOtherCostsProps) => {
    return (
        <div className="w-full">
            <h3 className="text-lg font-semibold text-purple-500 mb-4">Costos Adicionales</h3>
            <div className="flex flex-col lg:flex-row gap-4">
                {/* Columna 1 */}
                <div className="w-full lg:w-1/2 space-y-2 p-2">
                    {/* Fila 1 */}
                    <div className="flex items-center">
                        <label className="hidden lg:block w-1/2 text-sm text-gray-700">Mantenimiento:</label>
                        <div className="w-full lg:w-1/2 px-2 py-1">
                            <ReadOnlyNumberField
                                label="Mantenimiento:"
                                name="maintenanceTotal"
                                value={props.inData.maintenanceTotal}
                                labelPosition="top"
                                labelAlways={false}
                                symbol="$"
                            />
                        </div>
                    </div>
                    {/* Fila 2 */}
                    <div className="flex items-center">
                        <label className="hidden lg:block w-1/2 text-sm text-gray-700">Producción:</label>
                        <div className="w-full lg:w-1/2 px-2 py-1">
                            <ReadOnlyNumberField
                                label="Producción:"
                                name="productionTotal"
                                value={props.inData.productionTotal}
                                labelPosition="top"
                                labelAlways={false}
                                symbol="$"
                            /></div>
                    </div>
                    {/* Fila 3 */}
                    <div className="flex items-center">
                        <label className="hidden lg:block w-1/2 text-sm text-gray-700">Personal:</label>
                        <div className="w-full lg:w-1/2 px-2 py-1">
                            <ReadOnlyNumberField
                                label="Staff/Personal:"
                                name="staffTotal"
                                value={props.inData.staffTotal}
                                labelPosition="top"
                                labelAlways={false}
                                symbol="$"
                            /></div>
                    </div>
                    {/* Fila 4 */}
                    <div className="flex items-center">
                        <label className="hidden lg:block w-1/2 text-sm text-gray-700">Materiales de protección:</label>
                        <div className="w-full lg:w-1/2 px-2 py-1">
                            <ReadOnlyNumberField
                                label="Materiales de protección:"
                                name="protectiveMaterialsTotal"
                                value={props.inData.protectiveMaterialsTotal}
                                labelPosition="top"
                                labelAlways={false}
                                symbol="$"
                            />
                        </div>
                    </div>
                </div>

                {/* Columna 2 */}
                <div className="w-full lg:w-1/2 space-y-2 p-2">
                    {/* Fila 1 */}
                    <div className="flex items-center">
                        <label className="hidden lg:block w-1/2 text-sm text-gray-700">Higiene y limpieza:</label>
                        <div className="w-full lg:w-1/2 px-2 py-1">
                            <ReadOnlyNumberField
                                label="Higiene y limpieza:"
                                name="hygieneNCleanlinessTotal"
                                value={props.inData.hygieneNCleanlinessTotal}
                                labelPosition="top"
                                labelAlways={false}
                                symbol="$"
                            />
                        </div>
                    </div>
                    {/* Fila 2 */}
                    <div className="flex items-center">
                        <label className="hidden lg:block w-1/2 text-sm text-gray-700">Equipo estéril:</label>
                        <div className="w-full lg:w-1/2 px-2 py-1">
                            <ReadOnlyNumberField
                                label="Equipo estéril:"
                                name="sterilizedEquipmentTotal"
                                value={props.inData.sterilizedEquipmentTotal}
                                labelPosition="top"
                                labelAlways={false}
                                symbol="$"
                            />
                        </div>
                    </div>
                    {/* Fila 3 */}
                    <div className="flex items-center">
                        <label className="hidden lg:block w-1/2 text-sm text-gray-700">Equipo automatizado:</label>
                        <div className="w-full lg:w-1/2 px-2 py-1">
                            <ReadOnlyNumberField
                                label="Equipo automatizado:"
                                name="automatedEquipmentTotal"
                                value={props.inData.automatedEquipmentTotal}
                                labelPosition="top"
                                labelAlways={false}
                                symbol="$"
                            />
                        </div>
                    </div>
                    <div className="flex items-center"></div>
                </div>
            </div>
        </div >
    );
}

export default RawMaterialsOtherCosts;