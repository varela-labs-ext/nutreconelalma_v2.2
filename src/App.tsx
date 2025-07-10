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



function App() {
    return (
        <div>
            <ErrorBoundary>
                <Router>
                    <AuthProvider>
                        <MultiActionProvider>
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
                        </MultiActionProvider>
                    </AuthProvider>
                </Router>
                <ToastContainer position="top-right" />
            </ErrorBoundary>
        </div>
    );
}

export default App;
