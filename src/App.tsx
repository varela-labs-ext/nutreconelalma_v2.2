import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AppLayout from "./layouts/AppLayout";
import { AuthProvider } from "./context/AuthContext";
import { ErrorBoundary } from "./ui/components/ErrorBoundary";
import ProtectedRoute from "./ui/components/ProtectedRoute";
import LoginPage from "./ui/pages/auth/LoginPage";
import CalculadoraPage from "./ui/pages/CalculadoraPage";
import ConfiguracionPage from "./ui/pages/ConfiguracionPage";
import ResumenImprimible from "./ui/pdf/ResumenImprimible";



function App() {
  return (
    <div>
      <ErrorBoundary>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/resumen" element={
                <ProtectedRoute>
                  <AppLayout><ResumenImprimible /></AppLayout>
                </ProtectedRoute>
              } />
              <Route path="/calculadora" element={
                <ProtectedRoute>
                  <AppLayout><CalculadoraPage /></AppLayout>
                </ProtectedRoute>
              } />
              <Route path="/configuracion" element={
                <ProtectedRoute>
                  <AppLayout><ConfiguracionPage /></AppLayout>
                </ProtectedRoute>
              } />
            </Routes>
          </AuthProvider>
        </Router>
        <ToastContainer position="top-right" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
