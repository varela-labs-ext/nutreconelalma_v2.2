// import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
// import MaterialsNSuppliesCostsDetails from "../operating_resources_details/MaterialsNSuppliesCostsDetails";
// import { useState } from "react";
// import AutomatedEquipmentGroupModel from "@/logic/models/operating_resources/AutomatedEquipmentGroupModel";
// import HygieneAndCleaningGroupModel from "@/logic/models/operating_resources/HygieneAndCleaningGroupModel";
// import PersonalProtectionModel from "@/logic/models/operating_resources/PersonalProtectionGroupModel";
// import SterileWorkEquipmentGroupModel from "@/logic/models/operating_resources/SterileWorkEquipmentGroupModel";


// interface MaterialsNSuppliesCostsFormProps {
//     inCentralType: CentralTypeIdEnum;
// }

// //ESTE DEBE GESTIONAR POR CUENTA PROPIA LA CARGA DE LOS DATOS DESDE LA DB

// const MaterialsNSuppliesCostsForm = (props: MaterialsNSuppliesCostsFormProps) => {
//     const [automatedEquipmentData, setAutomatedEquipmentData] = useState<AutomatedEquipmentGroupModel>(new AutomatedEquipmentGroupModel());
//     const [hygieneAndCleaningData, setHygieneAndCleaningData] = useState<HygieneAndCleaningGroupModel>(new HygieneAndCleaningGroupModel());
//     const [personalProtectionData, setPersonalProtectionData] = useState<PersonalProtectionModel>(new PersonalProtectionModel());
//     const [sterileWorkEquipmentData, setSterileWorkEquipmentData] = useState<SterileWorkEquipmentGroupModel>(new SterileWorkEquipmentGroupModel());


//     const handleOnAutomatedEquipmentChange = (inNewItem: AutomatedEquipmentGroupModel) => {

//     }

//     const handleOnHygieneAndCleaningChange = (inNewItem: HygieneAndCleaningGroupModel) => {

//     }

//     const handleOnPersonalProtectionChange = (inNewItem: PersonalProtectionModel) => {

//     }

//     const handleOnSterileWorkEquipmentChange = (inNewItem: SterileWorkEquipmentGroupModel) => {

//     }

//     return (
//         <MaterialsNSuppliesCostsDetails
//             inCentralType={props.inCentralType}
//             inAutomatedEquipmentData={automatedEquipmentData}
//             inHygieneAndCleaningData={hygieneAndCleaningData}
//             inPersonalProtectionData={personalProtectionData}
//             inSterileWorkEquipmentData={sterileWorkEquipmentData}
//             onAutomatedEquipmentChange={handleOnAutomatedEquipmentChange}
//             onHygieneAndCleaningChange={handleOnHygieneAndCleaningChange}
//             onPersonalProtectionChange={handleOnPersonalProtectionChange}
//             onSterileWorkEquipmentChange={handleOnSterileWorkEquipmentChange}
//         />
//     );
// }

// export default MaterialsNSuppliesCostsForm;