// MixingCenterUseEffects.tsx
import { useEffect } from "react";

import { Logger } from "@/utils/logger";
import useMixingCenterContext from "./useMixingCenterContext";

const MixingCenterUseEffects = ({ children }: { children: React.ReactNode }) => {
    const {
        activeAutomatedEquipment: currentAutomatedEquipment,
        activeHygieneAndCleaning: currentHygieneAndCleaning,
        activePersonalProtection: currentPersonalProtection,
        activeSterileWorkEquipment: currentSterileWorkEquipment,
        activeMaintenanceCosts: currentMaintenanceCosts,
        activeProductionCosts: currentProductionCosts,
        activeChemistSalary: currentChemistSalary,
        activeAssistantSalary: currentAssistantSalary,
        recalculateAdditionalCostsSummary
    } = useMixingCenterContext();

    // useEffect(() => {
    //     Logger.info("MixingCenterSettings cambió:", mixingCenterSettings);
    //     const _backup = structuredClone(mixingCenterSettings);
    //     setBackupMixingCenterSettings(_backup);
    // }, [mixingCenterSettings]);

    // useEffect(() => {
    //     refreshAdditionalSummary();
    // }, [/* dependencias */]);




    useEffect(() => {
        recalculateAdditionalCostsSummary();
    }, [currentAutomatedEquipment]);

    useEffect(() => {
        recalculateAdditionalCostsSummary();
    }, [currentHygieneAndCleaning]);

    useEffect(() => {
        recalculateAdditionalCostsSummary();
    }, [currentPersonalProtection]);

    useEffect(() => {
        recalculateAdditionalCostsSummary();
    }, [currentSterileWorkEquipment]);

    useEffect(() => {
        recalculateAdditionalCostsSummary();
    }, [currentMaintenanceCosts]);

    useEffect(() => {
        recalculateAdditionalCostsSummary();
    }, [currentProductionCosts]);

    useEffect(() => {
        recalculateAdditionalCostsSummary();
    }, [currentChemistSalary]);

    useEffect(() => {
        recalculateAdditionalCostsSummary();
    }, [currentAssistantSalary]);


    return (
        <>
            {children}
        </>
    );
};

export default MixingCenterUseEffects;
