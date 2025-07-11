import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import MaterialsNSuppliesCostsDetails from "../operating_resources_details/MaterialsNSuppliesCostsDetails";
import { useState } from "react";
import AutomatedEquipmentModel from "@/logic/models/operativos/AutomatedEquipmentModel";
import HygieneAndCleaningModel from "@/logic/models/operativos/HygieneAndCleaningModel";
import PersonalProtectionModel from "@/logic/models/operativos/PersonalProtectionModel";
import SterileWorkEquipmentModel from "@/logic/models/operativos/SterileWorkEquipmentModel";


interface MaterialsNSuppliesCostsFormProps {
    inCentralType: CentralTypeIdEnum;
}

//ESTE DEBE GESTIONAR POR CUENTA PROPIA LA CARGA DE LOS DATOS DESDE LA DB

const MaterialsNSuppliesCostsForm = (props: MaterialsNSuppliesCostsFormProps) => {
    const [automatedEquipmentData, setAutomatedEquipmentData] = useState<AutomatedEquipmentModel>(new AutomatedEquipmentModel());
    const [hygieneAndCleaningData, setHygieneAndCleaningData] = useState<HygieneAndCleaningModel>(new HygieneAndCleaningModel());
    const [personalProtectionData, setPersonalProtectionData] = useState<PersonalProtectionModel>(new PersonalProtectionModel());
    const [sterileWorkEquipmentData, setSterileWorkEquipmentData] = useState<SterileWorkEquipmentModel>(new SterileWorkEquipmentModel());


    const handleOnAutomatedEquipmentChange = (inNewItem: AutomatedEquipmentModel) => {

    }

    const handleOnHygieneAndCleaningChange = (inNewItem: HygieneAndCleaningModel) => {

    }

    const handleOnPersonalProtectionChange = (inNewItem: PersonalProtectionModel) => {

    }

    const handleOnSterileWorkEquipmentChange = (inNewItem: SterileWorkEquipmentModel) => {

    }

    return (
        <MaterialsNSuppliesCostsDetails
            inCentralType={props.inCentralType}
            inAutomatedEquipmentData={automatedEquipmentData}
            inHygieneAndCleaningData={hygieneAndCleaningData}
            inPersonalProtectionData={personalProtectionData}
            inSterileWorkEquipmentData={sterileWorkEquipmentData}
            onAutomatedEquipmentChange={handleOnAutomatedEquipmentChange}
            onHygieneAndCleaningChange={handleOnHygieneAndCleaningChange}
            onPersonalProtectionChange={handleOnPersonalProtectionChange}
            onSterileWorkEquipmentChange={handleOnSterileWorkEquipmentChange}
        />
    );
}

export default MaterialsNSuppliesCostsForm;