import StaffSalaryModel from "@/logic/models/empleados/StaffSalaryModel";
import StaffSalaryDetailsHeaders from "./StaffSalaryDetailsHeaders";

interface StaffSalaryDetailsGroupProps {
    inData: StaffSalaryModel;
    onInputChange: (inPropertyName: string, inNewItem: StaffSalaryModel) => void;
}

const StaffSalaryDetailsGroup = (props: StaffSalaryDetailsGroupProps) => {

    return (
        <>
            <div className="flex flex-col gap-2">
                <StaffSalaryDetailsHeaders />
                <UnitCostDetailsInputs
                    inData={props.inData}
                    onInputChange={props.onInputChange}
                />
            </div>
        </>
    );
}

export default StaffSalaryDetailsGroup;