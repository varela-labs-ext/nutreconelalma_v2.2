import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AppLayout from "./layouts/AppLayout";
import { AuthProvider } from "./context/AuthContext";
import { ErrorBoundary } from "./ui/components/ErrorBoundary";
import ProtectedRoute from "./ui/components/ProtectedRoute";
import LoginPage from "./ui/pages/auth/LoginPage";

import ResumenImprimible from "./ui/pdf/ResumenImprimible";
import CalculadoraPage from "./ui/pages/CalculatorPage";
import HistoryPage from "./ui/pages/HistoryPage";
import { MultiActionProvider } from "./ui/context/MultiActionContext";
import OperatingResourcesPage from "./ui/pages/OperatingResourcesPage";
import NotFoundPage404 from "./ui/pages/NotFoundPage404";
import { ComputerProvider } from "./context/ComputerContext";



function App() {
    return (
        <div>
            <ErrorBoundary>
                <Router>
                    <AuthProvider>
                        <ComputerProvider>
                            <Routes>
                                <Route path="/" element={<LoginPage />} />
                                {/* <Route path="/resumen" element={
                                    <ProtectedRoute>
                                        <AppLayout><ResumenImprimible /></AppLayout>
                                    </ProtectedRoute>
                                } /> */}
                                <Route path="/calculadora" element={
                                    <ProtectedRoute>
                                        <AppLayout><CalculadoraPage /></AppLayout>
                                    </ProtectedRoute>
                                } />
                                <Route path="/historico" element={
                                    <ProtectedRoute>
                                        <AppLayout><HistoryPage /></AppLayout>
                                    </ProtectedRoute>
                                } />
                                <Route path="/operativos" element={
                                    <ProtectedRoute>
                                        <AppLayout><OperatingResourcesPage /></AppLayout>
                                    </ProtectedRoute>
                                }
                                />
                                <Route path="*" element={<NotFoundPage404 />} />
                            </Routes>
                        </ComputerProvider>
                    </AuthProvider>
                </Router>
                {/* <ToastContainer position="top-right" /> */}
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
