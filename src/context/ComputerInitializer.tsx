import { useEffect } from "react";


const InitLogic = ({ children }: { children: React.ReactNode }) => {
    const {
        setAccion,
        setTipoA, setTipoB, setTipoC, setTipoD,
        setTipoE, setTipoF, setTipoG, setTipoH,
        crearNuevoArchivo,
    } = useCalculadoraContext();

    useEffect(() => {
        const init = async () => {
            const storage = new CalculadoraStorageProvider();
            const valoresPorDefecto = await storage.cargarDefault();

            if (valoresPorDefecto) {
                // Cargar en memoria pero como archivo temporal
                setTipoA(valoresPorDefecto.tipoA);
                setTipoB(valoresPorDefecto.tipoB);
                setTipoC(valoresPorDefecto.tipoC);
                setTipoD(valoresPorDefecto.tipoD);
                setTipoE(valoresPorDefecto.tipoE);
                setTipoF(valoresPorDefecto.tipoF);
                setTipoG(valoresPorDefecto.tipoG);
                setTipoH(valoresPorDefecto.tipoH);
                setAccion("nueva"); // se considera nuevo archivo
            } else {
                crearNuevoArchivo();
            }
        };

        init();
    }, []);

    return <>{children}</>;
};

const CalculadoraInitializer = ({ children }: { children: React.ReactNode }) => {
    return (
        <CalculadoraProvider>
            <InitLogic>{children}</InitLogic>
        </CalculadoraProvider>
    );
};

export default CalculadoraInitializer;
