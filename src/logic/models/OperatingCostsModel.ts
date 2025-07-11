/**
 * - COSTOS OPERATIVOS
    - COSTOS DE MANTENIMIENTO
    - COSTOS DE PRODUCCION
 
| COSTOS OPERATIVOS      ** | Operating Costs             | OperatingCosts               | OperC    | Settings      | Costos Operativos          |

| COSTOS DE MANTENIMIENTO   | Maintenance Costs           | MaintenanceCosts             | MaintC   | Wrench        | Costos de Mantenimiento    |
| COSTOS DE PRODUCCION      | Production Costs            | ProductionCosts              | ProdC    | Factory       | Costos de Producción       |

 */

import MaintenanceCostsModel from "./operating_resources/MaintenanceCostsGroupModel";
import ProductionCostsModel from "./operating_resources/ProductionCostsGroupModel";


class OperatingCostsModel {
    public maintenanceCosts: MaintenanceCostsModel;
    public productionCosts: ProductionCostsModel;

    constructor() {
        this.maintenanceCosts = new MaintenanceCostsModel();
        this.productionCosts = new ProductionCostsModel();
    }
}

export default OperatingCostsModel;