import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState("admin");
    const [password, setPassword] = useState("admin");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const success = await login(usuario, password);
        if (success) navigate("/calculadora");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
                <h2 className="text-xl font-semibold mb-4">Iniciar Sesión</h2>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    className="input mb-3 w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input mb-3 w-full p-2 border border-gray-300 rounded"
                />
                <button type="submit" className="btn w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Iniciar sesión
                </button>
                <button type="button" className="mt-2 text-sm text-blue-600 underline w-full">
                    ¿Olvidaste tu contraseña?
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
