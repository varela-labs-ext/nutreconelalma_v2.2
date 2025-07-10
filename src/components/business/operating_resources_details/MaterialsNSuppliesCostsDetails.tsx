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
import UnitCostItemModel from "@/logic/models/common/UnitCostItemModel";
import AutomatedEquipmentModel from "@/logic/models/operativos/AutomatedEquipmentModel";
import SterileWorkEquipmentModel from "@/logic/models/operativos/SterileWorkEquipmentModel";
import HygieneAndCleaningModel from "@/logic/models/operativos/HygieneAndCleaningModel";
import PersonalProtectionModel from "@/logic/models/operativos/PersonalProtectionModel";

interface MaterialsNSuppliesCostsDetailsProps {
    inAutomatedEquipmentData: AutomatedEquipmentModel;
    inHygieneAndCleaningData: HygieneAndCleaningModel;
    inPersonalProtectionData: PersonalProtectionModel;
    inSterileWorkEquipmentData: SterileWorkEquipmentModel;
    onAutomatedEquipmentChange: (inPropertyName: string, inNewItem: UnitCostItemModel) => void;
    onHygieneAndCleaningChange: (inPropertyName: string, inNewItem: UnitCostItemModel) => void;
    onPersonalProtectionChange: (inPropertyName: string, inNewItem: UnitCostItemModel) => void;
    onSterileWorkEquipmentChange: (inPropertyName: string, inNewItem: UnitCostItemModel) => void;
}

const MaterialsNSuppliesCostsDetails = (props: MaterialsNSuppliesCostsDetailsProps) => {

    return (
        <div>
            <AccordionGroup multiOpen={false} >
                <AccordionItem id="id_SterEq" title="Equipo de Trabajo Estéril" icon={Syringe}>
                    <UnitCostDetailsGroup
                        inData={props.inSterileWorkEquipmentData}
                        onInputChange={props.onSterileWorkEquipmentChange}
                    />
                </AccordionItem>
                <AccordionItem id="id_HygCln" title="Higiene y Limpieza" icon={Droplets}>
                    <UnitCostDetailsGroup
                        inData={props.inHygieneAndCleaningData}
                        onInputChange={props.onHygieneAndCleaningChange}
                    />
                </AccordionItem>
                <AccordionItem id="id_Prtctn" title="Protección Personal" icon={Shield}>
                    <UnitCostDetailsGroup
                        inData={props.inPersonalProtectionData}
                        onInputChange={props.onPersonalProtectionChange}
                    />
                </AccordionItem>
                <AccordionItem id="id_AutoEq" title="Equipos Automatizados" icon={Cpu}>
                    <UnitCostDetailsGroup
                        inData={props.inAutomatedEquipmentData}
                        onInputChange={props.onAutomatedEquipmentChange}
                    />
                </AccordionItem>
            </AccordionGroup>
        </div>
    );
}

export default MaterialsNSuppliesCostsDetails;