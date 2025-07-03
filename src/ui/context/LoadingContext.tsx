import React, { createContext, useRef, useState } from 'react';

type LoadingContextType = {
    isLoading: boolean;
    setLoading: (value: boolean) => void;
};

export const LoadingContext = createContext<LoadingContextType>({
    isLoading: false,
    setLoading: () => { },
});

type LoadingProviderProps = {
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
