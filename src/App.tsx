import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AppLayout from "./layouts/AppLayout";
import { ErrorBoundary } from "./ui/components/ErrorBoundary";
import LoginPage from "./ui/pages/auth/LoginPage";
import CalculadoraPage from "./ui/pages/CalculatorPage";
import HistoryPage from "./ui/pages/HistoryPage";
import OperatingResourcesPage from "./ui/pages/OperatingResourcesPage";
import NotFoundPage404 from "./ui/pages/NotFoundPage404";
import AppInitializer from "./AppInitializer";


function App() {
    const toastBaseClasses = "rounded-xl shadow-lg p-4 text-sm font-medium";
    const toastColors = "bg-white text-gray-800 border-2 border-purple-500";
    const toastTransition = "transition duration-300 ease-in-out";

    const toastThemeClass = `${toastBaseClasses} ${toastColors} ${toastTransition}`;

    return (
        <div>
            <ErrorBoundary>
                <Router>
                    <AppInitializer>
                        <Routes>
                            <Route path="/" element={<LoginPage />} />
                            <Route path="/calculadora" element={
                                <AppLayout><CalculadoraPage /></AppLayout>
                            } />
                            <Route path="/historico" element={
                                <AppLayout><HistoryPage /></AppLayout>
                            } />
                            <Route path="/operativos" element={
                                <AppLayout><OperatingResourcesPage /></AppLayout>
                            }
                            />
                            <Route path="*" element={<NotFoundPage404 />} />
                        </Routes>
                    </AppInitializer>
                </Router>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    closeOnClick
                    pauseOnHover
                    toastClassName={toastThemeClass}
                    progressClassName="bg-purple-300"
                />
            </ErrorBoundary>
        </div>
    );


}

export default App;
