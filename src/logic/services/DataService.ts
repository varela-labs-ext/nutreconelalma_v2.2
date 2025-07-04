import ForageManager from "../common/ForageManager";
import MixingCenterSettingsModel from "../models/common/MixingCenterSettingsModel";
import RawMaterialModel from "../models/RawMaterialModel";

class DataService {
    private static readonly RAW_MATERIALS_KEY = 'rawMaterials';
    private static readonly CENTRAL_CONFIG_KEY = 'ctrlCfg';

    static async getRawMaterialsData(inSourceKey: string): Promise<RawMaterialModel | null> {
        try {
            const key: string = `${inSourceKey}:${DataService.RAW_MATERIALS_KEY}`;

            const data: RawMaterialModel | null = await ForageManager.getAsync<RawMaterialModel>(key);
            if (!data) {
                console.log(`No data found for key: ${key}`);
                return null;
            }
            console.log(`Fetched materia prima data for key: ${key}`, data);

            return data;
        } catch (error) {
            console.error('Error fetching materia prima data:', error);
            return null;
        }
    }

    static async saveRawMaterialsData(inSourceKey: string, inData: RawMaterialModel): Promise<void> {
        try {
            // console.log('Setting materia prima data:', data);
            const key: string = `${inSourceKey}:${DataService.RAW_MATERIALS_KEY}`;

            await ForageManager.saveAsync<RawMaterialModel>(key, inData);

            console.log(`Materia prima data saved for key: ${key}`, inData);

        } catch (error) {
            console.error('Error setting materia prima data:', error);
        }
    }

    static async getCentralConfigData(inSourceKey: string): Promise<MixingCenterSettingsModel | null> {
        try {
            const key: string = `${inSourceKey}:${DataService.CENTRAL_CONFIG_KEY}`;

            const data: MixingCenterSettingsModel | null = await ForageManager.getAsync<MixingCenterSettingsModel>(key);

            if (!data) {
                console.log(`No data found for key: ${key}`);
                return null;
            }
            console.log(`Fetched materia prima data for key: ${key}`, data);

            return data;
        } catch (error) {
            console.error('Error fetching materia prima data:', error);
            return null;
        }
    }

    static async saveCentralConfigData(inSourceKey: string, inData: MixingCenterSettingsModel): Promise<void> {
        try {
            const key: string = `${inSourceKey}:${DataService.CENTRAL_CONFIG_KEY}`;

            await ForageManager.saveAsync<MixingCenterSettingsModel>(key, inData);

            console.log(`Materia prima data saved for key: ${key}`, inData);

            // await localforage.setItem('materiaPrimaData', data);
        } catch (error) {
            console.error('Error setting materia prima data:', error);
        }
    }
}

export default DataService;
