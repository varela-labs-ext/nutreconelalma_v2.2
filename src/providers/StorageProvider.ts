import { COMPUTER_DATA_KEY, USER_DEFAULTS_KEY } from "@/common/Constants";
import ForageManager from "@/logic/common/ForageManager";
import ComputerBigGroupModel from "@/logic/models/ComputerBigGroupModel";

const buildKeyName = (
    inMethodKey: string,
    inSourceKey: string
): string => {
    return (`${inMethodKey}:${inSourceKey}`).toUpperCase();
}

class StorageProvider {
    public static async loadUserDefaultsAsync(): Promise<ComputerBigGroupModel | null> {
        const key: string = buildKeyName(USER_DEFAULTS_KEY, "CUSTOMER");
        const result: ComputerBigGroupModel | null | undefined = await ForageManager.getAsync<ComputerBigGroupModel>(key);
        return (result === undefined || result === null) ? null : result;
    }

    public static async saveUserDefaultsAsync(inComputerData: ComputerBigGroupModel): Promise<void> {
        const key: string = buildKeyName(USER_DEFAULTS_KEY, "CUSTOMER");
        await ForageManager.saveAsync<ComputerBigGroupModel>(key, inComputerData);
    }

    public static async loadFileDataAsync(inFileName: string): Promise<ComputerBigGroupModel | null> {
        const key: string = buildKeyName(COMPUTER_DATA_KEY, inFileName);
        const result: ComputerBigGroupModel | null | undefined = await ForageManager.getAsync<ComputerBigGroupModel>(key);
        return (result === undefined || result === null) ? null : result;
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
        return fileList.filter(this.isComputerDataKey).map((key) => key.substring(COMPUTER_DATA_KEY.length + 1));
    }

    private static isComputerDataKey(key: string): boolean {
        return key.startsWith(COMPUTER_DATA_KEY);
    }
}

export default StorageProvider;