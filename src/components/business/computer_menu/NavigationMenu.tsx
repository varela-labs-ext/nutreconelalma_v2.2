import { Calculator, Settings, ClipboardList, LogOut, FilePlus, Save, FolderOpen, FileEdit, FileText } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "@/hooks/useAuth";
// import { useMultiActionContext } from "../context/MultiActionContext";
import ComputerMenu from "@/components/business/computer_menu/ComputerMenu";
import { useAuth } from "@/context/AuthContext";

interface NavigationMenuProps {
    isSidebarOpen: boolean;
    onSidebarOpen: (newValue: boolean) => void;
}

const NavigationMenu = (props: NavigationMenuProps) => {
    const { pathname } = useLocation();
    const { logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    // const { setAction } = useMultiActionContext();

    if (!isAuthenticated || pathname === "/") return null;

    const handleOnLogoutClick = (): void => {
        logout();
        props.onSidebarOpen(false);
    }

    const handleNavigation = (pathWithQuery: string): void => {
        navigate(pathWithQuery);
        props.onSidebarOpen(false);
    }

    return (
        <div
            className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${props.isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
            <div className="flex h-full flex-col">
                <div className="pt-16"></div>

                <div className="hidden lg:flex items-center justify-between px-4 py-3">
                    <h2 className="text-xl text-purple-500 font-bold text-primary">Menú Principal</h2>
                </div>

                <nav className="flex-1 space-y-1 px-2 py-4">
                    {/* Menú Calculadora con subitems */}
                    <ComputerMenu
                        label="Calculadora"
                        to="/calculadora"
                        icon={<Calculator className="h-5 w-5 mr-2" />}
                        isActive={pathname.startsWith("/calculadora")}
                        onCloseSidebar={() => props.onSidebarOpen(false)}
                    />


                    {/* Otros ítems */}
                    <button
                        className={`w-full flex items-center rounded-full px-3 py-2 text-sm font-medium transition-colors ${pathname === "/operativos" ? "bg-green-500 text-white" : "text-gray-700 hover:bg-gray-100"}`}
                        onClick={() => handleNavigation("/operativos")}
                    >
                        <Settings className="h-5 w-5" />
                        <span className="ml-3">Recursos Operativos</span>
                    </button>

                    <button
                        className={`w-full flex items-center rounded-full px-3 py-2 text-sm font-medium transition-colors ${pathname === "/historico" ? "bg-green-500 text-white" : "text-gray-700 hover:bg-gray-100"}`}
                        onClick={() => handleNavigation("/historico")}
                    >
                        <ClipboardList className="h-5 w-5" />
                        <span className="ml-3">Histórico</span>
                    </button>
                </nav>

                <div className="border-t border-gray-200 p-4">
                    <div className="pt-2 pb-2 px-2">
                        <button onClick={handleOnLogoutClick}
                            className="w-full flex items-center text-left text-sm gap-2 px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors">
                            <LogOut className="mr-2 h-4 w-4" />
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationMenu;