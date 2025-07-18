import { AuthProvider } from "@/context/AuthContext";
import { FileDialogProvider } from "@/context/FileDialogContext/FileDialogProvider";
import { MixingCenterProvider } from "@/context/MixingCenterContext/MixingCenterProvider";
import { FileStorageProvider } from "@/context/FileStorageContext/FileStorageProvider";
import ComputerInitializer from "@/context/ComputerInitializer";
import { ReactNode } from "react";
import { MixingCenterComparisonProvider } from "./context/ComparisonContext/MixingCenterComparisonContext";

const AppInitializer = ({ children }: { children: ReactNode }) => {
    return (
        <AuthProvider>
            <MixingCenterProvider>
                <FileStorageProvider>
                    <FileDialogProvider>
                        <MixingCenterComparisonProvider>
                            <ComputerInitializer>
                                {children}
                            </ComputerInitializer>
                        </MixingCenterComparisonProvider>
                    </FileDialogProvider>
                </FileStorageProvider>
            </MixingCenterProvider>
        </AuthProvider>
    );
};

export default AppInitializer;