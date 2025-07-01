import ProduccionSettingsModel from "@/logic/models/common/ProduccionModel";
import ProduccionForm from "./ProduccionForm";
import TipoCentralIdEnum from "@/logic/enums/TipoCentralIdEnum";
import { useState } from "react";
import TabsBlock from "../common/TabsBlock";


const CalculadoraForm = () => {
    // const [selectedTipoCentral, setTipoCentral] = useState<TipoCentralIdEnum>(0);
    const [selectedProdSettings, setProdSettings] = useState<ProduccionSettingsModel>(new ProduccionSettingsModel());

    const onProduccionFormChange = (updatedItem: ProduccionSettingsModel) => {
        const output: ProduccionSettingsModel = {
            ...updatedItem
        }

        console.log("CalculadoraForm.onProduccionFormChange()");
        console.log(output);
        setProdSettings(output);
    }

    const onCentralDeMezclasTabsChange = (value: TipoCentralIdEnum) => {
        const output: ProduccionSettingsModel = {
            ...selectedProdSettings,
            tipoCentral: value
        }

        console.log("CalculadoraForm.onCentralDeMezclasTabsChange()");
        console.log(output);

        setProdSettings(output);
    }

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-4 sm:mb-0">
                    CALCULADORA NUTRICIÓN HOSPITALARIA
                </h1>

            </div>
            <div>
                <ProduccionForm
                    item={selectedProdSettings}
                    onChange={onProduccionFormChange}
                />
            </div>
            <div>
                {/* SOMETHING */}
                {/* <div className="bg-white border rounded-xl shadow-sm p-6 mb-6">
                    <div className="mt-8">

                        ALGO
                    </div>
                </div> */}
                <div>
                    <TabsBlock
                        tipoCentral={selectedProdSettings.tipoCentral}
                        onChange={onCentralDeMezclasTabsChange}
                    >
                        <div>
                            CT: {selectedProdSettings.tipoCentral}
                        </div>
                    </TabsBlock>
                </div>
            </div>
        </div>
    );
}

export default CalculadoraForm;