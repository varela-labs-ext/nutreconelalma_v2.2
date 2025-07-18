import AccordionMenuItemWithContextAction, { MenuSubItem } from "@/components/ui/menu/AccordionMenuItemWithContextAction";
import { useComputerActionsContext } from "@/context/FileDialogContext/ComputerActionsContext";
import { useComputerContext } from "@/context/MixingCenterContext/ComputerContext";
import { FileEdit, FilePlus, FileText, FolderOpen, Save } from "lucide-react";

interface ComputerMenuProps {
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
    to: string;
    onCloseSidebar: () => void;
}

const ComputerMenu = (props: ComputerMenuProps) => {
    const { currentFilename } = useComputerContext();
    const {
        setShowNewCalcDialog,
        setShowSaveAsDialog,
        setShowOpenFileDialog,
        callSaveFile
    } = useComputerActionsContext();

    const getMenuSubItems = (): MenuSubItem[] => {
        const output: MenuSubItem[] = [];

        if (currentFilename != undefined && currentFilename !== null && currentFilename.trim() !== "") {
            output.push({ label: `Editar: ${currentFilename}`, actionName: "file", icon: <FileText className="h-4 w-4" /> });
        } else {
            output.push({ label: "Editar", actionName: "file", icon: <FileText className="h-4 w-4" /> });
        }

        output.push({ label: "Nueva", actionName: "new", icon: <FilePlus className="h-4 w-4" /> });

        output.push({ label: "Abrir", actionName: "open", icon: <FolderOpen className="h-4 w-4" /> });

        if (currentFilename != undefined && currentFilename !== null && currentFilename.trim() !== "") {
            output.push({ label: "Salvar", actionName: "save", icon: <Save className="h-4 w-4" /> });
        }

        output.push({ label: "Salvar Como", actionName: "saveAs", icon: <FileEdit className="h-4 w-4" /> });

        return output;
    }

    const handleOnItemClick = (actionName: string) => {
        if (actionName === "new") {
            props.onCloseSidebar();
            setShowNewCalcDialog(true);
            return;
        }

        if (actionName === "open") {
            props.onCloseSidebar();
            setShowOpenFileDialog(true);
            return;
        }

        if (actionName === "save") {
            props.onCloseSidebar();
            callSaveFile();
            return;
        }

        if (actionName === "saveAs") {
            props.onCloseSidebar();
            setShowSaveAsDialog(true);
            return;
        }
    }

    return (
        <>
            <AccordionMenuItemWithContextAction
                label={props.label}
                to={props.to}
                icon={props.icon}
                isActive={props.isActive}
                items={getMenuSubItems()}
                onCloseSidebar={props.onCloseSidebar}
                onItemClick={handleOnItemClick}
            />
        </>
    );
}

export default ComputerMenu;