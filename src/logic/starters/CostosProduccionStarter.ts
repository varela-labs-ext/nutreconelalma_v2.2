
import ProductionCostsModel from "../models/operating_resources/ProductionCostsGroupModel";
import TotalesStarterBase from "./TotalesStarterBase";


class CostosProduccionStarter extends TotalesStarterBase<ProductionCostsModel> {

    protected iniciarComunes(inItem: ProductionCostsModel): void {
        inItem.totalCost = 0;
    }

    protected iniciarCentralManual(inItem: ProductionCostsModel): void {
        this.iniciarEstimado(inItem.aguaM3, 2388262.00, 0);
        this.iniciarEstimado(inItem.depreciacionCabinaFlujoLaminar, 63000.00, 0);
        this.iniciarEstimado(inItem.luzKw, 6775276.50, 0);
        this.iniciarEstimado(inItem.manoObraIndirecta, 4783964.40, 0);
        this.iniciarEstimado(inItem.telefoniaInternetAdmin, 6688000.00, 0);
    }

    protected iniciarCentralAutomatica(inItem: ProductionCostsModel): void {
        this.iniciarCentralManual(inItem);
    }

    private static _instance: CostosProduccionStarter

    /* SINGLETON FOR THIS CLASS */
    public static getInstance(): CostosProduccionStarter {
        if (!CostosProduccionStarter._instance) {
            CostosProduccionStarter._instance = new CostosProduccionStarter();
        }
        return CostosProduccionStarter._instance;
    }
}

export default CostosProduccionStarter;