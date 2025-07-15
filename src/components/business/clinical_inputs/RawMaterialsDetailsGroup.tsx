// import RawMaterialGroupModel from "@/logic/models/RawMaterialGroupModel";
// import ClinicalInputCategoryEnumId from "@/logic/enums/ClinicalInputCategoryEnumId";
// import ClinicaInputRowModel from "@/logic/models/row_item/ClinicaInputRowModel";
// import RawMaterialsDetailsHeader from "./RawMaterialsDetailsHeader";
// import RawMaterialsDetailsInputs from "./RawMaterialsDetailsInputs";

// interface RawMaterialsDetailGroupProps {
//     inData: RawMaterialGroupModel;
//     inShowPresentation: boolean;
//     inCategory: ClinicalInputCategoryEnumId;
//     onClinicaInputChange: (inName: string, inNewItem: ClinicaInputRowModel) => void;
// }

// const RawMaterialsDetailGroup = (props: RawMaterialsDetailGroupProps) => {

//     return (
//         <>
//             <div className="flex flex-col gap-2">
//                 <RawMaterialsDetailsHeader
//                     inShowPresentation={props.inShowPresentation}
//                 />
//                 <RawMaterialsDetailsInputs
//                     inShowPresentation={props.inShowPresentation}
//                     inData={props.inData}
//                     inCategory={props.inCategory}
//                     onClinicaInputChange={props.onClinicaInputChange}
//                 />
//             </div>
//         </>
//     );
// }

// export default RawMaterialsDetailGroup;