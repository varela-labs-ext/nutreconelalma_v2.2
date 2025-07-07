// src/components/ui/PanelTab.tsx
import { ReactNode } from "react";

export type PanelTabProps = {
    label: string;
    icon?: ReactNode;
    children: ReactNode;
};

const PanelTab = (props: PanelTabProps) => {
    return <>{props.children}</>;
};

export default PanelTab;
