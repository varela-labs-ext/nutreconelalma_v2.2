import AccordionMenuItemWithContextAction, { MenuSubItem } from "@/components/ui/menu/AccordionMenuItemWithContextAction";
import { useFileDialogContext } from "@/context/FileDialogContext/FileDialogProvider";
import useMixingCenterContext from "@/context/MixingCenterContext/useMixingCenterContext";

import { FileEdit, FilePlus, FileText, FolderOpen, Save } from "lucide-react";

interface ComputerMenuProps {
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
    to: string;
    onCloseSidebar: () => void;
}

const ComputerMenu = (props: ComputerMenuProps) => {
    const { activeFilename } = useMixingCenterContext();
    const {
        setShowNewCalcDialog,
        setShowSaveAsDialog,
        setShowOpenFileDialog,
        callSaveFile
    } = useFileDialogContext();

    const getMenuSubItems = (): MenuSubItem[] => {
        const output: MenuSubItem[] = [];

        if (activeFilename != undefined && activeFilename !== null && activeFilename.trim() !== "") {
            output.push({ label: `Editar: ${activeFilename}`, actionName: "file", icon: <FileText className="h-4 w-4" /> });
        } else {
            output.push({ label: "Editar", actionName: "file", icon: <FileText className="h-4 w-4" /> });
        }

        output.push({ label: "Nueva", actionName: "new", icon: <FilePlus className="h-4 w-4" /> });

        output.push({ label: "Abrir", actionName: "open", icon: <FolderOpen className="h-4 w-4" /> });

        if (activeFilename != undefined && activeFilename !== null && activeFilename.trim() !== "") {
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