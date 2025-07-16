import ForageManager from "@/logic/common/ForageManager";
import ComputerBigGroupModel from "@/logic/models/ComputerBigGroupModel";


const buildKeyName = (
    inMethodKey: string,
    inSourceKey: string
): string => {
    return (`${inMethodKey}:${inSourceKey}`).toUpperCase();
}

const COMPUTER_DATA_KEY = 'MIXING_CENTER';

class StorageProvider {

    static async userDefaultValuesExistsAsync(): Promise<boolean> {
        //TODO
        return false;
    }

    static async getUserDefaultValuesAsync(): Promise<ComputerBigGroupModel | null> {
        //TODO
        return null;
    }

    public static async loadFileDataAsync(inFileName: string): Promise<ComputerBigGroupModel | null> {
        const key: string = buildKeyName(COMPUTER_DATA_KEY, inFileName);

        const result: ComputerBigGroupModel | null | undefined = await ForageManager.getAsync<ComputerBigGroupModel>(key);

        if (result === undefined || result === null) {
            return null;
        }

        return result;
    }

    public static async saveFileDataAsync(inFileName: string, inComputerData: ComputerBigGroupModel): Promise<void> {
        const key: string = buildKeyName(COMPUTER_DATA_KEY, inFileName);

        await ForageManager.saveAsync<ComputerBigGroupModel>(key, inComputerData);
    }

    public static async deleteFileDataAsync(inFileName: string): Promise<void> {
        const key: string = buildKeyName(COMPUTER_DATA_KEY, inFileName);

        await ForageManager.deleteAsync(key);
    }

    public static async getFilesList(): Promise<string[]> {
        const fileList = await ForageManager.getAllKeysAsync();

        return fileList.filter((key) => key.startsWith(COMPUTER_DATA_KEY));
    }
}

export default StorageProvider;