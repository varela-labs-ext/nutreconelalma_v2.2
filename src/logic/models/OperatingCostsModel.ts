/**
 * - COSTOS OPERATIVOS
    - COSTOS DE MANTENIMIENTO
    - COSTOS DE PRODUCCION
 
| COSTOS OPERATIVOS      ** | Operating Costs             | OperatingCosts               | OperC    | Settings      | Costos Operativos          |

| COSTOS DE MANTENIMIENTO   | Maintenance Costs           | MaintenanceCosts             | MaintC   | Wrench        | Costos de Mantenimiento    |
| COSTOS DE PRODUCCION      | Production Costs            | ProductionCosts              | ProdC    | Factory       | Costos de Producción       |

 */

import MaintenanceCostsGroupModel from "./operating_resources/MaintenanceCostsGroupModel";
import ProductionCostsGroupModel from "./operating_resources/ProductionCostsGroupModel";


class OperatingCostsModel {
    public maintenanceCosts: MaintenanceCostsGroupModel;
    public productionCosts: ProductionCostsGroupModel;

    constructor() {
        this.maintenanceCosts = new MaintenanceCostsGroupModel();
        this.productionCosts = new ProductionCostsGroupModel();
    }
}

export default OperatingCostsModel;