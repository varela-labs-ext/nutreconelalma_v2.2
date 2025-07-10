import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import StaffCostsDetails from "../operating_resources_details/StaffCostsDetails";
import StaffSalaryModel from "@/logic/models/empleados/StaffSalaryModel";
import { useState } from "react";


interface StaffPersonnelFormProps {
    inCentralType: CentralTypeIdEnum;
}

//ESTE DEBE GESTIONAR POR CUENTA PROPIA LA CARGA DE LOS DATOS DESDE LA DB

const StaffPersonnelForm = (props: StaffPersonnelFormProps) => {
    const [chemistSalaryData, setMaintenanceCostsData] = useState<StaffSalaryModel>(new StaffSalaryModel());
    const [assistantSalaryData, setProductionCostsData] = useState<StaffSalaryModel>(new StaffSalaryModel());

    const handleOnChemistSalaryChange = (inNewItem: StaffSalaryModel) => {
        //TODO
    }

    const handleOnAssistantSalaryChange = (inNewItem: StaffSalaryModel) => {
        //TODO
    }

    return (
        <StaffCostsDetails
            inChemistSalaryData={chemistSalaryData}
            inAssistantSalaryData={assistantSalaryData}
            onChemistSalaryChange={handleOnChemistSalaryChange}
            onAssistantSalaryChange={handleOnAssistantSalaryChange}
        />
    );
}

export default StaffPersonnelForm;