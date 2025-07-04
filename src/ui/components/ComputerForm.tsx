
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import { useState } from "react";
import TabsBlock from "../common/TabsBlock";
import MixingCenterConfigForm from "./MixingCenterConfigForm";
import ComputerBasicSettingsModel from "@/logic/models/common/ComputerBasicSettingsModel";
import MixingCenterSettingsModel from "@/logic/models/common/MixingCenterSettingsModel";
import RawMaterialsForm from "./RawMaterialsForm";


const ComputerForm = () => {
    const [computerSettings, setComputerSettings] = useState<ComputerBasicSettingsModel>(new ComputerBasicSettingsModel());
    // const [mixingCenterSettings, setMixingCenterSettings] = useState<MixingCenterSettingsModel | null>(null);

    // const onCentralConfigChange = (updatedItem: ProduccionSettingsModel) => {
    //     const output: ProduccionSettingsModel = {
    //         ...updatedItem
    //     }

    //     console.log("CalculadoraForm.onProduccionFormChange()");
    //     console.log(output);
    //     setProdSettings(output);
    // }

    // const onCentralDeMezclasTabsChange = (value: CentralTypeIdEnum) => {
    //     const output: ProduccionSettingsModel = {
    //         ...selectedProdSettings,
    //         tipoCentral: value
    //     }

    //     console.log("CalculadoraForm.onCentralDeMezclasTabsChange()");
    //     console.log(output);

    //     setProdSettings(output);
    // }

    const handleMixingCenterConfigChange = (newData: MixingCenterSettingsModel) => {
        const output: ComputerBasicSettingsModel = {
            ...computerSettings,
            populationType: newData.populationType,
        };
        setComputerSettings(output);
    }

    const handleTabsChange = (inNewCentralType: CentralTypeIdEnum) => {
        const output: ComputerBasicSettingsModel = {
            ...computerSettings,
            centralType: inNewCentralType
        };
        setComputerSettings(output);
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
                    onChange={handleMixingCenterConfigChange}
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
                        />
                    </div>
                </TabsBlock>

            </div>
        </div>
    );
}

export default ComputerForm;