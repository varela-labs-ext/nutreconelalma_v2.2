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
    // const [sidebarOpen, setSidebarOpen] = useState(false)

    // const [sidebarOpen, setSidebarOpen] = useState(false);
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

    // const toggleMenu = () => setSidebarOpen(!sidebarOpen);

    const routes = [
        {
            name: "Calculadora",
            path: "/calculadora",
            icon: <Calculator className="h-5 w-5" />,
        },
        {
            name: "Configuración",
            path: "/configuracion",
            icon: <Settings className="h-5 w-5" />,
        },
        {
            name: "Historial",
            path: "/historico",
            icon: <ClipboardList className="h-5 w-5" />,
        },
    ]

    // const getClassName = (): string => {
    //     return `flex items-center rounded-full px-3 py-2 text-sm font-medium transition-colors ${pathname === route.path ? "bg-primary text-primary-foreground" : "text-gray-700 hover:bg-gray-100"}`
    // }

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
                    {/* {routes.map((route) => (
                        <link
                            key={route.path}
                            href={route.path}
                            className={`flex items-center rounded-full px-3 py-2 text-sm font-medium transition-colors ${pathname === route.path ? "bg-primary text-primary-foreground" : "text-gray-700 hover:bg-gray-100"
                                }`}
                            onClick={() => props.onSidebarOpen(false)}
                        >
                            {route.icon}
                            <span className="ml-3">{route.name}</span>
                        </link>
                    ))} */}
                    {menuItems.map(({ label, icon, path }) => (
                        <button
                            key={path}
                            // className={getClassName(path)}
                            className={` w-full flex items-center rounded-full px-3 py-2 text-sm font-medium transition-colors ${pathname === path ? "bg-green-500 text-white" : "text-gray-700 hover:bg-gray-100"
                                }`}
                            // className={clsx(
                            //     "flex items-center px-4 py-2 rounded text-left gap-2 mb-2",
                            //     pathname === path
                            //         ? "bg-blue-500 text-white"
                            //         : "hover:bg-gray-100 dark:hover:bg-gray-700"
                            // )}
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
                    <button
                        onClick={() => {
                            logout();
                            props.onSidebarOpen(false);
                        }}
                        className="flex items-center px-4 py-2 mt-auto text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded gap-2"
                    >
                        <LogOut size={18} />
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavigationMenuC;
