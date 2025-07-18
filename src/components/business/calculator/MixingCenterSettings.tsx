import MixingCenterSettingsModel from "@/logic/models/common/MixingCenterSettingsModel";
import MixingCenterSet from "./mixing_center/MixingCenterSet";
import { useEffect, useRef, useState } from "react";
import { useComputerContext } from "@/context/MixingCenterContext/MixingCenterProvider";
import { deepClone, deepEqual } from "@/utils/objectUtils";
import { handleOnInternalModelChange, safeSetState } from "@/context/MixingCenterContext/MixingCenterUtils";


interface MixingCenterSettingsProps {
    // onSetLoading: (value: boolean) => void;
}

const MixingCenterSettings = (props: MixingCenterSettingsProps) => {
    const {
        currentMixingCenterSettings,
        setCurrentMixingCenterSettings
    } = useComputerContext();

    const [loaded, setLoaded] = useState<boolean>(false);
    const [internalMixingCenterSettings, setInternalMixingCenterSettings] = useState<MixingCenterSettingsModel | null>(null);

    const debounceRefByMixingCenter = useRef<number | null>(null);

    // Montaje inicial
    useEffect(() => {
        safeSetState(setInternalMixingCenterSettings, currentMixingCenterSettings);
        setLoaded(true);
        // setInternalData((prev) => {
        //     if (!deepEqual(prev, currentMixingCenterSettings)) {
        //         return deepClone(currentMixingCenterSettings); // copia profunda para evitar referencias compartidas
        //     }
        //     return prev;
        // });
    }, []);

    // Cambio en el contexto externo → actualizar interno
    useEffect(() => {
        safeSetState(setInternalMixingCenterSettings, currentMixingCenterSettings);
        // setInternalData((prev) => {
        //     if (!deepEqual(prev, currentMixingCenterSettings)) {
        //         return deepClone(currentMixingCenterSettings); // evita re-renders innecesarios
        //     }
        //     return prev;
        // });
    }, [currentMixingCenterSettings]);



    // const refInternalDataFirstRender = useRef(true);

    // Cambio en interno → actualizar contexto (con debounce)
    // useEffect(() => {
    //     if (refInternalDataFirstRender.current) {
    //         refInternalDataFirstRender.current = false;
    //         return;
    //     }

    //     if (internalData) {
    //         handleOnInternalModelChange(
    //             debounceRef,
    //             internalData,
    //             currentMixingCenterSettings,
    //             setCurrentMixingCenterSettings
    //         );
    //     }

    //     // if (internalData === null) return;

    //     // if (debounceRef.current) {
    //     //     clearTimeout(debounceRef.current);
    //     // }

    //     // debounceRef.current = window.setTimeout(() => {
    //     //     if (!deepEqual(internalData, currentMixingCenterSettings)) {
    //     //         setCurrentMixingCenterSettings(deepClone(internalData)); // copia profunda antes de propagar
    //     //     }
    //     // }, 300);

    //     // return () => {
    //     //     if (debounceRef.current) {
    //     //         clearTimeout(debounceRef.current);
    //     //     }
    //     // };
    // }, [internalData]);

    useEffect(() => {
        if (internalMixingCenterSettings) {
            handleOnInternalModelChange(
                debounceRefByMixingCenter,
                internalMixingCenterSettings,
                currentMixingCenterSettings,
                setCurrentMixingCenterSettings);
        };
    }, [internalMixingCenterSettings]);

    const handleOnMixingCenterSetChange = (inNewData: MixingCenterSettingsModel): void => {
        setInternalMixingCenterSettings(inNewData);
    }

    return (
        <>
            <MixingCenterSet
                inData={internalMixingCenterSettings ?? new MixingCenterSettingsModel()}
                onChange={handleOnMixingCenterSetChange} />
        </>
    );
}

export default MixingCenterSettings;