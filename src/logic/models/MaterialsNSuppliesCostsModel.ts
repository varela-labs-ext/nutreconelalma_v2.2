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

import AutomatedEquipmentModel from "./operativos/AutomatedEquipmentModel";
import HygieneAndCleaningModel from "./operativos/HygieneAndCleaningModel";
import PersonalProtectionModel from "./operativos/PersonalProtectionModel";
import SterileWorkEquipmentModel from "./operativos/SterileWorkEquipmentModel";


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