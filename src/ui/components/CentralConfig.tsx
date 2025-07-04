
// import { useContext, useEffect, useState } from "react";
// import InputNumberField from "../common/InputNumberField";
// import InputPercentageField from "../common/InputPercentageField";
// import TipoPoblacionField from '../common/TipoPoblacionField';
// import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";
// import ProduccionSettingsModel from "@/logic/models/common/ProduccionSettingsModel";
// import CalculadoraStarter from "@/logic/starters/CalculadoraStarter";
// import { LoadingContext } from "../context/LoadingContext";
// import DataService from "@/logic/services/DataService";
// import { buildKeyName } from "@/logic/common/functions";
// import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";

// interface CentralConfigProps {
//     inTipoCentral: CentralTypeIdEnum;
//     // item: ProduccionSettingsModel;
//     // onChange: (updatedItem: ProduccionSettingsModel) => void;
//     onNotifyChange: () => void;
// }

// const CentralConfig = (props: CentralConfigProps) => {
//     const [erroresPorcentaje, setErroresPorcentaje] = useState({
//         porcentajeAdulto: "",
//         porcentajePediatrico: "",
//         porcentajeNeonatal: ""
//     });

//     const [internalData, setInternalData] = useState<ProduccionSettingsModel | null>(null);
//     const [tipoCentral, setTipoCentral] = useState<CentralTypeIdEnum>(props.inTipoCentral);
//     const [tipoPoblacion, setTipoPoblacion] = useState<PopulationTypeIdEnum>(PopulationTypeIdEnum.Adulto);
//     const [dataLoaded, setDataLoaded] = useState(false);
//     const loadingContext = useContext(LoadingContext);


//     const crearCentralSettingsInicial = (): ProduccionSettingsModel => {
//         const data = new ProduccionSettingsModel();
//         CalculadoraStarter.getInstance().iniciarIngresoDatos(data, tipoCentral, tipoPoblacion);
//         return data;
//     }

//     const cargarSettings = async (): Promise<void> => {
//         try {
//             // setIsLoading(true); // comienza carga
//             loadingContext.setLoading(true); // activa el contexto de carga

//             const mainKey = buildKeyName("current", tipoCentral, tipoPoblacion);
//             console.log("Buscando central config con clave:", mainKey);

//             let datos = await DataService.getProduccionSettings(mainKey);

//             if (!datos) {
//                 console.log("No se encontró 'central config' en la base de datos, inicializando con valores por defecto.");
//                 datos = crearCentralSettingsInicial();
//                 console.log(datos);
//             }

//             setInternalData(datos);
//             setDataLoaded(true);
//         }
//         catch (error) {
//             console.error("Error al cargar la materia prima desde la base de datos:", error);
//         } finally {
//             // setIsLoading(false); // termina carga
//             loadingContext.setLoading(false);
//         }
//     }

//     const guardarCentralSettings = async (data: ProduccionSettingsModel): Promise<void> => {
//         try {
//             // loadingContext.setLoading(true); // activa el contexto de carga

//             const mainKey = buildKeyName("current", tipoCentral, tipoPoblacion);

//             await DataService.setProduccionSettings(mainKey, data);

//             // console.log("Materia prima guardada correctamente. Clave:", mainKey);
//         } catch (error) {
//             console.error("Error al guardar la materia prima en la base de datos:", error);
//         } finally {
//             // loadingContext.setLoading(false); // desactiva el contexto de carga
//         }
//     }

//     // Cargar al montar
//     useEffect(() => {
//         cargarSettings();
//         console.log("CentralConfig: Cargando configuración de producción");
//     }, []);

//     useEffect(() => {
//         if (props.inTipoCentral !== tipoCentral) {
//             setTipoCentral(props.inTipoCentral);
//         }
//     }, [props.inTipoCentral]);

//     useEffect(() => {
//         // if (debounceRef.current !== null) {
//         //     clearTimeout(debounceRef.current);
//         // }

//         if (internalData) {
//             cargarSettings();
//             console.log("CentralConfig: useEffect para cargar configuración de producción al cambiar tipo central o población.");
//         }
//     }, [tipoCentral, tipoPoblacion]);

//     // Autosave cuando cambia
//     useEffect(() => {
//         if (!dataLoaded || internalData === null) {
//             console.log("CentralConfig: No hay datos cargados o internalData es null, no se guardará nada.");
//             return;
//         }

//         console.log("CentralConfig: internalData ha cambiado, programando guardado...");

//         // if (debounceRef.current !== null) {
//         //     clearTimeout(debounceRef.current);
//         // }

//         // debounceRef.current = setTimeout(() => {
//         guardarCentralSettings(internalData);
//         // }, 100);
//     }, [internalData]);



//     const handleTipoPoblacionOnChange = (selected: PopulationTypeIdEnum) => {
//         console.log(selected);

//         if (tipoPoblacion === selected) {
//             return;
//         }

//         // const output: ProduccionSettingsModel = {
//         //     ...props.item,
//         //     tipoPoblacion: selected
//         // }

//         // props.onChange(output);
//     }

//     const handleProduccionChange = (field: "lineasProduccion" | "produccionDia", value: number) => {
//         if (isNaN(value)) return;

