import { AuthProvider } from "@/context/AuthContext";
import { ComputerActionsProvider } from "@/context/FileDialogContext/FileDialogProvider";
import { ComputerProvider } from "@/context/MixingCenterContext/MixingCenterProvider";
import { ComputerFileHandlerProvider } from "@/context/FileStorageContext/FileStorageProvider";
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