import { AuthProvider } from "@/context/AuthContext";
import { ComputerActionsProvider } from "@/context/ComputerActionsContext";
import { ComputerProvider } from "@/context/ComputerContext";
import ComputerInitializer from "@/context/ComputerInitializer";
import { ReactNode } from "react";

const AppInitializer = ({ children }: { children: ReactNode }) => {
    return (
        <AuthProvider>
            <ComputerProvider>
                <ComputerActionsProvider>
                    <ComputerInitializer>
                        {children}
                    </ComputerInitializer>
                </ComputerActionsProvider>
            </ComputerProvider>
        </AuthProvider>
    );
};

export default AppInitializer;