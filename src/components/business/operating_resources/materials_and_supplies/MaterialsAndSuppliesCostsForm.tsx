import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import { useEffect, useRef, useState } from "react";
import AutomatedEquipmentGroupModel from "@/logic/models/operating_resources/AutomatedEquipmentGroupModel";
import HygieneAndCleaningGroupModel from "@/logic/models/operating_resources/HygieneAndCleaningGroupModel";
import PersonalProtectionModel from "@/logic/models/operating_resources/PersonalProtectionGroupModel";
import SterileWorkEquipmentGroupModel from "@/logic/models/operating_resources/SterileWorkEquipmentGroupModel";
import MaterialsAndSuppliesCostsAccourd from "./MaterialsAndSuppliesCostsAccourd";
import CalculationService from "@/logic/services/CalculationService";
import { useComputerContext } from "@/context/ComputerContext";
import { handleOnInternalModelChange, safeSetState } from "@/context/ComputerContextExt";
import { deepClone } from "@/utils/objectUtils";


interface MaterialsAndSuppliesCostsFormProps {
    inCentralType: CentralTypeIdEnum;
}

//ESTE DEBE GESTIONAR POR CUENTA PROPIA LA CARGA DE LOS DATOS DESDE LA DB

const MaterialsAndSuppliesCostsForm = (props: MaterialsAndSuppliesCostsFormProps) => {
    const {
        currentMixingCenterSettings,
        currentAutomatedEquipment,
        currentHygieneAndCleaning,
        currentPersonalProtection,
        currentSterileWorkEquipment,
        setCurrentAutomatedEquipment,
        setCurrentHygieneAndCleaning,
        setCurrentPersonalProtection,
        setCurrentSterileWorkEquipment,
    } = useComputerContext();

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
        safeSetState(setInternalAutomatedEquipment, currentAutomatedEquipment);
        safeSetState(setInternalHygieneAndCleaning, currentHygieneAndCleaning);
        safeSetState(setInternalPersonalProtection, currentPersonalProtection);
        safeSetState(setInternalSterileWorkEquipment, currentSterileWorkEquipment);
        setLoaded(true);
    }, []);

    useEffect(() => {
        safeSetState(setInternalAutomatedEquipment, currentAutomatedEquipment);
    }, [currentAutomatedEquipment]);

    useEffect(() => {
        safeSetState(setInternalHygieneAndCleaning, currentHygieneAndCleaning);
    }, [currentHygieneAndCleaning]);

    useEffect(() => {
        safeSetState(setInternalPersonalProtection, currentPersonalProtection);
    }, [currentPersonalProtection]);

    useEffect(() => {
        safeSetState(setInternalSterileWorkEquipment, currentSterileWorkEquipment);
    }, [currentSterileWorkEquipment]);

    useEffect(() => {
        if (internalAutomatedEquipment) {
            handleOnInternalModelChange(
                debounceRefByAutomatedEquipment,
                internalAutomatedEquipment,
                currentAutomatedEquipment,
                setCurrentAutomatedEquipment);
        };
    }, [internalAutomatedEquipment]);

    useEffect(() => {
        if (internalHygieneAndCleaning) {
            handleOnInternalModelChange(
                debounceRefByHygieneAndCleaning,
                internalHygieneAndCleaning,
                currentHygieneAndCleaning,
                setCurrentHygieneAndCleaning);
        };
    }, [internalHygieneAndCleaning]);

    useEffect(() => {
        if (internalPersonalProtection) {
            handleOnInternalModelChange(
                debounceRefByPersonalProtection,
                internalPersonalProtection,
                currentPersonalProtection,
                setCurrentPersonalProtection);
        };
    }, [internalPersonalProtection]);

    useEffect(() => {
        if (internalSterileWorkEquipment) {
            handleOnInternalModelChange(
                debounceRefBySterileWorkEquipment,
                internalSterileWorkEquipment,
                currentSterileWorkEquipment,
                setCurrentSterileWorkEquipment);
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
    // }, [currentMixingCenterSettings]);

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
            inCentralType={props.inCentralType}
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