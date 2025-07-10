import { ReactNode } from "react";

export type PanelStatus = "none" | "ok" | "warning" | "error";

export type PanelViewProps = {
    label: string;
    icon?: ReactNode;
    status?: PanelStatus;
    children: ReactNode;
};

const PanelView = (props: PanelViewProps) => {
    return <>{props.children}</>; // Contenedor declarativo sin lógica
};

export default PanelView;
