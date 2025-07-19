// import {
//     useState,
//     ReactNode,
//     cloneElement,
//     ReactElement,
//     ChangeEvent,
// } from "react";

// export type PanelStatus = "none" | "ok" | "warning" | "error";

// export type PanelTitle = {
//     label: string;
//     icon?: ReactNode;
//     status?: PanelStatus;
// };

// type PanelTabsViewProps = {
//     titles: PanelTitle[];
//     children: ReactNode[];
// };

// const statusColorMap: Record<Exclude<PanelStatus, "none">, string> = {
//     ok: "bg-green-500",
//     warning: "bg-yellow-400",
//     error: "bg-red-500",
// };

// const PanelTabsView = (props: PanelTabsViewProps) => {
//     const [selectedIndex, setSelectedIndex] = useState(0);
//     const activeTab = props.titles[selectedIndex];

//     const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
//         setSelectedIndex(Number(e.target.value));
//     };

//     return (
//         <div className="space-y-4">
//             {/* Versión móvil: select dropdown */}
//             <div className="block sm:hidden">
//                 <select
//                     value={selectedIndex}
//                     onChange={handleSelectChange}
//                     className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
//                 >
//                     {props.titles.map((title, index) => (
//                         <option key={index} value={index}>
//                             {title.label}
//                         </option>
//                     ))}
//                 </select>

//                 {/* Divider + ícono en móviles */}
//                 <div className="relative border-t border-gray-300 mt-4 pt-2 pb-1">
//                     {activeTab.icon && (
//                         <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-2">
//                             <span className="text-gray-600">
//                                 {cloneElement(activeTab.icon as ReactElement, { size: 16 })}
//                             </span>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Versión escritorio: tabs clásicos */}
//             <div className="hidden sm:flex flex-col space-y-1 mt-4">
//                 <div className="pt-4 pb-4">
//                     <div className="flex space-x-2 h-[44px] items-center">
//                         {props.titles.map((title, index) => {
//                             const isActive = selectedIndex === index;
//                             const statusColor =
//                                 title.status && title.status !== "none"
//                                     ? statusColorMap[title.status]
//                                     : null;

//                             return (
//                                 <button
//                                     key={index}
//                                     onClick={() => setSelectedIndex(index)}
//                                     className={`relative flex items-center gap-2 px-4 py-2 h-full rounded-md border text-sm font-medium transition
//                     ${isActive
//                                             ? "bg-purple-600 text-white border-purple-600"
//                                             : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`}
//                                 >
//                                     {title.icon && (
//                                         <span className="text-base">
//                                             {cloneElement(title.icon as ReactElement, { size: 16 })}
//                                         </span>
//                                     )}
//                                     <span>{title.label}</span>
//                                     {statusColor && (
//                                         <span
//                                             className={`absolute -top-1 -right-1 h-2 w-2 rounded-full ${statusColor}`}
//                                         />
//                                     )}
//                                 </button>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 {/* Divider + ícono */}
//                 <div className="relative border-t border-gray-300 pb-2">
//                     {activeTab.icon && (
//                         <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-2">
//                             <span className="text-gray-600">
//                                 {cloneElement(activeTab.icon as ReactElement, { size: 16 })}
//                             </span>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Panel de contenido */}
//             <div
//                 key={selectedIndex}
//                 className="animate-fade-slide transition duration-300 ease-in-out"
//             >
//                 {props.children[selectedIndex]}
//             </div>
//         </div>
//     );
// };

// export default PanelTabsView;
