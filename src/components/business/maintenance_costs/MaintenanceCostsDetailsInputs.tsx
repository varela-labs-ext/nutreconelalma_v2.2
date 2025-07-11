import JustValueItemModel from "@/logic/models/common/JustValueItemModel";
import JustValueInputEditor from "../editors/JustValueInputEditor";
import MaintenanceCostsDetailsHeaders from "./MaintenanceCostsDetailsHeaders";
import UnitCostInputEditor from "../editors/UnitCostInputEditor";
import UnitCostItemModel from "@/logic/models/operating_resources/UnitCostItemModel";
import MaintenanceCostsModel from "@/logic/models/operativos/MaintenanceCostsModel";
import AmountItemInputEditor from "../editors/AmountItemInputEditor";

interface MaintenanceCostsDetailsInputsProps {
    inProductionLines: number;
    inData: MaintenanceCostsModel;
    onInputChange: (inPropertyName: string, inNewItem: UnitCostItemModel) => void;
}

const MaintenanceCostsDetailsInputs = (props: MaintenanceCostsDetailsInputsProps) => {

    const getProductionLines = (): JustValueItemModel => {
        const output = new JustValueItemModel("Lineas de producción");
        output.value = props.inProductionLines;
        return output;
    }

    return (
        <div>
            <div>
                <JustValueInputEditor
                    inData={getProductionLines()}
                    inName="inProductionLines"
                    isReadOnly={true}
                    onChange={(A, B) => { }}
                />
            </div>
            <MaintenanceCostsDetailsHeaders />
            <div>
                <UnitCostInputEditor
                    inData={props.inData.validacionSistemaAire}
                    inName="validacionSistemaAire"
                    onChange={props.onInputChange}
                />
                <UnitCostInputEditor
                    inData={props.inData.pruebasMicrobiologia}
                    inName="pruebasMicrobiologia"
                    onChange={props.onInputChange}
                />
                <UnitCostInputEditor
                    inData={props.inData.llenadosAsepticosQuimicos}
                    inName="llenadosAsepticosQuimicos"
                    onChange={props.onInputChange}
                />
                <UnitCostInputEditor
                    inData={props.inData.desafioDesinfectantes}
                    inName="desafioDesinfectantes"
                    onChange={props.onInputChange}
                />
                <UnitCostInputEditor
                    inData={props.inData.mantenimientoCabinas}
                    inName="mantenimientoCabinas"
                    onChange={props.onInputChange}
                />
                <UnitCostInputEditor
                    inData={props.inData.calificacionCabinas}
                    inName="calificacionCabinas"
                    onChange={props.onInputChange}
                />
                <UnitCostInputEditor
                    inData={props.inData.calibracionManometros}
                    inName="calibracionManometros"
                    onChange={props.onInputChange}
                />
                <UnitCostInputEditor
                    inData={props.inData.cambiosFiltrosUMA}
                    inName="cambiosFiltrosUMA"
                    onChange={props.onInputChange}
                />
                <UnitCostInputEditor
                    inData={props.inData.mantenimientoUMA}
                    inName="mantenimientoUMA"
                    onChange={props.onInputChange}
                />
                <UnitCostInputEditor
                    inData={props.inData.calibracionTermohigrometros}
                    inName="calibracionTermohigrometros"
                    onChange={props.onInputChange}
                />
                <UnitCostInputEditor
                    inData={props.inData.mantenimientosLocativosPintura}
                    inName="mantenimientosLocativosPintura"
                    onChange={props.onInputChange}
                />
            </div>
            <div>
                <AmountItemInputEditor
                    inData={props.inData.totalCost}
                    inName="totalValorHora"
                    isReadOnly={true}
                    onChange={(x, y) => (console.log("nothing"))}
                />
                <AmountItemInputEditor
                    inData={props.inData.totalValorHora}
                    inName="totalValorHora"
                    isReadOnly={true}
                    onChange={(x, y) => (console.log("nothing"))}
                />
                <AmountItemInputEditor
                    inData={props.inData.totalValorHora}
                    inName="totalValorHora"
                    isReadOnly={true}
                    onChange={(x, y) => (console.log("nothing"))}
                />
                <AmountItemInputEditor
                    inData={props.inData.totalValorHora}
                    inName="totalValorHora"
                    isReadOnly={true}
                    onChange={(x, y) => (console.log("nothing"))}
                />
            </div>
        </div>
    );
}

export default MaintenanceCostsDetailsInputs;