import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import OperatingCostsModel from "@/logic/models/OperatingCostsModel";
import { useEffect, useRef, useState } from "react";
import MaintenanceCostsGroupModel from "@/logic/models/operating_resources/MaintenanceCostsGroupModel";
import ProductionCostsGroupModel from "@/logic/models/operating_resources/ProductionCostsGroupModel";
import UnitCostItemModel from "@/logic/models/row_item/UnitCostItemRowModel";
import EstimatedCostItemModel from "@/logic/models/row_item/EstimatedCostItemRowModel";
import CalculationService from "@/logic/services/CalculationService";
import OperatingCostsAccourd from "./OperatingCostsAccourd";
import { useComputerContext } from "@/context/ComputerContext";
import { deepClone, deepEqual } from "@/utils/objectUtils";
import { handleOnInternalModelChange, safeSetState } from "@/context/ComputerContextExt";

interface OperatingCostsFormProps {
    inCentralType: CentralTypeIdEnum;
    inProductionLines: number;
    inProductionPerMonth: number;
}

//ESTE DEBE GESTIONAR POR CUENTA PROPIA LA CARGA DE LOS DATOS DESDE LA DB

const OperatingCostsForm = (props: OperatingCostsFormProps) => {
    const { currentMaintenanceCosts, currentProductionCosts, setCurrentMaintenanceCosts, setCurrentProductionCosts } = useComputerContext();

    const [loaded, setLoaded] = useState<boolean>(false);
    const [internalMaintenanceCosts, setInternalMaintenanceCosts] = useState<MaintenanceCostsGroupModel | null>(null);
    const [internalProductionCosts, setInternalProductionCosts] = useState<ProductionCostsGroupModel | null>(null);

    const debounceRefByMaintenanceCosts = useRef<number | null>(null);
    const debounceRefByProductionCosts = useRef<number | null>(null);

    // Montaje inicial
    useEffect(() => {
        safeSetState(setInternalMaintenanceCosts, currentMaintenanceCosts);
        safeSetState(setInternalProductionCosts, currentProductionCosts);
        setLoaded(true);
    }, []);

    // Cambio en el contexto externo → actualizar interno
    useEffect(() => {
        safeSetState(setInternalMaintenanceCosts, currentMaintenanceCosts);
    }, [currentMaintenanceCosts]);

    useEffect(() => {
        safeSetState(setInternalProductionCosts, currentProductionCosts);
    }, [currentProductionCosts]);

    // Cambio en interno → actualizar contexto (con debounce)
    useEffect(() => {
        if (internalMaintenanceCosts) {
            handleOnInternalModelChange(
                debounceRefByMaintenanceCosts,
                internalMaintenanceCosts,
                currentMaintenanceCosts,
                setCurrentMaintenanceCosts);
        };
    }, [internalMaintenanceCosts]);

    useEffect(() => {
        if (internalProductionCosts) {
            handleOnInternalModelChange(
                debounceRefByProductionCosts,
                internalProductionCosts,
                currentProductionCosts,
                setCurrentProductionCosts);
        };
    }, [internalProductionCosts]);

    useEffect(() => {
        if (loaded) {
            if (internalMaintenanceCosts) {
                handleOnMaintenanceCostsChange(deepClone(internalMaintenanceCosts));
            }
            if (internalProductionCosts) {
                setInternalProductionCosts(deepClone(internalProductionCosts));
            }
        }
    }, [props.inProductionLines, props.inProductionPerMonth]);

    const handleOnMaintenanceCostsChange = (inNewItem: MaintenanceCostsGroupModel) => {
        CalculationService.computeMaintenanceCosts(inNewItem, props.inProductionLines, props.inProductionPerMonth);
        setInternalMaintenanceCosts(inNewItem);
    }

    const handleOnProductionCostsChange = (inNewItem: ProductionCostsGroupModel) => {
        CalculationService.computeProductionCosts(inNewItem, props.inProductionLines, props.inProductionPerMonth);
        setInternalProductionCosts(inNewItem);
    }

    return (
        <OperatingCostsAccourd
            inCentralType={props.inCentralType}
            inMaintenanceCostsData={internalMaintenanceCosts ?? new MaintenanceCostsGroupModel()}
            inProductionCostsData={internalProductionCosts ?? new ProductionCostsGroupModel()}
            inProductionLines={props.inProductionLines}
            inProductionPerMonth={props.inProductionPerMonth}
            onMaintenanceCostsChange={handleOnMaintenanceCostsChange}
            onProductionCostsChange={handleOnProductionCostsChange}
        />
    );
}

export default OperatingCostsForm;