import FileNameDialogBox from "@/components/ui/dialogs/FileNameDialogBox";
import SelectFileDialogBox from "@/components/ui/dialogs/SelectFileDialogBox";
import YesNoModal from "@/components/ui/dialogs/YesNoModal";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useComputerContext } from "./ComputerContext";
import { toastService } from "@/services/toastService";
import { useComputerFileHandlerContext } from "./ComputerFileHandlerContext";
import StorageProvider from "@/providers/StorageProvider";


export interface ComputerActionsContextProps {
    showNewCalcDialog: boolean;
    showSaveAsDialog: boolean;
    showOpenFileDialog: boolean;

    setShowNewCalcDialog: (inValue: boolean) => void;
    setShowSaveAsDialog: (inValue: boolean) => void;
    setShowOpenFileDialog: (inValue: boolean) => void;
    setFilenameList: (inValue: string[]) => void;

    callSaveFile: () => void;
}

export const ComputerActionsContext = createContext<ComputerActionsContextProps | undefined>(undefined);

export const ComputerActionsProvider = ({ children }: { children: React.ReactNode }) => {
    const { currentFilename, } = useComputerContext();
    const { createNewFileAsync, openFileAsync, saveFileAsync, saveFileAsAsync } = useComputerFileHandlerContext();

    const [showNewCalcDialog, setShowNewCalcDialog] = useState(false);
    const [showSaveAsDialog, setShowSaveAsDialog] = useState(false);
    const [showOpenFileDialog, setShowOpenFileDialog] = useState(false);
    const [filenameList, setFilenameList] = useState<string[]>([]);

    const fetchFilenameList = (): void => {
        console.log("LOADING FILE NAME LIST");

        StorageProvider.getFilesList()
            .then((data) => {
                setFilenameList(data);
            })
            .catch(() => {
                console.error("ERROR AL CARGAR LA LISTA DE ARCHIVOS DISPONIBLES.");
            });
    };

    const refCurrentRawMaterialFirstRender = useRef(true);

    useEffect(() => {
        if (refCurrentRawMaterialFirstRender.current) {
            refCurrentRawMaterialFirstRender.current = false;
            return;
        }

        if (showOpenFileDialog === true) {
            fetchFilenameList();
        }

    }, [showOpenFileDialog]);

    const callSaveFile = () => {
        saveFileAsync().then(() => {
            toastService.showOk(`Calculadora almacenada: ${currentFilename}`);
        });
    }

    const callCreateNewFile = () => {
        createNewFileAsync().then(() => {
            toastService.showOk("Nueva calculadora creada...");
            setShowNewCalcDialog(false);
        }).catch((error) => {
            console.error("Error en 'callCreateNewFile':", error);
            toastService.showError(`Error Fatal: ${error.message}`);
            setShowNewCalcDialog(false);
        });
    }

    const callOpenFile = (selectedFilename: string) => {
        openFileAsync(selectedFilename).then(() => {
            toastService.showOk(`Calculadora abierta: ${selectedFilename}`);
            setShowOpenFileDialog(false);
        });
    }

    const callSaveFileAs = (fileName: string) => {
        saveFileAsAsync(fileName).then(() => {
            toastService.showOk(`Calculadora creada: ${fileName}`);
            setShowSaveAsDialog(false);
        });
    }

    return (
        <ComputerActionsContext.Provider
            value={{
                showNewCalcDialog,
                showSaveAsDialog,
                showOpenFileDialog,
                setShowNewCalcDialog,
                setShowSaveAsDialog,
                setShowOpenFileDialog,
                setFilenameList,
                callSaveFile
            }}>
            <div>
                <div>
                    {children}
                </div>
                <div>
                    {showNewCalcDialog && (
                        <YesNoModal mainTitle="Desea crear una nueva calculadora?" onConfirm={() => callCreateNewFile()} onCancel={() => setShowNewCalcDialog(false)} />
                    )}
                    {showOpenFileDialog && (
                        <SelectFileDialogBox isOpen={showOpenFileDialog} files={filenameList} onConfirm={callOpenFile} onCancel={() => setShowOpenFileDialog(false)} />
                    )}
                    {showSaveAsDialog && (
                        <FileNameDialogBox isOpen={showSaveAsDialog} onConfirm={callSaveFileAs} onCancel={() => setShowSaveAsDialog(false)} />
                    )}
                </div>
            </div>
        </ComputerActionsContext.Provider>
    );
}

export const useComputerActionsContext = (): ComputerActionsContextProps => {
    const context = useContext(ComputerActionsContext);
    if (!context) {
        throw new Error("useComputerActionsContext debe usarse dentro de un ComputerProvider");
    }
    return context;
};
