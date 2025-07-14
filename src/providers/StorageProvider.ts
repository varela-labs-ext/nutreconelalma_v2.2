import ComputerBigGroupModel from "@/logic/models/ComputerBigGroupModel";

class StorageProvider {

    static async userDefaultValuesExists(): Promise<boolean> {
        return false;
    }

    static async getUserDefaultValues(): Promise<ComputerBigGroupModel> {
        return new ComputerBigGroupModel();
    }
}

export default StorageProvider;