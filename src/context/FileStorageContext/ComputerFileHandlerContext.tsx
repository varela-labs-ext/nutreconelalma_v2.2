import { createContext, useContext } from "react";
import { useComputerContext } from "../ComputerContext";
import StorageProvider from "@/providers/StorageProvider";
import ComputerBigGroupModel from "@/logic/models/ComputerBigGroupModel";
import DefaultsProvider from "@/providers/DefaultsProvider";
import { Logger } from "@/utils/logger";


export interface ComputerFileHandlerContextProps {
    createNewFileAsync: () => Promise<void>;
    openFileAsync: (inFileName: string) => Promise<void>;
    saveFileAsync: () => Promise<void>;
    saveFileAsAsync: (inFileName: string) => Promise<void>;
}

// ------------------- Contexto -------------------
export const ComputerFileHandlerContext = createContext<ComputerFileHandlerContextProps | undefined>(undefined);

export const ComputerFileHandlerProvider = ({ children }: { children: React.ReactNode }) => {
    const {
        currentFilename,
        setCurrentFilename,
        setExecutingSomething,
        loadExternalBackup,
        gatherExternalBackup
    } = useComputerContext();

    const createNewFileAsync = async (): Promise<void> => {
        try {
            setExecutingSomething(true);
            Logger.info("ComputerFileHandlerProvider.createNewFileAsync() STARTS...");

            let userDefaultValues: ComputerBigGroupModel | null = await StorageProvider.loadUserDefaultsAsync();

            if (userDefaultValues === undefined || userDefaultValues === null) {
                userDefaultValues = DefaultsProvider.getDefaultsForBigGroupData();
                Logger.info("ComputerFileHandlerProvider.createNewFileAsync() USING FABRIC DEFAULT VALUES...");
                Logger.info(userDefaultValues);
                Logger.info("");
            }

            loadExternalBackup(userDefaultValues);
            setCurrentFilename(null);
        } catch (error) {
            Logger.error(error);
            throw error;
        } finally {
            setExecutingSomething(false);
            Logger.info("ComputerFileHandlerProvider.createNewFileAsync() ENDS...");
        }
    }

    const openFileAsync = async (inFileName: string): Promise<void> => {
        try {
            setExecutingSomething(true);

            if (inFileName) {
                const results: ComputerBigGroupModel | null = await StorageProvider.loadFileDataAsync(inFileName);

                if (results) {
                    loadExternalBackup(results);
                    setCurrentFilename(inFileName);
                } else {
                    throw new Error(`El archivo '${inFileName}' no existe o esta corrupto.`);
                }
            }
        } catch (error) {
            Logger.error(error);
            throw error;
        } finally {
            setExecutingSomething(false);
        }
    }

    const saveFileAsync = async (): Promise<void> => {

        try {
            setExecutingSomething(true);

            if (currentFilename === undefined || currentFilename === null || currentFilename.trim() === "") {
                Logger.info("No hay archivo activo. Usa guardarComo(nombre) en su lugar.");
                throw new Error("Error. No hay un archivo en uso");
            }

            const results: ComputerBigGroupModel | null = gatherExternalBackup();

            if (results === undefined || results === null) {
                throw new Error("La data obtenida para salvar no es válida.");
            } else {
                await StorageProvider.saveFileDataAsync(currentFilename, results);
            }
        } catch (error) {
            Logger.error(error);
            throw error;
        } finally {
            setExecutingSomething(false);
        }
    }

    const saveFileAsAsync = async (inFileName: string): Promise<void> => {
        try {
            setExecutingSomething(true);

            if (inFileName === undefined || inFileName === null || inFileName.trim() === "") {
                throw new Error("Error. Nombre de archivo inválido.");
            }

            const currentFileList: string[] = await StorageProvider.getFilesList();

            if (currentFileList.includes(inFileName.toUpperCase())) {
                throw new Error("Error. El nombre de archivo ya existe.");
            }

            const results: ComputerBigGroupModel | null = gatherExternalBackup();

            if (results === undefined || results === null) {
                throw new Error("La data obtenida para salvar no es válida.");
            } else {
                await StorageProvider.saveFileDataAsync(inFileName, results);
            }
        } catch (error) {
            Logger.error(error);
            throw error;
        } finally {
            setCurrentFilename(inFileName);
            setExecutingSomething(false);
        }
    }

    return (
        <ComputerFileHandlerContext.Provider
            value={{
                createNewFileAsync,
                openFileAsync,
                saveFileAsync,
                saveFileAsAsync
            }}>
            <div>
                {children}
            </div>
        </ComputerFileHandlerContext.Provider>
    );
}


export const useComputerFileHandlerContext = (): ComputerFileHandlerContextProps => {
    const context = useContext(ComputerFileHandlerContext);
    if (!context) {
        throw new Error("useComputerContext debe usarse dentro de un ComputerProvider");
    }
    return context;
};