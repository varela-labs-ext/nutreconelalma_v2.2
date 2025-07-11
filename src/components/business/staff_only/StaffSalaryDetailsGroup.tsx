import StaffSalaryModel from "@/logic/models/empleados/StaffSalaryModel";
import StaffSalaryDetailsHeaders from "./StaffSalaryDetailsHeaders";
import StaffSalaryDetailsInputs from "./StaffSalaryDetailsInputs";
import AmountItemModel from "@/logic/models/base/AmountItemModel";
import JustValueItemModel from "@/logic/models/base/JustValueItemModel";
import PorcentajeItemModel from "@/logic/models/base/PorcentajeItemModel";

interface StaffSalaryDetailsGroupProps {
    title?: string;
    inData: StaffSalaryModel;
    onAmountItemModelInputChange: (inPropertyName: string, inNewItem: AmountItemModel) => void;
    onPorcentajeInputChange: (inPropertyName: string, inNewItem: PorcentajeItemModel) => void;
    onJustValueInputChange: (inPropertyName: string, inNewItem: JustValueItemModel) => void;
}

const StaffSalaryDetailsGroup = (props: StaffSalaryDetailsGroupProps) => {

    return (
        <>
            <div className="flex flex-col gap-2">
                <StaffSalaryDetailsInputs
                    title={props.title}
                    inData={props.inData}
                    onAmountItemModelInputChange={props.onAmountItemModelInputChange}
                    onPorcentajeInputChange={props.onPorcentajeInputChange}
                    onJustValueInputChange={props.onJustValueInputChange}
                />
            </div>
        </>
    );
}

export default StaffSalaryDetailsGroup;