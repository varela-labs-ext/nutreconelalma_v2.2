import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";

import StaffSalaryGroupModel from "@/logic/models/operating_resources/StaffSalaryGroupModel";
import { useEffect, useState } from "react";
import CalculationService from "@/logic/services/CalculationService";
import StaffPersonnelCostsAccourd from "./StaffPersonnelCostsAccourd";
import DefaultsProvider from "@/logic/Providers/DefaultsProvider";


interface StaffPersonnelCostsFormProps {
    inCentralType: CentralTypeIdEnum;
}

//ESTE DEBE GESTIONAR POR CUENTA PROPIA LA CARGA DE LOS DATOS DESDE LA DB

const StaffPersonnelCostsForm = (props: StaffPersonnelCostsFormProps) => {
    const [chemistSalaryData, setMaintenanceCostsData] = useState<StaffSalaryGroupModel>(new StaffSalaryGroupModel());
    const [assistantSalaryData, setProductionCostsData] = useState<StaffSalaryGroupModel>(new StaffSalaryGroupModel());

    useEffect(() => {
        DefaultsProvider.chemistSalaryDefaults(chemistSalaryData, props.inCentralType);
        CalculationService.ComputeChemistSalary(chemistSalaryData);

        DefaultsProvider.chemistAssistantSalaryDefaults(assistantSalaryData, props.inCentralType);
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
        <StaffPersonnelCostsAccourd
            inChemistSalaryData={chemistSalaryData}
            inAssistantSalaryData={assistantSalaryData}
            onChemistSalaryChange={handleOnChemistSalaryChange}
            onAssistantSalaryChange={handleOnAssistantSalaryChange}
        />
    );
}

export default StaffPersonnelCostsForm;