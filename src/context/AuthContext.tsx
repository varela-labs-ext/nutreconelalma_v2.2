import { USER_KEY } from "@/common/Constants";
import ForageManager from "@/logic/common/ForageManager";
import { Logger } from "@/utils/logger";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface AuthContextType {
    isAuthenticated: boolean;
    user: string | null;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleOnLoad = (): void => {
        ForageManager.getAsync<string>(USER_KEY)
            .then((savedUser: string | null) => {
                if (savedUser) {
                    setUser(savedUser);
                    setIsAuthenticated(true);
                }
            })
            .catch(() => {
                Logger.error("ERROR AL OBTENER EL USER DESDE LA DB.", "AuthProvider");
            });
    }

    useEffect(() => {
        handleOnLoad();
    }, []);

    const login = async (inUsername: string, password: string): Promise<boolean> => {
        // lógica simulada de login
        if (inUsername === "info@nutreconelalma.com" && password === "Nutre2025##") {
            setUser(inUsername);
            setIsAuthenticated(true);
            await ForageManager.saveAsync(USER_KEY, inUsername);
            return true;
        }

        return false;
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        ForageManager.deleteAsync(USER_KEY)
            .then(() => {
                navigate("/");
            })
            .catch(() => {
                Logger.error("ERROR AL ELIMINAR EL USER DESDE LA DB.", "AuthProvider");
            });
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};
