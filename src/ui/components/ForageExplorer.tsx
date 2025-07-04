// import { useEffect, useState } from "react";

// import { Trash, Upload } from "lucide-react";

// const ForageExplorer = () => {
//     const [keys, setKeys] = useState<string[]>([]);
//     const [selectedKey, setSelectedKey] = useState<string | null>(null);
//     const [selectedValue, setSelectedValue] = useState<string | null>(null);
//     const [showModal, setShowModal] = useState(false);
//     const [showConfirmDeleteAll, setShowConfirmDeleteAll] = useState(false);
//     const [keyToDelete, setKeyToDelete] = useState<string | null>(null);

//     const cargarClaves = async () => {
//         const allKeys = await ForageManager.getAllKeysAsync();
//         setKeys(allKeys);
//     };

//     const eliminarClave = async (clave: string) => {
//         await ForageManager.deleteAsync(clave);
//         setKeyToDelete(null);
//         await cargarClaves();
//     };

//     const eliminarTodo = async () => {
//         await ForageManager.deleteAllAsync();
//         setShowConfirmDeleteAll(false);
//         await cargarClaves();
//     };

//     const verContenidoClave = async (clave: string) => {
//         const valor = await ForageManager.getAsync(clave);
//         setSelectedKey(clave);
//         setSelectedValue(JSON.stringify(valor, null, 2));
//         setShowModal(true);
//     };

//     const manejarEventoUpload = (clave: string) => {
//         console.log("Upload disparado para:", clave);
//         // Evento vacío por ahora
//     };

//     useEffect(() => {
//         cargarClaves();
//     }, []);

//     return (
//         <div className="p-4">
//             <h2 className="text-xl font-bold mb-4">Explorador de LocalForage</h2>

//             <div className="flex justify-end mb-4">
//                 <button
//                     className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//                     onClick={() => setShowConfirmDeleteAll(true)}
//                 >
//                     Eliminar TODO
//                 </button>
//             </div>

//             {keys.length === 0 ? (
//                 <p className="text-gray-500">No hay claves almacenadas.</p>
//             ) : (
//                 <ul className="space-y-2">
//                     {keys.map((clave) => (
//                         <li
//                             key={clave}
//                             className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
//                         >
//                             {/* <span
//                                 className="flex-1 truncate cursor-pointer text-left"
//                                 onClick={() => verContenidoClave(clave)}
//                             >
//                                 {clave}
//                             </span>

//                             <div className="flex gap-2 ml-4">
//                                 <button
//                                     className="text-blue-600 hover:text-blue-800"
//                                     onClick={() => manejarEventoUpload(clave)}
//                                     title="Upload"
//                                 >
//                                     <Upload size={20} />
//                                 </button>

//                                 <button
//                                     className="text-red-600 hover:text-red-800"
//                                     onClick={() => setKeyToDelete(clave)}
//                                     title="Eliminar"
//                                 >
//                                     <Trash size={20} />
//                                 </button>
//                             </div> */}
//                         </li>
//                     ))}
//                 </ul>
//             )}

//             {/* Modal de valor */}
//             {showModal && (
//                 // <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
//                 //     <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-lg relative">
//                 //         <h3 className="text-lg font-semibold mb-2">{selectedKey}</h3>
//                 //         <pre className="bg-gray-100 p-4 rounded overflow-x-auto max-h-[400px]">
//                 //             {selectedValue}
//                 //         </pre>
//                 //         <button
//                 //             className="absolute top-2 right-2 text-gray-600 hover:text-black"
//                 //             onClick={() => setShowModal(false)}
//                 //         >
//                 //             ✖
//                 //         </button>
//                 //     </div>
//                 // </div>
//             )}

//             {/* Confirmación eliminar TODO */}
//             {showConfirmDeleteAll && (
//                 // <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
//                 //     <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg text-center">
//                 //         <h3 className="text-lg font-semibold mb-4 text-red-600">
//                 //             ¿Eliminar <u>todas</u> las claves?
//                 //         </h3>
//                 //         <div className="flex justify-center gap-4">
//                 //             <button
//                 //                 className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
//                 //                 onClick={() => setShowConfirmDeleteAll(false)}
//                 //             >
//                 //                 Cancelar
//                 //             </button>
//                 //             <button
//                 //                 className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//                 //                 onClick={eliminarTodo}
//                 //             >
//                 //                 Sí, eliminar todo
//                 //             </button>
//                 //         </div>
//                 //     </div>
//                 // </div>
//             )}

//             {/* Confirmación eliminar una clave */}
//             {keyToDelete && (
//                 // <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
//                 //     <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg text-center">
//                 //         <h3 className="text-lg font-semibold mb-4 text-red-600">
//                 //             ¿Eliminar la clave?
//                 //             <br />
//                 //             <span className="text-gray-700">{keyToDelete}</span>
//                 //         </h3>
//                 //         <div className="flex justify-center gap-4">
//                 //             <button
//                 //                 className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
//                 //                 onClick={() => setKeyToDelete(null)}
//                 //             >
//                 //                 Cancelar
//                 //             </button>
//                 //             <button
//                 //                 className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//                 //                 onClick={() => eliminarClave(keyToDelete)}
//                 //             >
//                 //                 Sí, eliminar
//                 //             </button>
//                 //         </div>
//                 //     </div>
//                 // </div>
//             )}
//         </div>
//     );
// };

// export default ForageExplorer;
