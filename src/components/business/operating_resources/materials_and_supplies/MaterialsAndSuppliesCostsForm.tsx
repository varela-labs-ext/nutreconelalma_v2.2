import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import { useEffect, useRef, useState } from "react";
import AutomatedEquipmentGroupModel from "@/logic/models/operating_resources/AutomatedEquipmentGroupModel";
import HygieneAndCleaningGroupModel from "@/logic/models/operating_resources/HygieneAndCleaningGroupModel";
import PersonalProtectionModel from "@/logic/models/operating_resources/PersonalProtectionGroupModel";
import SterileWorkEquipmentGroupModel from "@/logic/models/operating_resources/SterileWorkEquipmentGroupModel";
import MaterialsAndSuppliesCostsAccourd from "./MaterialsAndSuppliesCostsAccourd";
import CalculationService from "@/logic/services/CalculationService";
import { handleOnInternalModelChange, safeSetState } from "@/context/MixingCenterContext/MixingCenterUtils";
import { deepClone } from "@/utils/objectUtils";
import useMixingCenterContext from "@/context/MixingCenterContext/useMixingCenterContext";


interface MaterialsAndSuppliesCostsFormProps {
    // inCentralType: CentralTypeIdEnum;
}

//ESTE DEBE GESTIONAR POR CUENTA PROPIA LA CARGA DE LOS DATOS DESDE LA DB

const MaterialsAndSuppliesCostsForm = (props: MaterialsAndSuppliesCostsFormProps) => {
    const {
        activeSettings,
        activeAutomatedEquipment,
        activeHygieneAndCleaning,
        activePersonalProtection,
        activeSterileWorkEquipment,

        setActiveAutomatedEquipment,
        setActiveHygieneAndCleaning,
        setActivePersonalProtection,
        setActiveSterileWorkEquipment,
    } = useMixingCenterContext();

    const [loaded, setLoaded] = useState<boolean>(false);
    const [internalAutomatedEquipment, setInternalAutomatedEquipment] = useState<AutomatedEquipmentGroupModel | null>(null);
    const [internalHygieneAndCleaning, setInternalHygieneAndCleaning] = useState<HygieneAndCleaningGroupModel | null>(null);
    const [internalPersonalProtection, setInternalPersonalProtection] = useState<PersonalProtectionModel | null>(null);
    const [internalSterileWorkEquipment, setInternalSterileWorkEquipment] = useState<SterileWorkEquipmentGroupModel | null>(null);

    const debounceRefByAutomatedEquipment = useRef<number | null>(null);
    const debounceRefByHygieneAndCleaning = useRef<number | null>(null);
    const debounceRefByPersonalProtection = useRef<number | null>(null);
    const debounceRefBySterileWorkEquipment = useRef<number | null>(null);

    useEffect(() => {
        safeSetState(setInternalAutomatedEquipment, activeAutomatedEquipment);
        safeSetState(setInternalHygieneAndCleaning, activeHygieneAndCleaning);
        safeSetState(setInternalPersonalProtection, activePersonalProtection);
        safeSetState(setInternalSterileWorkEquipment, activeSterileWorkEquipment);
        setLoaded(true);
    }, []);

    useEffect(() => {
        safeSetState(setInternalAutomatedEquipment, activeAutomatedEquipment);
    }, [activeAutomatedEquipment]);

    useEffect(() => {
        safeSetState(setInternalHygieneAndCleaning, activeHygieneAndCleaning);
    }, [activeHygieneAndCleaning]);

    useEffect(() => {
        safeSetState(setInternalPersonalProtection, activePersonalProtection);
    }, [activePersonalProtection]);

    useEffect(() => {
        safeSetState(setInternalSterileWorkEquipment, activeSterileWorkEquipment);
    }, [activeSterileWorkEquipment]);

    useEffect(() => {
        if (internalAutomatedEquipment) {
            handleOnInternalModelChange(
                debounceRefByAutomatedEquipment,
                internalAutomatedEquipment,
                activeAutomatedEquipment,
                setActiveAutomatedEquipment);
        };
    }, [internalAutomatedEquipment]);

    useEffect(() => {
        if (internalHygieneAndCleaning) {
            handleOnInternalModelChange(
                debounceRefByHygieneAndCleaning,
                internalHygieneAndCleaning,
                activeHygieneAndCleaning,
                setActiveHygieneAndCleaning);
        };
    }, [internalHygieneAndCleaning]);

    useEffect(() => {
        if (internalPersonalProtection) {
            handleOnInternalModelChange(
                debounceRefByPersonalProtection,
                internalPersonalProtection,
                activePersonalProtection,
                setActivePersonalProtection);
        };
    }, [internalPersonalProtection]);

    useEffect(() => {
        if (internalSterileWorkEquipment) {
            handleOnInternalModelChange(
                debounceRefBySterileWorkEquipment,
                internalSterileWorkEquipment,
                activeSterileWorkEquipment,
                setActiveSterileWorkEquipment);
        };
    }, [internalSterileWorkEquipment]);

    // useEffect(() => {
    //     if (loaded) {
    //         if (internalAutomatedEquipment) {
    //             handleOnAutomatedEquipmentChange(deepClone(internalAutomatedEquipment));
    //         }
    //         if (internalHygieneAndCleaning) {
    //             handleOnHygieneAndCleaningChange(deepClone(internalHygieneAndCleaning));
    //         }
    //         if (internalPersonalProtection) {
    //             handleOnPersonalProtectionChange(deepClone(internalPersonalProtection));
    //         }
    //         if (internalSterileWorkEquipment) {
    //             handleOnSterileWorkEquipmentChange(deepClone(internalSterileWorkEquipment));
    //         }
    //     }
    // }, [activeSettings]);

    const handleOnAutomatedEquipmentChange = (inNewItem: AutomatedEquipmentGroupModel) => {
        CalculationService.computeAutomatedEquipment(inNewItem);
        setInternalAutomatedEquipment(inNewItem);
    }

    const handleOnHygieneAndCleaningChange = (inNewItem: HygieneAndCleaningGroupModel) => {
        CalculationService.computeHygieneAndCleaning(inNewItem);
        setInternalHygieneAndCleaning(inNewItem);
    }

    const handleOnPersonalProtectionChange = (inNewItem: PersonalProtectionModel) => {
        CalculationService.computePersonalProtection(inNewItem);
        setInternalPersonalProtection(inNewItem);
    }

    const handleOnSterileWorkEquipmentChange = (inNewItem: SterileWorkEquipmentGroupModel) => {
        CalculationService.computeSterileWorkEquipment(inNewItem);
        setInternalSterileWorkEquipment(inNewItem);
    }

    return (
        <MaterialsAndSuppliesCostsAccourd
            inCentralType={activeSettings.centralType}
            inAutomatedEquipmentData={internalAutomatedEquipment ?? new AutomatedEquipmentGroupModel()}
            inHygieneAndCleaningData={internalHygieneAndCleaning ?? new HygieneAndCleaningGroupModel()}
            inPersonalProtectionData={internalPersonalProtection ?? new PersonalProtectionModel()}
            inSterileWorkEquipmentData={internalSterileWorkEquipment ?? new SterileWorkEquipmentGroupModel()}
            onAutomatedEquipmentChange={handleOnAutomatedEquipmentChange}
            onHygieneAndCleaningChange={handleOnHygieneAndCleaningChange}
            onPersonalProtectionChange={handleOnPersonalProtectionChange}
            onSterileWorkEquipmentChange={handleOnSterileWorkEquipmentChange}
        />
    );
}

export default MaterialsAndSuppliesCostsForm;