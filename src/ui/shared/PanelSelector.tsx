// import { useEffect, useState, ReactNode, ReactElement } from "react";

// type PanelStatus = "none" | "ok" | "warning" | "error";

// type PanelTitle = {
//     label: string;
//     icon?: ReactNode;
//     status?: PanelStatus;
// };

// type PanelSelectorProps = {
//     titles: PanelTitle[];
//     children: ReactNode;
//     onSelectPanel?: (index: number) => void;
// };

// const statusColorMap: Record<Exclude<PanelStatus, "none">, string> = {
//     ok: "bg-green-500",
//     warning: "bg-yellow-400",
//     error: "bg-red-500",
// };

// const PanelSelector = (props: PanelSelectorProps) => {
//     const [selectedIndex, setSelectedIndex] = useState(0);

//     const isMultipleChildren = Array.isArray(props.children);

//     const handleSelect = (index: number) => {
//         setSelectedIndex(index);
//         if (!isMultipleChildren && props.onSelectPanel) {
//             props.onSelectPanel(index);
//         }
//     };

//     useEffect(() => {
//         // Llama al padre en la primera carga si solo hay un hijo
//         if (!isMultipleChildren && props.onSelectPanel) {
//             props.onSelectPanel(selectedIndex);
//         }
//     }, [isMultipleChildren]);

//     return (
//         <div className="space-y-4">
//             <div className="flex space-x-2">
//                 {props.titles.map((title, index) => {
//                     const isActive = selectedIndex === index;
//                     const statusColor =
//                         title.status && title.status !== "none"
//                             ? statusColorMap[title.status]
//                             : null;

//                     return (
//                         <button
//                             key={index}
//                             onClick={() => handleSelect(index)}
//                             className={`relative flex items-center gap-2 px-4 py-2 rounded-md border text-sm font-medium transition
//                 ${isActive
//                                     ? "bg-purple-600 text-white border-purple-600"
//                                     : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`}
//                         >
//                             {title.icon && <span className="text-base">{title.icon}</span>}
//                             <span>{title.label}</span>

//                             {statusColor && (
//                                 <span
//                                     className={`absolute -top-1 -right-1 h-2 w-2 rounded-full ${statusColor}`}
//                                 />
//                             )}
//                         </button>
//                     );
//                 })}
//             </div>

//             {isMultipleChildren && (
//                 <div
//                     key={selectedIndex}
//                     className="animate-fade-slide transition duration-300 ease-in-out"
//                 >
//                     {(props.children as ReactNode[])[selectedIndex]}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PanelSelector;
