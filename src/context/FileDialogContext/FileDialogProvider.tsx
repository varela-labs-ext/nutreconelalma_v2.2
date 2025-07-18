import FileNameDialogBox from "@/components/ui/dialogs/FileNameDialogBox";
import SelectFileDialogBox from "@/components/ui/dialogs/SelectFileDialogBox";
import YesNoModal from "@/components/ui/dialogs/YesNoModal";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { toastService } from "@/services/toastService";
import { useFileStorageContext } from "../FileStorageContext/FileStorageProvider";
import StorageProvider from "@/providers/StorageProvider";
import useMixingCenterContext from "../MixingCenterContext/useMixingCenterContext";


export interface FileDialogContextType {
    showNewCalcDialog: boolean;
    showSaveAsDialog: boolean;
    showOpenFileDialog: boolean;

    setShowNewCalcDialog: (inValue: boolean) => void;
    setShowSaveAsDialog: (inValue: boolean) => void;
    setShowOpenFileDialog: (inValue: boolean) => void;
    setFilenameList: (inValue: string[]) => void;

    callSaveFile: () => void;
}

export const FileDialogContext = createContext<FileDialogContextType | undefined>(undefined);

export const FileDialogProvider = ({ children }: { children: React.ReactNode }) => {
    const { activeFilename, } = useMixingCenterContext();
    const { createNewFileAsync, openFileAsync, saveFileAsync, saveFileAsAsync } = useFileStorageContext();

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

    const callCreateNewFile = () => {
        createNewFileAsync().then(() => {
            toastService.showOk("Nueva calculadora creada...");
            setShowNewCalcDialog(false);
        }).catch((error) => {
            console.error("Error iniciarlizar la calculadora:", error);
            toastService.showError(`Error Fatal: ${error.message}`);
            setShowNewCalcDialog(false);
        });
    }

    const callOpenFile = (selectedFilename: string) => {
        openFileAsync(selectedFilename).then(() => {
            toastService.showOk(`Calculadora abierta: ${selectedFilename}`);
            setShowOpenFileDialog(false);
        }).catch((error) => {
            console.error("Error al abrir la calculadora:", error);
            toastService.showError(`Error Fatal: ${error.message}`);
            setShowNewCalcDialog(false);
        });
    }

    const callSaveFile = () => {
        saveFileAsync().then(() => {
            toastService.showOk(`Calculadora almacenada: ${activeFilename}`);
        }).catch((error) => {
            console.error("Error al salvar la calculadora:", error);
            toastService.showError(`Error Fatal: ${error.message}`);
            setShowNewCalcDialog(false);
        });
    }

    const callSaveFileAs = (fileName: string) => {
        saveFileAsAsync(fileName).then(() => {
            toastService.showOk(`Calculadora creada: ${fileName}`);
            setShowSaveAsDialog(false);
        }).catch((error) => {
            console.error("Error al salvar la calculadora:", error);
            toastService.showError(`Error Fatal: ${error.message}`);
            setShowNewCalcDialog(false);
        });
    }

    return (
        <FileDialogContext.Provider
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
        </FileDialogContext.Provider>
    );
}

export const useFileDialogContext = (): FileDialogContextType => {
    const context = useContext(FileDialogContext);
    if (!context) {
        throw new Error("useFileDialogContext debe usarse dentro de un MixingCenterProvider");
    }
    return context;
};
