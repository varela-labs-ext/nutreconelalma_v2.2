import AmountItemInputEditor from "@/components/business/editors/AmountItemInputEditor";
import UnitCostInputEditor from "@/components/business/editors/UnitCostInputEditor";
import SterileWorkEquipmentGroupModel from "@/logic/models/operating_resources/SterileWorkEquipmentGroupModel";
import UnitCostItemModel from "@/logic/models/row_item/UnitCostItemRowModel";


interface SterileWorkEquipmentInputsProps {
    inData: SterileWorkEquipmentGroupModel;
    onInputChange: (inPropertyName: string, inNewItem: UnitCostItemModel) => void;
}

/* Costos de Mantenimiento */
const SterileWorkEquipmentInputs = (props: SterileWorkEquipmentInputsProps) => {
    return (
        <div>
            <UnitCostInputEditor
                inData={props.inData.jeringas1ml}
                inName="jeringas1ml"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.jeringas5ml}
                inName="jeringas5ml"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.jeringas10ml}
                inName="jeringas10ml"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.jeringas20ml}
                inName="jeringas20ml"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.jeringas50ml}
                inName="jeringas50ml"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.buretroles}
                inName="buretroles"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.compresasEsteriles}
                inName="compresasEsteriles"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.gasasEsteriles}
                inName="gasasEsteriles"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.etiquetasIdentificacionBolsas}
                inName="etiquetasIdentificacionBolsas"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.toallasAbsorbentesDesechables}
                inName="toallasAbsorbentesDesechables"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.contenedoresCortopunzantes}
                inName="contenedoresCortopunzantes"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.agujasEsteriles}
                inName="agujasEsteriles"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.bolsaRojaBiologicos}
                inName="bolsaRojaBiologicos"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.bolsaNegraNoContaminados}
                inName="bolsaNegraNoContaminados"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.boligrafosEtiquetado}
                inName="boligrafosEtiquetado"
                onChange={props.onInputChange}
            />
            <AmountItemInputEditor
                inData={props.inData.total}
                inName="total"
                isReadOnly={true}
                onChange={(x, y) => (console.log("nothing"))}
            />
        </div>
    );
}

export default SterileWorkEquipmentInputs;