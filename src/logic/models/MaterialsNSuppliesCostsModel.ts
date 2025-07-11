/*
- MATERIALES E INSUMOS
    - EQUIPO DE TRABAJO ESTERIL
    - HIGIENE Y LIMPIEZA
    - PROTECION PERSONAL
    - EQUIPOS AUTOMATIZADOS

| MATERIALES E INSUMOS   ** | Materials and Supplies      | MaterialsNSupplies         | MatSup   | PackageOpen   | Materiales e Insumos       |

| EQUIPO DE TRABAJO ESTERIL | Sterile Work Equipment      | SterileWorkEquipment         | SterEq   | Syringe       | Equipo de Trabajo Estéril  |
| HIGIENE Y LIMPIEZA        | Hygiene and Cleaning        | HygieneAndCleaning           | HygCln   | Droplets      | Higiene y Limpieza         |
| PROTECION PERSONAL        | Personal Protection         | PersonalProtection           | Prtctn   | Shield        | Protección Personal        |
| EQUIPOS AUTOMATIZADOS     | Automated Equipment         | AutomatedEquipment           | AutoEq   | Cpu           | Equipos Automatizados      |
*/

import AutomatedEquipmentGroupModel from "./operating_resources/AutomatedEquipmentGroupModel";
import HygieneAndCleaningGroupModel from "./operating_resources/HygieneAndCleaningGroupModel";
import PersonalProtectionModel from "./operating_resources/PersonalProtectionGroupModel";
import SterileWorkEquipmentGroupModel from "./operating_resources/SterileWorkEquipmentGroupModel";


class MaterialsNSuppliesCostsModel {
    public sterileWorkEquipment: SterileWorkEquipmentGroupModel;
    public hygieneAndCleaning: HygieneAndCleaningGroupModel;
    public personalProtection: PersonalProtectionModel;
    public automatedEquipment: AutomatedEquipmentGroupModel;

    constructor() {
        this.sterileWorkEquipment = new SterileWorkEquipmentGroupModel();
        this.hygieneAndCleaning = new HygieneAndCleaningGroupModel();
        this.personalProtection = new PersonalProtectionModel();
        this.automatedEquipment = new AutomatedEquipmentGroupModel();
    }
}

export default MaterialsNSuppliesCostsModel;