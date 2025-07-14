import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
    // onSuccess: () => void;
}

const LoginForm = (props: LoginFormProps) => {
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
        // bg-white p-6 rounded shadow-md w-80
        <form onSubmit={handleLogin} className="space-y-6 p-6">

            <input
                type="text"
                placeholder="Usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="input mb-3 w-full px-4 py-2 h-12 rounded-full bg-white text-gray-700 placeholder:text-gray-500 border border-gray-200 focus:border-purple-500 focus:ring-purple-500"
            // className="input mb-3 w-full p-2 border border-gray-300 rounded"
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input mb-3 w-full px-4 py-2 h-12 rounded-full bg-white text-gray-700 placeholder:text-gray-500 border border-gray-200 focus:border-purple-500 focus:ring-purple-500"
            />
            <div className="pt-6">
                <button type="submit" className="btn w-full bg-purple-500 text-white py-2 rounded-full hover:bg-blue-600">
                    Iniciar Sesión
                </button>
            </div>

        </form>
    );
}

export default LoginForm;
