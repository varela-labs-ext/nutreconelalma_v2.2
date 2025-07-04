// import { useState } from "react";
// import InputNumberField from "../common/InputNumberField";
// import ReadOnlyNumberField from "../common/ReadOnlyNumberField";


// interface MateriaPrimaSummaryProps {
//     cantidad: number;
//     total: number;
//     totalPorMl: number;
//     // mostrarDetalles: boolean;
//     onCantidadChange: (newValue: number) => void;
//     onMostrarDetallesChange: (newValue: boolean) => void;
// }

// const MateriaPrimaSummary = (props: MateriaPrimaSummaryProps) => {
//     const [mostrarDetallesLocal, setMostrarDetalles] = useState<boolean>(true);

//     console.log("CostosMateriaPrimaSummary.");
//     console.log("Props:");
//     console.log(props);
//     console.log("----------");

//     //React.FC<MateriaPrimaSummaryProps> = (props) => {

//     // Maneja solamente el cambio en la propiedad "cantidad"
//     // const handleCantidadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     //     const nuevaCantidad = parseFloat(e.target.value);
//     //     if (!isNaN(nuevaCantidad)) {
//     //         props.onCantidadChange(nuevaCantidad);
//     //     }
//     // };

//     const handleCantidadChange = (name: string, nuevaCantidad: number) => {
//         // const nuevaCantidad = parseFloat(e.target.value);

//         if (!isNaN(nuevaCantidad)) {
//             props.onCantidadChange(nuevaCantidad);
//         }
//     };

//     const handleMostrarDetallesChange = () => {
//         const value: boolean = !mostrarDetallesLocal;
//         setMostrarDetalles(value);
//     }

//     const getToggleButtonClass = (): string => {
//         const base: string = "w-10 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out";
//         return `${base} ${mostrarDetallesLocal ? "bg-blue-500" : "bg-gray-300"}`;
//     }

//     const getToggleButtonDivClass = (): string => {
//         const base: string = "bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out";
//         return `${base} ${mostrarDetallesLocal ? "translate-x-4" : "translate-x-0"}`;
//     }

//     return (
//         <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:items-center bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm transition-shadow w-full  ml-auto gap-4">
//             {/* Botón Mostrar Detalles (Toggle) */}
//             <div className="flex flex-col sm:flex-row sm:items-center gap-4">
//                 {/* ✅ Toggle principal */}
//                 <div className="flex items-center gap-2">
//                     <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Mostrar detalles</span>
//                     <button onClick={handleMostrarDetallesChange} className={getToggleButtonClass()}>
//                         <div className={getToggleButtonDivClass()} />
//                     </button>
//                 </div>
//             </div>

//             {/* Campos de resumen */}
//             <div className="flex flex-col gap-4 w-full sm:w-auto">
//                 <InputNumberField
//                     label="Cantidad"
//                     name="cantidad"
//                     value={props.cantidad}
//                     onChange={handleCantidadChange}
//                     labelPosition="left"
//                     labelAlways={true}
//                 />
//                 <ReadOnlyNumberField label="Total" name="total" value={props.total} labelPosition="left" labelAlways={true} />
//                 <ReadOnlyNumberField label="Total por mL" name="totalPorMl" value={props.totalPorMl} labelPosition="left" labelAlways={true} />
//             </div>
//         </div>
//     );
// };

// export default MateriaPrimaSummary;