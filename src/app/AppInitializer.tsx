import { AuthProvider } from "@/context/AuthContext";
import { ComputerProvider } from "@/context/ComputerContext";
import ComputerInitializer from "@/context/ComputerInitializer";
import { ReactNode } from "react";

const AppInitializer = ({ children }: { children: ReactNode }) => {
    return (
        <AuthProvider>
            <ComputerProvider>
                <ComputerInitializer>
                    {children}
                </ComputerInitializer>
            </ComputerProvider>
        </AuthProvider>
    );
};

export default AppInitializer;