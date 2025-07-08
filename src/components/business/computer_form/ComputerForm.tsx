import IconTab from "@/ui/common/IconTab";
import IconTabs from "@/ui/common/IconTabs";
import { LoadingContext } from "@/ui/context/LoadingContext";
import { useMultiActionContext } from "@/ui/context/MultiActionContext";
import { FileText, Home } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import ComputerFormLeft from "./ComputerFormLeft";
import ResultsForm from "@/components/business/computer_results_form/ResultsForm";
import ResultsModel from "@/logic/models/ResultsModel";
import ComputerFormRight from "./ComputerFormRight";



const ComputerForm = () => {
    const loadingContext = useContext(LoadingContext);
    const { getAction, clearAction } = useMultiActionContext();

    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [mixingCenterLoad, setMixingCenterLoad] = useState(false);
    const [rawMaterialsLoad, setRawMaterialsLoad] = useState(false);

    // const [cargandoB, setCargandoB] = useState(false);
    // const [computerSettings, setComputerSettings] = useState<ComputerBasicSettingsModel>(new ComputerBasicSettingsModel());
    // const [mixingCenterSettings, setMixingCenterSettings] = useState<MixingCenterSettingsModel | null>(null);
    // const { accionActual, setAccion } = useCalculadoraContext();

    const currentAction = getAction("calculadora");

    useEffect(() => {
        loadingContext.setLoading(mixingCenterLoad || rawMaterialsLoad);
    }, [mixingCenterLoad, rawMaterialsLoad]);

    useEffect(() => {
        if (currentAction === "nueva") {
            console.log("Nueva calculadora");
            // ejecutarCrearNuevaCalculadora();
        } else if (currentAction === "cargar") {
            console.log("Cargar calculadora");
            // ejecutarCargaCalculadora();
        } else if (currentAction === "salvar") {
            console.log("Salvar calculadora");
            // ejecutarSalvarCalculadora();
        }

        // Limpiar acción luego de ejecutarla para que no se repita en cada render
        // setAction(null);
        clearAction("calculadora"); // Limpiar después de usar
    }, [currentAction]);

    // const handlePopulationTypeChange = (newValue: PopulationTypeIdEnum) => {
    //     const output: ComputerBasicSettingsModel = {
    //         ...computerSettings,
    //         populationType: newValue,
    //     };
    //     console.log("handleMixingCenterConfigChange...");
    //     console.log(output);
    //     setComputerSettings(output);
    // }

    // const handleTabsChange = (inNewCentralType: CentralTypeIdEnum) => {
    //     const output: ComputerBasicSettingsModel = {
    //         ...computerSettings,
    //         centralType: inNewCentralType
    //     };
    //     setComputerSettings(output);
    // }

    // const handleOnClickCalcular = () => {

    // }

    const handleOnTabsChange = (index: number) => {
        console.log('Cambió a tab:', index);
    }

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-4 sm:mb-0">
                    CALCULADORA NUTRICIÓN HOSPITALARIA
                </h1>
            </div>
            <IconTabs defaultTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex}>
                <IconTab label="Central de Mezclas" icon={Home}>
                    <ComputerFormLeft
                        setMixingCenterConfigLoad={setMixingCenterLoad}
                        setRawMaterialsLoad={setRawMaterialsLoad}
                    />
                </IconTab>

                <IconTab label="Resultados" icon={FileText}>
                    <ComputerFormRight />
                </IconTab>
            </IconTabs>


        </div>
    );
}

export default ComputerForm;