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

import AutomatedEquipmentModel from "./operating_resources/AutomatedEquipmentGroupModel";
import HygieneAndCleaningModel from "./operating_resources/HygieneAndCleaningGroupModel";
import PersonalProtectionModel from "./operating_resources/PersonalProtectionGroupModel";
import SterileWorkEquipmentModel from "./operating_resources/SterileWorkEquipmentGroupModel";


class MaterialsNSuppliesCostsModel {
    public sterileWorkEquipment: SterileWorkEquipmentModel;
    public hygieneAndCleaning: HygieneAndCleaningModel;
    public personalProtection: PersonalProtectionModel;
    public automatedEquipment: AutomatedEquipmentModel;

    constructor() {
        this.sterileWorkEquipment = new SterileWorkEquipmentModel();
        this.hygieneAndCleaning = new HygieneAndCleaningModel();
        this.personalProtection = new PersonalProtectionModel();
        this.automatedEquipment = new AutomatedEquipmentModel();
    }
}

export default MaterialsNSuppliesCostsModel;