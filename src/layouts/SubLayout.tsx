import MainHeaderBlock from "@/ui/components/MainHeaderBlock";

const SubLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full px-4 py-8">
            <div id="sub-layout-content" className="max-w-[1100px] mx-auto min-h-screen bg-gray-50">
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