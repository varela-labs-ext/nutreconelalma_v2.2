import { useEffect } from "react";
import { useComputerFileHandlerContext } from "./ComputerFileHandlerContext";

const InitLogic = ({ children }: { children: React.ReactNode }) => {
    const { createNewFileAsync } = useComputerFileHandlerContext();

    const init = (): void => {
        createNewFileAsync()
            .then(() => {
                console.log("DONE. CALCULADORA INICIAL HECHA.");
            })
            .catch(() => {
                console.error("ERROR FATAL AL INICIAR LA CALCULADORA.");
            });
    }

    useEffect(() => {
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
