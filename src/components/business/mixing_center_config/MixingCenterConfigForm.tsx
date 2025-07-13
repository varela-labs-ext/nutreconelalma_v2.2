// import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";

// import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
// import { useContext, useEffect, useRef, useState } from "react";
// import { isValidNumber } from "@/utils/validators";

// import { buildKeyName } from "@/logic/common/functions";
// import DataService from "@/logic/services/DataService";
// import CalculadoraStarter from "@/logic/starters/CalculadoraStarter";
// import MixingCenterSettingsModel from "@/logic/models/common/MixingCenterSettingsModel";
// import MixingCenterLeftSide from "./MixingCenterLeftSide";
// import MixingCenterRightSide from "./MixingCenterRightSide";
// import ComputerActionIdEnum from "@/logic/enums/ComputerActionIdEnum";

// interface MixingCenterConfigFormProps {
//     inData: MixingCenterSettingsModel;
//     // onSetLoading: (inStatus: boolean) => void;
//     onChange: (inNewData: MixingCenterSettingsModel) => void;

//     // onPopulationTypeChange: (newValue: PopulationTypeIdEnum) => void;
//     // onNotifyChange: () => void; // Callback para notificar cambios al padre // PENDIENTE DE IMPLEMENTAR
// }

// const MixingCenterConfigForm = (props: MixingCenterConfigFormProps) => {
//     // const [props.inData, setInternalData] = useState<MixingCenterSettingsModel | null>(null);
//     // Esto es un truco por el momento.


//     const [dataLoaded, setDataLoaded] = useState(false);
//     // const loadingContext = useContext(LoadingContext);
//     const debounceRef = useRef<number | null>(null); // Ref para manejar el debounce
//     const [percentageErrors, setPercentageErrors] = useState({
//         percentPerAdult: false,
//         percentPerPediatric: false,
//         percentPerNeonatal: false
//     });

//     useEffect(() => {
//         //
//     }, []);

//     // ESTO ES OTRO TRUCO, SE DEBE ELIMINAR Y MODIFICAR UNA VEZ QUE LOS METODOS DE DB SE HAYAN REMOVIDO
//     const setInternalData = (inData: MixingCenterSettingsModel) => {
//         props.onChange(inData);
//     }

//     // // Cargar al montar
//     // useEffect(() => {
//     //     console.log("Running useEffect [] - Cargar al montar...");
//     //     loadDataFromDb();
//     // }, []);

//     // // useEffect(() => {
//     // //     console.log("Running useEffect [props.inCentralType] - al cambiar el props");
//     // //     setNewCentralType();
//     // // }, [props.inCentralType]);

//     // // Autosave cuando cambia
//     // useEffect(() => {
//     //     console.log("Running useEffect [props.inData] - cuando cambian los datos internos. ***");
//     //     requestSaveData();
//     // }, [props.inData]);

//     const loadDataFromDb = async (): Promise<void> => {
//         try {
//             let gatheredData: MixingCenterSettingsModel | null = null;

//             // props.onSetLoading(true);

//             const mainKey = buildKeyName("current", CentralTypeIdEnum.Manual, PopulationTypeIdEnum.Adulto);
//             console.log("Buscando central config con clave:", mainKey);

//             gatheredData = await DataService.getMixingCenterSettingsData(mainKey);

//             if (!gatheredData) {
//                 console.log("No se encontró 'central config' en la base de datos, inicializando con valores por defecto.");
//                 gatheredData = CalculadoraStarter.getInstance().buildCentralConfigModel();
//             }

//             const updatedGatheredData = {
//                 ...gatheredData,
//                 // centralType: props.inCentralType
//             };

//             setInternalData(updatedGatheredData);
//             setDataLoaded(true);
//         }
//         catch (error) {
//             console.error("Error al cargar la materia prima desde la base de datos:", error);
//         } finally {
//             // props.onSetLoading(false);
//             console.log("***** MixingCenter data loaded... *****");
//         }
//     }

//     const saveDataInDb = async (inData: MixingCenterSettingsModel): Promise<void> => {
//         try {
//             // loadingContext.setLoading(true); // activa el contexto de carga

//             if (props.inData) {
//                 const mainKey = buildKeyName("current", CentralTypeIdEnum.Manual, PopulationTypeIdEnum.Adulto);
//                 await DataService.saveMixingCenterSettingsData(mainKey, inData);
//             } else {
//                 console.error("Error: props.inData is null when trying to save data.");
//             }

//             // console.log("Materia prima guardada correctamente. Clave:", mainKey);
//         } catch (error) {
//             console.error("Error al guardar la materia prima en la base de datos:", error);
//         } finally {
//             console.log("======= MixingCenterConfigForm Salvando datos =======");
//             // loadingContext.setLoading(false); // desactiva el contexto de carga
//         }
//     }

//     // const requestSaveData = (): void => {
//     //     if (!dataLoaded || props.inData === null) {
//     //         console.log("*** No hay datos cargados o props.inData es null ***");
//     //         console.log(`"dataLoaded" flag: ${dataLoaded}, props.inData: ${props.inData}`);
//     //         return;
//     //     }

//     //     if (debounceRef.current !== null) {
//     //         clearTimeout(debounceRef.current);
//     //     }

//     //     debounceRef.current = setTimeout(() => {
//     //         saveDataInDb(props.inData);
//     //     }, 100);
//     // }

