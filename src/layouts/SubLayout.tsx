import MainHeaderBlock from "@/ui/components/MainHeaderBlock";

const SubLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full px-4 py-8">

            <div className="max-w-[1100px] mx-auto">
                <div className="p-4">
                    <span></span>
                </div>
                <MainHeaderBlock />
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default SubLayout;