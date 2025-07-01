// import TipoCentralIdEnum from '@/logic/enums/TipoCentralIdEnum';
// import React, { useState } from 'react';
// import TabsResponsive from '../shared/TabsResponsive';


// interface CentralMezclasTabsProps {
//     selectedTipoCentral: TipoCentralIdEnum;
//     onTipoCentralChange: (value: TipoCentralIdEnum) => void;
//     children: React.ReactNode;
// }

// const CentralMezclasTabs = (props: CentralMezclasTabsProps) => {
//     const [selectedTipoCentral, setTipoCentral] = useState<TipoCentralIdEnum>(0);

//     const generarTitulos = (): string[] => {
//         let titulos: string[] = [
//             'Central de Mezclas Manual',
//             'Central de Mezclas Automatizada',
//             'Central de Mezclas Apex',
//             'Central de Mezclas Nutriflex'
//         ];

//         return titulos;
//     }

//     const handleOnSelectedCentralChange = (index: number) => {

//         const output: TipoCentralIdEnum = index;

//         console.log("TABS:");
//         console.log(index);
//         console.log(output);

//         setTipoCentral(index);
//         props.onTipoCentralChange(output);
//     };

//     return (
//         <div className="w-full">
//             <TabsResponsive
//                 titulos={generarTitulos()}
//                 selectedIndex={selectedTipoCentral}
//                 onTabChange={handleOnSelectedCentralChange}
//             />
//             <div className="mt-4">
//                 {props.children}
//             </div>
//         </div>
//     );
// }

// export default CentralMezclasTabs;