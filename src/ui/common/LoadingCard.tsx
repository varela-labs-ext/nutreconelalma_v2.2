import React from 'react';

interface LoadingCardProps {
    mensaje?: string;
}

const LoadingCard = ({ mensaje = 'Cargando...' }: LoadingCardProps) => {
    return (
        <div className="p-4 border border-blue-300 rounded-xl bg-blue-50 text-blue-800 text-center shadow">
            {mensaje}
        </div>
    );
};

export default LoadingCard;
