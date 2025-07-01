// import TipoCentralIdEnum from "@/logic/enums/TipoCentralIdEnum";
// import TabsResponsive from "../shared/TabsResponsive";
// import { useState } from "react";


// interface CentralDeMezclasTabsProps {
//     tipoCentral: TipoCentralIdEnum;
//     onChange: (value: TipoCentralIdEnum) => void;
//     children: React.ReactNode;
// }

// const CentralDeMezclasTabs = (props: CentralDeMezclasTabsProps) => {
//     // const [selectedTipoCentral, setTipoCentral] = useState<TipoCentralIdEnum>(0);

//     const generarTitulos = (): string[] => {
//         let titulos: string[] = [
//             'Central de Mezclas Manual',
//             'Central de Mezclas Automatizada',
//             // 'Central de Mezclas Apex',
//             // 'Central de Mezclas Nutriflex'
//         ];

//         return titulos;
//     }

//     const handleOnSelectedCentralChange = (index: number) => {

//         // const output: TipoCentralIdEnum = index;

//         // console.log("TABS:");
//         // console.log(index);
//         // console.log(output);

//         // setTipoCentral(index);
//         // props.onChange(output);

//         const updateValue = Number(index);
//         const output: TipoCentralIdEnum = updateValue as TipoCentralIdEnum;
//         props.onChange(output);
//     };

//     return (
//         <div className="w-full">
//             <TabsResponsive
//                 titulos={generarTitulos()}
//                 selectedIndex={props.tipoCentral}
//                 onTabChange={handleOnSelectedCentralChange}
//             />
//             <div className="mt-4">
//                 {props.children}
//             </div>
//         </div>
//     );
// }

// export default CentralDeMezclasTabs;
