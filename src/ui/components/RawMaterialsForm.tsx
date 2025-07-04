// RawMaterialsForm

import RawMaterialModel from "@/logic/models/RawMaterialModel";
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
import RawMaterialStarter from "@/logic/starters/RawMaterialStarter";
import CalculationService from "@/logic/services/CalculationService";

interface RawMaterialsFormProps {
    inCentralType: CentralTypeIdEnum;
    inPopulationType: PopulationTypeIdEnum;
}

const RawMaterialsForm = (props: RawMaterialsFormProps) => {
    const [internalData, setInternalData] = useState<RawMaterialModel | null>(null);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [showDetails, setshowDetails] = useState(true);
    const debounceRef = useRef<number | null>(null);
    const loadingContext = useContext(LoadingContext);

    // Cargar al montar
    useEffect(() => {
        loadDataFromDb();
    }, []);

    useEffect(() => {
        handlePropsChange();
    }, [props.inCentralType, props.inPopulationType]);

    // Autosave cuando cambia
    useEffect(() => {
        requestSaveData();
    }, [internalData]);

    const handlePropsChange = (): void => {
        if (internalData) {
            console.log("RawMaterialsForm: Cambiando props inCentralType y inPopulationType");
            loadDataFromDb();
        }
    }

    const requestSaveData = (): void => {
        if (!dataLoaded || internalData === null) {
            console.warn("RawMaterialsForm: No se puede guardar, datos no cargados o internalData es null.");
            return;
        }

        if (debounceRef.current !== null) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            saveDataInDb(internalData);
        }, 400);
    }

    const loadDataFromDb = async (): Promise<void> => {
        try {
            console.log("RawMaterialsForm: Cargando materia prima...");
            let gatheredData: RawMaterialModel | null = null;
            loadingContext.setLoading(true); // activa el contexto de carga

            const mainKey = buildKeyName("current", props.inCentralType, props.inPopulationType);
            console.log("Buscando materia prima con clave:", mainKey);

            gatheredData = await DataService.getRawMaterialsData(mainKey);

            if (!gatheredData) {
                gatheredData = RawMaterialStarter.getInstance().buildRawMaterialModel(props.inCentralType, props.inPopulationType);
                CalculationService.ComputeRawMaterial(gatheredData);
                console.log("No se encontró materia prima en la base de datos, inicializando con valores por defecto.");
            }

            setInternalData(gatheredData);
            setDataLoaded(true);
        }
        catch (error) {
            console.error("Error al cargar la materia prima desde la base de datos:", error);
        } finally {
            // setIsLoading(false); // termina carga
            loadingContext.setLoading(false);
            console.log("RawMaterialsForm: Materia prima cargada correctamente.");
        }
    }

    const saveDataInDb = async (inData: RawMaterialModel): Promise<void> => {
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

    const handleQuantityChange = (newValue: number): void => {

    }

    const handleShowDetailsChange = (newValue: boolean): void => {
        setshowDetails(newValue);
    }

    const handleRawMaterialsDetailsChange = (newData: RawMaterialModel): void => {
        if (!internalData) return;

        try {
            const outputData: RawMaterialModel = { ...newData };

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