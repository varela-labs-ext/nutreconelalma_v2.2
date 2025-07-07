
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import { useContext, useEffect, useState } from "react";
import TabsBlock from "../common/TabsBlock";
import MixingCenterConfigForm from "./MixingCenterConfigForm";
import ComputerBasicSettingsModel from "@/logic/models/common/ComputerBasicSettingsModel";
import MixingCenterSettingsModel from "@/logic/models/common/MixingCenterSettingsModel";
import RawMaterialsForm from "./RawMaterialsForm";
import { LoadingContext } from "../context/LoadingContext";
import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";
import ComputeButton from "../common/ComputeButton";
import ResultsForm from "./ResultsForm";
import ResultsModel from "@/logic/models/ResultsModel";
import { useCalculadoraContext } from "../context/CalculadoraContext";
import { useMultiActionContext } from "../context/MultiActionContext";


const ComputerForm = () => {
    const loadingContext = useContext(LoadingContext);
    const [mixingCenterLoad, setMixingCenterLoad] = useState(false);
    const [rawMaterialsLoad, setRawMaterialsLoad] = useState(false);
    const [cargandoB, setCargandoB] = useState(false);
    const [computerSettings, setComputerSettings] = useState<ComputerBasicSettingsModel>(new ComputerBasicSettingsModel());
    // const [mixingCenterSettings, setMixingCenterSettings] = useState<MixingCenterSettingsModel | null>(null);
    // const { accionActual, setAccion } = useCalculadoraContext();
    const { getAction, setAction, clearAction } = useMultiActionContext();
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

    const handlePopulationTypeChange = (newValue: PopulationTypeIdEnum) => {
        const output: ComputerBasicSettingsModel = {
            ...computerSettings,
            populationType: newValue,
        };
        console.log("handleMixingCenterConfigChange...");
        console.log(output);
        setComputerSettings(output);
    }

    const handleTabsChange = (inNewCentralType: CentralTypeIdEnum) => {
        const output: ComputerBasicSettingsModel = {
            ...computerSettings,
            centralType: inNewCentralType
        };
        setComputerSettings(output);
    }

    const handleOnClickCalcular = () => {

    }

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-4 sm:mb-0">
                    CALCULADORA NUTRICIÓN HOSPITALARIA
                </h1>
            </div>
            <div>
                <MixingCenterConfigForm
                    inCentralType={CentralTypeIdEnum.Manual} // TODO: por el momento es "Manual", hasta que se define si se necesita o no. Entonces siempre se va a salvar como manual esta parte.
                    onPopulationTypeChange={handlePopulationTypeChange}
                    onSetLoading={setMixingCenterLoad}
                />
            </div>
            <div>
                <TabsBlock
                    inCentralType={computerSettings.centralType}
                    onChange={handleTabsChange}
                >
                    <div>
                        <RawMaterialsForm
                            inCentralType={computerSettings.centralType}
                            inPopulationType={computerSettings.populationType}
                            onSetLoading={setRawMaterialsLoad}
                        />
                    </div>
                </TabsBlock>
            </div>
            <div className="w-full p-8">
                <ComputeButton
                    disabled={false}
                    onClick={handleOnClickCalcular}
                />
            </div>
            <div className="w-full">
                <ResultsForm
                    inData={new ResultsModel()}
                />
            </div>
        </div>
    );
}

export default ComputerForm;