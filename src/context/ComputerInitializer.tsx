import { useEffect } from "react";
import { useFileStorageContext } from "./FileStorageContext/FileStorageProvider";
import { Logger } from "@/utils/logger";

const InitLogic = ({ children }: { children: React.ReactNode }) => {
    const { createNewFileAsync } = useFileStorageContext();

    const init = async (): Promise<void> => {
        Logger.info("ComputerInitializer.init() STARTS COUNTER...");

        setTimeout(() => {
            Logger.info("ComputerInitializer.init() STARTS...");

            createNewFileAsync()
                .then(() => {
                    Logger.info("DONE. CALCULADORA INICIAL HECHA.");
                    Logger.info("ComputerInitializer.init() ENDS...");
                })
                .catch(() => {
                    console.error("ERROR FATAL AL INICIAR LA CALCULADORA.");
                    Logger.info("ComputerInitializer.init() ENDS...");
                });
        }, 600);
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
