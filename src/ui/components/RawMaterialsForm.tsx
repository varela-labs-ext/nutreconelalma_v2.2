// RawMaterialsForm

import RawMaterialsModel from "@/logic/models/materiaPrima/RawMaterialsModel";
import { useContext, useEffect, useRef, useState } from "react";
import RawMaterialsDetails from "./RawMaterialsDetails";
import LoadingCard from "../common/LoadingCard";
import RawMateriaSummary from "./RawMaterialsSummary";
import { buildKeyName } from "@/logic/common/functions";
import DataService from "@/logic/services/DataService";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";
import { LoadingContext } from "../context/LoadingContext";
import CalculadoraStarter from "@/logic/starters/CalculadoraStarter";

interface RawMaterialsFormProps {
    inCentralType: CentralTypeIdEnum;
    inPopulationType: PopulationTypeIdEnum;
}

const RawMaterialsForm = (props: RawMaterialsFormProps) => {
    const [internalData, setInternalData] = useState<RawMaterialsModel | null>(null);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [showDetails, setshowDetails] = useState(true);
    const debounceRef = useRef<number | null>(null);
    const loadingContext = useContext(LoadingContext);

    // Cargar al montar
    useEffect(() => {
        loadDataFromDb();
        console.log("RawMaterialsForm: Cargando materia prima");
    }, []);

    // useEffect(() => {
    //     setNewCentralType();
    // }, [props.inCentralType]);

    // Autosave cuando cambia
    useEffect(() => {
        requestSaveData();
    }, [internalData]);



    const loadDataFromDb = async (): Promise<void> => {
        try {
            let gatheredData: RawMaterialsModel | null = null;
            loadingContext.setLoading(true); // activa el contexto de carga

            if (internalData) {
                const mainKey = buildKeyName("current", props.inCentralType, props.inPopulationType);
                console.log("Buscando materia prima con clave:", mainKey);

                gatheredData = await DataService.getRawMaterialsData(mainKey);
            }

            if (!gatheredData) {
                console.log("No se encontró 'central config' en la base de datos, inicializando con valores por defecto.");
                gatheredData = CalculadoraStarter.getInstance()
            }

            setInternalData(gatheredData);


            // let datos = await DataService.getRawMaterialsData(mainKey);

            // if (!datos) {
            //     console.log("No se encontró materia prima en la base de datos, inicializando con valores por defecto.");
            //     datos = crearMateriaPrimaInicial();
            //     console.log(datos);
            // }

            // setInternalData(datos);
            setDataLoaded(true);
        }
        catch (error) {
            console.error("Error al cargar la materia prima desde la base de datos:", error);
        } finally {
            // setIsLoading(false); // termina carga
            loadingContext.setLoading(false);
        }

        // try {


        //     // setIsLoading(true); // comienza carga
        //     loadingContext.setLoading(true); // activa el contexto de carga

        //     if (internalData) {
        //         const mainKey = buildKeyName("current", internalData.centralType, internalData.populationType);
        //         console.log("Buscando central config con clave:", mainKey);

        //         gatheredData = await DataService.getCentralConfigData(mainKey);
        //     }

        //     if (!gatheredData) {
        //         console.log("No se encontró 'central config' en la base de datos, inicializando con valores por defecto.");
        //         gatheredData = CalculadoraStarter.getInstance().buildCentralConfigModel();
        //     }

        //     setInternalData(gatheredData);
        //     setDataLoaded(true);
        // }
        // catch (error) {
        //     console.error("Error al cargar la materia prima desde la base de datos:", error);
        // } finally {
        //     // setIsLoading(false); // termina carga
        //     loadingContext.setLoading(false);
        // }
    }

    const saveDataInDb = async (inData: RawMaterialsModel): Promise<void> => {
        try {
            if (internalData) {
                const mainKey = buildKeyName("current", props.inCentralType, props.inPopulationType);
                await DataService.saveRawMaterialsData(mainKey, inData);
            } else {
                console.error("Error: internalData is null when trying to save data.");
            }
        } catch (error) {
            console.error("Error al guardar la materia prima en la base de datos:", error);
        } finally {
            // TODO
        }
    }

    const requestSaveData = (): void => {
        if (!dataLoaded || internalData === null) {
            console.log("CentralConfig: No hay datos cargados o internalData es null, no se guardará nada.");
            return;
        }

        if (debounceRef.current !== null) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            saveDataInDb(internalData);
        }, 100);
    }

    const handleQuantityChange = (newValue: number): void => {

    }

    const handleShowDetailsChange = (newValue: boolean): void => {
        setshowDetails(newValue);
    }

    const handleRawMaterialsDetailsChange = (newData: RawMaterialsModel): void => {
        if (!internalData) return;

        try {
            const outputData: RawMaterialsModel = { ...newData };

            setInternalData(outputData);
        } catch (error) {
            console.error("Error al manejar el cambio de materia prima:", error);
        } finally {
            // TODO
        }
    };

    return (
        internalData ? (
            <div className="flex flex-col gap-6">
                <RawMateriaSummary
                    inQuantity={0}
                    inTotal={0}
                    inTotalPerMl={0}
                    inShowDetails={showDetails}
                    onQuantityChange={handleQuantityChange}
                    onShowDetailsChange={handleShowDetailsChange}
                />
                <div>
                    <RawMaterialsDetails
                        inData={internalData}
                        inShowDetails={showDetails}
                        onChange={handleRawMaterialsDetailsChange}
                    />
                </div>
            </div>
        ) : (
            <LoadingCard mensaje="Cargando materia prima..." />
        )
    );
}

export default RawMaterialsForm;