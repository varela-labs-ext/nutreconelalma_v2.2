import { AuthProvider } from "@/context/AuthContext";
import { FileDialogProvider } from "@/context/FileDialogContext/FileDialogProvider";
import { MixingCenterProvider } from "@/context/MixingCenterContext/MixingCenterProvider";
import { FileStorageProvider } from "@/context/FileStorageContext/FileStorageProvider";
import ComputerInitializer from "@/context/ComputerInitializer";
import { ReactNode } from "react";
import { ComparisonProvider } from "./context/ComparisonContext/ComparisonProvider";

const AppInitializer = ({ children }: { children: ReactNode }) => {
    return (
        <AuthProvider>
            <MixingCenterProvider>
                <FileStorageProvider>
                    <FileDialogProvider>
                        <ComparisonProvider>
                            <ComputerInitializer>
                                {children}
                            </ComputerInitializer>
                        </ComparisonProvider>
                    </FileDialogProvider>
                </FileStorageProvider>
            </MixingCenterProvider>
        </AuthProvider>
    );
};

export default AppInitializer;