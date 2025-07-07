import { createContext, useContext, useState } from "react";

type AccionCalculadora = "nueva" | "cargar" | "salvar" | null;

interface CalculadoraContextProps {
    accionActual: AccionCalculadora;
    setAccion: (accion: AccionCalculadora) => void;
}

const CalculadoraContext = createContext<CalculadoraContextProps | undefined>(undefined);

export const CalculadoraProvider = ({ children }: { children: React.ReactNode }) => {
    const [accionActual, setAccionActual] = useState<AccionCalculadora>(null);

    return (
        <CalculadoraContext.Provider value={{ accionActual, setAccion: setAccionActual }}>
            {children}
        </CalculadoraContext.Provider>
    );
};

export const useCalculadoraContext = (): CalculadoraContextProps => {
    const context = useContext(CalculadoraContext);
    if (!context) {
        throw new Error("useCalculadoraContext debe usarse dentro de un CalculadoraProvider");
    }
    return context;
};
