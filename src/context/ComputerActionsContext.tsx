import FileNameDialogBox from "@/components/ui/dialogs/FileNameDialogBox";
import SelectFileDialogBox from "@/components/ui/dialogs/SelectFileDialogBox";
import YesNoModal from "@/components/ui/dialogs/YesNoModal";
import ForageManager from "@/logic/common/ForageManager";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useComputerContext } from "./ComputerContext";
import { toastService } from "@/services/toastService";


export interface ComputerActionsContextProps {
    showNewCalcDialog: boolean;
    showSaveAsDialog: boolean;
    showOpenFileDialog: boolean;
    filenameList: string[];

    setShowNewCalcDialog: (inValue: boolean) => void;
    setShowSaveAsDialog: (inValue: boolean) => void;
    setShowOpenFileDialog: (inValue: boolean) => void;
    setFilenameList: (inValue: string[]) => void;

    saveFile: () => void;
}

export const ComputerActionsContext = createContext<ComputerActionsContextProps | undefined>(undefined);

export const ComputerActionsProvider = ({ children }: { children: React.ReactNode }) => {
    const { currentFilename, createNewFileAsync, openFileAsync, saveFileAsync, saveFileAsAsync } = useComputerContext();

    const [showNewCalcDialog, setShowNewCalcDialog] = useState(false);
    const [showSaveAsDialog, setShowSaveAsDialog] = useState(false);
    const [showOpenFileDialog, setShowOpenFileDialog] = useState(false);
    const [filenameList, setFilenameList] = useState<string[]>([]);

    const fetchFilenameList = async () => {
        console.log("LOADING FILE NAME LIST");
        const files = await ForageManager.getAllKeysAsync();
        setFilenameList(files);
    };

    const refCurrentRawMaterialFirstRender = useRef(true);

    // useEffect(() => {
    //     if (refCurrentRawMaterialFirstRender.current) {
    //         refCurrentRawMaterialFirstRender.current = false;
    //         return;
    //     }

    //     if (showOpenFileDialog) {
    //         fetchFilenameList();
    //     }
    // }, [showOpenFileDialog]);

    const saveFile = () => {
        saveFileAsync().then(() => {
            toastService.showOk(`Calculadora almacenada: ${currentFilename}`);
        });
    }

    const callCreateNewFile = () => {
        createNewFileAsync().then(() => {
            toastService.showOk("Nueva calculadora creada...");
            setShowNewCalcDialog(false);
        });
    }

    const callOpenFileAsync = (selectedFilename: string) => {
        openFileAsync(selectedFilename).then(() => {
            toastService.showOk(`Calculadora abierta: ${selectedFilename}`);
            setShowOpenFileDialog(false);
        });
    }

    const callSaveFileAsAsync = (fileName: string) => {
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
                filenameList,
                setShowNewCalcDialog,
                setShowSaveAsDialog,
                setShowOpenFileDialog,
                setFilenameList,
                saveFile
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
                        <SelectFileDialogBox isOpen={showOpenFileDialog} files={filenameList} onConfirm={callOpenFileAsync} onCancel={() => setShowOpenFileDialog(false)} />
                    )}
                    {showSaveAsDialog && (
                        <FileNameDialogBox isOpen={showSaveAsDialog} onConfirm={callSaveFileAsAsync} onCancel={() => setShowSaveAsDialog(false)} />
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
