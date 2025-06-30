import MainHeaderBlock from "@/ui/components/MainHeaderBlock";

const SubLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full px-4 py-8">
            <div className="max-w-[1100px] mx-auto">
                <MainHeaderBlock />
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default SubLayout;