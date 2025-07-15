import AccordionMenuItemWithContextAction, { MenuSubItem } from "@/components/ui/menu/AccordionMenuItemWithContextAction";
import { useComputerActionsContext } from "@/context/ComputerActionsContext";
import { useComputerContext } from "@/context/ComputerContext";
import { deepClone } from "@/utils/objectUtils";

interface ComputerMenuProps {
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
    to: string;
    items: MenuSubItem[];
    onCloseSidebar: () => void;
}

const ComputerMenu = (props: ComputerMenuProps) => {
    const { currentFilename } = useComputerContext();
    const { setShowNewCalcDialog, setShowSaveAsDialog, setShowOpenFileDialog, saveFile } = useComputerActionsContext();

    const getMenuSubItems = (): MenuSubItem[] => {
        // const itemsCopy = props.items.map(item => {
        //     if (currentFilename != undefined && currentFilename !== null) {
        //         if (item.actionName === "file") {
        //             return {
        //                 ...item,
        //                 label: `Archivo: ${currentFilename}`
        //             };
        //         } else {
        //             return {
        //                 ...item
        //             };
        //         }

        //     } else {
        //         return {
        //             ...item
        //         };
        //     }
        // });

        const itemsCopy = props.items.map(item => {
            return { ...item };
        });

        itemsCopy.forEach((item) => {
            if (currentFilename != undefined && currentFilename !== null && item.actionName === "file") {
                item.label = `Archivo: ${currentFilename}`;
            }
        });



        if (!currentFilename) {
            return itemsCopy.filter((item) => !shouldRemove(item));
        }

        return itemsCopy;
    }

    const shouldRemove = (item: MenuSubItem) => {
        return item.actionName === "file" || item.actionName === "save";
    };

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
            saveFile();
            return;
        }

        if (actionName === "saveAs") {
            props.onCloseSidebar();
            setShowSaveAsDialog(true);
            return;
        }

        props.onCloseSidebar();
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