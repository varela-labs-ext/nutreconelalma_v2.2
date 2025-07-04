import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";
import MixingCenterLeftSide from "./MixingCenterLeftSide";
import MixingCenterRightSide from "./MixingCenterRightSide";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import { useContext, useEffect, useRef, useState } from "react";
import { isValidNumber } from "@/utils/validators";
import { LoadingContext } from "../context/LoadingContext";
import { buildKeyName } from "@/logic/common/functions";
import DataService from "@/logic/services/DataService";
import CalculadoraStarter from "@/logic/starters/CalculadoraStarter";
import MixingCenterSettingsModel from "@/logic/models/common/MixingCenterSettingsModel";

interface MixingCenterConfigFormProps {
    inCentralType: CentralTypeIdEnum;
    onChange: (inNewData: MixingCenterSettingsModel) => void;
    // onNotifyChange: () => void; // Callback para notificar cambios al padre // PENDIENTE DE IMPLEMENTAR
}

const MixingCenterConfigForm = (props: MixingCenterConfigFormProps) => {
    const [internalData, setInternalData] = useState<MixingCenterSettingsModel | null>(null);
    const [dataLoaded, setDataLoaded] = useState(false);
    const loadingContext = useContext(LoadingContext);
    const debounceRef = useRef<number | null>(null); // Ref para manejar el debounce
    const [percentageErrors, setPercentageErrors] = useState({
        percentPerAdult: false,
        percentPerPediatric: false,
        percentPerNeonatal: false
    });

    // Cargar al montar
    useEffect(() => {
        loadDataFromDb();
        console.log("CentralConfig: Cargando configuración de producción");
    }, []);

    useEffect(() => {
        setNewCentralType();
    }, [props.inCentralType]);

    // Autosave cuando cambia
    useEffect(() => {
        requestSaveData();
    }, [internalData]);

    const loadDataFromDb = async (): Promise<void> => {
        try {
            let gatheredData: MixingCenterSettingsModel | null = null;

            // setIsLoading(true); // comienza carga
            loadingContext.setLoading(true); // activa el contexto de carga

            if (internalData) {
                const mainKey = buildKeyName("current", internalData.centralType, internalData.populationType);
                console.log("Buscando central config con clave:", mainKey);

                gatheredData = await DataService.getMixingCenterSettingsData(mainKey);
            }

            if (!gatheredData) {
                console.log("No se encontró 'central config' en la base de datos, inicializando con valores por defecto.");
                gatheredData = CalculadoraStarter.getInstance().buildCentralConfigModel();
            }

            setInternalData(gatheredData);
            setDataLoaded(true);
        }
        catch (error) {
            console.error("Error al cargar la materia prima desde la base de datos:", error);
        } finally {
            // setIsLoading(false); // termina carga
            loadingContext.setLoading(false);
        }
    }

    const saveDataInDb = async (inData: MixingCenterSettingsModel): Promise<void> => {
        try {
            // loadingContext.setLoading(true); // activa el contexto de carga

            if (internalData) {
                const mainKey = buildKeyName("current", internalData.centralType, internalData.populationType);
                await DataService.saveMixingCenterSettingsData(mainKey, inData);
            } else {
                console.error("Error: internalData is null when trying to save data.");
            }

            // console.log("Materia prima guardada correctamente. Clave:", mainKey);
        } catch (error) {
            console.error("Error al guardar la materia prima en la base de datos:", error);
        } finally {
            // loadingContext.setLoading(false); // desactiva el contexto de carga
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

    const setNewCentralType = (): void => {
        if (internalData !== null && props.inCentralType !== internalData.centralType) {
            const newData = {
                ...internalData,
                centralType: props.inCentralType
            };
            setInternalData(newData);
        }
    }

    const validatePercentages = (field: "percentPerAdult" | "percentPerPediatric" | "percentPerNeonatal", inData: MixingCenterSettingsModel): void => {
        if (inData) {
            const totalPercent = inData.percentPerAdult + inData.percentPerPediatric + inData.percentPerNeonatal;
            const newErrors = {
                percentPerAdult: false,
                percentPerPediatric: false,
                percentPerNeonatal: false
            };

            if (totalPercent !== 100) {
                console.error("Error: The total percentage of nutrition types must equal 100%. Current total: ", totalPercent);
                newErrors[field] = true;
                setPercentageErrors(newErrors);
            } else {
                setPercentageErrors(newErrors);
            }
        } else {
            console.error("Error: internalData is null when trying to validate percentages.");
        }
    }

    const onPopulationTypeChange = (newPopulationType: PopulationTypeIdEnum): void => {
        if (internalData) {
            const newData = {
                ...internalData,
                populationType: newPopulationType
            };
            setInternalData(newData);
        } else {
            console.error("Error: internalData is null when trying to change population type.");
        }
    }

    const onProductionLinesChange = (newProductionLines: number): void => {
        if (internalData && isValidNumber(newProductionLines)) {
            const newData = {
                ...internalData,
                productionLines: newProductionLines
            };
            setInternalData(newData);
        } else {
            console.error("Error: internalData is null when trying to change production lines.");
        }
    }

    const onProductionPerDayChange = (newProductionPerDay: number): void => {
        if (internalData && isValidNumber(newProductionPerDay)) {
            const newData = {
                ...internalData,
                productionPerDay: newProductionPerDay
            };
            setInternalData(newData);
        } else {
            console.error("Error: internalData is null when trying to change production per day.");
        }
    }

    const onPercentPerAdultChange = (newPercentAdult: number): void => {
        if (internalData && isValidNumber(newPercentAdult)) {
            const newData = {
                ...internalData,
                percentPerAdult: newPercentAdult
            };
            validatePercentages("percentPerAdult", newData);
            setInternalData(newData);
        } else {
            console.error("Error: internalData is null when trying to change percent per adult.");
        }
    }

    const onPercentPerPediatricChange = (newPercentPediatric: number): void => {
        if (internalData && isValidNumber(newPercentPediatric)) {
            const newData = {
                ...internalData,
                percentPerPediatric: newPercentPediatric
            };
            validatePercentages("percentPerPediatric", newData);
            setInternalData(newData);
        } else {
            console.error("Error: internalData is null when trying to change percent per pediatric.");
        }
    }

    const onPercentPerNeonatalChange = (newPercentNeonatal: number): void => {
        if (internalData && isValidNumber(newPercentNeonatal)) {
            const newData = {
                ...internalData,
                percentPerNeonatal: newPercentNeonatal
            };

            validatePercentages("percentPerNeonatal", newData);

            setInternalData(newData);
        } else {
            console.error("Error: internalData is null when trying to change percent per neonatal.");
        }
    }

    return (
        <div className="w-full">
            <h2 className="text-xl font-semibold text-green-600 mb-4">Ingreso de datos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Columna A */}
                <MixingCenterLeftSide
                    inPopulationType={internalData?.populationType || PopulationTypeIdEnum.Adulto}
                    inProductionLines={internalData?.productionLines || 0}
                    inProductionPerDay={internalData?.productionPerDay || 0}
                    onPopulationTypeChange={onPopulationTypeChange}
                    onProductionLinesChange={onProductionLinesChange}
                    onProductionPerDayChange={onProductionPerDayChange}
                />

                {/* Columna B */}
                <MixingCenterRightSide
                    inPercentPerAdult={internalData?.percentPerAdult || 0}
                    inPercentPerPediatric={internalData?.percentPerPediatric || 0}
                    inPercentPerNeonatal={internalData?.percentPerNeonatal || 0}
                    errorOnPercentPerAdult={percentageErrors.percentPerAdult}
                    errorOnPercentPerPediatric={percentageErrors.percentPerPediatric}
                    errorOnPercentPerNeonatal={percentageErrors.percentPerNeonatal}
                    onPercentPerAdultChange={onPercentPerAdultChange}
                    onPercentPerPediatricChange={onPercentPerPediatricChange}
                    onPercentPerNeonatalChange={onPercentPerNeonatalChange}
                />
            </div>
        </div>
    );
};

export default MixingCenterConfigForm;