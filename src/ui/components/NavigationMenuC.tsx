import { useState } from "react";
// import { Menu, LogOut, Settings, Calculator, History } from "lucide-react";
import { Calculator, Settings, ClipboardList, LogOut, Menu, X, History } from "lucide-react"

import { useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
import clsx from "clsx";
import React from "react";
// import AuthContext from "../context/AuthContext";
import { useAuth } from "@/hooks/useAuth";

interface NavigationMenuCProps {
    isSidebarOpen: boolean;
    onSidebarOpen: (newValue: boolean) => void;
}

const NavigationMenuC = (props: NavigationMenuCProps) => {
    const { pathname } = useLocation();
    const { logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    if (!isAuthenticated || pathname === "/") return null;

    const menuItems = [
        {
            label: "Calculadora",
            iconId: Calculator,
            icon: <Calculator className="h-5 w-5" />,
            path: "/calculadora"
        },
        {
            label: "Configuración",
            iconId: Settings,
            icon: <Settings className="h-5 w-5" />,
            path: "/configuracion"
        },
        {
            label: "Histórico",
            iconId: History,
            icon: <ClipboardList className="h-5 w-5" />,
            path: "/historico"
        },
    ];

    const handleOnLogoutClick = (): void => {
        logout();
        props.onSidebarOpen(false);
    }

    const getClassName = (inTo: string): string => {
        return `flex items-center rounded-full px-3 py-2 text-sm font-medium transition-colors ${inTo === inTo ? "bg-primary text-primary-foreground" : "text-gray-700 hover:bg-gray-100"}`
    }

    return (
        <div
            className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${props.isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
        >
            <div className="flex h-full flex-col">
                <div className="pt-16">

                </div>
                <div className="hidden lg:flex items-center justify-between px-4 py-3">
                    <h2 className="text-xl text-purple-500 font-bold text-primary">Menú Principal</h2>
                </div>

                <nav className="flex-1 space-y-1 px-2 py-4">
                    {menuItems.map(({ label, icon, path }) => (
                        <button
                            key={path}
                            className={` w-full flex items-center rounded-full px-3 py-2 text-sm font-medium transition-colors ${pathname === path ? "bg-green-500 text-white" : "text-gray-700 hover:bg-gray-100"
                                }`}
                            onClick={() => {
                                navigate(path);
                                props.onSidebarOpen(false);
                            }}
                        >
                            {icon}
                            <span className="ml-3">{label}</span>
                        </button>
                    ))}

                </nav>

                <div className="border-t border-gray-200 p-4">
                    {/* <link href="/">
                        <button className="w-full justify-start rounded-full">
                            <LogOut className="mr-2 h-4 w-4" />
                            Cerrar Sesión
                        </button>
                        
                    </link> */}
                    {/* variant="outline" */}
                    {/* <button
                        onClick={() => {
                            logout();
                            props.onSidebarOpen(false);
                        }}
                        // flex items-center px-4 py-2 mt-auto text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded gap-2
                        className="w-full justify-start rounded-full">
                        <LogOut className="mr-2 h-4 w-4" size={18} />
                        Cerrar sesión
                    </button> */}
                    <div className="pt-2 pb-2  hover:bg-grey-400">
                        <button onClick={handleOnLogoutClick} className="w-full flex justify-start border border-grey-200 rounded-full px-3 py-2 text-sm font-medium gap-2 hover:bg-grey-400">
                            <LogOut className="mr-2 h-4 w-4  hover:bg-grey-400" />Cerrar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationMenuC;
