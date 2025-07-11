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
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";

interface MaterialsNSuppliesCostsDetailsProps {
    inCentralType: CentralTypeIdEnum;
    inAutomatedEquipmentData: AutomatedEquipmentModel;
    inHygieneAndCleaningData: HygieneAndCleaningModel;
    inPersonalProtectionData: PersonalProtectionModel;
    inSterileWorkEquipmentData: SterileWorkEquipmentModel;

    onAutomatedEquipmentChange: (inNewItem: AutomatedEquipmentModel) => void;
    onHygieneAndCleaningChange: (inNewItem: HygieneAndCleaningModel) => void;
    onPersonalProtectionChange: (inNewItem: PersonalProtectionModel) => void;
    onSterileWorkEquipmentChange: (inNewItem: SterileWorkEquipmentModel) => void;
}

const MaterialsNSuppliesCostsDetails = (props: MaterialsNSuppliesCostsDetailsProps) => {

    const handleOnAutomatedEquipmentChange = (inName: string, inNewItem: UnitCostItemModel) => {
        const output: AutomatedEquipmentModel = {
            ...props.inAutomatedEquipmentData,
            [inName]: inNewItem
        };
        props.onAutomatedEquipmentChange(output);
    }

    const handleOnHygieneAndCleaningChange = (inName: string, inNewItem: UnitCostItemModel) => {
        const output: HygieneAndCleaningModel = {
            ...props.inHygieneAndCleaningData,
            [inName]: inNewItem
        };
        props.onHygieneAndCleaningChange(output);
    }

    const handleOnPersonalProtectionChange = (inName: string, inNewItem: UnitCostItemModel) => {
        const output: PersonalProtectionModel = {
            ...props.inPersonalProtectionData,
            [inName]: inNewItem
        };
        props.onPersonalProtectionChange(output);
    }

    const handleOnSterileWorkEquipmentChange = (inName: string, inNewItem: UnitCostItemModel) => {
        const output: SterileWorkEquipmentModel = {
            ...props.inSterileWorkEquipmentData,
            [inName]: inNewItem
        };
        props.onSterileWorkEquipmentChange(output);
    }

    return (
        <div>
            <AccordionGroup multiOpen={false} >
                <AccordionItem id="id_SterEq" title="Equipo de Trabajo Estéril" icon={Syringe}>
                    <UnitCostDetailsGroup
                        inCentralType={props.inCentralType}
                        inData={props.inSterileWorkEquipmentData}
                        onInputChange={handleOnSterileWorkEquipmentChange}
                    />
                </AccordionItem>
                <AccordionItem id="id_HygCln" title="Higiene y Limpieza" icon={Droplets}>
                    <UnitCostDetailsGroup
                        inCentralType={props.inCentralType}
                        inData={props.inHygieneAndCleaningData}
                        onInputChange={handleOnHygieneAndCleaningChange}
                    />
                </AccordionItem>
                <AccordionItem id="id_Prtctn" title="Protección Personal" icon={Shield}>
                    <UnitCostDetailsGroup
                        inCentralType={props.inCentralType}
                        inData={props.inPersonalProtectionData}
                        onInputChange={handleOnPersonalProtectionChange}
                    />
                </AccordionItem>
                {props.inCentralType === CentralTypeIdEnum.Automatico && (
                    <AccordionItem id="id_AutoEq" title="Equipos Automatizados" icon={Cpu}>
                        <UnitCostDetailsGroup
                            inCentralType={props.inCentralType}
                            inData={props.inAutomatedEquipmentData}
                            onInputChange={handleOnAutomatedEquipmentChange}
                        />
                    </AccordionItem>
                )}
            </AccordionGroup>
        </div>
    );
}

export default MaterialsNSuppliesCostsDetails;