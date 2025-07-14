// import { useState } from "react";
// import ComputerFormLeftTop from "./ComputerFormLeftTop";
// import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
// import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";
// import RawMaterialsForm from "@/components/business/Raw_Materials/RawMaterialsForm";
// import ComputerActionIdEnum from "@/logic/enums/ComputerActionIdEnum";
// import MixingCenterSettingsModel from "@/logic/models/common/MixingCenterSettingsModel";
// import RawMaterialModel from "@/logic/models/RawMaterialModel";

// interface ComputerFormLeftProps {
//     inMixingCenterSettings: MixingCenterSettingsModel;
//     inRawMaterial: RawMaterialModel;

//     onMixingCenterSettingsChange: (inNewData: MixingCenterSettingsModel) => void;
//     onRawMaterialChange: (inNewData: RawMaterialModel) => void;

//     // setMixingCenterConfigLoad: (inStatus: boolean) => void;
//     // setRawMaterialsLoad: (inStatus: boolean) => void;
// }

// const ComputerFormLeft = (props: ComputerFormLeftProps) => {
//     // const [selectedCentralType, setSelectedCentralType] = useState(CentralTypeIdEnum.Manual);
//     // const [selectedPopulationType, setSelectedPopulationType] = useState(PopulationTypeIdEnum.Adulto);


//     return (
//         <>
//             <div>
//                 <ComputerFormLeftTop
//                     inData={props.inMixingCenterSettings}
//                     onChange={props.onMixingCenterSettingsChange}
//                 // inCentralType={selectedCentralType}
//                 // onSetLoading={props.setMixingCenterConfigLoad}
//                 // onPopulationTypeChange={setSelectedPopulationType}
//                 // onCentralTypeChange={setSelectedCentralType}
//                 />
//             </div>
//             <div>
//                 <RawMaterialsForm
//                     inData={props.inRawMaterial}
//                     onChange={props.onRawMaterialChange}

//                 // inCentralType={selectedCentralType}
//                 // inPopulationType={selectedPopulationType}
//                 // onSetLoading={props.setRawMaterialsLoad}
//                 />
//             </div>
//         </>
//     );
// }

// export default ComputerFormLeft;