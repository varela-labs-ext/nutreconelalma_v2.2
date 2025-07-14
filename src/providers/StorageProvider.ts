import ComputerBigGroupModel from "@/logic/models/ComputerBigGroupModel";

class StorageProvider {

    static async userDefaultValuesExistsAsync(): Promise<boolean> {
        return false;
    }

    static async getUserDefaultValuesAsync(): Promise<ComputerBigGroupModel | null> {
        return new ComputerBigGroupModel();
    }

    static async loadFileDataAsync(inFileName: string): Promise<ComputerBigGroupModel | null> {
        return new ComputerBigGroupModel();
    }

    static async saveFileDataAsync(inFileName: string, inData: ComputerBigGroupModel): Promise<void> {

    }
}

export default StorageProvider;