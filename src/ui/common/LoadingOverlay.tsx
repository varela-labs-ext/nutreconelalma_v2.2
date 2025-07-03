import React, { useContext } from 'react';
import { LoadingContext } from '../context/LoadingContext';

const LoadingOverlay = () => {
    const loadingContext = useContext(LoadingContext);

    if (!loadingContext.isLoading) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-white text-lg font-semibold">Cargando...</p>
            </div>
        </div>
    );
};

export default LoadingOverlay;
