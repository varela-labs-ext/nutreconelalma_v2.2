import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import OperatingCostsModel from "@/logic/models/OperatingCostsModel";
import { useEffect, useState } from "react";
import MaintenanceCostsGroupModel from "@/logic/models/operating_resources/MaintenanceCostsGroupModel";
import ProductionCostsGroupModel from "@/logic/models/operating_resources/ProductionCostsGroupModel";
import UnitCostItemModel from "@/logic/models/row_item/UnitCostItemRowModel";
import EstimatedCostItemModel from "@/logic/models/row_item/EstimatedCostItemRowModel";
import CalculationService from "@/logic/services/CalculationService";
import OperatingCostsAccourd from "./OperatingCostsAccourd";
import { useComputerContext } from "@/context/ComputerContext";
import { deepClone, deepEqual } from "@/utils/objectUtils";

interface OperatingCostsFormProps {
    inCentralType: CentralTypeIdEnum;
    inProductionLines: number;
    inProductionPerMonth: number;
}

//ESTE DEBE GESTIONAR POR CUENTA PROPIA LA CARGA DE LOS DATOS DESDE LA DB

const OperatingCostsForm = (props: OperatingCostsFormProps) => {
    const { currentMaintenanceCosts, currentProductionCosts, setCurrentMaintenanceCosts, setCurrentProductionCosts } = useComputerContext();

    const [internalMaintenanceCostsData, setInternalMaintenanceCostsData] = useState<MaintenanceCostsGroupModel | null>(null);
    const [internalProductionCostsData, setInternalProductionCostsData] = useState<ProductionCostsGroupModel | null>(null);

    // useEffect(() => {
    //     // ChemistSalaryStarter.getInstance().iniciarValores(chemistSalaryData, props.inCentralType);
    //     // CalculationService.ComputeChemistSalary(chemistSalaryData);
    //     // ChemistAssistantSalaryStarter.getInstance().iniciarValores(assistantSalaryData, props.inCentralType);
    //     // CalculationService.ChemistAssistantSalary(assistantSalaryData);
    // }, []);

    // Montaje inicial
    useEffect(() => {
        handleOnComponentMount();
    }, []);

    const handleOnComponentMount = () => {
        setInternalMaintenanceCostsData((prev) => {
            if (!deepEqual(prev, currentMaintenanceCosts)) {
                return deepClone(currentMaintenanceCosts);
            }
            return prev;
        });

        setInternalProductionCostsData((prev) => {
            if (!deepEqual(prev, currentProductionCosts)) {
                return deepClone(currentProductionCosts);
            }
            return prev;
        });

        // console.log("COMPONENTE 'OperatingCostsForm' MONTADO Y CARGADO");
        // console.log(currentMaintenanceCosts);
        // console.log(currentProductionCosts);
        // console.log("xxxx COMPONENTE 'OperatingCostsForm' MONTADO Y CARGADO xxx");
    }






    // CREO QUE SE NECESITA LA inMonthlyProductionCapacity PARA HACER LOS CALCULOS DE internalMaintenanceCostsData
    //
    useEffect(() => {

    }, [internalMaintenanceCostsData]);

    useEffect(() => {

    }, [internalProductionCostsData]);

    const handleOnMaintenanceCostsChange = (inNewItem: MaintenanceCostsGroupModel) => {
        //TODO
    }

    const handleOnProductionCostsChange = (inNewItem: ProductionCostsGroupModel) => {
        //TODO
    }

    return (
        <OperatingCostsAccourd
            inCentralType={props.inCentralType}
            inMaintenanceCostsData={internalMaintenanceCostsData ?? new MaintenanceCostsGroupModel()}
            inProductionCostsData={internalProductionCostsData ?? new ProductionCostsGroupModel()}
            inProductionLines={props.inProductionLines}
            inProductionPerMonth={props.inProductionPerMonth}
            onMaintenanceCostsChange={handleOnMaintenanceCostsChange}
            onProductionCostsChange={handleOnProductionCostsChange}
        />
    );
}

export default OperatingCostsForm;