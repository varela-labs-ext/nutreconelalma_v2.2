import NavigationMenu from "@/ui/components/NavigationMenu";
import SubLayout from "./SubLayout";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationMenu />
      <main className="p-4">
        <SubLayout>
          {children}
        </SubLayout>
      </main>
    </div>
  );
};

export default AppLayout;
