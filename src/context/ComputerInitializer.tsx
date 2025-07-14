import { useEffect } from "react";
import { ComputerProvider, useComputerContext } from "./ComputerContext";


const InitLogic = ({ children }: { children: React.ReactNode }) => {
    const { createNewFileAsync } = useComputerContext();

    useEffect(() => {
        const init = async () => {
            //TODO: TOMAR EN CUENTA SI HAY VALORES POR DEFECTO EN LA DB,PARA UN FUTURO.
            await createNewFileAsync();
            console.log("DONE. CALCULADORA INICIAL HECHA.");
        };

        init();
    }, []);

    return <>{children}</>;
};

const ComputerInitializer = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <InitLogic>{children}</InitLogic>
        </>
    );
};

export default ComputerInitializer;
