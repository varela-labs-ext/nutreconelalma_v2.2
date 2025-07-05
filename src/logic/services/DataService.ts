import ForageManager from "../common/ForageManager";
import MixingCenterSettingsModel from "../models/common/MixingCenterSettingsModel";
import RawMaterialModel from "../models/RawMaterialModel";

const buildKeyName = (
    inMethodKey: string,
    inSourceKey: string
): string => {
    return (`${inMethodKey}:${inSourceKey}`).toUpperCase();
}

class DataService {
    private static readonly RAW_MATERIALS_KEY = 'RAW_MATERIAL';
    private static readonly MIXING_CENTER_KEY = 'MIXING_CENTER';

    static async getRawMaterialData(inSourceKey: string): Promise<RawMaterialModel | null> {
        try {
            const key: string = buildKeyName(DataService.RAW_MATERIALS_KEY, inSourceKey);

            const data: RawMaterialModel | null = await ForageManager.getAsync<RawMaterialModel>(key);
            if (!data) {
                console.log(`No data found for key: ${key}`);
                return null;
            }
            console.log(`Fetched key: ${key}`, data);

            return data;
        } catch (error) {
            console.error('Error fetching materia prima data:', error);
            return null;
        }
    }

    static async saveRawMaterialData(inSourceKey: string, inData: RawMaterialModel): Promise<void> {
        try {
            // console.log('Setting materia prima data:', data);
            const key: string = buildKeyName(DataService.RAW_MATERIALS_KEY, inSourceKey);

            await ForageManager.saveAsync<RawMaterialModel>(key, inData);

            console.log(`Loaded key: ${key}`, inData);

        } catch (error) {
            console.error('Error setting materia prima data:', error);
        }
    }

    static async getMixingCenterSettingsData(inSourceKey: string): Promise<MixingCenterSettingsModel | null> {
        try {
            const key: string = buildKeyName(DataService.MIXING_CENTER_KEY, inSourceKey);

            const data: MixingCenterSettingsModel | null = await ForageManager.getAsync<MixingCenterSettingsModel>(key);

            if (!data) {
                console.log(`No data found for key: ${key}`);
                return null;
            }
            console.log(`Fetched key: ${key}`, data);

            return data;
        } catch (error) {
            console.error('Error fetching materia prima data:', error);
            return null;
        }
    }

    static async saveMixingCenterSettingsData(inSourceKey: string, inData: MixingCenterSettingsModel): Promise<void> {
        try {
            const key: string = buildKeyName(DataService.MIXING_CENTER_KEY, inSourceKey);

            await ForageManager.saveAsync<MixingCenterSettingsModel>(key, inData);

            console.log(`Loaded key: ${key}`, inData);

            // await localforage.setItem('materiaPrimaData', data);
        } catch (error) {
            console.error('Error setting materia prima data:', error);
        }
    }
}

export default DataService;
