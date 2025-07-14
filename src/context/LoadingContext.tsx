import React, { createContext, useContext, useRef, useState } from 'react';

type LoadingContextProps = {
    isLoading: boolean;
    setLoading: (value: boolean) => void;
};

export const LoadingContext = createContext<LoadingContextProps>({
    isLoading: false,
    setLoading: () => { },
});

export type LoadingProviderProps = {
    children: React.ReactNode;
    minDurationMs?: number; // nuevo parámetro opcional
};

export const LoadingProvider = ({ children, minDurationMs = 400 }: LoadingProviderProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const loadingStartTimeRef = useRef<number | null>(null);

    const setLoading = (value: boolean) => {
        // setIsLoading(value);
        if (value) {
            loadingStartTimeRef.current = Date.now();
            setIsLoading(true);
        } else {
            const now = Date.now();
            const start = loadingStartTimeRef.current;
            const elapsed = start ? now - start : 0;
            const delay = Math.max(minDurationMs - elapsed, 0);

            setTimeout(() => {
                setIsLoading(false);
                loadingStartTimeRef.current = null;
            }, delay);
        }
    };

    return (
        <LoadingContext.Provider value={{ isLoading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};


export const useLoadingContext = (): LoadingContextProps => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoadingContext debe usarse dentro de un LoadingProvider");
    }
    return context;
};
