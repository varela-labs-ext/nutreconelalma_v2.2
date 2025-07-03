import React, { createContext, useState } from 'react';

type LoadingContextType = {
    isLoading: boolean;
    setLoading: (value: boolean) => void;
};

export const LoadingContext = createContext<LoadingContextType>({
    isLoading: false,
    setLoading: () => { },
});

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(false);

    const setLoading = (value: boolean) => {
        setIsLoading(value);
    };

    return (
        <LoadingContext.Provider value={{ isLoading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};
