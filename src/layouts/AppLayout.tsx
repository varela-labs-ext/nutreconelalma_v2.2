import NavigationMenu from "@/ui/components/NavigationMenu";
import SubLayout from "./SubLayout";
import { LoadingProvider } from "@/ui/context/LoadingContext";
import LoadingOverlay from "@/ui/common/LoadingOverlay";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LoadingProvider>
      <LoadingOverlay />
      <div className="min-h-screen bg-gray-50">
        <NavigationMenu />
        <main className="p-4">
          <SubLayout>
            {children}
          </SubLayout>
        </main>
      </div>
    </LoadingProvider>
  );
};

export default AppLayout;
