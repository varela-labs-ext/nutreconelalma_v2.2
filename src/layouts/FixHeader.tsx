import SaveStatus from "@/ui/common/SaveStatus";
import { Calculator, Settings, ClipboardList, LogOut, Menu, X, History } from "lucide-react"

interface FixHeaderProps {
    isSidebarOpen: boolean;
    onClick: (newValue: boolean) => void;
}

const FixHeader = (props: FixHeaderProps) => {
    return (
        /* Header fijo para todos los dispositivos */
        <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <div className="flex items-center justify-between px-4 py-2">
                <button onClick={() => props.onClick(!props.isSidebarOpen)} className="z-50 p-2 rounded-md hover:bg-gray-100">
                    {props.isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
                <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-f5nDdo9a88OwB8ZX5sUkbCt01JSPaf.png"
                    alt="B Braun Logo"
                    className="h-8"
                />
                {/* <SaveStatus lastSaved={null} isSaving={false} hasChanges={false} className="hidden md:flex" /> */}
            </div>
        </div >
    );
}

export default FixHeader;