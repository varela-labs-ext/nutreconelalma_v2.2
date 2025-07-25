import { useLoadingContext } from "@/context/LoadingContext/LoadingContext";
import useMixingCenterContext from "@/context/MixingCenterContext/useMixingCenterContext";
import MainHeaderBlock from "@/ui/components/MainHeaderBlock";
import { useEffect } from "react";

const SubLayout = ({ children }: { children: React.ReactNode }) => {
    const { isProcessing } = useMixingCenterContext();
    const { setLoading } = useLoadingContext();

    useEffect(() => {
        setLoading(isProcessing);
    }, [isProcessing]);

    return (
        <div className="w-full px-4 py-8">
            <div id="sub-layout-content" className="max-w-[1200px] mx-auto min-h-screen bg-gray-50">
                <div className="pt-14 sm:pt-14">
                    <MainHeaderBlock />
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SubLayout;