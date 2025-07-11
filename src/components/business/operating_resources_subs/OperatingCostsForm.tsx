import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import OperatingCostsDetails from "../operating_resources_details/OperatingCostsDetails";
import OperatingCostsModel from "@/logic/models/OperatingCostsModel";
import { useEffect, useState } from "react";
import MaintenanceCostsModel from "@/logic/models/operativos/MaintenanceCostsModel";
import ProductionCostsModel from "@/logic/models/operativos/ProductionCostsModel";
import UnitCostItemModel from "@/logic/models/operating_resources/UnitCostItemModel";
import EstimatedCostItemModel from "@/logic/models/operating_resources/EstimatedCostItemModel";
import CalculationService from "@/logic/services/CalculationService";

interface OperatingCostsFormProps {
    inCentralType: CentralTypeIdEnum;
    inMonthlyProductionCapacity: number;
    inProductionLines: number;
}

//ESTE DEBE GESTIONAR POR CUENTA PROPIA LA CARGA DE LOS DATOS DESDE LA DB

const OperatingCostsForm = (props: OperatingCostsFormProps) => {
    const [maintenanceCostsData, setMaintenanceCostsData] = useState<MaintenanceCostsModel>(new MaintenanceCostsModel());
    const [productionCostsData, setProductionCostsData] = useState<ProductionCostsModel>(new ProductionCostsModel());

    useEffect(() => {
        // ChemistSalaryStarter.getInstance().iniciarValores(chemistSalaryData, props.inCentralType);
        // CalculationService.ComputeChemistSalary(chemistSalaryData);
        // ChemistAssistantSalaryStarter.getInstance().iniciarValores(assistantSalaryData, props.inCentralType);
        // CalculationService.ChemistAssistantSalary(assistantSalaryData);
    }, []);

    // CREO QUE SE NECESITA LA inMonthlyProductionCapacity PARA HACER LOS CALCULOS DE maintenanceCostsData
    //
    useEffect(() => {

    }, [maintenanceCostsData]);

    useEffect(() => {

    }, [productionCostsData]);

    const handleOnMaintenanceCostsChange = (inNewItem: MaintenanceCostsModel) => {
        //TODO
    }

    const handleOnProductionCostsChange = (inNewItem: ProductionCostsModel) => {
        //TODO
    }

    return (
        <>
            <OperatingCostsDetails
                inCentralType={props.inCentralType}
                inMaintenanceCostsData={maintenanceCostsData}
                inProductionCostsData={productionCostsData}
                inMonthlyProductionCapacity={props.inMonthlyProductionCapacity}
                inProductionLines={props.inProductionLines}
                onMaintenanceCostsChange={handleOnMaintenanceCostsChange}
                onProductionCostsChange={handleOnProductionCostsChange}
            />
        </>
    );
}

export default OperatingCostsForm;