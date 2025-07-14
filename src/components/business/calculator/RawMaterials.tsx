import RawMaterialModel from "@/logic/models/RawMaterialModel";
import { useEffect, useRef, useState } from "react";
import RawMaterialsSet from "../raw_material/RawMaterialsSet";
import { useComputerContext } from "@/context/ComputerContext";
import { deepClone, deepEqual } from "@/utils/objectUtils";

interface RawMaterialsProps {

}

const RawMaterials = (props: RawMaterialsProps) => {
    const { currentRawMaterialData, setCurrentRawMaterialData } = useComputerContext();

    const [internalData, setInternalData] = useState<RawMaterialModel | null>(null);

    const debounceRef = useRef<number | null>(null);

    // Montaje inicial
    useEffect(() => {
        setInternalData((prev) => {
            if (!deepEqual(prev, currentRawMaterialData)) {
                return deepClone(currentRawMaterialData); // copia profunda para evitar referencias compartidas
            }
            return prev;
        });
    }, []);

    // Cambio en el contexto externo → actualizar interno
    useEffect(() => {
        setInternalData((prev) => {
            if (!deepEqual(prev, currentRawMaterialData)) {
                return deepClone(currentRawMaterialData); // evita re-renders innecesarios
            }
            return prev;
        });
    }, [currentRawMaterialData]);

    // Cambio en interno → actualizar contexto (con debounce)
    useEffect(() => {
        if (internalData === null) return;

        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = window.setTimeout(() => {
            if (!deepEqual(internalData, currentRawMaterialData)) {
                setCurrentRawMaterialData(deepClone(internalData)); // copia profunda antes de propagar
            }
        }, 300);

        return () => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
        };
    }, [internalData]);



    const handleOnRawMaterialsSetChange = (inNewData: RawMaterialModel) => {
        setInternalData({ ...inNewData });
    }

    return (
        <>
            <RawMaterialsSet
                inData={internalData ?? new RawMaterialModel()}
                onChange={handleOnRawMaterialsSetChange}
            />
        </>
    );
}

export default RawMaterials;