import StaffSalaryGroupModel from "@/logic/models/operating_resources/StaffSalaryGroupModel";
import AmountItemModel from "@/logic/models/row_item/AmountItemRowModel";
import JustValueItemModel from "@/logic/models/row_item/OneValueItemRowModel";
import PorcentajeItemModel from "@/logic/models/row_item/PorcentajeItemRowModel";
import StaffSalaryInputs from "./StaffSalaryInputs";


interface StaffSalarySetProps {
    title?: string;
    inData: StaffSalaryGroupModel;
    onAmountItemModelInputChange: (inPropertyName: string, inNewItem: AmountItemModel) => void;
    onPorcentajeInputChange: (inPropertyName: string, inNewItem: PorcentajeItemModel) => void;
    onJustValueInputChange: (inPropertyName: string, inNewItem: JustValueItemModel) => void;
}

const StaffSalarySet = (props: StaffSalarySetProps) => {

    return (
        <div className="flex flex-col gap-2">
            <StaffSalaryInputs
                title={props.title}
                inData={props.inData}
                onAmountItemModelInputChange={props.onAmountItemModelInputChange}
                onPorcentajeInputChange={props.onPorcentajeInputChange}
                onJustValueInputChange={props.onJustValueInputChange}
            />
        </div>
    );
}

export default StaffSalarySet;