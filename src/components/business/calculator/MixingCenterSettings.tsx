import MixingCenterSettingsModel from "@/logic/models/common/MixingCenterSettingsModel";
import MixingCenterSet from "./mixing_center/MixingCenterSet";
import { useEffect, useRef, useState } from "react";
import { handleOnInternalModelChange, safeSetState } from "@/context/MixingCenterContext/MixingCenterUtils";
import useMixingCenterContext from "@/context/MixingCenterContext/useMixingCenterContext";


interface MixingCenterSettingsProps {
    // onSetLoading: (value: boolean) => void;
}

const MixingCenterSettings = (props: MixingCenterSettingsProps) => {
    const {
        activeSettings,
        setActiveSettings
    } = useMixingCenterContext();

    const [loaded, setLoaded] = useState<boolean>(false);
    const [internalMixingCenterSettings, setInternalMixingCenterSettings] = useState<MixingCenterSettingsModel | null>(null);

    const debounceRefByMixingCenter = useRef<number | null>(null);

    // Montaje inicial
    useEffect(() => {
        safeSetState(setInternalMixingCenterSettings, activeSettings);
        setLoaded(true);
        // setInternalData((prev) => {
        //     if (!deepEqual(prev, activeSettings)) {
        //         return deepClone(activeSettings); // copia profunda para evitar referencias compartidas
        //     }
        //     return prev;
        // });
    }, []);

    // Cambio en el contexto externo → actualizar interno
    useEffect(() => {
        safeSetState(setInternalMixingCenterSettings, activeSettings);
        // setInternalData((prev) => {
        //     if (!deepEqual(prev, activeSettings)) {
        //         return deepClone(activeSettings); // evita re-renders innecesarios
        //     }
        //     return prev;
        // });
    }, [activeSettings]);



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
    //             activeSettings,
    //             setActiveSettings
    //         );
    //     }

    //     // if (internalData === null) return;

    //     // if (debounceRef.current) {
    //     //     clearTimeout(debounceRef.current);
    //     // }

    //     // debounceRef.current = window.setTimeout(() => {
    //     //     if (!deepEqual(internalData, activeSettings)) {
    //     //         setActiveSettings(deepClone(internalData)); // copia profunda antes de propagar
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
                activeSettings,
                setActiveSettings);
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