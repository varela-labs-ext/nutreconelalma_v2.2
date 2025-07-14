import AccordionMenuItemWithContextAction, { MenuSubItem } from "@/components/ui/menu/AccordionMenuItemWithContextAction";
import { useComputerContext } from "@/context/ComputerContext";
import { toastService } from "@/services/toastService";

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

    const getMenuSubItems = (): MenuSubItem[] => {
        const itemsCopy = props.items.map(item => {
            if (currentFilename && item.actionName === "file") {
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

        if (!currentFilename) {
            return itemsCopy.filter(item => item.actionName !== "file");
        }

        return itemsCopy;
    }

    const handleOnItemClick = (actionName: string) => {
        if (actionName === "new") {
            createNewFileAsync().then(() => {
                toastService.showOk("Nueva calculadora creada...");
            });
        }

        if (actionName === "open") {
            //TODO
        }

        if (actionName === "save") {
            //TODO
        }

        if (actionName === "saveAs") {
            //TODO
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