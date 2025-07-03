import ForageManager from "../common/ForageManager";
import MateriaPrimaModel from "../models/materiaPrima/MateriaPrimaModel";

class DataService {
    private static readonly MATERIA_PRIMA_KEY = 'mpa';

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

}

export default DataService;
