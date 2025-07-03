import MateriaPrimaModel from "@/logic/models/materiaPrima/MateriaPrimaModel";
import { useContext, useEffect, useRef, useState } from "react";
import MateriaPrimaSummary from "./MateriaPrimaSummary";
import MateriaPrimaDetails from "./MateriaPrimaDetails";
import LoadingCard from "../common/LoadingCard";
import DataService from "@/logic/services/DataService";
import { buildKeyName } from "@/logic/common/functions";
import TipoCentralIdEnum from "@/logic/enums/TipoCentralIdEnum";
import TipoPoblacionIdEnum from "@/logic/enums/TipoPoblacionIdEnum";
import MateriaPrimaStarter from "@/logic/starters/MateriaPrimaStarter";
import { LoadingContext } from "../context/LoadingContext";



interface MateriaPrimaBlockProps {
    inTipoCentral: TipoCentralIdEnum,
    inTipoPoblacion: TipoPoblacionIdEnum,
    // inData: MateriaPrimaModel;
    // La idea es que el evento que le llegue al padre sea solamente un aviso y no la data.
    onChange: () => void;
}


// este componente se va a dividir en 3: un summary, un detalle y un master

// Se utiliza dentro de 'CentralDeMezclasForm'. ???
const MateriaPrimaBlock = (props: MateriaPrimaBlockProps) => {
    const debounceRef = useRef<number | null>(null); // Ref para manejar el debounce
    const loadingContext = useContext(LoadingContext);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [internalData, setInternalData] = useState<MateriaPrimaModel | null>(null);
    const [mostrarDetalles, setMostrarDetalles] = useState(true);

    // const [isLoading, setIsLoading] = useState(true); // nuevo estado

    const crearMateriaPrimaInicial = (): MateriaPrimaModel => {
        const data = new MateriaPrimaModel();
        MateriaPrimaStarter.getInstance().iniciarInsumos(data, props.inTipoCentral, props.inTipoPoblacion);
        return data;
    }

    const cargarMateriaPrima = async (): Promise<void> => {
        try {
            // setIsLoading(true); // comienza carga
            loadingContext.setLoading(true); // activa el contexto de carga

            const mainKey = buildKeyName("current", props.inTipoCentral, props.inTipoPoblacion);
            console.log("Buscando materia prima con clave:", mainKey);

            let datos = await DataService.getMateriaPrima(mainKey);

            if (!datos) {
                console.log("No se encontró materia prima en la base de datos, inicializando con valores por defecto.");
                datos = crearMateriaPrimaInicial();
                console.log(datos);
            }

            setInternalData(datos);
            setDataLoaded(true);
        }
        catch (error) {
            console.error("Error al cargar la materia prima desde la base de datos:", error);
        } finally {
            // setIsLoading(false); // termina carga
            loadingContext.setLoading(false);
        }
    }

    const guardarMateriaPrima = async (data: MateriaPrimaModel): Promise<void> => {
        try {
            // loadingContext.setLoading(true); // activa el contexto de carga

            const mainKey = buildKeyName("current", props.inTipoCentral, props.inTipoPoblacion);

            await DataService.setMateriaPrimaData(mainKey, data);
            // console.log("Materia prima guardada correctamente. Clave:", mainKey);
        } catch (error) {
            console.error("Error al guardar la materia prima en la base de datos:", error);
        } finally {
            // loadingContext.setLoading(false); // desactiva el contexto de carga
        }
    }


    // Cargar al montar
    useEffect(() => {
        cargarMateriaPrima();
        console.log("MateriaPrimaBlock: useEffect para cargar materia prima al montar.");
    }, []);

    useEffect(() => {
        // if (debounceRef.current !== null) {
        //     clearTimeout(debounceRef.current);
        // }

        if (internalData) {
            cargarMateriaPrima();
            console.log("MateriaPrimaBlock: useEffect para cargar materia prima al cambiar tipo central o población.");

            // saveDataToDb(internalData).then(() => {
            //     console.log("Materia prima guardada correctamente al cambiar tipo central o población.");
            //     loadDataFromDb().then(() => {
            //         console.log("Materia prima recargada después de guardar.");
            //     }).catch((error) => {
            //         console.error("Error al recargar materia prima después de guardar:", error);
            //     });
            // }).catch((error) => {
            //     console.error("Error al guardar materia prima al cambiar tipo central o población:", error);
            // });
        }
    }, [props.inTipoCentral, props.inTipoPoblacion]);

    // Autosave cuando cambia
    useEffect(() => {
        if (!dataLoaded || internalData === null) {
            console.log("MateriaPrimaBlock: internalData no está listo para guardar.");
            return;
        }

        console.log("MateriaPrimaBlock: internalData ha cambiado, programando guardado...");

        // if (debounceRef.current !== null) {
        //     clearTimeout(debounceRef.current);
        // }

        // debounceRef.current = setTimeout(() => {
        guardarMateriaPrima(internalData);
        // }, 100);
    }, [internalData]);

    // Maneja solamente el cambio en la propiedad "cantidad", y actualiza los totales.
    const handleCantidadChange = (inValue: number) => {
        if (!internalData) return;
        // setInternalData({
        //     ...internalData,
        //     cantidad: inValue,
        // });
    };

    // Maneja el cambio en los detalles de la materia prima.
    // Este método se llama desde el componente 'MateriaPrimaDetails'.
    // Se espera que este método actualice el estado interno y notifique al padre.
    const handleMateriaPrimaChange = (inItem: MateriaPrimaModel) => {
        console.log("MateriaPrimaBlock.handleMateriaPrimaChange()");

        if (!internalData) return;

        try {
            // if (loadingContext.isLoading) return; // protección adicional
            // loadingContext.setLoading(true);

            const outputData: MateriaPrimaModel = {
                ...internalData,
                ...inItem, // Actualiza los campos que hayan cambiado
            };

            console.log("MateriaPrimaBlock: Actualizando internalData con los cambios de materia prima:", outputData);

            setInternalData(outputData);
        } catch (error) {
            console.error("Error al manejar el cambio de materia prima:", error);
        } finally {
            // loadingContext.setLoading(false);
        }
    }

    return (
        internalData ? (
            <div className="flex flex-col gap-6">
                {/* <MateriaPrimaSummary
                    cantidad={internalData?.cantidad ?? 0}
                    total={internalData?.total ?? 0}
                    totalPorMl={internalData?.totalPorMl ?? 0}
                    // mostrarDetalles={mostrarDetalles}
                    onCantidadChange={handleCantidadChange}
                    onMostrarDetallesChange={setMostrarDetalles}
                /> */}

                <div>
                    <MateriaPrimaDetails
                        inData={internalData}
                        mostrarDetalles={mostrarDetalles}
                        onChange={handleMateriaPrimaChange}
                    />
                </div>
            </div>
        ) : (
            <LoadingCard mensaje="Cargando materia prima..." />
        )
    );
};

export default MateriaPrimaBlock;