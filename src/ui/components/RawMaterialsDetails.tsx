import RawMaterialsModel from "@/logic/models/materiaPrima/RawMaterialsModel";
import RawMaterialsDetailsHeader from "./RawMaterialsDetailsHeader";
import RawMaterialsDetailsInputs from "./RawMaterialsDetailsInputs";
import { useEffect, useState } from "react";
import ClinicaInputModel from "@/logic/models/common/ClinicaInputModel";
import CalculationService from "@/logic/services/CalculationService";

interface RawMaterialsDetailsProps {
    inData: RawMaterialsModel;
    inShowDetails: boolean;
    onChange: (inNewItem: RawMaterialsModel) => void;
}

const RawMaterialsDetails = (props: RawMaterialsDetailsProps) => {
    const [internalData, setInternalData] = useState<RawMaterialsModel>(props.inData);

    useEffect(() => {
        setInternalData(props.inData);
    }, [props.inData]);

    // REGLA DE ORO, NUNCA LLAMAR AL EVENTO DEL PROPS DESDE DENTRO DEL USEFFECT, ya que esto puede generar un bucle infinito de actualizaciones.

    const handleClinicaInputChange = (inName: string, inNewItem: ClinicaInputModel) => {

        // Actualizar el estado interno con el nuevo item
        const updatedData: RawMaterialsModel = {
            ...internalData,
            [inName]: inNewItem
        };

        CalculationService.ComputeRawMaterials(updatedData);
        setInternalData(updatedData);
        props.onChange(updatedData);
    }

    return (
        <div className="flex flex-col gap-2">
            <RawMaterialsDetailsHeader
                inShowDetails={props.inShowDetails}
            />
            <RawMaterialsDetailsInputs
                inShowDetails={props.inShowDetails}
                inData={internalData}
                onClinicaInputChange={handleClinicaInputChange}
            />
        </div>
    );
}

export default RawMaterialsDetails;