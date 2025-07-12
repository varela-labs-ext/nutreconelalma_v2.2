import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import OperatingCostsModel from "@/logic/models/OperatingCostsModel";
import { useEffect, useState } from "react";
import MaintenanceCostsGroupModel from "@/logic/models/operating_resources/MaintenanceCostsGroupModel";
import ProductionCostsGroupModel from "@/logic/models/operating_resources/ProductionCostsGroupModel";
import UnitCostItemModel from "@/logic/models/row_item/UnitCostItemRowModel";
import EstimatedCostItemModel from "@/logic/models/row_item/EstimatedCostItemRowModel";
import CalculationService from "@/logic/services/CalculationService";
import OperatingCostsAccourd from "./OperatingCostsAccourd";

interface OperatingCostsFormProps {
    inCentralType: CentralTypeIdEnum;
    inMonthlyProductionCapacity: number;
    inProductionLines: number;
}

//ESTE DEBE GESTIONAR POR CUENTA PROPIA LA CARGA DE LOS DATOS DESDE LA DB

const OperatingCostsForm = (props: OperatingCostsFormProps) => {
    const [maintenanceCostsData, setMaintenanceCostsData] = useState<MaintenanceCostsGroupModel>(new MaintenanceCostsGroupModel());
    const [productionCostsData, setProductionCostsData] = useState<ProductionCostsGroupModel>(new ProductionCostsGroupModel());

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

    const handleOnMaintenanceCostsChange = (inNewItem: MaintenanceCostsGroupModel) => {
        //TODO
    }

    const handleOnProductionCostsChange = (inNewItem: ProductionCostsGroupModel) => {
        //TODO
    }

    return (
        <OperatingCostsAccourd
            inCentralType={props.inCentralType}
            inMaintenanceCostsData={maintenanceCostsData}
            inProductionCostsData={productionCostsData}
            inMonthlyProductionCapacity={props.inMonthlyProductionCapacity}
            inProductionLines={props.inProductionLines}
            onMaintenanceCostsChange={handleOnMaintenanceCostsChange}
            onProductionCostsChange={handleOnProductionCostsChange}
        />
    );
}

export default OperatingCostsForm;