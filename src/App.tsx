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
                    // draggable
                    theme="colored"
                    toastClassName="bg-purple-500 text-white rounded shadow-md"
                    className="text-sm font-medium"
                    progressClassName="bg-purple-300"
                />
            </ErrorBoundary>
        </div>
    );
}

export default App;
