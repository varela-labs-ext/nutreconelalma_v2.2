
import EstimatedCostItemModel from "@/logic/models/row_item/EstimatedCostItemRowModel";
import ProductionCostsGroupModel from "@/logic/models/operating_resources/ProductionCostsGroupModel";
import EstimatedCostsInputEditor from "./EstimatedCostsInputEditor";
import AmountItemInputEditor from "@/components/business/editors/AmountItemInputEditor";

interface ProductionCostsInputsProps {
    inData: ProductionCostsGroupModel;
    inProductionLines: number;
    inProductionPerMonth: number;
    onInputChange: (inPropertyName: string, inNewItem: EstimatedCostItemModel) => void;
}

const ProductionCostsInputs = (props: ProductionCostsInputsProps) => {

    return (
        <div>
            <EstimatedCostsInputEditor
                inData={props.inData.aguaM3}
                inName="aguaM3"
                inProductionPerMonth={props.inProductionPerMonth}
                inProductionLines={props.inProductionLines}
                onChange={props.onInputChange}
            />
            <EstimatedCostsInputEditor
                inData={props.inData.luzKw}
                inName="luzKw"
                inProductionPerMonth={props.inProductionPerMonth}
                inProductionLines={props.inProductionLines}
                onChange={props.onInputChange}
            />
            <EstimatedCostsInputEditor
                inData={props.inData.manoObraIndirecta}
                inName="manoObraIndirecta"
                inProductionPerMonth={props.inProductionPerMonth}
                inProductionLines={props.inProductionLines}
                onChange={props.onInputChange}
            />
            <EstimatedCostsInputEditor
                inData={props.inData.telefoniaInternetAdmin}
                inName="telefoniaInternetAdmin"
                inProductionPerMonth={props.inProductionPerMonth}
                inProductionLines={props.inProductionLines}
                onChange={props.onInputChange}
            />
            <EstimatedCostsInputEditor
                inData={props.inData.depreciacionCabinaFlujoLaminar}
                inName="depreciacionCabinaFlujoLaminar"
                inProductionPerMonth={props.inProductionPerMonth}
                inProductionLines={props.inProductionLines}
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

export default ProductionCostsInputs;