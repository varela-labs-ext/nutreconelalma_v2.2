import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";

import StaffSalaryGroupModel from "@/logic/models/operating_resources/StaffSalaryGroupModel";
import { useEffect, useRef, useState } from "react";
import CalculationService from "@/logic/services/CalculationService";
import StaffPersonnelCostsAccourd from "./StaffPersonnelCostsAccourd";
import { handleOnInternalModelChange, safeSetState } from "@/context/MixingCenterContext/MixingCenterUtils";
import useMixingCenterContext from "@/context/MixingCenterContext/useMixingCenterContext";


interface StaffPersonnelCostsFormProps {
    // inCentralType: CentralTypeIdEnum;
}

//ESTE DEBE GESTIONAR POR CUENTA PROPIA LA CARGA DE LOS DATOS DESDE LA DB

const StaffPersonnelCostsForm = (props: StaffPersonnelCostsFormProps) => {
    const {
        activeChemistSalary,
        activeAssistantSalary,
        setActiveChemistSalary,
        setActiveAssistantSalary
    } = useMixingCenterContext();

    const [loaded, setLoaded] = useState<boolean>(false);
    const [internalChemistSalary, setInternalChemistSalary] = useState<StaffSalaryGroupModel | null>(null);
    const [internalAssistantSalary, setInternalAssistantSalary] = useState<StaffSalaryGroupModel | null>(null);

    const debounceRefByChemistSalary = useRef<number | null>(null);
    const debounceRefByAssistantSalary = useRef<number | null>(null);

    useEffect(() => {
        safeSetState(setInternalChemistSalary, activeChemistSalary);
        safeSetState(setInternalAssistantSalary, activeAssistantSalary);
        setLoaded(true);
    }, []);

    useEffect(() => {
        safeSetState(setInternalChemistSalary, activeChemistSalary);
    }, [activeChemistSalary]);

    useEffect(() => {
        safeSetState(setInternalAssistantSalary, activeAssistantSalary);
    }, [activeAssistantSalary]);


    useEffect(() => {
        if (internalChemistSalary) {
            handleOnInternalModelChange(
                debounceRefByChemistSalary,
                internalChemistSalary,
                activeChemistSalary,
                setActiveChemistSalary);
        };
    }, [internalChemistSalary]);

    useEffect(() => {
        if (internalAssistantSalary) {
            handleOnInternalModelChange(
                debounceRefByAssistantSalary,
                internalAssistantSalary,
                activeAssistantSalary,
                setActiveAssistantSalary);
        };
    }, [internalAssistantSalary]);

    // useEffect(() => {
    //     if (loaded) {
    //         if (internalChemistSalary) {
    //             handleOnChemistSalaryChange(deepClone(internalChemistSalary));
    //         }
    //         if (internalAssistantSalary) {
    //             handleOnAssistantSalaryChange(deepClone(internalAssistantSalary));
    //         }
    //     }
    // }, [activeSettings]);


    const handleOnChemistSalaryChange = (inNewItem: StaffSalaryGroupModel) => {
        CalculationService.computeChemistSalary(inNewItem);
        setInternalChemistSalary(inNewItem);
    }

    const handleOnAssistantSalaryChange = (inNewItem: StaffSalaryGroupModel) => {
        CalculationService.computeChemistAssistantSalary(inNewItem);
        setInternalAssistantSalary(inNewItem);
    }

    return (
        <StaffPersonnelCostsAccourd
            inChemistSalaryData={internalChemistSalary ?? new StaffSalaryGroupModel()}
            inAssistantSalaryData={internalAssistantSalary ?? new StaffSalaryGroupModel()}
            onChemistSalaryChange={handleOnChemistSalaryChange}
            onAssistantSalaryChange={handleOnAssistantSalaryChange}
        />
    );
}

export default StaffPersonnelCostsForm;