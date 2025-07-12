import AmountItemInputEditor from "@/components/business/editors/AmountItemInputEditor";
import UnitCostInputEditor from "@/components/business/editors/UnitCostInputEditor";
import PersonalProtectionGroupModel from "@/logic/models/operating_resources/PersonalProtectionGroupModel";
import UnitCostItemModel from "@/logic/models/row_item/UnitCostItemRowModel";

interface PersonalProtectionInputsProps {
    inData: PersonalProtectionGroupModel;
    onInputChange: (inPropertyName: string, inNewItem: UnitCostItemModel) => void;
}

/* Costos de Mantenimiento */
const PersonalProtectionInputs = (props: PersonalProtectionInputsProps) => {
    return (
        <div>
            <UnitCostInputEditor
                inData={props.inData.guantesEsterilesDesechables}
                inName="guantesEsterilesDesechables"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.bataEsterilUnUso}
                inName="bataEsterilUnUso"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.gorroDesechable}
                inName="gorroDesechable"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.mascarillaQuirurgica}
                inName="mascarillaQuirurgica"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.cubrezapatosDesechables}
                inName="cubrezapatosDesechables"
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

export default PersonalProtectionInputs;