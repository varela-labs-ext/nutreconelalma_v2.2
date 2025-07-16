import { createContext, useContext } from "react";
import { useComputerContext } from "./ComputerContext";
import StorageProvider from "@/providers/StorageProvider";


export interface ComputerFileHandlerContextProps {
    createNewFileAsync: () => Promise<void>;
    openFileAsync: (inFileName: string) => Promise<void>;
    saveFileAsync: () => Promise<void>;
    saveFileAsAsync: (inFileName: string) => Promise<void>;
}

// ------------------- Contexto -------------------
export const ComputerFileHandlerContext = createContext<ComputerFileHandlerContextProps | undefined>(undefined);

export const ComputerFileHandlerProvider = ({ children }: { children: React.ReactNode }) => {
    const { currentFilename, setCurrentFilename, setExecutingSomething, resetCalcUseFabridDefaults } = useComputerContext();

    const createNewFileAsync = async (): Promise<void> => {
        try {
            setExecutingSomething(true);
            console.log("METODO 'createNewFileAsync' INICIANDO...");

            // if (userDefaultValuesExists) {
            //     const result = await createNewFileWithUserCustomDefaultValuesAsync();

            //     if (!result) {
            //         createNewFileWithStandarDefaultValues();
            //     }
            // } else {
            //     createNewFileWithStandarDefaultValues();
            // }

            resetCalcUseFabridDefaults();

            setCurrentFilename(null);
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setExecutingSomething(false);
            console.log("METODO 'createNewFileAsync' TERMINANDO...");
        }
    }

    const openFileAsync = async (inFileName: string): Promise<void> => {
        try {
            setExecutingSomething(true);

            if (inFileName) {
                const results = await StorageProvider.loadFileDataAsync(inFileName);

                if (results) {
                    //TODO
                    // applyComputerData(results);
                    setCurrentFilename(inFileName);
                }
            }
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setExecutingSomething(false);
        }
    }

    const saveFileAsync = async (): Promise<void> => {
        if (!currentFilename) {
            console.log("No hay archivo activo. Usa guardarComo(nombre) en su lugar.");
            return;
        }

        try {
            setExecutingSomething(true);

            //TODO
            // const output = gatherComputerData();
            // await StorageProvider.saveFileDataAsync(currentFilename, output);

        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setExecutingSomething(false);
        }
    }

    const saveFileAsAsync = async (inFileName: string): Promise<void> => {
        try {
            setExecutingSomething(true);

            //TODO
            // const output = gatherComputerData();
            // await StorageProvider.saveFileDataAsync(inFileName, output);
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setCurrentFilename(inFileName);
            setExecutingSomething(false);
        }
    }

    // const createNewFileWithUserCustomDefaultValuesAsync = async (): Promise<boolean> => {
    //     const results = await StorageProvider.getUserDefaultValuesAsync();

    //     if (results) {
    //         applyComputerData(results);
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

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