//     // const setNewCentralType = (): void => {
//     //     if (dataLoaded && props.inData !== null && props.inCentralType !== props.inData.centralType) {
//     //         console.log(`Central type changed: ${props.inCentralType}`);
//     //         const newData = {
//     //             ...props.inData,
//     //             centralType: props.inCentralType
//     //         };
//     //         setInternalData(newData);
//     //     }
//     // }

//     // const validatePercentages = (field: "percentPerAdult" | "percentPerPediatric" | "percentPerNeonatal", inData: MixingCenterSettingsModel): void => {
//     //     if (inData) {
//     //         const totalPercent = inData.percentPerAdult + inData.percentPerPediatric + inData.percentPerNeonatal;
//     //         const newErrors = {
//     //             percentPerAdult: false,
//     //             percentPerPediatric: false,
//     //             percentPerNeonatal: false
//     //         };

//     //         if (totalPercent !== 100) {
//     //             console.error("Error: The total percentage of nutrition types must equal 100%. Current total: ", totalPercent);
//     //             newErrors[field] = true;
//     //             setPercentageErrors(newErrors);
//     //         } else {
//     //             setPercentageErrors(newErrors);
//     //         }
//     //     } else {
//     //         console.error("Error: props.inData is null when trying to validate percentages.");
//     //     }
//     // }

//     // const onPopulationTypeChange = (newPopulationType: PopulationTypeIdEnum): void => {
//     //     if (props.inData) {
//     //         const newData = {
//     //             ...props.inData,
//     //             populationType: newPopulationType
//     //         };
//     //         // props.onPopulationTypeChange(newPopulationType);
//     //         setInternalData(newData);
//     //     } else {
//     //         console.error("Error: props.inData is null when trying to change population type.");
//     //     }
//     // }

//     // const onProductionLinesChange = (newProductionLines: number): void => {
//     //     if (props.inData && isValidNumber(newProductionLines)) {
//     //         const newData = {
//     //             ...props.inData,
//     //             productionLines: newProductionLines
//     //         };
//     //         setInternalData(newData);
//     //     } else {
//     //         console.error("Error: props.inData is null when trying to change production lines.");
//     //     }
//     // }

//     // const onProductionPerDayChange = (newProductionPerDay: number): void => {
//     //     if (props.inData && isValidNumber(newProductionPerDay)) {
//     //         const newData = {
//     //             ...props.inData,
//     //             productionPerDay: newProductionPerDay
//     //         };
//     //         setInternalData(newData);
//     //     } else {
//     //         console.error("Error: props.inData is null when trying to change production per day.");
//     //     }
//     // }

//     // const onPercentPerAdultChange = (newPercentAdult: number): void => {
//     //     if (props.inData && isValidNumber(newPercentAdult)) {
//     //         const newData = {
//     //             ...props.inData,
//     //             percentPerAdult: newPercentAdult
//     //         };
//     //         validatePercentages("percentPerAdult", newData);
//     //         setInternalData(newData);
//     //     } else {
//     //         console.error("Error: props.inData is null when trying to change percent per adult.");
//     //     }
//     // }

//     // const onPercentPerPediatricChange = (newPercentPediatric: number): void => {
//     //     if (props.inData && isValidNumber(newPercentPediatric)) {
//     //         const newData = {
//     //             ...props.inData,
//     //             percentPerPediatric: newPercentPediatric
//     //         };
//     //         validatePercentages("percentPerPediatric", newData);
//     //         setInternalData(newData);
//     //     } else {
//     //         console.error("Error: props.inData is null when trying to change percent per pediatric.");
//     //     }
//     // }

//     // const onPercentPerNeonatalChange = (newPercentNeonatal: number): void => {
//     //     if (props.inData && isValidNumber(newPercentNeonatal)) {
//     //         const newData = {
//     //             ...props.inData,
//     //             percentPerNeonatal: newPercentNeonatal
//     //         };

//     //         validatePercentages("percentPerNeonatal", newData);

//     //         setInternalData(newData);
//     //     } else {
//     //         console.error("Error: props.inData is null when trying to change percent per neonatal.");
//     //     }
//     // }

//     return (
//         <div className="w-full">
//             <h2 className="text-xl font-semibold text-green-600 mb-4">Ingreso de datos</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {/* Columna A */}
//                 <MixingCenterLeftSide
//                     inPopulationType={props.inData?.populationType || PopulationTypeIdEnum.Adulto}
//                     inProductionLines={props.inData?.productionLines || 0}
//                     inProductionPerDay={props.inData?.productionPerDay || 0}
//                     onPopulationTypeChange={onPopulationTypeChange}
//                     onProductionLinesChange={onProductionLinesChange}
//                     onProductionPerDayChange={onProductionPerDayChange}
//                 />

//                 {/* Columna B */}
//                 <MixingCenterRightSide
//                     inPercentPerAdult={props.inData?.percentPerAdult || 0}
//                     inPercentPerPediatric={props.inData?.percentPerPediatric || 0}
//                     inPercentPerNeonatal={props.inData?.percentPerNeonatal || 0}
//                     errorOnPercentPerAdult={percentageErrors.percentPerAdult}
//                     errorOnPercentPerPediatric={percentageErrors.percentPerPediatric}
//                     errorOnPercentPerNeonatal={percentageErrors.percentPerNeonatal}
//                     onPercentPerAdultChange={onPercentPerAdultChange}
//                     onPercentPerPediatricChange={onPercentPerPediatricChange}
//                     onPercentPerNeonatalChange={onPercentPerNeonatalChange}
//                 />
//             </div>
//         </div>
//     );
// };

// export default MixingCenterConfigForm;