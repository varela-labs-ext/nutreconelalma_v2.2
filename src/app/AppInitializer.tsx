import { AuthProvider } from "@/context/AuthContext";
import { ComputerActionsProvider } from "@/context/ComputerActionsContext";
import { ComputerProvider } from "@/context/ComputerContext";
import { ComputerFileHandlerProvider } from "@/context/ComputerFileHandlerContext";
import ComputerInitializer from "@/context/ComputerInitializer";
import { ReactNode } from "react";

const AppInitializer = ({ children }: { children: ReactNode }) => {
    return (
        <AuthProvider>
            <ComputerProvider>
                <ComputerFileHandlerProvider>
                    <ComputerActionsProvider>
                        <ComputerInitializer>
                            {children}
                        </ComputerInitializer>
                    </ComputerActionsProvider>
                </ComputerFileHandlerProvider>
            </ComputerProvider>
        </AuthProvider>
    );
};

export default AppInitializer;