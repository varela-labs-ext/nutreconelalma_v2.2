import { createContext, useContext } from "react";
import StorageProvider from "@/providers/StorageProvider";
import ComputerBigGroupModel from "@/logic/models/ComputerBigGroupModel";
import DefaultsProvider from "@/providers/DefaultsProvider";
import { Logger } from "@/utils/logger";
import useMixingCenterContext from "../MixingCenterContext/useMixingCenterContext";


export interface FileStorageContextType {
    createNewFileAsync: () => Promise<void>;
    openFileAsync: (inFileName: string) => Promise<void>;
    saveFileAsync: () => Promise<void>;
    saveFileAsAsync: (inFileName: string) => Promise<void>;
}

// ------------------- Contexto -------------------
export const FileStorageContext = createContext<FileStorageContextType | undefined>(undefined);

export const FileStorageProvider = ({ children }: { children: React.ReactNode }) => {
    const {
        activeFilename: activeFilename,
        setActiveFilename: setCurrentFilename,
        setIsProcessing,
        loadBackupFromPayload: loadExternalBackup,
        buildBackupPayload: gatherExternalBackup
    } = useMixingCenterContext();

    const createNewFileAsync = async (): Promise<void> => {
        try {
            setIsProcessing(true);
            Logger.info("FileStorageProvider.createNewFileAsync() STARTS...");

            let userDefaultValues: ComputerBigGroupModel | null = await StorageProvider.loadUserDefaultsAsync();

            if (userDefaultValues === undefined || userDefaultValues === null) {
                userDefaultValues = DefaultsProvider.getDefaultsForBigGroupData();
                Logger.info("FileStorageProvider.createNewFileAsync() USING FABRIC DEFAULT VALUES...");
                Logger.info(userDefaultValues);
                Logger.info("");
            }

            loadExternalBackup(userDefaultValues);
            setCurrentFilename(null);
        } catch (error) {
            Logger.error(error);
            throw error;
        } finally {
            setIsProcessing(false);
            Logger.info("FileStorageProvider.createNewFileAsync() ENDS...");
        }
    }

    const openFileAsync = async (inFileName: string): Promise<void> => {
        try {
            setIsProcessing(true);

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
            setIsProcessing(false);
        }
    }

    const saveFileAsync = async (): Promise<void> => {

        try {
            setIsProcessing(true);

            if (activeFilename === undefined || activeFilename === null || activeFilename.trim() === "") {
                Logger.info("No hay archivo activo. Usa guardarComo(nombre) en su lugar.");
                throw new Error("Error. No hay un archivo en uso");
            }

            const results: ComputerBigGroupModel | null = gatherExternalBackup();

            if (results === undefined || results === null) {
                throw new Error("La data obtenida para salvar no es válida.");
            } else {
                await StorageProvider.saveFileDataAsync(activeFilename, results);
            }
        } catch (error) {
            Logger.error(error);
            throw error;
        } finally {
            setIsProcessing(false);
        }
    }

    const saveFileAsAsync = async (inFileName: string): Promise<void> => {
        try {
            setIsProcessing(true);

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
            setIsProcessing(false);
        }
    }

    return (
        <FileStorageContext.Provider
            value={{
                createNewFileAsync,
                openFileAsync,
                saveFileAsync,
                saveFileAsAsync
            }}>
            <div>
                {children}
            </div>
        </FileStorageContext.Provider>
    );
}


export const useFileStorageContext = (): FileStorageContextType => {
    const context = useContext(FileStorageContext);
    if (!context) {
        throw new Error("useMixingCenterContext debe usarse dentro de un MixingCenterProvider");
    }
    return context;
};