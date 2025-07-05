import { useState } from "react";
import { Menu, LogOut, Settings, Calculator, History } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
import clsx from "clsx";
import React from "react";
// import AuthContext from "../context/AuthContext";
import { useAuth } from "@/hooks/useAuth";


const NavigationMenu = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();
    const { logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    if (!isAuthenticated || pathname === "/") return null;

    const menuItems = [
        { label: "Calculadora", icon: Calculator, to: "/calculadora" },
        { label: "Configuración", icon: Settings, to: "/configuracion" },
        { label: "Histórico", icon: History, to: "/historico" },
    ];

    const toggleMenu = () => setSidebarOpen(!sidebarOpen);

    return (
        <>
            <button
                onClick={toggleMenu}
                className="fixed top-4 left-4 z-50 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Abrir menú"
            >
                <Menu />
            </button>

            <div
                className={clsx(
                    "fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-40 flex flex-col p-4 transform transition-transform duration-300 ease-in-out",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {menuItems.map(({ label, icon: Icon, to }) => (
                    <button
                        key={to}
                        className={clsx(
                            "flex items-center px-4 py-2 rounded text-left gap-2 mb-2",
                            pathname === to
                                ? "bg-blue-500 text-white"
                                : "hover:bg-gray-100 dark:hover:bg-gray-700"
                        )}
                        onClick={() => {
                            navigate(to);
                            setSidebarOpen(false);
                        }}
                    >
                        <Icon size={18} />
                        {label}
                    </button>
                ))}
                <button
                    onClick={() => {
                        logout();
                        setSidebarOpen(false);
                    }}
                    className="flex items-center px-4 py-2 mt-auto text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded gap-2"
                >
                    <LogOut size={18} />
                    Cerrar sesión
                </button>
            </div>

            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-30 z-30"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </>
    );
};

export default NavigationMenu;
