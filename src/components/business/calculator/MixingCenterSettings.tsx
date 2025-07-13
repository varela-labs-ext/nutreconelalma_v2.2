import MixingCenterSettingsModel from "@/logic/models/common/MixingCenterSettingsModel";
import MixingCenterSet from "./mixing_center/MixingCenterSet";
import { useEffect, useRef, useState } from "react";
import DataService from "@/logic/services/DataService";
import DefaultsProvider from "@/logic/Providers/DefaultsProvider";

interface MixingCenterSettingsProps {
    inFilename: string; // ESTE VALOR DEBE SER CURRENT POR DEFECTO
    onChange: (newItem: MixingCenterSettingsModel) => void;
    onSetLoading: (value: boolean) => void;
}

const MixingCenterSettings = (props: MixingCenterSettingsProps) => {
    const [internalData, setInternalData] = useState<MixingCenterSettingsModel>(new MixingCenterSettingsModel());

    const debounceRef = useRef<number | null>(null);

    useEffect(() => {
        loadDataFromDb();
    }, []);

    useEffect(() => {
        console.log("ESTA LINEA NO DEBERIA APARECER AL INICIO DEL COMPONENTE, SOLAMENTE CUANDO SE VAYA A CAMBIAR EL FILENAME..");
    }, [props.inFilename]);

    const getComponentKey = (): string => {
        return props.inFilename;
    }

    const requestSaveData = (inData: MixingCenterSettingsModel): void => {
        setInternalData(inData);

        if (debounceRef.current !== null) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            saveDataInDb(inData);
        }, 100);
    }

    const loadDataFromDb = async (): Promise<void> => {
        try {
            props.onSetLoading(true);
            let gatheredData: MixingCenterSettingsModel | null = null;
            gatheredData = await DataService.getMixingCenterSettingsData(getComponentKey());

            if (!gatheredData) {
                console.log("No se encontró 'Mixing Center Settings' en la base de datos, inicializando con valores por defecto.");
                gatheredData = new MixingCenterSettingsModel();
                DefaultsProvider.mixingCenterSettingsDefaults(gatheredData);
            }

            setInternalData(gatheredData);
            // setDataLoaded(true);

        } catch (error) {
            console.error("Error al cargar la materia prima desde la base de datos:", error);
        } finally {
            props.onSetLoading(false);
            console.log("***** MixingCenter data loaded... *****");
        }
    }

    const saveDataInDb = async (inData: MixingCenterSettingsModel): Promise<void> => {
        try {
            await DataService.saveMixingCenterSettingsData(getComponentKey(), inData);
        } catch (error) {
            console.error("Error al guardar la materia prima en la base de datos:", error);
        } finally {
            console.log("======= MixingCenterConfigForm Salvando datos =======");
            // loadingContext.setLoading(false); // desactiva el contexto de carga
        }
    }

    const handleOnMixingCenterSetChange = (inNewData: MixingCenterSettingsModel): void => {
        requestSaveData(inNewData);
    }

    return (
        <>
            <MixingCenterSet
                inData={internalData}
                onChange={handleOnMixingCenterSetChange} />
        </>
    );
}

export default MixingCenterSettings;