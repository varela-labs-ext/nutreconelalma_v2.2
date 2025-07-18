import RawMaterialGroupModel from "@/logic/models/RawMaterialGroupModel";
import { useEffect, useRef, useState } from "react";
import RawMaterialsSet from "../raw_material/RawMaterialsSet";

import { handleOnInternalModelChange, safeSetState } from "@/context/MixingCenterContext/MixingCenterUtils";
import CalculationService from "@/logic/services/CalculationService";
import useMixingCenterContext from "@/context/MixingCenterContext/useMixingCenterContext";

interface RawMaterialsProps {

}

const RawMaterials = (props: RawMaterialsProps) => {
    const {
        activeSettings,
        activeRawMaterialGroup,
        additionalCostsSummary,
        setActiveRawMaterialGroup
    } = useMixingCenterContext();

    const [loaded, setLoaded] = useState<boolean>(false);
    const [internalRawMaterial, setInternalRawMaterial] = useState<RawMaterialGroupModel | null>(null);

    const debounceRefByRawMaterial = useRef<number | null>(null);

    // Montaje inicial
    useEffect(() => {
        safeSetState(setInternalRawMaterial, activeRawMaterialGroup);
        setLoaded(true);
    }, []);

    // Cambio en el contexto externo → actualizar interno
    useEffect(() => {
        safeSetState(setInternalRawMaterial, activeRawMaterialGroup);
    }, [activeRawMaterialGroup]);

    // Cambio en interno → actualizar contexto (con debounce)
    useEffect(() => {
        if (internalRawMaterial) {
            handleOnInternalModelChange(
                debounceRefByRawMaterial,
                internalRawMaterial,
                activeRawMaterialGroup,
                setActiveRawMaterialGroup);
        };
    }, [internalRawMaterial]);


    const handleOnRawMaterialsSetChange = (inNewData: RawMaterialGroupModel) => {

        CalculationService.computeRawMaterial(inNewData);

        setInternalRawMaterial(inNewData);
    }

    return (
        <>
            <RawMaterialsSet
                inData={internalRawMaterial ?? new RawMaterialGroupModel()}
                inAdditionalCosts={additionalCostsSummary}
                inCentralType={activeSettings.centralType}
                onChange={handleOnRawMaterialsSetChange}
            />
        </>
    );
}

export default RawMaterials;