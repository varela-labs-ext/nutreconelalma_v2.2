import NavigationMenu from "@/ui/components/NavigationMenu";
import SubLayout from "./SubLayout";
import { LoadingProvider } from "@/ui/context/LoadingContext";
import LoadingOverlay from "@/ui/common/LoadingOverlay";
import { useState } from "react";
import NavigationMenuC from "@/ui/components/NavigationMenuC";
import FixHeader from "./FixHeader";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <LoadingProvider minDurationMs={300}>
            <LoadingOverlay />

            <div className="min-h-screen bg-gray-50">

                <FixHeader isSidebarOpen={sidebarOpen} onClick={setSidebarOpen} />


                {/* <NavigationMenu /> */}
                <NavigationMenu isSidebarOpen={sidebarOpen} onSidebarOpen={setSidebarOpen} />
                <main className="p-4">
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
    );
};

export default AppLayout;
