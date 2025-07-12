import AmountItemInputEditor from "@/components/business/editors/AmountItemInputEditor";
import UnitCostInputEditor from "@/components/business/editors/UnitCostInputEditor";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import HygieneAndCleaningGroupModel from "@/logic/models/operating_resources/HygieneAndCleaningGroupModel";
import UnitCostItemModel from "@/logic/models/row_item/UnitCostItemRowModel";


interface HygieneAndCleaningInputsProps {
    inCentralType: CentralTypeIdEnum;
    inData: HygieneAndCleaningGroupModel;
    onInputChange: (inPropertyName: string, inNewItem: UnitCostItemModel) => void;
}

/* Costos de Mantenimiento */
const HygieneAndCleaningInputs = (props: HygieneAndCleaningInputsProps) => {
    return (
        <div>
            <UnitCostInputEditor
                inData={props.inData.solucionAntisepticaManos}
                inName="solucionAntisepticaManos"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.panosEsterilesSuperficies}
                inName="panosEsterilesSuperficies"
                onChange={props.onInputChange}
            />
            <UnitCostInputEditor
                inData={props.inData.alcohol70}
                inName="alcohol70"
                onChange={props.onInputChange}
            />
            {props.inCentralType === CentralTypeIdEnum.Manual && (
                <>
                    <UnitCostInputEditor
                        inData={props.inData.detergentes}
                        inName="detergentes"
                        onChange={props.onInputChange}
                    />
                    <UnitCostInputEditor
                        inData={props.inData.desinfectantes}
                        inName="desinfectantes"
                        onChange={props.onInputChange}
                    />
                </>
            )}
            {props.inCentralType === CentralTypeIdEnum.Automatico && (
                <>
                    <UnitCostInputEditor
                        inData={props.inData.peroxidoHidrogenoAcelerado}
                        inName="peroxidoHidrogenoAcelerado"
                        onChange={props.onInputChange}
                    />
                    <UnitCostInputEditor
                        inData={props.inData.cloruroBenzalconio}
                        inName="cloruroBenzalconio"
                        onChange={props.onInputChange}
                    />
                </>
            )}

            <AmountItemInputEditor
                inData={props.inData.total}
                inName="total"
                isReadOnly={true}
                onChange={(x, y) => (console.log("nothing"))}
            />
        </div>
    );
}

export default HygieneAndCleaningInputs;