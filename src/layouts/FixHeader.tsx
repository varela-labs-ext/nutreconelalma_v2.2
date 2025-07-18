import { useMixingCenterContext } from "@/context/MixingCenterContext/MixingCenterProvider";
import { Menu, X, FileText } from "lucide-react"
import logoBbraun from "@/assets/imgs/logo.png";

interface FixHeaderProps {
    isSidebarOpen: boolean;
    onClick: (newValue: boolean) => void;
}

const FixHeader = (props: FixHeaderProps) => {
    const { currentFilename } = useMixingCenterContext();

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-2">

                {/* Fila superior */}
                <div className="relative flex items-center justify-between h-10">
                    {/* Botón Izquierdo */}
                    <button
                        onClick={() => props.onClick(!props.isSidebarOpen)}
                        className="z-50 p-2 rounded-md hover:bg-gray-100"
                    >
                        {props.isSidebarOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>

                    {/* Logo centrado visualmente en desktop */}
                    <img
                        src={logoBbraun}
                        alt="B Braun Logo"
                        className="hidden sm:block fixed left-1/2 top-7 transform -translate-x-1/2 -translate-y-1/2 h-8 z-40 "
                    />

                    {/* Texto a la derecha en desktop */}
                    {currentFilename && (
                        <div
                            className="hidden sm:flex items-center justify-end gap-1 max-w-[40vw] text-sm text-gray-700 font-medium truncate hover:underline hover:text-blue-600 transition-colors duration-200"
                            title={currentFilename}
                        >
                            <span className="truncate">{currentFilename}</span>
                            <FileText className="h-4 w-4 text-gray-500" />
                        </div>
                    )}
                </div>

                {/* Segunda línea visible solo en móviles */}
                {currentFilename && (
                    <div
                        className="flex sm:hidden items-center justify-center gap-1 text-sm text-gray-700 font-medium mt-2"
                    >
                        <FileText className="h-4 w-4 text-gray-500" />
                        <span className="truncate">{currentFilename}</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FixHeader;