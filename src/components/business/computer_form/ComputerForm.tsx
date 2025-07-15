// import IconTab from "@/components/ui/tabs/icon_tabs/IconTab";
// import IconTabs from "@/components/ui/tabs/icon_tabs/IconTabs";
// import { LoadingContext } from "@/context/LoadingContext";
// import { useMultiActionContext } from "@/ui/context/MultiActionContext";
// import { FileText, Home } from "lucide-react";
// import { useContext, useEffect, useState } from "react";
// import ComputerFormLeft from "./ComputerFormLeft";
// import ComputerFormRight from "./ComputerFormRight";
// import MixingCenterSettingsModel from "@/logic/models/common/MixingCenterSettingsModel";
// import RawMaterialGroupModel from "@/logic/models/RawMaterialGroupModel";
// import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
// import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";
// import CalculadoraStarter from "@/logic/starters/CalculadoraStarter";
// import { COMPUTER_ACTION, FILENAME_ACTION } from "@/logic/common/constants";

// // REGLA DE ORO, NUNCA LLAMAR AL EVENTO DEL PROPS DESDE DENTRO DEL USEFFECT, ya que esto puede generar un bucle infinito de actualizaciones.

// const ComputerForm = () => {
//     const loadingContext = useContext(LoadingContext);
//     const { getAction, setAction, clearAction } = useMultiActionContext();

//     const [mixingCenterSettingsData, setMixingCenterSettingsData] = useState<MixingCenterSettingsModel | null>(null);
//     const [rawMaterialsData, setRawMaterialsData] = useState<RawMaterialGroupModel | null>(null);
//     const [activeComputerTabIndex, setActiveComputerTabIndex] = useState<number>(0);


//     const [activeMixingCentralTabIndex, setActiveMixingCentralTabIndex] = useState<number>(0);
//     // const [mixingCenterLoad, setMixingCenterLoad] = useState(false);
//     // const [rawMaterialsLoad, setRawMaterialsLoad] = useState(false);

//     const currentActionName = getAction(COMPUTER_ACTION);
//     const currentFileName = getAction(FILENAME_ACTION);

//     // Cargar al montar
//     useEffect(() => {
//         setupBrandNewComputer();
//     }, []);

//     // useEffect(() => {
//     //     // LOGICA PARA ACTIVAR EL MODO LOADING...
//     //     loadingContext.setLoading(mixingCenterLoad || rawMaterialsLoad);
//     // }, [mixingCenterLoad, rawMaterialsLoad, mixingCenterSettingsData, rawMaterialsData]);

//     useEffect(() => {
//         // LOGICA PARA CUANDO SE SOLICITA UNA ACCION POR PARTE DEL MENU
//         handleActionChange(currentActionName);
//     }, [currentActionName]);

//     useEffect(() => {
//         //TODO: LOGICA PARA SALVAR USANDO EL FILENAME PROVISTO
//     }, [currentFileName]);

//     const handleActionChange = (actionName: string | null): void => {
//         console.log(`New action: ${actionName}`);

//         if (currentActionName === "new") {
//             console.log("Nueva calculadora");
//             setupBrandNewComputer();

//         } else if (currentActionName === "open") {
//             console.log("Cargar calculadora");
//             // ejecutarCargaCalculadora();

//         } else if (currentActionName === "save") {
//             console.log("Salvar calculadora");
//             // ejecutarSalvarCalculadora();

//         } else if (currentActionName === "saveAs") {
//             console.log("Salvar calculadora");
//             // ejecutarSalvarCalculadora();
//         }

//         // Limpiar acción luego de ejecutarla para que no se repita en cada render // 
//         setAction(COMPUTER_ACTION, null);
//         clearAction(COMPUTER_ACTION); // Limpiar después de usar
//     }


//     // const [cargandoB, setCargandoB] = useState(false);
//     // const [computerSettings, setComputerSettings] = useState<ComputerBasicSettingsModel>(new ComputerBasicSettingsModel());
//     // const [mixingCenterSettings, setMixingCenterSettings] = useState<MixingCenterSettingsModel | null>(null);
//     // const { accionActual, setAccion } = useCalculadoraContext();

//     // NO ESTA TOMANDO EN CUENTA SI HAY DATOS ACTUALMENTE COMO PARA PREGUNTARLE AL USUARIO SI DESEA GUARDAR LOS CAMBIOS ACTUALES
//     const setupBrandNewComputer = () => {
//         try {
//             loadingContext.setLoading(true);

//             const _mixingCenterSettings = CalculadoraStarter.getInstance().buildCentralConfigModel();
//             const _rawMaterials = RawMaterialStarter.getInstance().buildRawMaterialModel(CentralTypeIdEnum.Manual, PopulationTypeIdEnum.Adulto);

//             setMixingCenterSettingsData(_mixingCenterSettings);
//             setRawMaterialsData(_rawMaterials);

//             setActiveComputerTabIndex(0);

//         } catch (error) {
//             console.error("Error al cargar la materia prima desde la base de datos:", error);
//         } finally {
//             loadingContext.setLoading(false);
//         }
//     }

//     const openFileFromDB = () => {

//     }

//     const saveCurrentChanges = () => {

//     }

//     const saveAsCurrentChanges = () => {

//     }

//     const handleOnTabsChange = (index: number) => {
//         console.log('Cambió a tab:', index); // Just in case
//         setActiveComputerTabIndex(index);
//     }

//     const handleOnMixingCenterSettingsChange = (inNewData: MixingCenterSettingsModel) => {
//         setMixingCenterSettingsData(inNewData);
//     };

//     const handleOnRawMaterialChange = (inNewData: RawMaterialGroupModel) => {
//         setRawMaterialsData(inNewData);
//         console.log("nueva materia prima recibida... *************");
//     };

//     return (
//         <div>
//             <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
//                 <h1 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-4 sm:mb-0">
//                     CALCULADORA NUTRICIÓN HOSPITALARIA
//                 </h1>
//             </div>
//             {/* setActiveTabIndex={setActiveTabIndex} */}
//             <IconTabs defaultTabIndex={0} activeTabIndex={activeComputerTabIndex} setActiveTabIndex={handleOnTabsChange}>
//                 <IconTab label="Central de Mezclas" icon={Home}>
//                     <ComputerFormLeft
//                         inMixingCenterSettings={mixingCenterSettingsData ?? new MixingCenterSettingsModel()}
//                         inRawMaterial={rawMaterialsData ?? new RawMaterialGroupModel()}
//                         onMixingCenterSettingsChange={handleOnMixingCenterSettingsChange}
//                         onRawMaterialChange={handleOnRawMaterialChange}
//                     // setMixingCenterConfigLoad={setMixingCenterLoad}
//                     // setRawMaterialsLoad={setRawMaterialsLoad}
//                     />
//                 </IconTab>

//                 <IconTab label="Resultados" icon={FileText}>
//                     <ComputerFormRight />
//                 </IconTab>
//             </IconTabs>


//         </div>
//     );
// }

// export default ComputerForm;