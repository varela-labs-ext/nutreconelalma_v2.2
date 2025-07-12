import AmountItemInputEditor from "@/components/business/editors/AmountItemInputEditor";
import UnitCostInputEditor from "@/components/business/editors/UnitCostInputEditor";
import AutomatedEquipmentGroupModel from "@/logic/models/operating_resources/AutomatedEquipmentGroupModel";
import UnitCostItemModel from "@/logic/models/row_item/UnitCostItemRowModel";


interface AutomatedEquipmentInputsProps {
    inData: AutomatedEquipmentGroupModel;
    onInputChange: (inPropertyName: string, inNewItem: UnitCostItemModel) => void;
}

/* Costos de Mantenimiento */
const AutomatedEquipmentInputs = (props: AutomatedEquipmentInputsProps) => {
    return (
        <div>
            <UnitCostInputEditor
                inData={props.inData.tamperResistantClamps}
                inName="tamperResistantClamps"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.setsTransferenciaX6}
                inName="setsTransferenciaX6"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.setsTransferenciaX9}
                inName="llenadosAsepticosQuimicos"
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

export default AutomatedEquipmentInputs;