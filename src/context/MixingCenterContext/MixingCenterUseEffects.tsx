// MixingCenterUseEffects.tsx
import { useEffect } from "react";

import { Logger } from "@/utils/logger";
import useMixingCenterContext from "./useMixingCenterContext";

const MixingCenterUseEffects = ({ children }: { children: React.ReactNode }) => {
    const {
        activeSettings,
        activeAutomatedEquipment,
        activeHygieneAndCleaning,
        activePersonalProtection,
        activeSterileWorkEquipment,
        activeMaintenanceCosts,
        activeProductionCosts,
        activeChemistSalary,
        activeAssistantSalary,
        recalculateAdditionalCostsSummary,
        handleMixingCenterSettingsChange
    } = useMixingCenterContext();


    useEffect(() => {
        handleMixingCenterSettingsChange(activeSettings);
        Logger.info("useEffect -> activeSettings");
        Logger.info(activeSettings);
    }, [activeSettings]);

    useEffect(() => {
        recalculateAdditionalCostsSummary();
    }, [
        activeAutomatedEquipment,
        activeHygieneAndCleaning,
        activePersonalProtection,
        activeSterileWorkEquipment,
        activeMaintenanceCosts,
        activeProductionCosts,
        activeChemistSalary,
        activeAssistantSalary
    ]);

    return (
        <>
            {children}
        </>
    );
};

export default MixingCenterUseEffects;
