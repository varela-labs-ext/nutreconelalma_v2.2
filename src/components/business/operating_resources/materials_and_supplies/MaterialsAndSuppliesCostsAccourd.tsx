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
// import UnitCostDetailsGroup from "../unit_costs/UnitCostDetailsGroup";
import UnitCostItemModel from "@/logic/models/row_item/UnitCostItemRowModel";
import AutomatedEquipmentGroupModel from "@/logic/models/operating_resources/AutomatedEquipmentGroupModel";
import SterileWorkEquipmentGroupModel from "@/logic/models/operating_resources/SterileWorkEquipmentGroupModel";
import HygieneAndCleaningGroupModel from "@/logic/models/operating_resources/HygieneAndCleaningGroupModel";
import PersonalProtectionModel from "@/logic/models/operating_resources/PersonalProtectionGroupModel";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import AutomatedEquipmentSet from "./automated_equipment/AutomatedEquipmentSet";
import PersonalProtectionSet from "./personal_protection/PersonalProtectionSet";
import HygieneAndCleaningSet from "./hygiene_and_cleaning/HygieneAndCleaningSet";
import SterileWorkEquipmentSet from "./sterile_work_equipment/SterileWorkEquipmentSet";

interface MaterialsAndSuppliesCostsAccourdProps {
    inCentralType: CentralTypeIdEnum;
    inAutomatedEquipmentData: AutomatedEquipmentGroupModel;
    inHygieneAndCleaningData: HygieneAndCleaningGroupModel;
    inPersonalProtectionData: PersonalProtectionModel;
    inSterileWorkEquipmentData: SterileWorkEquipmentGroupModel;

    onAutomatedEquipmentChange: (inNewItem: AutomatedEquipmentGroupModel) => void;
    onHygieneAndCleaningChange: (inNewItem: HygieneAndCleaningGroupModel) => void;
    onPersonalProtectionChange: (inNewItem: PersonalProtectionModel) => void;
    onSterileWorkEquipmentChange: (inNewItem: SterileWorkEquipmentGroupModel) => void;
}

const MaterialsAndSuppliesCostsAccourd = (props: MaterialsAndSuppliesCostsAccourdProps) => {

    return (
        <div>
            <AccordionGroup multiOpen={false} >
                {props.inCentralType === CentralTypeIdEnum.Automatico && (
                    <AccordionItem id="id_AutoEq" title="Equipos Automatizados" icon={Cpu}>
                        <AutomatedEquipmentSet
                            inData={props.inAutomatedEquipmentData}
                            onChange={props.onAutomatedEquipmentChange}
                        />
                    </AccordionItem>
                )}
                <AccordionItem id="id_Prtctn" title="Protección Personal" icon={Shield}>
                    <PersonalProtectionSet
                        inData={props.inPersonalProtectionData}
                        onChange={props.onPersonalProtectionChange}
                    />
                </AccordionItem>
                <AccordionItem id="id_HygCln" title="Higiene y Limpieza" icon={Droplets}>
                    <HygieneAndCleaningSet
                        inCentralType={props.inCentralType}
                        inData={props.inHygieneAndCleaningData}
                        onChange={props.onHygieneAndCleaningChange}
                    />
                </AccordionItem>
                <AccordionItem id="id_SterEq" title="Equipo de Trabajo Estéril" icon={Syringe}>
                    <SterileWorkEquipmentSet
                        inData={props.inSterileWorkEquipmentData}
                        onChange={props.onSterileWorkEquipmentChange}
                    />
                </AccordionItem>
            </AccordionGroup>
        </div>
    );
}

export default MaterialsAndSuppliesCostsAccourd;