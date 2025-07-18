import NavigationMenu from "@/components/business/computer_menu/NavigationMenu";
import SubLayout from "./SubLayout";
import { LoadingProvider } from "@/context/LoadingContext/LoadingContext";
import LoadingOverlay from "@/components/ui/loaders/LoadingOverlay";
import { useState } from "react";
import FixHeader from "./FixHeader";
import ProtectedRoute from "@/ui/components/ProtectedRoute";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <ProtectedRoute>
            <LoadingProvider minDurationMs={300}>
                <LoadingOverlay />

                <div className="min-h-screen bg-gray-50">

                    <FixHeader isSidebarOpen={sidebarOpen} onClick={setSidebarOpen} />

                    {/* <NavigationMenu /> */}
                    <NavigationMenu isSidebarOpen={sidebarOpen} onSidebarOpen={setSidebarOpen} />
                    <main id="main_div">
                        <SubLayout>
                            {children}
                        </SubLayout>
                    </main>

                    {/* Overlay para cerrar el menú en móviles */}
                    {sidebarOpen && (
                        <div
                            className="fixed inset-0 z-30 bg-gray-600 bg-opacity-50 transition-opacity"
                            onClick={() => setSidebarOpen(false)}
                        />
                    )}
                </div>
            </LoadingProvider>
        </ProtectedRoute>
    );
};

export default AppLayout;
