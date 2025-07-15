import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";

import StaffSalaryGroupModel from "@/logic/models/operating_resources/StaffSalaryGroupModel";
import { useEffect, useRef, useState } from "react";
import CalculationService from "@/logic/services/CalculationService";
import StaffPersonnelCostsAccourd from "./StaffPersonnelCostsAccourd";
import DefaultsProvider from "@/logic/Providers/DefaultsProvider";
import { useComputerContext } from "@/context/ComputerContext";
import { handleOnInternalModelChange, safeSetState } from "@/context/ComputerContextExt";
import { deepClone } from "@/utils/objectUtils";


interface StaffPersonnelCostsFormProps {
    // inCentralType: CentralTypeIdEnum;
}

//ESTE DEBE GESTIONAR POR CUENTA PROPIA LA CARGA DE LOS DATOS DESDE LA DB

const StaffPersonnelCostsForm = (props: StaffPersonnelCostsFormProps) => {
    const {
        currentChemistSalary,
        currentAssistantSalary,
        setCurrentChemistSalary,
        setCurrentAssistantSalary
    } = useComputerContext();

    const [loaded, setLoaded] = useState<boolean>(false);
    const [internalChemistSalary, setInternalChemistSalary] = useState<StaffSalaryGroupModel | null>(null);
    const [internalAssistantSalary, setInternalAssistantSalary] = useState<StaffSalaryGroupModel | null>(null);

    const debounceRefByChemistSalary = useRef<number | null>(null);
    const debounceRefByAssistantSalary = useRef<number | null>(null);

    useEffect(() => {
        safeSetState(setInternalChemistSalary, currentChemistSalary);
        safeSetState(setInternalAssistantSalary, currentAssistantSalary);
        setLoaded(true);
    }, []);

    useEffect(() => {
        safeSetState(setInternalChemistSalary, currentChemistSalary);
    }, [currentChemistSalary]);

    useEffect(() => {
        safeSetState(setInternalAssistantSalary, currentAssistantSalary);
    }, [currentAssistantSalary]);


    useEffect(() => {
        if (internalChemistSalary) {
            handleOnInternalModelChange(
                debounceRefByChemistSalary,
                internalChemistSalary,
                currentChemistSalary,
                setCurrentChemistSalary);
        };
    }, [internalChemistSalary]);

    useEffect(() => {
        if (internalAssistantSalary) {
            handleOnInternalModelChange(
                debounceRefByAssistantSalary,
                internalAssistantSalary,
                currentAssistantSalary,
                setCurrentAssistantSalary);
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
    // }, [currentMixingCenterSettings]);


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