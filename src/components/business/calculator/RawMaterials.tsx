import RawMaterialModel from "@/logic/models/RawMaterialModel";
import { useEffect, useRef, useState } from "react";
import RawMaterialsSet from "../raw_material/RawMaterialsSet";
import { useComputerContext } from "@/context/ComputerContext";
import { deepClone, deepEqual } from "@/utils/objectUtils";
import { handleOnInternalModelChange, safeSetState } from "@/context/ComputerContextExt";
import CalculationService from "@/logic/services/CalculationService";

interface RawMaterialsProps {

}

const RawMaterials = (props: RawMaterialsProps) => {
    const {
        currentRawMaterial,
        setCurrentRawMaterial
    } = useComputerContext();

    const [loaded, setLoaded] = useState<boolean>(false);
    const [internalRawMaterial, setInternalRawMaterial] = useState<RawMaterialModel | null>(null);

    const debounceRefByRawMaterial = useRef<number | null>(null);

    // Montaje inicial
    useEffect(() => {
        safeSetState(setInternalRawMaterial, currentRawMaterial);
        setLoaded(true);
    }, []);

    // Cambio en el contexto externo → actualizar interno
    useEffect(() => {
        safeSetState(setInternalRawMaterial, currentRawMaterial);
    }, [currentRawMaterial]);

    // Cambio en interno → actualizar contexto (con debounce)
    useEffect(() => {
        if (internalRawMaterial) {
            handleOnInternalModelChange(
                debounceRefByRawMaterial,
                internalRawMaterial,
                currentRawMaterial,
                setCurrentRawMaterial);
        };
    }, [internalRawMaterial]);


    const handleOnRawMaterialsSetChange = (inNewData: RawMaterialModel) => {
        CalculationService.computeRawMaterial(inNewData);
        setInternalRawMaterial(inNewData);
    }

    return (
        <>
            <RawMaterialsSet
                inData={internalRawMaterial ?? new RawMaterialModel()}
                onChange={handleOnRawMaterialsSetChange}
            />
        </>
    );
}

export default RawMaterials;