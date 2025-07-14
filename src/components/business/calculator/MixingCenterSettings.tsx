import MixingCenterSettingsModel from "@/logic/models/common/MixingCenterSettingsModel";
import MixingCenterSet from "./mixing_center/MixingCenterSet";
import { useEffect, useRef, useState } from "react";
import { useComputerContext } from "@/context/ComputerContext";
import { deepClone, deepEqual } from "@/utils/objectUtils";


interface MixingCenterSettingsProps {
    // onSetLoading: (value: boolean) => void;
}

const MixingCenterSettings = (props: MixingCenterSettingsProps) => {
    const { mixingCenterSettingsData, setMixingCenterSettingsData } = useComputerContext();

    const [internalData, setInternalData] = useState<MixingCenterSettingsModel | null>(null);

    const debounceRef = useRef<number | null>(null);

    // Montaje inicial
    useEffect(() => {
        setInternalData((prev) => {
            if (!deepEqual(prev, mixingCenterSettingsData)) {
                return deepClone(mixingCenterSettingsData); // copia profunda para evitar referencias compartidas
            }
            return prev;
        });
    }, []);

    // Cambio en el contexto externo → actualizar interno
    useEffect(() => {
        setInternalData((prev) => {
            if (!deepEqual(prev, mixingCenterSettingsData)) {
                return deepClone(mixingCenterSettingsData); // evita re-renders innecesarios
            }
            return prev;
        });
    }, [mixingCenterSettingsData]);

    // Cambio en interno → actualizar contexto (con debounce)
    useEffect(() => {
        if (internalData === null) return;

        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = window.setTimeout(() => {
            if (!deepEqual(internalData, mixingCenterSettingsData)) {
                setMixingCenterSettingsData(deepClone(internalData)); // copia profunda antes de propagar
            }
        }, 300);

        return () => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
        };
    }, [internalData]);

    const handleOnMixingCenterSetChange = (inNewData: MixingCenterSettingsModel): void => {
        setInternalData({ ...inNewData });
    }

    return (
        <>
            <MixingCenterSet
                inData={internalData ?? new MixingCenterSettingsModel()}
                onChange={handleOnMixingCenterSetChange} />
        </>
    );
}

export default MixingCenterSettings;