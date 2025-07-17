import { useEffect } from "react";
import { useComputerFileHandlerContext } from "./ComputerFileHandlerContext";

const InitLogic = ({ children }: { children: React.ReactNode }) => {
    const { createNewFileAsync } = useComputerFileHandlerContext();

    const init = async (): Promise<void> => {
        console.log("ComputerInitializer.init() STARTS COUNTER...");
        console.log(new Date());

        setTimeout(() => {
            console.log("ComputerInitializer.init() STARTS...");
            console.log(new Date());

            createNewFileAsync()
                .then(() => {
                    console.log("DONE. CALCULADORA INICIAL HECHA.");
                    console.log("ComputerInitializer.init() ENDS...");
                    console.log(new Date());
                })
                .catch(() => {
                    console.error("ERROR FATAL AL INICIAR LA CALCULADORA.");
                    console.log("ComputerInitializer.init() ENDS...");
                    console.log(new Date());
                });
        }, 800);
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
