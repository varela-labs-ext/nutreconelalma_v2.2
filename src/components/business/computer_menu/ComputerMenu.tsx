import FileNameDialogBox from "@/components/ui/dialogs/FileNameDialogBox";
import SelectFileDialogBox from "@/components/ui/dialogs/SelectFileDialogBox";
import YesNoModal from "@/components/ui/dialogs/YesNoModal";
import AccordionMenuItemWithContextAction, { MenuSubItem } from "@/components/ui/menu/AccordionMenuItemWithContextAction";
import { useComputerContext } from "@/context/ComputerContext";
import ForageManager from "@/logic/common/ForageManager";
import { toastService } from "@/services/toastService";
import { useEffect, useState } from "react";

interface ComputerMenuProps {
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
    to: string;
    items: MenuSubItem[];
    onCloseSidebar?: () => void;
}

const ComputerMenu = (props: ComputerMenuProps) => {
    const { currentFilename, createNewFileAsync } = useComputerContext();

    const [showNewCalcDialog, setShowNewCalcDialog] = useState(false);
    const [showSaveAsDialog, setShowSaveAsDialog] = useState(false);
    const [showOpenFileDialog, setShowOpenFileDialog] = useState(false);

    const [fileList, setFileList] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchFiles = async () => {
            setIsLoading(true);
            const files = await ForageManager.getAllKeysAsync();
            setFileList(files);
            setIsLoading(false);
        };

        if (showOpenFileDialog) {
            fetchFiles();
        }
    }, [showOpenFileDialog]);

    const getMenuSubItems = (): MenuSubItem[] => {
        const itemsCopy = props.items.map(item => {
            if (currentFilename != undefined && currentFilename !== null && item.actionName === "file") {
                return {
                    ...item,
                    label: `Archivo: ${currentFilename}`
                };
            } else {
                return {
                    ...item
                };
            }
        });

        // if (!currentFilename) {
        //     return itemsCopy.filter(item => item.actionName !== "file");
        // }

        return itemsCopy;
    }

    const callCreateNewFile = () => {
        createNewFileAsync().then(() => {
            toastService.showOk("Nueva calculadora creada...");
            setShowNewCalcDialog(false);
        });
    }

    // const getFilenameList = (): string[] => {
    //     ForageManager.getAllKeysAsync().then((values) => {
    //         return values;
    //     });
    // }

    const handleOnItemClick = (actionName: string) => {
        if (actionName === "new") {
            setShowNewCalcDialog(true);
        }

        if (actionName === "open") {
            setShowOpenFileDialog(true);
        }

        if (actionName === "save") {
            //TODO
        }

        if (actionName === "saveAs") {
            setShowSaveAsDialog(true);
        }
    }



    const handleOnSaveAsConfirm = (fileName: string) => {
        //todo
        setShowSaveAsDialog(false);
    }

    const handleOnOpenConfirm = (selectedFile: string) => {
        //TODO
        setShowOpenFileDialog(false);
    }

    return (
        <div>
            <AccordionMenuItemWithContextAction
                label={props.label}
                to={props.to}
                icon={props.icon}
                isActive={props.isActive}
                items={getMenuSubItems()}
                onCloseSidebar={props.onCloseSidebar}
                onItemClick={handleOnItemClick}
            />
            {showNewCalcDialog && (
                <YesNoModal mainTitle="Desea crear una nueva calculadora?" onConfirm={() => callCreateNewFile()} onCancel={() => setShowNewCalcDialog(false)} />
            )}
            {showSaveAsDialog && (
                <FileNameDialogBox isOpen={showSaveAsDialog} onConfirm={handleOnSaveAsConfirm} onCancel={() => setShowSaveAsDialog(false)} />
            )}
            {showOpenFileDialog && (
                <SelectFileDialogBox isOpen={showOpenFileDialog} files={fileList} onConfirm={handleOnOpenConfirm} onCancel={() => setShowOpenFileDialog(false)} />
            )}
        </div>
    );
}

export default ComputerMenu;