//         if (internalData === null) {
//             console.error("Internal data is null, cannot handle production change.");
//             return;
//         }

//         if (internalData[field] === value) return;

//         const output: ProduccionSettingsModel = {
//             ...internalData,
//             [field]: value
//         }

//         setInternalData(output);
//     }

//     const handlePorcentajeChange = (
//         field: "porcentajeAdulto" | "porcentajePediatrico" | "porcentajeNeonatal",
//         value: number
//     ) => {
//         if (isNaN(value)) return;
//         if (internalData === null) {
//             console.error("Internal data is null, cannot handle production change.");
//             return;
//         }

//         if (internalData[field] === value) return;

//         const output: ProduccionSettingsModel = {
//             ...internalData,
//             [field]: value
//         }

//         const total = output.porcentajeAdulto + output.porcentajePediatrico + output.porcentajeNeonatal;

//         const nuevosErrores = {
//             porcentajeAdulto: "",
//             porcentajePediatrico: "",
//             porcentajeNeonatal: ""
//         };

//         // Este codigo evitar digitar los valores
//         if (total !== 100) {
//             nuevosErrores[field] = "La suma total debe ser 100%";
//             setErroresPorcentaje(nuevosErrores);
//             // return;
//         }

//         setErroresPorcentaje(nuevosErrores);
//         // props.onChange(output);
//         setInternalData(output);
//     }

//     return (
//         <div className="w-full">
//             <h2 className="text-xl font-semibold text-green-600 mb-4">Ingreso de datos</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {/* Columna A */}
//                 <div className="flex flex-col gap-4">
//                     <TipoPoblacionField
//                         tipo={internalData ? internalData.tipoPoblacion : PopulationTypeIdEnum.Adulto}
//                         labelAlways={true}
//                         onChange={handleTipoPoblacionOnChange}
//                     />

//                     <InputNumberField
//                         label="Líneas de producción"
//                         name="lineasProduccion"
//                         value={internalData ? internalData.lineasProduccion : 0}
//                         labelAlways={true}
//                         // onChange={(e) => handleProduccionChange("lineasProduccion", parseInt(e.target.value))}
//                         //onChange={handleProduccionChange}
//                         onChange={(name, value) => handleProduccionChange("lineasProduccion", value)}
//                     />

//                     <InputNumberField
//                         label="Producción por día"
//                         name="produccionDia"
//                         value={internalData ? internalData.produccionDia : 0}
//                         labelAlways={true}
//                         // onChange={(e) => handleProduccionChange("produccionDia", parseInt(e.target.value))}
//                         onChange={(name, value) => handleProduccionChange("produccionDia", value)}
//                     />
//                 </div>

//                 {/* Columna B */}
//                 <div className="flex flex-col gap-4">
//                     <div>
//                         <InputPercentageField
//                             label="Porcentaje Adulto"
//                             name="porcentajeAdulto"
//                             value={internalData ? internalData.porcentajeAdulto : 0}
//                             labelAlways={true}
//                             hayError={(erroresPorcentaje.porcentajeAdulto !== "") ? true : false}
//                             onChange={(e) => handlePorcentajeChange("porcentajeAdulto", parseInt(e.target.value))}
//                         />
//                         {erroresPorcentaje.porcentajeAdulto && (
//                             <p className="text-sm font-bold text-orange-600 mt-1 text-right w-full block">{erroresPorcentaje.porcentajeAdulto}</p>
//                         )}
//                     </div>

//                     <div>
//                         <InputPercentageField
//                             label="Porcentaje Pediátrico"
//                             name="porcentajePediatrico"
//                             value={internalData ? internalData.porcentajePediatrico : 0}
//                             labelAlways={true}
//                             hayError={(erroresPorcentaje.porcentajePediatrico !== "") ? true : false}
//                             onChange={(e) => handlePorcentajeChange("porcentajePediatrico", parseInt(e.target.value))}
//                         />
//                         {erroresPorcentaje.porcentajePediatrico && (
//                             <p className="text-sm font-bold text-orange-600 mt-1 text-right w-full block">{erroresPorcentaje.porcentajePediatrico}</p>
//                         )}
//                     </div>

//                     <div>
//                         <InputPercentageField
//                             label="Porcentaje Neonatal"
//                             name="porcentajeNeonatal"
//                             value={internalData ? internalData.porcentajeNeonatal : 0}
//                             labelAlways={true}
//                             hayError={(erroresPorcentaje.porcentajeNeonatal !== "") ? true : false}
//                             onChange={(e) => handlePorcentajeChange("porcentajeNeonatal", parseInt(e.target.value))}
//                         />
//                         {erroresPorcentaje.porcentajeNeonatal && (
//                             <p className="text-sm font-bold text-orange-600 mt-1 text-right w-full block">{erroresPorcentaje.porcentajeNeonatal}</p>
//                         )}
//                     </div>

//                     <p className="text-sm text-purple-600 py-4">
//                         Del total de producción diaria indique el % entre adulto, pediátrica y neonatal, asegúrese que la suma de estos sea el 100%
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CentralConfig;