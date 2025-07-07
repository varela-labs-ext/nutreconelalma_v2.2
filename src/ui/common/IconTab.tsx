import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

export type IconTabProps = {
    label: string;
    icon: LucideIcon;
    children: ReactNode;
    disabled?: boolean;
};

const IconTab = (props: IconTabProps) => {
    return <>{props.children}</>; // Solo actúa como contenedor declarativo
};

export default IconTab;
