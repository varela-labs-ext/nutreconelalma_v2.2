// import BasicOperationalModel from "@/logic/models/common/BasicOperationalModel";
// import UnitCostItemModel from "@/logic/models/row_item/UnitCostItemRowModel";

// import UnitCostDetailsInputs from "./UnitCostDetailsInputs";
// import UnitCostDetailsHeaders from "./UnitCostDetailsHeaders";
// import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";


// interface UnitCostDetailsGroupProps {
//     inCentralType: CentralTypeIdEnum;
//     inData: BasicOperationalModel;
//     onInputChange: (inPropertyName: string, inNewItem: UnitCostItemModel) => void;
// }

// const UnitCostDetailsGroup = (props: UnitCostDetailsGroupProps) => {

//     return (
//         <>
//             <div className="flex flex-col gap-2">
//                 <UnitCostDetailsHeaders />
//                 <UnitCostDetailsInputs
//                     inCentralType={props.inCentralType}
//                     inData={props.inData}
//                     onInputChange={props.onInputChange}
//                 />
//             </div>
//         </>
//     );
// }

// export default UnitCostDetailsGroup;