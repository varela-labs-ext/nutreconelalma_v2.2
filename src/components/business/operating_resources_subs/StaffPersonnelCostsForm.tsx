import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import StaffCostsDetails from "../operating_resources_details/StaffCostsDetails";
import StaffSalaryGroupModel from "@/logic/models/operating_resources/StaffSalaryGroupModel";
import { useEffect, useState } from "react";
import ChemistSalaryStarter from "@/logic/starters/ChemistSalaryStarter";
import ChemistAssistantSalaryStarter from "@/logic/starters/ChemistAssistantSalaryStarter";
import CalculationService from "@/logic/services/CalculationService";


interface StaffPersonnelFormProps {
    inCentralType: CentralTypeIdEnum;
}

//ESTE DEBE GESTIONAR POR CUENTA PROPIA LA CARGA DE LOS DATOS DESDE LA DB

const StaffPersonnelForm = (props: StaffPersonnelFormProps) => {
    const [chemistSalaryData, setMaintenanceCostsData] = useState<StaffSalaryGroupModel>(new StaffSalaryGroupModel());
    const [assistantSalaryData, setProductionCostsData] = useState<StaffSalaryGroupModel>(new StaffSalaryGroupModel());

    useEffect(() => {
        ChemistSalaryStarter.getInstance().iniciarValores(chemistSalaryData, props.inCentralType);
        CalculationService.ComputeChemistSalary(chemistSalaryData);
        ChemistAssistantSalaryStarter.getInstance().iniciarValores(assistantSalaryData, props.inCentralType);
        CalculationService.ChemistAssistantSalary(assistantSalaryData);
    }, []);

    //
    useEffect(() => {

    }, [chemistSalaryData]);

    useEffect(() => {

    }, [assistantSalaryData]);

    const handleOnChemistSalaryChange = (inNewItem: StaffSalaryGroupModel) => {
        //TODO
    }

    const handleOnAssistantSalaryChange = (inNewItem: StaffSalaryGroupModel) => {
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