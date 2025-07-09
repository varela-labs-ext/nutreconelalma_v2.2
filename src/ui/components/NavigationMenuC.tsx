import { useState } from "react";
// import { Menu, LogOut, Settings, Calculator, History } from "lucide-react";
import { Calculator, Settings, ClipboardList, LogOut, Menu, X, History, ChevronDown, ChevronUp, FilePlus, UploadCloud, Save } from "lucide-react"

import { useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
import clsx from "clsx";
import React from "react";
// import AuthContext from "../context/AuthContext";
import { useAuth } from "@/hooks/useAuth";

// import { useCalculadoraContext } from "@/ui/context/CalculadoraContext";

import AccordionMenuItemWithLinks from "../../components/ui/menu/AccordionMenuItemWithLinks";
import { useMultiActionContext } from "../context/MultiActionContext";
import AccordionMenuItemWithContextAction from "../../components/ui/menu/AccordionMenuItemWithContextAction";

interface NavigationMenuCProps {
    isSidebarOpen: boolean;
    onSidebarOpen: (newValue: boolean) => void;
}


const NavigationMenuC = (props: NavigationMenuCProps) => {
    const { pathname } = useLocation();
    const { logout, isAuthenticated } = useAuth();
    const [isCalculadoraOpen, setIsCalculadoraOpen] = useState<boolean>(pathname.startsWith("/calculadora"));
    const navigate = useNavigate();
    const { getAction, setAction, clearAction } = useMultiActionContext();

    if (!isAuthenticated || pathname === "/") return null;

    const handleOnLogoutClick = (): void => {
        logout();
        props.onSidebarOpen(false);
    }

    const handleNavigation = (pathWithQuery: string): void => {
        navigate(pathWithQuery);
        props.onSidebarOpen(false);
    }

    // const { setAccion } = useCalculadoraContext();

    const handleAccionYRedirigir = (accion: "nueva" | "cargar" | "salvar") => {
        // setAccion(accion);
        setAction("calculadora", "cargar");
        setIsCalculadoraOpen(false);
        navigate("/calculadora");
        props.onSidebarOpen(false);
    };

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

                    <AccordionMenuItemWithContextAction
                        label="Calculadora"
                        to="/calculadora"
                        icon={<Calculator className="h-5 w-5 mr-2" />}
                        isActive={pathname.startsWith("/calculadora")}
                        onCloseSidebar={() => props.onSidebarOpen(false)}
                        setAccion={(actionName) => setAction("calculadora", actionName)}
                        items={[
                            { label: "Nueva", actionName: "new", icon: <FilePlus className="h-4 w-4" /> },
                            { label: "Cargar", actionName: "load", icon: <UploadCloud className="h-4 w-4" /> },
                            { label: "Salvar", actionName: "save", icon: <Save className="h-4 w-4" /> },
                        ]}
                    />

                    {/* Menú Calculadora con subitems */}
                    {/* <div className="space-y-1">
                        <button
                            className={clsx(
                                "w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-full transition-colors",
                                pathname.startsWith("/calculadora")
                                    ? "bg-green-500 text-white"
                                    : "text-gray-700 hover:bg-gray-100"
                            )}
                            onClick={() => setIsCalculadoraOpen(!isCalculadoraOpen)}
                        >
                            <div className="flex items-center">
                                <Calculator className="h-5 w-5 mr-2" />
                                Calculadoras
                            </div>
                            <ChevronDown
                                className={clsx(
                                    "h-4 w-4 transition-transform duration-300",
                                    isCalculadoraOpen ? "rotate-180" : "rotate-0"
                                )}
                            />
                        </button>

                        <div
                            className={clsx(
                                "ml-8 space-y-1 overflow-hidden transition-all duration-300 ease-in-out",
                                isCalculadoraOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                            )}
                        >
                            <button
                                className="w-full text-left text-sm px-4 py-1.5 hover:bg-gray-100 rounded-full transition-colors"
                                onClick={() => handleAccionYRedirigir("nueva")}
                            >
                                Nueva Calculadora
                            </button>
                            <button
                                className="w-full text-left text-sm px-4 py-1.5 hover:bg-gray-100 rounded-full transition-colors"
                                onClick={() => handleAccionYRedirigir("cargar")}
                            >
                                Cargar Calculadora
                            </button>
                            <button
                                className="w-full text-left text-sm px-4 py-1.5 hover:bg-gray-100 rounded-full transition-colors"
                                onClick={() => handleAccionYRedirigir("salvar")}
                            >
                                Salvar Calculadora
                            </button>
                        </div>
                    </div> */}

                    <button
                        className={`w-full flex items-center rounded-full px-3 py-2 text-sm font-medium transition-colors ${pathname === "/historico" ? "bg-green-500 text-white" : "text-gray-700 hover:bg-gray-100"}`}
                        onClick={() => handleNavigation("/historico")}
                    >
                        <ClipboardList className="h-5 w-5" />
                        <span className="ml-3">Histórico</span>
                    </button>

                    {/* Otros ítems */}
                    <button
                        className={`w-full flex items-center rounded-full px-3 py-2 text-sm font-medium transition-colors ${pathname === "/configuracion" ? "bg-green-500 text-white" : "text-gray-700 hover:bg-gray-100"}`}
                        onClick={() => handleNavigation("/configuracion")}
                    >
                        <Settings className="h-5 w-5" />
                        <span className="ml-3">Configuración</span>
                    </button>


                    <AccordionMenuItemWithLinks
                        icon={<ClipboardList className="h-5 w-5 mr-2" />}
                        label="Reportes"
                        isActive={pathname.startsWith("/reportes")}
                        onCloseSidebar={() => props.onSidebarOpen(false)}
                        items={[
                            { label: "Reporte por Usuario", to: "/reportes/usuarios" },
                            { label: "Reporte por Fecha", to: "/reportes/fechas" },
                            { label: "Resumen General", to: "/reportes/resumen" },
                        ]}
                    />

                    <AccordionMenuItemWithContextAction
                        label="Reportes2"
                        to="/reportes"
                        icon={<ClipboardList className="h-5 w-5 mr-2" />}
                        isActive={pathname.startsWith("/reportes")}
                        onCloseSidebar={() => props.onSidebarOpen(false)}
                        setAccion={(accion) => setAction("reportes", accion)}
                        items={[
                            { label: "Por Usuario", actionName: "usuarios" },
                            { label: "Por Fecha", actionName: "fechas" },
                            { label: "Resumen General", actionName: "resumen" },
                        ]}
                    />



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

export default NavigationMenuC;