import ForageManager from "../common/ForageManager";
import CentralConfigModel from "../models/common/CentralConfigModel";
import ProduccionSettingsModel from "../models/common/ProduccionSettingsModel";
import MateriaPrimaModel from "../models/materiaPrima/MateriaPrimaModel";

class DataService {
    private static readonly MATERIA_PRIMA_KEY = 'mpa';
    private static readonly CENTRAL_CONFIG_KEY = 'ctrlCfg';

    static async getMateriaPrima(inSourceKey: string): Promise<MateriaPrimaModel | null> {
        try {
            const key: string = `${inSourceKey}:${DataService.MATERIA_PRIMA_KEY}`;

            const data: MateriaPrimaModel | null = await ForageManager.getAsync<MateriaPrimaModel>(key);
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

    static async setMateriaPrimaData(inSourceKey: string, inData: MateriaPrimaModel): Promise<void> {
        try {
            // console.log('Setting materia prima data:', data);
            const key: string = `${inSourceKey}:${DataService.MATERIA_PRIMA_KEY}`;

            await ForageManager.saveAsync<MateriaPrimaModel>(key, inData);

            console.log(`Materia prima data saved for key: ${key}`, inData);

            // await localforage.setItem('materiaPrimaData', data);
        } catch (error) {
            console.error('Error setting materia prima data:', error);
        }
    }

    static async getCentralConfigData(inSourceKey: string): Promise<CentralConfigModel | null> {
        try {
            const key: string = `${inSourceKey}:${DataService.CENTRAL_CONFIG_KEY}`;

            const data: CentralConfigModel | null = await ForageManager.getAsync<CentralConfigModel>(key);

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

    static async saveCentralConfigData(inSourceKey: string, inData: CentralConfigModel): Promise<void> {
        try {
            const key: string = `${inSourceKey}:${DataService.CENTRAL_CONFIG_KEY}`;

            await ForageManager.saveAsync<CentralConfigModel>(key, inData);

            console.log(`Materia prima data saved for key: ${key}`, inData);

            // await localforage.setItem('materiaPrimaData', data);
        } catch (error) {
            console.error('Error setting materia prima data:', error);
        }
    }
}

export default DataService;
