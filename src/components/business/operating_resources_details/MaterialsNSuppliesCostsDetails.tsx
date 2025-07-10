/*
- MATERIALES E INSUMOS
    - EQUIPO DE TRABAJO ESTERIL     SterEq
    - HIGIENE Y LIMPIEZA            HygCln
    - PROTECION PERSONAL            Prtctn
    - EQUIPOS AUTOMATIZADOS         AutoEq
*/

import { AccordionGroup } from "@/components/ui/accordions/AccordionGroup";
import AccordionItem from "@/components/ui/accordions/AccordionItem";
import { Syringe, Droplets, Shield, Cpu } from "lucide-react";
import UnitCostDetailsGroup from "../unit_costs/UnitCostDetailsGroup";
import { useEffect, useState } from "react";
import MaterialsNSuppliesCostsModel from "@/logic/models/MaterialsNSuppliesCostsModel";
import UnitCostItemModel from "@/logic/models/common/UnitCostItemModel";


interface MaterialsNSuppliesCostsDetailsProps {
    inData: MaterialsNSuppliesCostsModel;
    onChange: (inNewItem: MaterialsNSuppliesCostsModel) => void;
}

const MaterialsNSuppliesCostsDetails = (props: MaterialsNSuppliesCostsDetailsProps) => {
    const [internalData, setInternalData] = useState<MaterialsNSuppliesCostsModel>(new MaterialsNSuppliesCostsModel());

    // useEffect(() => {
    //     setInternalData(props.inData);
    // }, []);

    useEffect(() => {
        setInternalData(props.inData);
    }, [props.inData]);

    const handleOnSterileWorkEquipmentChange = (inPropertyName: string, inNewItem: UnitCostItemModel) => {
        //TODO
    }

    const handleOnHygieneAndCleaningChange = (inPropertyName: string, inNewItem: UnitCostItemModel) => {
        //TODO
    }

    const handleOnPersonalProtectionChange = (inPropertyName: string, inNewItem: UnitCostItemModel) => {
        //TODO
    }

    const handleOnAutomatedEquipmentChange = (inPropertyName: string, inNewItem: UnitCostItemModel) => {
        //TODO
    }

    return (
        <div>
            <AccordionGroup multiOpen={false} >
                <AccordionItem id="id_SterEq" title="Equipo de Trabajo Estéril" icon={Syringe}>
                    <UnitCostDetailsGroup
                        inData={internalData.sterileWorkEquipment}
                        onInputChange={handleOnSterileWorkEquipmentChange}
                    />
                </AccordionItem>
                <AccordionItem id="id_HygCln" title="Higiene y Limpieza" icon={Droplets}>
                    <UnitCostDetailsGroup
                        inData={internalData.hygieneAndCleaning}
                        onInputChange={handleOnHygieneAndCleaningChange}
                    />
                </AccordionItem>
                <AccordionItem id="id_Prtctn" title="Protección Personal" icon={Shield}>
                    <UnitCostDetailsGroup
                        inData={internalData.personalProtection}
                        onInputChange={handleOnPersonalProtectionChange}
                    />
                </AccordionItem>
                <AccordionItem id="id_AutoEq" title="Equipos Automatizados" icon={Cpu}>
                    <UnitCostDetailsGroup
                        inData={internalData.automatedEquipment}
                        onInputChange={handleOnAutomatedEquipmentChange}
                    />
                </AccordionItem>
            </AccordionGroup>
        </div>
    );
}

export default MaterialsNSuppliesCostsDetails;